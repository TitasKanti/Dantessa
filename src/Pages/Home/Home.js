import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Service from '../Service/Service';
import image from '../../Images/Carousel-items/dentist-with-smile.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
            {/* extra-section */}
            <div className="grid md:grid-cols-2 justify-between items-center gap-4 bg-yellow-50 px-5 py-10">
                <div>
                    <img className="rounded-md" src={image} alt="" />
                </div>
                <div className="text-blue-900 text-justify">
                    <h1 className="text-4xl mb-2">Your smile is our promise</h1>
                    <div className="md:ml-4">
                        <li>Do some regular check up.</li>
                        <li>Clean your teeth in every six months</li>
                        <li>Deap cleaning your teeth can be very effective</li>
                        <li>We have Dental Implant package for you</li>
                        <li>Visit us to have a free check up</li>
                    </div>
                </div>
            </div>

            {/* extra section 2 */}

            <div className="md:flex justify-center gap-4 bg-gray-100 py-4">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                            Get Appointment
                        </Typography>
                        <br />
                        <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            We put your smile at our priority <br />
                            visit us, get your problem solved
                        </Typography>
                        <br />
                        <Typography variant="h8" component="div">
                            Come First, Served First
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button size="small">Get Apointment</Button>
                    </CardActions>
                </Card>

                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                            Operating Hours
                        </Typography>

                        <table class="table p-4 bg-white">
                            <tbody>
                                <tr class="text-gray-700">
                                    <td class="border-b-2 p-4 dark:border-dark-5">
                                        Sunday-Thurstday
                                    </td>
                                    <td class="border-b-2 p-4 dark:border-dark-5">

                                    </td>
                                    <td class="border-b-2 p-4 dark:border-dark-5">
                                        7:00-20:00
                                    </td>
                                </tr>
                                <tr class="text-gray-700">

                                    <td class="border-b-2 p-4 dark:border-dark-5">
                                        Saturday
                                    </td>
                                    <td class="border-b-2 p-4 dark:border-dark-5">

                                    </td>
                                    <td class="border-b-2 p-4 dark:border-dark-5">
                                        9:00-17:00
                                    </td>
                                </tr>
                                <tr class="text-gray-700">

                                    <td class="border-b-2 p-4 dark:border-dark-5">
                                        Friday
                                    </td>
                                    <td class="border-b-2 p-4 dark:border-dark-5">

                                    </td>
                                    <td class="border-b-2 p-4 dark:border-dark-5">
                                        Closed
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </CardContent>
                </Card>

                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                            Emergency
                        </Typography>
                        <br />
                        <Typography className="text-blue-600" variant="h5" component="div">
                            ++88 098 56 0997
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            In the event of any emergency
                        </Typography>
                        <Typography variant="body2">
                            CALL US ASAP
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Contact us</Button>
                    </CardActions>
                </Card>
            </div>

            {/* Dental Services route */}

            <div className=" pt-5 py-10 px-2 leading-8 bg-green-50">
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