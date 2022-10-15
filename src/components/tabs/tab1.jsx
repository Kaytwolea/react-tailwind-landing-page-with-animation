import React from 'react';

const Tab1 = () => {

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

    return (
        <div>
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
        </div>
    );
}

export default Tab1;