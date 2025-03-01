import React from 'react';

function Mid({midData}) {
  return (
    <div>
      <div className='bg-white mb-10'>
        {midData.map((data, index) => (
          <div key={index} className=''>
            <img
              className='w-full object-cover'
              src={data.image}
              alt=''
            />
            <div className='px-4 md:px-0 lg:px-0'>
              <h1 className='text-2xl font-semibold leading-7 text-black mt-2 hover:underline decoration-black decoration-2'>
                {data.title}
              </h1>
              <p className='text-stone-900 mt-2 text-sm'>{data.description}</p>
              <div className='text-xs text-gray-700 flex space-x-2 mt-2'>
                <p className='pr-1 border-r'>{data.time}</p>
                <p className='px-y'>{data.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mid;
