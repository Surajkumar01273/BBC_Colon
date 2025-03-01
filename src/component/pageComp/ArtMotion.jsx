import React from 'react';
import { artmotion } from '../../Data/HomePageData';
import Hr from './Hr';
import { FaChevronRight } from "react-icons/fa";

function ArtMotion({videoData, className, flex1}) {
  return (
    <div className=' xl:px-30 py-6'>
      <Hr artstyle={'bg-white mx-4 xl:mx-0'} />
      {videoData.map((item, index) => (
        <div key={index} className=''>
          <div>
            <h2 className='flex items-center text-white font-semibold text-lg mb-4 px-4 xl:px-0 '>
              <span className='pt-1'>{item.section}</span>
              <span className='pt-1 ml-2'><FaChevronRight /></span>
            </h2>
          </div>

          <div className='flex flex-col mx-4 xl:items-center lg:flex-row lg:space-x-2 bg-black mt-1'>
            <div className={`${className}`}>
              <img className={`${className}`} src={item.image_url} alt='' />
            </div>
            <div className={`pt-4 pb-8 md:pb-0 xl:pr-3 ${flex1}`}>
              <h2 className='font-semibold leading-7 text-white text-2xl hover:underline decoration-2 decoration-amber-50'>
                {item.title}
              </h2>
              <p className='text-white text-sm leading-5 py-3'>
                {item.description}
              </p>
              <button className='text-white font font-semibold border-2 hover:bg-zinc-100 hover:text-zinc-800 border-white px-4 py-1'>
                See more
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArtMotion;
