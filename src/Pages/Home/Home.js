import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState([]);
    const history = useHistory();

    const handleClickToService = () => {
        history.push('/allServices');
    }

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
                        services.slice(0, 3).map(service => <Service
                            key={service.id}
                            service={service}>
                        </Service>)
                    }
                </div>
                <div className="p-7  text-center">

                    <button onClick={handleClickToService} className="text-white text-2xl font-light border-gray-600 rounded-md bg-blue-500 hover:bg-green-700 p-2 px-4">Show more Services</button>

                </div>
            </div>
        </>
    );
};

export default Home;