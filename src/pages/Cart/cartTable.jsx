import React, { useMemo, useState } from 'react';
import Delete from '../../assets/images/delete.png'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delete_product } from '../../redux/reducer';
function CartTable() {
const dispatch = useDispatch();
    // let [addtoCart, setAddtoCart] = useState([]);

   let addtoCart = useSelector(state=>state.products.addtoCart);

    const handleDelete = (list,index) =>{
        let value = addtoCart?.filter(data=>addtoCart.indexOf(data)!==index);
        dispatch(delete_product(value))
    }


  return (
    
                <table className='w-full table-auto border-spacing-3'>
                    <thead className='bg-[#f9f1e7] text-center'>
                        <tr >
                            <td className='py-7'>
                                
                            </td>
                            <td>
                                Product
                            </td>
                            <td>
                                Price
                            </td>
                            <td>
                                Quantity
                            </td>
                            <td>
                                Sub Total
                            </td>
                            <td>
                            
                            </td>
                        </tr>
                    </thead>
                    <tbody className=' text-center'>
                        {addtoCart?.length>0 ? 
                        addtoCart?.map((data, index)=>(
                        <tr key={index}>
                            <td className='py-5'>
                                <img src={data?.image} alt='img' className='w-[50px] h-[50px]'/>
                            </td>
                            <td className='text-slate-500'>
                                {data?.title?.slice(0,10)}
                            </td>
                            <td className='text-slate-500'>
                            Rs. {data?.price}
                            </td>
                            <td className='text-center'>
                                <p className='mx-auto rounded-sm w-[25px] border border-solid border-[#000]'>1</p>
                            </td>
                            <td>
                             Rs. {data?.price}
                            </td>
                            <td className='text-center '>
                                <img src={Delete} alt='delete_img' onClick={()=>handleDelete(data,index)} className=' w-[50%] hover:cursor-pointer' />
                            </td>
                        </tr>
                        ))
                        :
                        <tr><td className='pt-10' colSpan={6}><p className='font-semibold'>Your Cart is Empty</p></td></tr>
                        }
                    </tbody>
                </table>
           
  )
}

export default CartTable