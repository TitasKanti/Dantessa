import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div className=" pt-5 py-10 px-2 leading-8">
                <h2 className="text-3xl font-bold text-blue-500">Dental Services</h2>
                <p className="">Our Range of Dental Care Services</p>

                <div className="grid md:grid-cols-3 gap-y-8 mt-5">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}>
                        </Service>)
                    }
                </div>

            </div>
        </>
    );
};

export default Home;