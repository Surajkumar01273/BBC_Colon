import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import { FaChevronRight } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";


function Editors({video, classNames, h2, p, border, hide}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  function saveHandler(){
    alert('Post Save')
  }

  return (
    <div className='px-4 xl:px-30 py-6'>
      {/* <Hr moreWatch={''} /> */}

      <div className='flex justify-between mb-4'>
          {
            video.map((section, index)=>(
              <button key={index} className={`font-semibold text-lg hover:bg-none ${classNames}`}>
                <div className='flex items-center'>
                  <span>{section.tag}</span>
                  <span className='pt- ml-1'> {index===0 ? <FaChevronRight /> : ""} </span>
                </div>
              </button>
            ))
          }
        <div>
          <button
            ref={prevRef}
            className={`text-lg ${classNames} px-3 py-1  ${
              isBeginning ? 'opacity-50 cursor-not-allowed ' : 'cursor-pointer'
            }`}
            disabled={isBeginning}
          >
            <SlArrowLeft />
          </button>

          <button
            ref={nextRef}
            className={`text-lg  px-3 py-1 ${classNames} ${
              isEnd ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
            disabled={isEnd}
          >
            <SlArrowRight />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.1}
        slidesPerGroup={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          768: { slidesPerView: 3.5, slidesPerGroup: 3, spaceBetween: 16 },
          1024: { slidesPerView: 4.5, slidesPerGroup: 3.5, spaceBetween: 16 },
          1280: { slidesPerView: 4.5, slidesPerGroup: 3.5, spaceBetween: 16 },
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
          setActiveIndex(swiper.activeIndex);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
          setActiveIndex(swiper.activeIndex);
        }}
        className='pb-0'
      >
        {video.map((data, index) => (
          <SwiperSlide key={index} className='border-b-1 border-white mb-4'>
            <div className='relative'>
              <img src={data.image} alt='' className='w-full' />
              <div className='bg-black h-10 w-10 absolute text-center p-2 bottom-0'>
                <svg viewBox='0 0 32 32' width='20' height='20' fill='white'>
                  <path d='M29 16 5.8 1v30L29 16z'></path>
                </svg>
              </div>
            </div>
            <div className={`p-2 ${classNames}`}>
              <h2 className={`${h2} `}>
                {data.title}
              </h2>
              <p className={` ${p} `}>{data.description} {data.episode}</p>
              <div className='flex space-x-2 text-xs mt-5'>
                <span onClick={saveHandler} className={`${hide} flex items-center mt-[-7px]`}>
                   <p className={` text-xl p-[3px] border-1 border-gray-400 rounded-full text-center hover:bg-gray-300`} ><CiBookmark /></p>
                   <p className='ml-2 text-xs text-black font-semibold'>Save</p>
                </span>
                <p className={`border-r-1 pr-2 ${border}`}>{data.date} {data.duration}</p>
                <p>{data.category}</p>
              </div>
            </div>
            {(index === activeIndex - 1 || index === activeIndex - 3) && (
              <div className='full absolute from-black'></div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Editors;
