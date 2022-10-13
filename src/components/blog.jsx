import React from 'react';

function BlogCard (props) {
    return (
        <div>
            <div data-aos='flip-up' data-aos-duration='1200' className='w-80 h-auto hover:shadow-xl hover:shadow-gray-400 bg-white rounded-3xl'>
                <img src={props.src} alt=' ' />
                <p className='text-xl font-bold text-left text-[#242565] mt-4 ml-3'>{props.para}</p>
                <p className='text-base text-left mt-2 text-black font-medium ml-3'>{props.p}</p>
                <p className='text-sm text-gray-500 font-normal text-left mt-6 pb-2 ml-3'>12 mar John Doe</p>
            </div>
        </div>  
    );
}

const Blog = () => {
    return (
        <div>
            <div data-aos='zoom-in' data-aos-duration='1000' className='lg:w-full mx-auto lg:mx-0 w-5/6  bg-transparent lg:mt-0 mt-44 h-auto mb-8'>
                <h1 className='text-5xl text-center font-bold text-[#242565]'>Blog</h1>
                <p className='text-base mt-4 font-normal text-center text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <div className='w-full flex flex-wrap lg:flex-row mt-12 justify-center items-center gap-8'>
                    <BlogCard
                        src='./images/blog1.png'
                        para='6 Strategies to Find Your Conference Keynote and Other Speakers'
                        p='Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.'
                    />
                    <BlogCard
                        src='./images/blo2.png'
                        para='6 Strategies to Find Your Conference Keynote and Other Speakers'
                        p='Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.'
                    />
                    <BlogCard
                        src='./images/blog3.png'
                        para='6 Strategies to Find Your Conference Keynote and Other Speakers'
                        p='Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.'
                    />
                </div>
            </div>
            <div data-aos='zoom-in' data-aos-duration='1000' className='flex items-center mt-16 mb-10'>
                <button className='mx-auto w-48 h-16 border-2 font-semibold border-[#3D37F1] text-xl text-[#3D37F1] rounded-full'>Load More</button>
            </div>
        </div>
    );
}

export default Blog;
