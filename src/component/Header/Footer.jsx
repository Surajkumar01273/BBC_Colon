import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import {footerData} from '../../Data/HomePageData'


function Footer() {
  return (
    <div className='z-[100]'>
      <div className='mt-10 lg:mt-30  mb-20 border-t px-4 xl:px-30'>
        <div className={`flex items-center h-16  cursor-pointer`}>
          <img src='/bbcicon1.png' alt='Logo' className='h-24 w-auto' />
        </div>
        <div>
          <ul className='flex flex-wrap space-x-4 font-semibold text-zinc-900'>
            <NavLink to='/'>
              <li>Home</li>
            </NavLink>
            <NavLink to='/news'>
              <li>News</li>
            </NavLink>

            <NavLink to='/sports'>
              <li>Sports</li>
            </NavLink>

            <NavLink to='/business'>
              <li>Business</li>
            </NavLink>

            <NavLink to='/innovation'>
              <li>Innovation</li>
            </NavLink>

            <NavLink to='/culture'>
              <li>Culture</li>
            </NavLink>

            <NavLink to='/arts'>
              <li>Arts</li>
            </NavLink>

            <NavLink to='/travel'>
              <li>Travel</li>
            </NavLink>

            <NavLink to='/earth'>
              <li>Earth</li>
            </NavLink>

            <NavLink to='/video'>
              <li>Video</li>
            </NavLink>

            <NavLink to='/live'>
              <li>Live</li>
            </NavLink>
          </ul>
        </div>

        <div className='my-6'>
          <hr className='text-gray-300' />
        </div>


        <div className='flex flex-wrap items-center space-x-8'>
          <p className='text-root font-semibold'>Follow BBC on:</p>
          <ul className='flex space-x-8 mt-[20px] md:mt-0'>

            <NavLink to='https://x.com/surajku44630981?t=O75R2Br707DJlMHrAetKPg&s=09'>
              <li>
                <FaXTwitter className='text-3xl md:text-xl'/>
              </li>
            </NavLink>

            <NavLink to='https://www.facebook.com/share/15hc2XoyCG/'>
              <li>
                <FaFacebookF className='text-3xl md:text-xl'/>
              </li>
            </NavLink>

            <NavLink to='https://www.instagram.com/suraj_yadav_33330?igsh=M2o5YXVsenk0ZTRn'>
              <li>
                <RiInstagramFill className='text-3xl md:text-xl'/>
              </li>
            </NavLink>

            <NavLink to='https://www.linkedin.com/in/suraj-kumar-8b3a79263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <li>
                <FaLinkedinIn className='text-3xl md:text-xl '/>
              </li>
            </NavLink>

            <NavLink to='https://github.com/Surajkumar01273'>
              <li>
                <FaGithub className='text-3xl md:text-xl'/>
              </li>
            </NavLink>
          </ul>
        </div>
        <ul className='flex flex-wrap space-x-4 text-xs pt-4 mt-[20px] md:mt-0'>
          {
            footerData.map((data, index)=>(
              <li key={index} className='py-2'>
                    <NavLink to={data.url}>
                      {data.title}
                    </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Footer;
