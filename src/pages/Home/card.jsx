import React, { useState } from 'react'
// import Dining from '../../assets/images/dining.png';
import { useDispatch, useSelector } from 'react-redux';
import { cart_product } from '../../redux/reducer';

function Card({products}) {
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.products.addtoCart);
    const [showMore, setShowMore] = useState(8); 
    const addToCart = async(list) =>
    {
        dispatch(cart_product(list));
    }

    const handleShowMore = () =>{
        setShowMore((prev)=>prev+4);
    }
  return (
<>
 <div className='mt-5 flex flex-col items-center px-12 '>
    <p className='font-bold text-[#333333] text-2xl'>Our Products</p>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-5'>
            {products?.length>0 ?
            products?.slice(0,showMore)?.map((data, index)=>(
        <div key={index} className='w-[250px] bg-gray-100 flex-col hover:bg-transparent items-center group-hover:text-center group relative hover:lg-scale-105'>
            <div className=' h-[300px]'>
            <img src={data?.image} alt='title' className='w-full h-full' />
                 </div>
            <div className='ml-1 mt-2 py-5 px-2'>
                <p className='font-semibold text-[14px] pb-2'>{data?.title?.slice(0,50)}</p>
                <p className='text-[10px] text-gray-400 pb-2'>{data?.description?.slice(0,75)}</p>
                <div className='flex justify-between  text-[13px]'>
                <p className='font-semibold'>Rp {data?.price}</p>
                {/* <p className='text-gray-400 line-through'>price</p> */}
               
            </div>
                </div>
                <div className='absolute flex items-center justify-center group-hover:invisible w-[45px] h-[45px] bg-[#e97171] rounded-full top-5 right-5'>
                     <p className='text-[#fff] text-center '>30%</p>
                </div>
                <div className=' w-[100%] h-[100%] absolute group-hover:text-center invisible group-hover:visible top-0 bg-black-rgba'>
                <div className='flex flex-col justify-center h-[100%] items-center'>
                    <button className='px-7 py-3 bg-[#fff] max-w-[200px] font-semibold text-[#b88e2f] text-[12px]' onClick={()=>addToCart(data)}>Add to Cart</button>
                    <div className=' flex gap-10  text-[14px] text-[#fff] mt-5'>
                    <p>share</p>
                    <p>compare</p>
                    <p>like</p>
                    </div>
                </div>
            </div>
        </div>
            ))
        :
        <></>
        }
        </div>
        <div className='flex w-full justify-center mt-10'>
            <button className='px-11 text-[#b88e2f] py-2 border-solid border-2 border-[#b88e2f]' onClick={handleShowMore}>Show More</button>
        </div>
 </div>
</>
)
}

export default Card