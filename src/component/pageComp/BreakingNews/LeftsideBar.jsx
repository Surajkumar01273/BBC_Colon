import React from 'react';

function LeftsideBar({leftSideData, className}) {
  return (
    <div className='w-full'>
      {leftSideData.map((data, index) => (
        <div
          key={index}
          className={`grid grid-cols-2 md:grid-cols-1 gap-3 mx-4 md:mx-0 border-b-1 border-gray-300 ${className}
            ${index === 0 ? 'mb-4' : ''} ${index===1 ? 'md:border-none' : ''}`
          }
        >
          <img
            className='object-cover'
            src={data.image}
            alt=''
          />
          <div className=''>
            <h2 className='font-semibold text-lg text-black leading-5 hover:underline decoration-black decoration-2'>
              {data.title}
            </h2>
            <p className='text-sm text-stone-900 pt-2 hidden md:block'>
              {data.description}
            </p>
            <div className={`text-xs text-gray-800 flex items-center my-2`}>
              <p className='border-r-1 pr-1'>{data.time}</p>
              <p className='pl-1'>{data.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LeftsideBar;
