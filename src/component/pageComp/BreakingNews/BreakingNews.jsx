import React from 'react';
import LeftsideBar from '../../pageComp/BreakingNews/LeftsideBar';
import Mid from '../../pageComp/BreakingNews/Mid';
import RightsideBar from '../../pageComp/BreakingNews/RightsideBar';
import {rightsideData, leftSideData, midData} from '../../../Data/HomePageData'

function BreakingNews() {
  return (
    <>
      <div className='grid md:grid-cols-3 md:gap-4 md:mx-4 mt-12 lg:grid-cols-4 lg:px-1 xl:mx-30'>
        <div className='order-2 md:order-1 md:col-span-1 lg:col-span-1'>
          <LeftsideBar leftSideData={leftSideData} />
        </div>

      
        <div className='order-1 md:order-2 md:col-span-2 lg:col-span-2'>
          <Mid midData={midData}/>
        </div>

       
        <div className='order-3 md:order-3 md:col-span-3 lg:col-span-1 md:row-span-2'>
          <RightsideBar rightsideData={rightsideData}/>
        </div>
      </div>
    </>
  );
}

export default BreakingNews;

