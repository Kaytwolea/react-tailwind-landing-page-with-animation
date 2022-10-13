import React from 'react';

const Brands = () => {
    return (
        <div className='w-full bg-transparent h-auto lg:mt-20 mt-10'>
            <h1 data-aos='flip-left' data-aos-duration='1000' className='text-[40px] text-center font-bold text-[#242565]'>Join this brands</h1>
            <p data-aos='flip-right' data-aos-duration='1200'  className='text-base mt-6 text-black font-normal text-center'>We've had the pleasure of working with industry-defining brands. These are just some of them.</p>
            <marquee data-aos='flip-in' data-aos-duration='1300'  direction='left' className='lg:mt-6 lg:hidden mt-40 lg:w-5/6 w-auto mx-auto object-contain lg:gap-3 gap-8 h-32 items-center flex overflow-x-scroll flex-row justify-center'>
                <img src='./images/brand2.png' alt=' ' />
                <img src='./images/brand5.png' alt=' ' />
                <img src='./images/brand3.png' alt=' '/>
                <img src='./images/brand7.png' alt=' '/>
                <img src='./images/brand8.png' alt=' ' />
                
            </marquee>
            <div data-aos='zoom-in' data-aos-duration='1200'  className='lg:mt-6 hidden mt-40 lg:w-5/6 w-auto mx-auto object-contain lg:gap-3 gap-8 h-32 items-center lg:flex flex-row justify-center'>
                <img src='./images/brand2.png' alt=' ' />
                <img src='./images/brand5.png' alt=' ' />
                <img src='./images/brand3.png' alt=' '/>
                <img src='./images/brand7.png' alt=' '/>
                <img src='./images/brand8.png' alt=' ' />
                
            </div>
        </div>
    );
}

export default Brands;
