import React from 'react';

const Cards = (props) => {
    return (
        <div data-aos='flip-up' data-aos-duration='1000' className='lg:h-80 h-96 bg-white w-3/4 mx-auto lg:mx-0 lg:w-full rounded-3xl shadow-xl hover:bg-gray-200 hover:shadow-gray-600 shadow-gray-400'>
            <img src={props.src} alt=' ' className='w-full h-44 rounded-t-3xl' />
            <div className='flex gap-6 w-full h-36 mt-4'>
                <div className='w-20 h-full mt-1'>
                    <h1 className='text-sm text-[#3D37F1] font-bold uppercase text-center'>{props.month}</h1>
                    <h1 className='text-2xl text-black font-bold text-center'>{props.day}</h1>
                </div>
                <div className='w-72 h-full mr-4'>
                    <h1 className='text-base text-black font-bold text-left'>{props.text}</h1>
                    <p className='text-sm text-gray-600 mt-4'>{props.p}</p>
                </div>
            </div>
        </div>
    );
}

const Events = () => {
    return (
        <div className='lg:w-5/6 w-full mx-0 lg:mx-auto items-center'>
            <div className='lg:mt-28 mt-10 bg-white h-auto' >
                <div data-aos='zoom-in-left' data-aos-duration='800' className='flex md:flex-row flex-col justify-center items-center md:justify-between'>
                    <div>
                        <h1 className='text-5xl text-[#242565] font-bold text-center lg:text-left'>Upcoming events</h1>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 lg:gap-8 lg:mt-0 mt-8'>
                        <button className='bg-blue-100 text-[#242565] rounded-full h-12 w-40 text-sm font-medium'>Weekdays <span><i className='fa-solid fa-arrow-down ml-6 text-black'></i></span></button>
                        <button className='bg-blue-100 text-[#242565] rounded-full h-12 w-40 text-sm font-medium'>Event type <span><i className='fa-solid fa-arrow-down ml-6 text-black'></i></span></button>
                        <button className='bg-blue-100 text-[#242565] rounded-full h-12 w-40 text-sm font-medium'>Any Category <span><i className='fa-solid fa-arrow-down ml-6 text-black'></i></span></button>
                    </div>
                </div>
            </div>
            <div  className='mt-20 w-full grid grid-col-span-3 lg:grid-cols-3  gap-10'>
                <Cards
                    src='./images/event1.png'
                    month='APR'
                    day='14'
                    text='Wonder Girls 2010 Wonder Girls World Tour San Francisco'
                    p='We’ll get you directly seated and inside for you to enjoy the show.'
                />
                <Cards
                    src='./images/event2.png'
                    month='AUG'
                    day='20'
                    text='JYJ 2011 JYJ Worldwide Concert Barcelona'
                    p='Directly seated and inside for you to enjoy the show.'
                />
                <Cards 
                    src='./images/event3.png'
                    month='sep'
                    day='18'
                    text='2011 Super Junior SM Town Live 10 World Tour'
                    p='We’ll get you directly seated and inside for you to enjoy the show.'
                />
            </div>
            <div className='mt-10 grid lg:grid-cols-3 gap-10 mb-8'>
            <Cards
                    src='./images/event4.png'
                    month='APR'
                    day='14'
                    text='Wonder Girls 2010 Wonder Girls World Tour San Francisco'
                    p='We’ll get you directly seated and inside for you to enjoy the show.'
                />
                <Cards
                    src='./images/event5.png'
                    month='AUG'
                    day='20'
                    text='JYJ 2011 JYJ Worldwide Concert Barcelona'
                    p='Directly seated and inside for you to enjoy the show.'
                />
                <Cards 
                    src='./images/event6.png'
                    month='sep'
                    day='18'
                    text='2011 Super Junior SM Town Live 10 World Tour'
                    p='We’ll get you directly seated and inside for you to enjoy the show.'
                />
            </div>
            <div data-aos='flip-down' data-aos-duration='1000' className='flex items-center mt-16'>
                <button className='mx-auto w-48 h-16 border-2 font-semibold border-[#3D37F1] text-xl text-[#3D37F1] rounded-full'>Load More</button>
            </div>
        </div>
    );
}

export default Events;
