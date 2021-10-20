import React from 'react';
import { Link } from 'react-router-dom';

const Reviews = () => {
    return (
        <div>

            <div className="flex items-center justify-center px-5 py-5">
                <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
                    <div className="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
                        <Link to="#" className="block relative">
                            <img alt="profil" src="https://image.freepik.com/free-photo/cheerful-teenager-with-toothy-smile-afro-hairstyle-holds-modern-cell-phone-chats-online-with-boyfriend_273609-30470.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                        </Link>
                    </div>
                    <div className="w-full mb-10">
                        <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                            “
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                            To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                        </p>
                        <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                            ”
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="text-md text-indigo-500 font-bold text-center">
                            Tom Hardy
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
                            @thom.hardy
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Reviews;