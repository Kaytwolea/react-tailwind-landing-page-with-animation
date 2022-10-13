import React from 'react';


const Footer = () => {
    const Events = ['Create and Setup', 'Sell tickets', 'Online RSVP', 'Online Events'];
    const Tick = ['About Us', 'Press', 'Contact Us', 'Help Center', 'How it Works', 'Privacy', 'Terms'];

    return (
        <div data-aos='zoom-up-right' data-aos-duration='1500' className='bg-[#0A075F] w-full mt-12'>
            <div className='w-5/6 mx-auto'>
            <div className=' h-auto mt-16  bg-transparent gap-20 flex flex-col lg:flex-row'>
                <div className='lg:w-72 h-40 mt-16'>
                    <img src='./images/logo2.png' alt=' ' className='lg:mx-0 mx-auto' />
                    <p className='text-sm text-center lg:text-left mt-6 text-white font-normal'>Eventick is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.</p>
                    <div className='flex gap-4 mt-4 lg:mx-0 lg:justify-start justify-center'>
                        <img src='./images/facebook.png' alt=' ' />
                        <img src='./images/twitter.png' alt=' ' />
                        <img src='./images/linkedin.png' alt=' ' />
                    </div>
                </div>
                <div className='mt-16'>
                    <h1 className='font-bold text-xl text-center lg:text-left space-x-20 text-white'>Plan Events</h1>
                    <ul className='space-y-2 text-white text-center lg:text-left font-normal text-sm mt-6'>
                        {Events.map((items) => 
                            <li>{items}</li>
                        )}
                    </ul>
                </div>
                <div className='mt-16'>
                    <h1 className='font-bold text-xl text-center lg:text-left space-x-10 text-white'>Event tick</h1>
                    <ul className='space-y-2 text-white text-center lg:text-left font-normal text-sm mt-6'>
                        {Tick.map((ticks) =>
                            <li>{ticks}</li>
                        )}
                    </ul>
                </div>
                <div className='mt-16'>
                    <h1 className='font-bold text-xl space-x-10 text-white text-center lg:text-left'>Stay in the Loop</h1>
                    <p className='text-sm text-center lg:text-left mt-6 text-white font-normal'>Join our mailing list to stay in the loop with our newest <br/> for Event and concert</p>
                    <div className='mt-8 mb-8 rounded-full items-center h-14 w-full lg:w-96 bg-white border-none relative'>
                        <input className='placeholder:text-black placeholder:text-base border-none w-[55%] focus:border-none h-full rounded-full' type='text' placeholder='Enter your email address' />
                        <button className='rounded-full w-[43%] h-[80%] my-auto bg-[#F5167E] text-white font-mediun text-base'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='text-gray-700 pb-10 mt-12'>
               <hr className='border-1 border-gray-600' />
               <h1 className='text-base font-normal text-white text-center mt-6'>Created by <span><a target='_blank'href='https://wa.me/2349036228765'>Kaytwolea</a></span></h1>
            </div>
            </div>
        </div>
    );
}


export default Footer;