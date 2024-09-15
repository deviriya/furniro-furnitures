import React from 'react';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from 'react-hot-toast';
function Footer() {
    const schema = yup.object().shape({
        email: yup.string().email()
        .required()
        // .test('email',(value)=>{
        //     console.log(value)
        // }),
      });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
      });

      console.log(errors);

      const onSubmit = (data) =>{
        let regex = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

        if(!regex.test(data?.email)){
            reset();
            return toast.error('Invalid Email');
        }
        else{
            reset();
            return toast.success('Email Subscribed Successfully');
        }
      }
  return (
    <div className='flex container pt-5 py-9 w-[90%]  border-b-2 border-slate-400'>
        <div><Toaster/></div>
        <div className='w-1/3 flex flex-col'>
            <p className='pb-11 font-semibold text-[16px]'>Funiro.</p>
            <p className='text-slate-500'>400 University Drive Suite 200 coral<br />Gabels,<br />FL 33134 US</p>
        </div>
        <div className='w-1/3 flex justify-between flex-wrap'>
           <div className=''>
             <p className='pb-11 text-[14px]  text-slate-500'>Links</p>
             <ul className='flex flex-col gap-9 text-[14px] font-semibold'>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
             </ul>
           </div>
           <div className='flex-wrap'>
             <p className='pb-11 text-[14px]  text-slate-500'>Help</p>
             <ul className='flex flex-col gap-9 text-[14px] font-semibold'>
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
             </ul> 
           </div>
        </div>
        <div className='w-1/3 text-center flex-wrap'>
         <p className='pb-11 text-[14px]  text-slate-500'>News Letter</p>
         <div className='flex justify-center flex-wrap'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' 
                name='email'
                placeholder='Enter your Email Address' 
                className='pr-3 mx-5 text-[12px] border-0 border-b outline-none border-[#000]' 
                {...register('email')}
            />
            <button className='border-0 border-b border-[#000] text-[14px] font-semibold' type='submit'>SUBSCRIBE</button>
            </form>
         </div>
        </div>
    </div>
  )
}

export default Footer