import React from 'react';

function RightsideBar({ rightsideData }) {
  return (
    <div>
      <div className='pt-5 md:pt-0 md:grid md:grid-cols-2 lg:grid-cols-1 w-full'>
        {rightsideData.map((data, index) => (
          <div
            key={index}
            className='flex gap-4 md:block bg-white px-4 md:ml-2 lg:ml-0 md:px-0 lg:px-0'
          >
            <div>
              <img src={data.image} alt='' />
            </div>
            <div className=''>
              <h1 className='text-lg font-semibold leading-tight hover:underline decoration-black decoration-2 text-black'>
                {data.headline}
              </h1>
              <p className='text-sm text-stone-900 pt-2 lg:pt-0'>
                {data.description}
              </p>
              <div
                className={`text-xs text-gray-500 flex my-4 border-b border-gray-300 md:border-none py-2 ${
                  index === 3 ? 'border-none' : ''
                }`}
              >
                <p className='pr-2 border-r'>{data.lastUpdated}</p>
                <p className='ml-2'>{data.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightsideBar;
