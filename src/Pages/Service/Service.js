import React from 'react';

const Service = (props) => {
    const { img, name, description } = props.service;
    return (
        <>
            <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                <img alt="course info" src={img} className="max-h-40 w-full object-cover" />
                <div className="bg-white w-full p-4">
                    <p className="text-2xl font-bold">
                        {name}
                    </p>
                    <br />
                    <p className="text-sm mb-2">
                        {description}
                    </p>

                    <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                        <span className="m-1 px-2 py-1 rounded bg-red-700">
                            #online
                        </span>
                        <span className="m-1 px-2 py-1 rounded bg-red-700">
                            #web
                        </span>
                    </div>
                    <div className="text-center">
                        <button className="bg-green-700 text-sm text-white font-medium mb-2 py-2 px-10 rounded-md">
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;