import React, {useState} from 'react';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';

const Events = () => {

    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab("tab1")
    };

    const handleTab2 = () => {
        setActiveTab("tab2")
    };
    const handleTab3 = () => {
        setActiveTab("tab3")
    };



    return (
        <div className='lg:w-5/6 w-full mx-0 lg:mx-auto items-center'>
            <div className='lg:mt-28 mt-10 bg-white h-auto' >
                <div data-aos='zoom-in-left' data-aos-duration='800' className='flex md:flex-row flex-col justify-center items-center md:justify-between'>
                    <div>
                        <h1 className='text-5xl text-[#242565] font-bold text-center lg:text-left'>Upcoming events</h1>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 lg:gap-8 lg:mt-0 mt-8'>
                        <button onClick={handleTab1} className={activeTab === "tab1" ? 'bg-[#242565] text-white rounded-full h-12 w-40 text-sm font-medium' : 'bg-blue-100 text-[#242565] rounded-full h-12 w-40 text-sm font-medium'}>Weekdays <span><i className='fa-solid fa-arrow-down ml-6 text-black'></i></span></button>
                        <button onClick={handleTab2} className={activeTab === "tab2" ? 'bg-[#242565] text-white rounded-full h-12 w-40 text-sm font-medium' : 'bg-blue-100 text-[#242565] rounded-full h-12 w-40 text-sm font-medium'}>Event type <span><i className='fa-solid fa-arrow-down ml-6 text-black'></i></span></button>
                        <button onClick={handleTab3} className={activeTab === "tab3" ? 'bg-[#242565] text-white rounded-full h-12 w-40 text-sm font-medium' : 'bg-blue-100 text-[#242565] rounded-full h-12 w-40 text-sm font-medium'}>Any Category <span><i className='fa-solid fa-arrow-down ml-6 text-black'></i></span></button>
                    </div>
                </div>
            </div>
            <div>
                {activeTab === 'tab1' ? <Tab1 /> : <div></div> }
                {activeTab === 'tab2' ? <Tab2 /> : <div></div> }
                {activeTab === 'tab3' ? <Tab3 /> : <div></div> }
            </div>
            <div data-aos='flip-down' data-aos-duration='1000' className='flex items-center mt-16'>
                <button className='mx-auto w-48 h-16 border-2 font-semibold border-[#3D37F1] text-xl text-[#3D37F1] rounded-full'>Load More</button>
            </div>
        </div>
    );
}

export default Events;
