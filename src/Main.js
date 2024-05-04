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
        location: null
    })

    function filterData(data) {
        return data.filter(item => {
            const matchesMinExp = filter.minExp ? item.minExp >= filter.minExp : true;
            return matchesMinExp;
        });
    }

    const filteredData = filterData(data) || [];

    return (
        <div className="main">
            <div className="header">
                <Filter setFilter={setFilter} />
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