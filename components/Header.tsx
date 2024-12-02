"use client";

import { Grid, Grid2x2, Heart, Search, ShoppingBasketIcon, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, {FormEvent} from 'react'

function Header() {

    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const input = e.currentTarget.input.value;
        router.push(`/search/q=${input}`);
    }
    
  return (
    <header className='flex flex-col md:flex-row bg-buildMyRig px-10 py-7 space-x-5 items-center'>
        <Link href="/" className='mb-5 md:mb-0'>
        <h1 className="font-extrabold text-4xl">
            BuildMyRig
        </h1>
        </Link>
        <form onSubmit={handleSubmit} className='flex items-center bg-white rounded-full w-full'>
            <input type="text" name='input' placeholder='Search for parts...' className='flex-1 px-4 rounded-l-full outline-none placeholder:text-sm'/>
            <button type='submit'>
                <Search className='rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer'/>
            </button>
        </form>

        <div className='flex space-x-5 mt-5 md:mt-0 items-center'>

            <Link href="/" className='hidden xl:flex text-white font-bold items-center space-x-2 text-sm'>
                <Grid size={20}/>
                <p className='text-sm'>Components</p>
            </Link>

            <Link href="/" className='hidden xl:flex text-white font-bold items-center space-x-2 text-sm'>
                <Grid2x2 size={20} />
                <p className='text-sm'>Services</p>
            </Link>

            <Link href="/" className='flex text-white font-bold items-center space-x-2'>
                <Heart size={20} />
                <div>
                    <p className='text-sm font-extralight'>Reorder</p>
                    <p className='text-xs'>items</p>
                </div>
            </Link>

            <Link href="/" className='flex text-white font-bold items-center space-x-2 text-sm'>
                <User size={20} />
                <div>
                    <p className='text-sm font-extralight'>Sign in</p>
                    <p className='text-xs'>Account</p>
                </div>
            </Link>

            <Link href="/basket" className='flex text-white font-bold items-center space-x-2 text-sm'>
                <ShoppingCart size={20} />
                <div>
                    <p className='text-xs font-extralight'>0 items</p>
                    <p>$0.00</p>
                </div>
            </Link>

        </div>
    </header>
  )
}

export default Header