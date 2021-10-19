import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../Images/Icons/icon2.png'

const Footer = () => {
    return (
        <>
            <div className="py-8 w-full mt-20">
                <div className="container mx-auto px-8">
                    <div className="table w-full ">
                        <div className="h-10 w-10 self-center mr-2 flex flex-row">
                            <img src={icon} alt="icon" />

                            <Link to="/home" className="text-3xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">Dentessa</Link><br />
                        </div>

                        <div className="block sm:table-cell">
                            <p className="uppercase text-grey text-sm sm:mb-6">Links</p>
                            <ul className="list-reset text-xs mb-6">
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <Link to="#" className="text-grey hover:text-grey-dark">FAQ</Link>
                                </li>
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <Link to="#" className="text-grey hover:text-grey-dark">Help</Link>
                                </li>
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <Link to="#" className="text-grey hover:text-grey-dark">Support</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="block sm:table-cell">
                            <p className="uppercase text-grey text-sm sm:mb-6">Legal</p>
                            <ul className="list-reset text-xs mb-6">
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <Link to="#" className="text-grey hover:text-grey-dark">Terms</Link>
                                </li>
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <Link to="#" className="text-grey hover:text-grey-dark">Privacy</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="block sm:table-cell">
                            <p className="uppercase text-grey text-sm sm:mb-6">Social</p>
                            <ul className="list-reset text-xs mb-6">
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <Link to="#" className="text-grey hover:text-grey-dark">Facebook</Link>
                                </li>
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <Link to="#" className="text-grey hover:text-grey-dark">Linkedin</Link>
                                </li>
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <Link to="#" className="text-grey hover:text-grey-dark">Twitter</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="block sm:table-cell">
                            <p className="uppercase text-grey text-sm sm:mb-6">Company</p>
                            <ul className="list-reset text-xs mb-6">
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <Link to="#" className="text-grey hover:text-grey-dark">Official Blog</Link>
                                </li>
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <Link to="#" className="text-grey hover:text-grey-dark">About Us</Link>
                                </li>
                                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                    <Link to="#" className="text-grey hover:text-grey-dark">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center pb-2">
                <small className="text-blue-600"><i><a href="http://www.freepik.com">Logos and images sourced from Freepik</a></i></small> <br />
                <small>© 2021 TK-tech-zone/Dentessa</small>
            </div>
        </>
    );
};

export default Footer;