import React from 'react'
import BannerImg from '../../assets/images/banner.png'

function Banner() {
  return (
    <div className='lg:relative'>
        <div className=''>
            <img src={BannerImg} alt='Background_image'/>
        </div>
        <div className='flex flex-col flex-wrap lg:w-[40vw] lg:absolute top-[28%] right-[8%] bg-[#fff3e3] p-8 gap-4'>
                <p className='tracking-[2px] text-[12px] font-semibold'>New Arrival</p>
                <p className='text-5xl font-semibold text-[#b88e2f]'>Discover Our <br /> New Collection</p>
            <div className='mb-5 font-semibold'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className=''>
               <button className='py-5 px-14 bg-[#b88e2f] text-[#fff] font-semibold'>BUY NOW</button>
            </div>

        </div>
    </div>

  )
}

export default Banner