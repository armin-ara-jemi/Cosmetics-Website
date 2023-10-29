import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai';
import Link from "next/link";
import { useAppSelector } from '@/redux/hooks';

const NavBar = () => {

//const cartCount = useAppSelector((state) => state.cartReducer.length);

  return (
    <div className='bg-white py-4 sticky top-0 z-10'>
      <div className='container flex justify-between items-center'>
      <GiHamburgerMenu className="sm:hidden text-[26px]" />
      <Link href="/" className='text-4xl font-medium hover:text-accent'>LOGO</Link>
      <ul className='gap-6 hidden sm:flex'>
        <Link href="/" className='navLink'>HOME</Link>
      </ul>
      <div className='flex gap-6 text-[26px]'>
        <div className='relative cursor-pointer'>
        <AiOutlineShoppingCart/>
        <div className='absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center'>0</div>
        </div>
        <AiOutlineSearch/>
      </div>
      </div>

    </div>
  )
}

export default NavBar
