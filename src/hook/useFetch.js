import axios from "axios";
import { useState } from "react";

const useFetch = () => {
    const url = 'https://api.weekday.technology/adhoc/getSampleJdJSON';

    const [data, setData] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); 

    const fetchData = async () => {
        try {
            setLoading(true); 

            const headers = {
                'Content-Type': 'application/json',
            };

            const response = await axios.post(url, {
                offset,
                limit: 10
            }, { headers });

            setData((prevData) => [...prevData, ...response.data.jdList]);
            setTotalCount(response.data.totalCount);

            setOffset((prevOffset) => prevOffset + 10);

        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, data, totalCount, fetchData };
};

export default useFetch;
