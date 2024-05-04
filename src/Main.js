import { useCallback, useRef } from "react";
import Card from "./component/card";
import './main.css'
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

    return (
        <div className="main">
            <div className="body">
                {
                    data.map((item, index) => (
                        <Card  key={index} />
                    ))
                }
            </div>
            <div ref={lastBookElementRef} />
        </div>
    )
}

export default Main;