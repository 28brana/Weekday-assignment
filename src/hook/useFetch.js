import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
    const url = 'https://api.weekday.technology/adhoc/getSampleJdJSON';

    const [data, setData] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMore = () => {
        setOffset((prevOffset) => prevOffset + 10);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const headers = {
                    'Content-Type': 'application/json',
                };

                const response = await axios.post(url, {
                    offset,
                    limit: 1
                }, { headers });

                setData((prevData) => [...prevData, ...response.data.jdList]);
                setTotalCount(response.data.totalCount);

            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [offset]);
    
    const hasMore = data.length < totalCount;

    return { loading, error, data, totalCount, hasMore,fetchMore };
};

export default useFetch;
