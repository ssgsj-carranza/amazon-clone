import React from 'react'
import {MenuIcon, SearchIcon, ShoppingCartIcon} from '@heroicons/react/outline';
import {signIn, signOut, useSession} from 'next-auth/client';
import {useRouter} from 'next/router';
import { selectItems } from '../../slices/basketSlice';
import {useSelector} from 'react-redux';
import Link from 'next/link';


function Header() {
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);
    
    return (
        <header className='sticky top-0 z-50'>
            {/* top navbar */}
            <div className='grid grid-cols-3 shadow-md p-5 md:px-10 bg-gradient-to-r from-white to-gray-300'>
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                    {/* <Image onClick={() => router.push('/')}
                            src='https://links.papareact.com/f90' 
                            width={150} 
                            height={40} 
                            objectFit='contain' 
                            className='cursor-pointer'/> */}
                    <Link href={"/"}>
                        <h1 className='font-bold cursor-pointer object-contain text-black px-4 py-2 animate-bounce hover:animate-none text-xl'>Click n' Shop</h1>
                    </Link>
                </div>
                {/* search */}
                <div className='hidden sm:flex items-center md:border-2 rounded-full py-2 md:shadow-sm cursor-pointer bg-gradient-to-br from-gray-200 to-white'>
                    <input  
                           onChange={(e) => setSearchInput(e.target.value)} 
                           className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' 
                           type="text" 
                           placeholder="Start your Search"
                    />
                    <Link href={'/search'}>
                        <button>
                            <SearchIcon className='hidden md:inline-flex h-8 bg-gray-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
                        </button>
                    </Link>
                </div>
                {/* right components of navbar */}
                <div className='text-white flex items-center justify-end text-xs space-x-6 mx-6 whitespace-nowrap'>
                    <div onClick={!session ? signIn : signOut} className='link hidden lg:inline'>
                        <p className='text-black'>{session ? `Hello, ${session.user.name}` : 'Sign In'}</p>
                        <p className='font-extrabold md:text-sm text-black'>Account & Lists</p>
                    </div>
                    <div onClick={() => router.push('/orders')} className='hidden lg:inline cursor-pointer link text-black'>
                        <p>Returns</p>
                        <p className='font-extrabold md:text-sm'>& Orders</p>
                    </div>
                    <div onClick={() => router.push('/checkout')} className='relative link flex items-center'>
                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-100 text-center rounded-full text-black font-bold'>{items.length}</span>
                        <ShoppingCartIcon className='h-10' />
                        <p className='hidden md:inline font-extrabold md:text-sm mt-2 text-black'>Basket</p>
                    </div>
                </div>
            </div>
            {/* bottom navbar */}
            <div className='flex items-center space-x-3 p-2 pl-6 bg-gradient-to-r from-gray-300 to-white text-black text-sm'>
                <p className='link flex items-center'>
                    <MenuIcon className='h-6 mr-1' />
                    All</p>
                    <p className='link'>Video</p>               
                    <p className='link'>Business</p>               
                    <p className='link'>Today's Deals</p>
                    <p className='link hidden lg:inline-flex'>Electronics</p>               
                    <p className='link hidden lg:inline-flex'>Food & Grocery</p>                             
                    <p className='link hidden lg:inline-flex'>Buy Again</p>               
                    <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>               
                    <p className='link hidden lg:inline-flex'>Health & Personal Care</p>               
            </div>
        </header>
    )
}

export default Header
