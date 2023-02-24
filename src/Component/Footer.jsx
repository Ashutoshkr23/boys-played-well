import React, { useState, useEffect } from 'react'

function Footer() {
    const [date, setDate] = useState();

    function getYear() {
        setDate(new Date().getFullYear());
    }

    useEffect(() => {
        getYear();
    }, [])
    return (
        <div className='bg-black pt-24 pb-4'>
                <div className="flex flex-row flex-wrap justify-center mx-auto my-4 min-w-0 items-center" style={{ height: '40px', width: '528px', borderRadius: '19px', margin: 'auto' }}>
                    <a href="#" target="blank" className="w-11 h-10">
                        <img className="w-6 h-6 hover:scale-125 inline-block" src={"assets/Images/footer/fb.svg"} alt="facebook icon" />
                    </a>
                    <a href="#" target="blank" className="w-11 h-10">
                        <img className="w-6 h-6 hover:scale-125 inline-block" src="assets/Images/footer/linkedin.ico" alt="linkedin icon" />
                    </a>
                    <a href="#" target="blank" className="w-11 h-10">
                        <img className="w-6 h-6 hover:scale-125 inline-block" src={"assets/Images/footer/instagram-light.ico"} alt="instagram icon" />
                    </a>
                </div>
            <div className="text-center text-white text-base opacity-80 ">© {date} BY BOYS PLAYED WELL</div>
        </div>
    )
}

export default Footer
