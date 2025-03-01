import React from 'react';
import { moreArticleData } from '../../../Data/HomePageData';
import { FaChevronRight } from 'react-icons/fa';

function MoreArticle() {
  return (
    <>
      <div className='px-4 xl:px-30'>
        <div className='flex'>
          <button className='text-root font-semibold'>
            {moreArticleData[0].tag}
          </button>
          <FaChevronRight className='text-xl mt-[7px] text-stone-800' />
        </div>
        <div className='grid mt-2 mb-1 md:grid-cols-3 lg:grid-cols-5'>
          {moreArticleData.map((item, index) => (
            <div className='space-x-4 border-b-1 md:border-none border-zinc-300' key={index}>
              <h2 className='font-semibold text-lg leading-5 text-zinc-900 hover:underline decration-1 pt-4'>
                {item.title}
              </h2>
              <div className='flex space-x-2 my-3 text-zinc-900 text-xs'>
                <span>{item.last_updated}</span>
                <div className='h-3 w-[1px] mt-1 bg-black'></div>
                <span>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MoreArticle;
