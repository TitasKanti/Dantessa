import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [detail, setDetail] = useState({});
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    useEffect(() => {
        const foundDetail = details?.find(detail => detail.id == id);
        setDetail(foundDetail);
    }, [details])

    return (
        <div>
            <h2>here is service details {id} {detail?.name} <br /> {detail?.detail}</h2>
        </div>
    );
};

export default ServiceDetail;