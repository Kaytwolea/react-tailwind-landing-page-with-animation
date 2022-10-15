import React, {useState, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }

    return ( 
        <div>
            <div data-aos='fade-up' data-aos-duration='1000' className='h-20 flex justify-between w-full'>
                <div className='lg:mt-5 mt-3 lg:ml-0 ml-3'>
                    <img src='./images/logo2.png' alt=' ' />
                </div>
                <div className="block md:hidden" onClick={handleNav}>
                    {nav ?<button><i className="pt-6 pl-40 fa-solid fa-x text-white"></i></button> : <button className=""><i className="bg-transparent pt-6 pl-40 fa-solid fa-bars text-white"></i></button> }
                </div>
                    <div>
                        <ul className='md:flex gap-10 hidden'>
                            <li className='text-white text- font-normal mt-6'>Schedule</li>
                            <li className='text-white text- font-normal mt-6'>Speakers</li>
                            <li className='text-white text- font-normal mt-6'>Tickets</li>
                            <li className='text-white text- font-normal mt-6'>Contact</li>
                            <button className='bg-transparent text-white mt-4 font-semibold border-2 rounded-full h-12 w-28 border-white'>Log in</button>
                        </ul>
                    </div>


                </div>
                <ul className={nav ? 'ease-in-out duration-500 float-right mr-8 mb-4 h-full w-[60%] heronav' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                        <li className='pt-8 pl-8 text-black text-xl font-bold'>Collections</li>
                        <li className='pt-4 pl-8 text-black font-semibold text-base'>Men</li>
                        <li className='pt-4 pl-8 text-black font-semibold text-base'>Women</li>
                        <li className='pt-4 pl-8 text-black font-semibold text-base'>About</li>
                        <li className='pt-4 pl-8 text-black font-semibold text-bas'>Contact</li>
                    </ul>
        </div>
    );
}
 

const Hero = () => {

    useEffect(() => {

        AOS.init();

    }, []);

    return (
        <div>
        <div className='w-full hero h-auto'>
            <div className='lg:w-5/6 w-full mx-auto bg-transparent h-full'>
                    <Navbar />
                <div data-aos='zoom-in-up' data-aos-duration='1500' data-aos-delay='300' className='flex flex-col lg:flex-row gap-0 mt-0 lg:mt-16 bg-transparent w-full h-auto'>
                    <div className=''>
                        <img src='./images/hero.png' alt=' ' className='h-[500px] w-full lg:w-[1700px] mr-0 lg:mr-8' />
                    </div>
                    <div className='lg:mr-12 mr-0 w-full'>
                        <h1 className='text-4xl lg:text-left text-center text-white font-semibold mt-0 lg:mt-8'>SBS MTV The Kpop Show Ticket  Package</h1>
                        <h1 className='text-xl font-normal text-white text-center lg:text-left lg:ml-0 ml-4 lg:mr-0 mr-4 mt-4 lg:mt-12'>Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording.</h1>
                        <div className='flex mb-8  lg:mb-0 flex-col lg:mx-0 justify-center items-center md:flex-row gap-4 lg:gap-12 mt-10'>
                            <button className='bg-[#F5167E] text-white text-xl font-normal rounded-full w-44 h-14'>Get Started</button>
                            <button className='bg-transparent border-2 border-white text-white text-xl font-normal rounded-full w-44 h-14'>Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-aos='zoom-in' data-aos-duration='1500' data-aos-delay='300' className='lg:w-5/6 w-full mx-auto bg-[#272986] shadow-2xl shadow-[#7c7db9]  h-auto md:relative mt-0 lg:-mt-16 md:rounded-3xl hidden md:flex flex-col md:flex-row md:justify-around justify-center items-center gap-2 md:gap-14'>
            <div className='h-28 bg-transparent mt-2 lg:mt-4 ml-0 lg:ml-10'>
                <h1 className='text-xl mt-3 font-normal text-left text-white'>Search event</h1>
                <input className='h-12 w-72 bg-transparent border-t-0 border-r-0 border-l-0 text-2xl font-bold text-white  border-b-4 border-white placeholder:text-white ' type='text' placeholder='Kanser Jazz' />
                {/* <h1 className='text-2xl font-bold mt-2 text-white border-b-2 border-white'>Konser Jazz</h1> */}
            </div>
            <div className='h-28 bg-transparent mt-2 lg:mt-4'>
                <h1 className='text-xl mt-3 font-normal text-left text-white'>Places</h1>

                <input className='h-12 w-72 bg-transparent border-t-0 border-r-0 border-l-0 text-2xl font-bold text-white border-b-4 border-white placeholder:text-white ' type='text' placeholder='Indonesia' />
            </div>
            <div className='h-28 bg-transparent mt-2 lg:mt-4 mr-0 lg:mr-10'>
                <h1 className='text-xl mt-3 font-normal text-left text-white'>Time</h1>

                <input className='h-12 w-72 bg-transparent border-t-0 border-r-0 border-l-0 text-white text-2xl font-bold  border-b-4 border-white placeholder:text-white ' type='date' placeholder='Kanser Jazz' />
            </div>
        </div>
        </div>
    );
}

export default Hero;
