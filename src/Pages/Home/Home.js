import React, { useEffect, useState } from 'react';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;