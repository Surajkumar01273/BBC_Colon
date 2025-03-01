import React from 'react';
import { history, science } from '../../../Data/HomePageData';
import Hr from '../../pageComp/Hr';
import History from '../HistoryComp/History';
import HistoryText from '../HistoryComp/HistoryText';
import { FaChevronRight } from "react-icons/fa";

function Mainhistory() {
  return (
    <>
      <div className='xl:px-30 py-4'>
        <div className='pt-8 px-3 xl:px-0 '>
          <Hr />
        </div>
        {history.map((section, index) => (
          <div key={index}>
             <h2 className=' flex items-center pt-2 pb-6 text-xl font-bold px-3 xl:px-0'>
              <span> {section.section} </span>
              <span className='pt-2 ml-1'> <FaChevronRight /> </span>
            </h2>
          </div>
        ))}

        <div className='flex flex-col lg:flex-row lg:items-center lg:space-x-4 pb-6'>
          <div className='lg:flex-2 px-0'>
            <History image={history} className='w-full' />
          </div>

          <div className='flex-1 px-3 xl:px-0 '>
            <HistoryText content={history} className='w-full' />
          </div>
        </div>
      </div>

      {/* reuse components */}

      <div className='xl:px-30 py-4'>
        <div className='pt-8 px-3 xl:px-0'>
          <Hr />
        </div>
        {science.map((section, index) => (
          <div key={index}>
            <h2 className=' flex items-center pt-2 pb-6 text-xl font-bold px-3 xl:px-0'>
              <span> {section.section} </span>
              <span className='pt-1 ml-2'> <FaChevronRight /> </span>
            </h2>
          </div>
        ))}

        <div className='flex flex-col lg:flex-row lg:items-center  pb-6'>
          <div className='lg:flex-2 lg:order-2'>
            <History image={science} className='w-full' />
          </div>
          <div className='flex-1 px-3 lg:order-1'>
            <HistoryText content={science} className='w-full' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainhistory;
