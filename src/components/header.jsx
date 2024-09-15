import React from 'react'
import Logo from '../assets/images/logo.png'
import AddtoCart from '../assets/images/icons/Vector.png'
import Heart from '../assets/images/icons/heart.png'
import Search from '../assets/images/icons/search.png'
import Profile from '../assets/images/icons/profile.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header() {
    const addtocart = useSelector(state=>state.addtoCart);

    console.log(addtocart)
    
  return (
    <header className='fixed top-0 w-full z-20 bg-[#fff]'>
        <div className='flex justify-between items-center px-20 py-5 '>
        <div className=''>
            <img src={Logo} alt='Logo' width={100}/>
        </div>
        <div className=''>
            <ul className='flex items-center gap-7 hover:cursor-pointer  text-[14px] font-semibold '>
                <Link to='/'><li>Home</li></Link>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='flex items-center gap-7'>
        <div className=''>
            <img src={Profile} alt='Logo' width={20}/>
        </div>
        <div className=''>
            <img src={Search} alt='Logo' width={20}/>
        </div>
        <div className=''>
            <img src={Heart} alt='Logo' width={20}/>
        </div>
        <div className=''>
            <Link to='/addtocart'>
             <img src={AddtoCart} alt='Logo' width={20}/>
            </Link>
        </div>
        </div>
        </div>
    </header>
  )
}

export default Header