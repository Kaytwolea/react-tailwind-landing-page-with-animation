import React from 'react';

const Create = () => {
    return (
        <div className='bg-[#EEE1FF] w-full'>
            <div className='mt-16 w-full mx-auto h-auto mb-8'>
                <div className='bg-white h-20 w-full'>

                </div>
                <div className='bg-[#EEE1FF] w-3/4 mx-auto flex flex-col lg:flex-row gap-8'>
                    <div data-aos='zoom-in-down' data-aos-duration='1200'>
                        <img src='./images/events.png' alt=' ' className='-mt-16 mx-auto' />
                    </div>
                    <div data-aos='zoom-in-left' data-aos-delay='400' className='lg:mt-12 mt-4'>
                        <h1 className='text-4xl font-bold text-black text-center lg:text-left'>Make your own Events</h1>
                        <p className='text-base text-black font-medium mt-4 text-center lg:text-left'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. </p>
                        <div className='lg:block flex items-center justify-center'>
                            <button className='bg-[#F5167E] text-white shadow-md shadow-[#c7c6f3] mt-4 text-xl font-normal rounded-full w-80 h-14 mb-4'>Create Events</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;
