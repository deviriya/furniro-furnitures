import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import Banner from '../../assets/images/cart_banner.png';
import cartLogo from '../../assets/images/cart_logo.png';
import CartTable from './cartTable';
import Trophy from '../../assets/images/icons/trophy.png';
import Shipping from '../../assets/images/icons/shipping.png';
import Gaurentee from '../../assets/images/icons/guarantee.png';
import CustomerSupport from '../../assets/images/icons/customer-support.png';
function AddtoCart() {

    const addtocart = useSelector(state=>state.products.addtoCart);

    let subTotal=0;
    const initialValue = 0;
    subTotal = useMemo(()=>{return addtocart.reduce((accumulator,val)=>accumulator+val.price,initialValue)},[addtocart]);

    console.log(subTotal)
  return (
    <div className='w-[100%]'>
        <div className=''>
            <div className='relative'>
                <img src={Banner} alt='banner_img' className='h-[400px]' />
            </div>
            <div className='absolute top-[150px] left-[45%]'>
                <div className='flex flex-col items-center'>
                    <img src={cartLogo} alt='banner_img' className='' />
                    <p className='text-[35px] font-[30px]'>Cart</p>
                    <div className='flex'>
                    <p className='font-semibold pr-3'>Home {'>'} </p> <p>cart</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container py-5'>
            <div className='flex w-full'>
                <div className='w-[70%] px-7'>
                    <CartTable />
                </div>
                <div className='w-[30%] flex flex-col p-3 bg-[#f9f1e7]'>
                    <p className='text-center font-semibold text-[18px] p-5'>Cart Totals</p>
                    <div className='flex justify-center p-5 '>
                        <p className='font-semibold  text-start'>Sub Total</p>
                        <p className=' pl-7 text-slate-400 text-[14px]'>Rs. {subTotal}</p>
                    </div>
                    <div className='flex justify-center text-start pb-5'>
                        <p className='font-semibold text-start pr-5'>Total</p>
                        <p className=' pl-7 text-[#b88e2f] font-bold'>Rs.{subTotal}</p>
                    </div>
                    <div className='flex justify-center pt-5 pb-16'>
                    <button className='py-3 px-14 border border-solid border-[#000] font-semibold rounded-lg'>
                    Check Out
                </button>
                </div>
                </div>
             </div>
        </div>
        <div className='flex w-full mt-10 bg-[#f9f1e7] justify-center items-center py-20 px-10'>
            <div className='flex w-1/4'>
                <img src={Trophy} alt='customer-supprt_img' />
                <div className='flex flex-col pl-2'>
                    <p className='font-semibold text-[18px]'>High Quality</p>
                    <p className='text-slate-500'>Crafted from top materials</p>
                </div>
            </div>
            <div className='flex w-1/4'>
                <img src={Gaurentee} alt='customer-supprt_img' />
                <div className='flex flex-col pl-2'>
                    <p className='font-semibold text-[18px]'>Warreny Protection</p>
                    <p className='text-slate-500'>Over 2 Years</p>
                </div>
            </div>
            <div className='flex w-1/4'>
                <img src={Shipping} alt='customer-supprt_img' />
                <div className='flex flex-col pl-2'>
                    <p className='font-semibold text-[18px]'>Free Shipping</p>
                    <p className='text-slate-500'>Order over 150$</p>
                </div>
            </div>
            <div className='flex w-1/4'>
                <img src={CustomerSupport} alt='customer-supprt_img' />
                <div className='flex flex-col pl-2'>
                    <p className='font-semibold text-[18px]'>24/7 Support</p>
                    <p className='text-slate-500'>Dedicated Support</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddtoCart;