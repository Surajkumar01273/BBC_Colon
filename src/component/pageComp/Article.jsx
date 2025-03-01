import React from 'react';
import { Link } from 'react-router-dom';
import Hr from '../pageComp/Hr';
import { LuChevronRight } from 'react-icons/lu';

function Article({ articleData, text }) {
  return (
    <div>
      <div className='mt-6'>
        <Hr w='border-[1.5px] text-zinc-700' />
        <Link to=''>
          <span className='flex items-center pt-3 pb-1'>
            <h2 className='text-md lg:text-lg font-semibold'>{text}</h2>
            <LuChevronRight className='text-3xl' />
          </span>
        </Link>
      </div>
      {articleData.map((data, index) => (
        <div key={index} className=''>
          <Link to={`${data.link}`}>
            <div>
              <img src={data.image} alt='' />
              <h2 className='text-lg font-semibold pt-4 md:pt-0 leading-5 hover:underline decoration-black'>
                {data.title}
              </h2>
              <p className='pt-3 leading-5 pb-3'>{data.description}</p>
              <span className='flex items-center space-x-3 text-xs mb-4 pb-4 border-b-1 border-gray-300'>
                <p className='border-r pr-2 border-zinc-500'>
                  {data.last_updated}
                </p>
                <p>{data.category}</p>
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Article;
