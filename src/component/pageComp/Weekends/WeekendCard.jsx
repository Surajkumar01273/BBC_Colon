import React from 'react';
import { NavLink } from 'react-router-dom';

function WeekendCard({cultureOscars, text}) {
  return (
    <div>
      <div className='xl:mx-30 px-4 xl:px-0'>
        <div>
          <h2 className='font-semibold text-lg md:text-xl'>
            {text}
          </h2>
        </div>

        <article className='flex flex-col mt-2 md:flex-row md:space-x-4'>
          {cultureOscars.map((item, index) => (
            <div key={index} className='w-full'>
              <NavLink to={`item.sectionLink`} key={index} href={item.link}>
                <img
                  src={item.image}
                  alt='pic'
                  className='w-full  object-cover'
                />
                <div className='mt-2'>
                  <h2 className='text-xl font-bold leading-6 hover:underline decoration-2 mb-2'>
                    {item.title}
                  </h2>
                  <p className='text-stone-900 text-lg leading-6 mb-4'>
                    {item.description}
                  </p>
                  <div
                    className={`text-xs text-gray-500 flex md:space-x-4 border-b border-gray-300 py-3 ${
                      index === 1 ? '' : ''
                    }`}
                  >
                    <span className='border-r-1 pr-2'>{item.last_updated}</span>
                    <span className='font-semibold pl-2'>{item.category}</span>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </article>
      </div>
    </div>
  );
}

export default WeekendCard;
