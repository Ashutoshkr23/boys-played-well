import React from 'react';


const Demo = () => {
    return (
        <div className="relative">
            <div className="container flex flex-col items-center justify-center min-h-screen">
                <section className="h-screen w-full fixed inset-0 flex items-center justify-center z-1">
                    <div className="relative shadow-xl hover:shadow-green-600  shadow-green-300  h-[400px] mt-10 hover:scale-110 ease-in-out duration-300  rounded-lg">
                        <div
                            className="absolute top-0 rounded-lg left-0 w-full h-full bg-center bg-cover filter "
                            style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}
                        />
                        <div className="relative pl-10  pt-10 rounded-lg bg-gradient-to-r from-black via-black to-transparent z-10 h-full flex flex-col ">
                            <div className='w-1/2'>
                                <div className='flex'>
                                    <div className='h-40 w-40'>
                                        <img src="/assets/Images/Movie/Chaigarden.jpg" alt="" className='h-full w-full rounded-lg mt-2 ml-2' />
                                    </div>
                                    <div className='ml-4 mt-4'>
                                        <h1 className='text-2xl text-white mt-2 ml-2'>CHAI GARDEN</h1>
                                        <h2 className='text-sm mt-2 text-white ml-2'>31 Min | Drama | 2023</h2>
                                    </div>
                                </div>
                                <div className='pr-16'>
                                    <p className='text-sm mt-10 pl-4  text-white'> Follows the lives of tea garden labourers paid a wage of ₹132/day in West Bengal, India. The workers present their circumstance, experience of exploitation. The film focuses on two women from the village Jeewani and Jyoti, niece and aunt respectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="h-screen w-full fixed inset-0 flex items-center justify-center z-2 transform translate-y-full scroll-margin-top-[100vh]">
                    <div className="relative shadow-xl hover:shadow-green-600  shadow-green-300  h-[400px] mt-10 hover:scale-110 ease-in-out duration-300  rounded-lg">
                        <div
                            className="absolute top-0 rounded-lg left-0 w-full h-full bg-center bg-cover filter "
                            style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}
                        />
                        <div className="relative pl-10  pt-10 rounded-lg bg-gradient-to-r from-black via-black to-transparent z-10 h-full flex flex-col ">
                            <div className='w-1/2'>
                                <div className='flex'>
                                    <div className='h-40 w-40'>
                                        <img src="/assets/Images/Movie/Chaigarden.jpg" alt="" className='h-full w-full rounded-lg mt-2 ml-2' />
                                    </div>
                                    <div className='ml-4 mt-4'>
                                        <h1 className='text-2xl text-white mt-2 ml-2'>CHAI GARDEN</h1>
                                        <h2 className='text-sm mt-2 text-white ml-2'>31 Min | Drama | 2023</h2>
                                    </div>
                                </div>
                                <div className='pr-16'>
                                    <p className='text-sm mt-10 pl-4  text-white'> Follows the lives of tea garden labourers paid a wage of ₹132/day in West Bengal, India. The workers present their circumstance, experience of exploitation. The film focuses on two women from the village Jeewani and Jyoti, niece and aunt respectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
        
    );
};

export default Demo;

