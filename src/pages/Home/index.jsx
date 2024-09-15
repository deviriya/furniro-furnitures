import React from 'react'
import Banner from './banner'
import Dining from '../../assets/images/dining.png';
import Living from '../../assets/images/living.png';
import Bedroom from '../../assets/images/bedroom.png';
import Innerpeace from '../../assets/images/Innerpeace.png';
import Card from './card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useProductsQuery } from '../../redux/api';
import { useDispatch, useSelector } from 'react-redux';
import { set_prodect_details } from '../../redux/reducer';

function Home() {
    const dispatch = useDispatch();
    const product = useSelector(state=>state);
    console.log(product)
    const {data, isSuccess, isLoading} = useProductsQuery();
    let products;
    if(isLoading){
        products=[];
    }
    else if(isSuccess){
        products = data;
        dispatch(set_prodect_details(data))
    }

    let imgArray = [
        {
            'img': Dining,
            'title':'Dining'
        },
        {
            'img': Living,
            'title':'Living'
        },
        {
            'img': Bedroom,
            'title':'Bedroom'
        }
    ]

    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className=''>
        <Banner />
       <div className='flex flex-col items-center py-5 '>
            <div className='flex-col text-center w-[100%] mb-7'>
               <p className='font-bold text-lg text-[#333333]'>Browse The Range</p> 
               <p className='text-[12px] text-gray-400'>Lorem Ipsum is simply dummy text</p>
            </div>
                <div className=''>
                    <div className='flex justify-center gap-4 '>
                        {imgArray?.map((data,index)=>(
                        <div className='flex-col max-w-sm' key={index}>
                            <img src={data?.img} alt={`${data?.title}_img`} />
                            <p className='text-center font-semibold mt-3 text-[#333333] text-[14px]'>{data?.title}</p>
                        </div>
                        ))}
                    </div>
                </div>
       </div>
       <Card products={products}/>
       <div className='flex mt-10 bg-[#fcf8f3] py-5 border-b-2 border-slate-400 '>
            <div className=' flex flex-col flex-wrap justify-center pl-12 w-1/3'>
                <h4 className='font-semibold text-[30px] '>50+ Beautiful Rooms <br /> Inspiration</h4>
                <p className='mt-3'>Our designer already made a lot of beaultiful prototype of rooms that inspires you.</p>
                <div>
                <button className='mt-5 py-5 px-14 bg-[#b88e2f] text-[#fff] font-semibold'>Explore More</button>
                </div>
            </div>
            <div className='flex w-1/3 justify-center'>
                <img src={Innerpeace} className='w-[80%]' alt={`Inner_Peace_img`} />
            </div>
            <div className='w-1/3'>
                <Slider {...settings}>
                    {imgArray?.map((img,index)=>(
                    <div key={index}>
                        <img src={img?.img} className='w-[90%] h-[400px]' alt={`${img?.title}_img`} />
                    </div>
                    ))}
                </Slider>
         </div>
       </div>
    </div>
  )
}

export default Home