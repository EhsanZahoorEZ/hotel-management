'use client';

import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useSession } from 'next-auth/react';
import ThemeContext from '@/context/themeContext';
import Image from 'next/image';
const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const { data: session } = useSession();
  // 
  const [rotate, setRotate] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotate(prevRotate => !prevRotate);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <header className='py-8 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between'>
      <div className='flex items-center w-full md:2/3'>
        <Link href='/' className='text-4xl font-bold text-center font-serif text-tertiary-dark  '>
          <span className=''>EZ Hotelzz</span>
          <br />
          <Link href='/'>
             <p className="font-black font-serif text-2xl ">
              <span className='font-normal animate-flash'>Book Your Perfect Room in (KPK)</span> <br /> StaySorted</p></Link>
        </Link>

        <ul className='flex items-center ml-6 '>
          <li className='flex items-center'>
            {session?.user ? (
              <Link href={`/users/${session.user.id}`}>
                {session.user.image ? (
                  <div className={` border-gray-200  w-10 h-10 rounded-full  border-2 border-x-lime-700  overflow-hidden ${rotate ? 'rotate-animation' : ''}`}>
                    <Image
                      src={session.user.image}
                      alt={session.user.name!}
                      width={40}
                      height={40}
                      className='scale-animation img'
                    />
                  </div>
                ) : (
                  <FaUserCircle className='cursor-pointer w-8 h-8 rounded-full overflow-hidden  border-4 border-x-lime-700' />
                )}
              </Link>
            ) : (
              <Link href='/auth'>
                <FaUserCircle className='cursor-pointe rounded-full  w-8 h-8 overflow-hidden  border-4 border-x-lime-700' />
              </Link>
            )}
          </li>
          <li className='ml-2'>
            {darkTheme ? (
              <MdOutlineLightMode
                className='cursor-pointer'
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem('hotel-theme');
                }}
              />
            ) : (
              <MdDarkMode
                className='cursor-pointer'
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem('hotel-theme', 'true');
                }}
              />
            )}
          </li>
        </ul>
      </div>
      {/*  */}
      <ul className='flex items-center justify-between w-50 md:w-2/4 mt-4 '>
        <li className='hover:-translate-y-2 duration-500  transition-all'>
          <Link className='font-bold border   rounded-md text-tertiary-dark px-4 ' href='/'>Home</Link>
        </li>

        <li className='hover:-translate-y-2 duration-500 transition-all '>
          <Link className='font-bold border   rounded-md text-tertiary-dark px-4' href='/About'>About</Link>

        </li>


        <li className='hover:-translate-y-2 duration-500 transition-all'>
          <Link className='font-bold border   rounded-md text-tertiary-dark px-3  ' href='/rooms'>Rooms</Link>
        </li>
        <li className='hover:-translate-y-2 duration-500 transition-all '>
          <Link className='font-bold border   rounded-md text-tertiary-dark px-3 ' href='/Menu'>Menu</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
