import { useCallback, useRef, useState } from "react";
import Card from "./component/card";
import './main.css'
import Filter from "./component/filter";

const Main = ({ loading, hasMore, data = [], fetchMore }) => {

    const observer = useRef()

    const lastBookElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                fetchMore()
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore, fetchMore])

    const [filter, setFilter] = useState({
        minExp: null,
        mode: null,
        minPay:null,
        search:'',
        location:null,
        role:null
    })

    function filterData(data) {
        return data.filter(item => {
            const matchesMinExp = filter.minExp ? item.minExp >= filter.minExp : true;
            const matchesJobMode = filter.mode ==='Remote' ? item.location === 'remote' : true;
            const matchesMinPay = filter.minPay >=0 ? item.minJdSalary >= filter.minPay: true;
            const matchesSearch = filter.search ? item.companyName.toLowerCase().includes(filter.search.toLowerCase()) : true;

            return matchesMinExp && matchesJobMode && matchesMinPay && matchesSearch;
        });
    }

    const filteredData = filterData(data) || [];

    return (
        <div className="main">
            <div className="header">
                <Filter setFilter={setFilter}/>
            </div>
            <div className="body">
                {
                    filteredData.map((item, index) => (
                        <Card {...item} key={index} />
                    ))
                }
            </div>
            {hasMore && <div className="loading">
                🔃 Loading ...
            </div>}
            <div ref={lastBookElementRef} />
        </div>
    )
}

export default Main;