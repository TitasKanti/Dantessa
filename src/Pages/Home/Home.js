import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Service from '../Service/Service';
import image from '../../Images/Carousel-items/dentist-with-smile-min.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Carousel } from 'react-bootstrap';
import Doctors from './Doctors/Doctors';
import Reviews from '../Reviews/Reviews';

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
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://image.freepik.com/free-psd/dentist-dental-care-social-media-banner-template_120329-1308.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://image.freepik.com/free-vector/dental-hygiene-landing-page-template-with-doctor-girl-patient_107791-5855.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://image.freepik.com/free-psd/dentist-health-care-social-media-banner-template_202595-468.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


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

            <div>
                <Doctors />
            </div>

            <div>
                <div class="relative bg-white dark:bg-gray-800 p-4">
                    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
                        <div class="lg:col-start-2 md:pl-20">
                            <h4 class="text-2xl leading-8 font-extrabold text-gray-900 dark:text-white tracking-tight sm:leading-9">
                                Dental Check-up Procedure
                            </h4>
                            <ul class="mt-10">
                                <li>
                                    <div class="flex">
                                        <div class="flex-shrink-0">
                                            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <svg width="20" height="20" fill="currentColor" class="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="ml-4">
                                            <h5 class="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                                                Book an Appontment
                                            </h5>
                                            <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                                You can book appointment by online or our hotline.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="mt-10">
                                    <div class="flex">
                                        <div class="flex-shrink-0">
                                            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <svg width="20" height="20" fill="currentColor" class="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="ml-4">
                                            <h5 class="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                                                Conduct Oral Check-up
                                            </h5>
                                            <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                                The doctor will give a thorough check of your find to find potential risks.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="mt-10">
                                    <div class="flex">
                                        <div class="flex-shrink-0">
                                            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <svg width="20" height="20" fill="currentColor" class="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="ml-4">
                                            <h5 class="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                                                Perform Treatment
                                            </h5>
                                            <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                                Your assigned specialist will perform needed to restore your happy smile.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
                            <img src="https://image.freepik.com/free-photo/male-dentist-working-with-dental-microscope_329181-20732.jpg" alt="illustration" class="relative mx-auto shadow-lg rounded w-auto" />
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <Reviews />
            </div>

        </>
    );
};

export default Home;