import React, { useState } from 'react';
import { TfiMenu } from 'react-icons/tfi';
import { RxCross1 } from 'react-icons/rx';
import { IoSearch } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import { NavLink, useNavigate } from 'react-router-dom';
import { navBarData } from '../../Data/HomePageData';

function Navbar() {
  const [humBurger, setHumburger] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleMenuClick() {
    setHumburger(!humBurger);
    if (!humBurger) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }

  return (
    <header className='bg-white sticky top-0 w-full z-50 text-black border-b border-zinc-200'>
      <div className='flex md:justify-between items-center px-4 gap-16 border-b border-gray-300'>

        {/* Menu Button */}

        <div className='flex items-center space-x-4'>
          <button className='text-2xl text-gray-900' onClick={handleMenuClick}>
            {humBurger ? <RxCross1 /> : <TfiMenu />}
          </button>
          {!humBurger && (
            <button onClick={handleMenuClick} className='text-gray-500 text-xl mt-1'>
              <IoSearch />
            </button>
          )}
        </div>

        <div className='cursor-pointer'>
          <img src='/bbcicon1.png' alt='Logo' className='h-16' />
        </div>

        {/* Desktop login Buttons */}

        <div className='hidden md:flex items-center space-x-4'>
          <button
            className='bg-black text-white px-4 py-2 font-semibold hover:bg-gray-700'
            onClick={() => navigate('/register')}
          >
            Register
          </button>

          <button className='text-black px-4 py-2 font-semibold hover:bg-gray-700 hover:text-white'>
            Sign In
          </button>
        </div>
      </div>

      {/* SideBar meanu section*/}

      <div
        className={`fixed top-[4rem] left-0 w-full md:w-[320px] h-screen bg-white text-black flex flex-col items-center transform transition-transform shadow-lg overflow-y-auto z-50 ${
          humBurger ? 'translate-x-0' : '-translate-x-full'
        }`}
      >

        <div className='flex my-4 px-2 w-full'>
          <input
            type='text'
            placeholder='Search news, topics and more'
            className='w-full font-semibold px-2 py-2 border-t outline-none border-b border-l border-black'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className=' bg-black text-white px-4 py-3'>
            <IoSearch />
          </button>
        </div>

        {/* Side bar menu */}

        <div className='flex gap-2 mb-4 md:hidden'>
          <button
            className='bg-black text-white px-3 py-2 font-semibold hover:bg-gray-700 w-full'
            onClick={() => navigate('/register')}
          >
            Register
          </button>
          <button className='text-black hover:text-white px-3 py-2 font-semibold hover:bg-gray-500 w-full'>
            Sign In
          </button>
        </div>

        <ul className='space-y-4 text-lg font-semibold w-full'>
          {navBarData.map((item) => (
            <div key={item.text}  className='flex justify-between items-center px-4 border-b border-zinc-200'>
              <NavLink
                to={item.url}
                onClick={handleMenuClick}
              >
                <li className='flex justify-between items-center text-zinc-700 transition pb-2 '>
                  {item.text}
                </li>
              </NavLink>
              <IoIosArrowDown className='text-gray-500' />
            </div>
          ))}
        </ul>
      </div>

      {/* NavBar */}

      <div className='hidden md:block border-b border-gray-300'>
        <ul className='flex items-center justify-center space-x-6 text-sm font-semibold'>
          {navBarData.map((item) => (
            <NavLink key={item.text} to={item.url} 
            className={({ isActive }) =>
              isActive ? "border-b-3 py-3" : "py-3"
            }
            >
              <li className='flex items-center space-x-2'>
                {item.text}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
