import React from 'react'
import LeftsideBar from '../component/pageComp/BreakingNews/LeftsideBar'
import Mid from '../component/pageComp/BreakingNews/Mid'
import RightsideBar from '../component/pageComp/BreakingNews/RightsideBar'
import Mainhistory from '../component/pageComp/HistoryComp/Mainhistory'
import Editors from '../component/pageComp/Editors'
import Hr from '../component/pageComp/Hr'
import {cultureLeftsideData, cultureInnovationMid, cultureInnovationRight, audioData} from '../Data/HomePageData'

function Innovation() {
  return (
    <div>
      <div className='grid md:grid-cols-3 md:gap-4 md:mx-4 mt-12 lg:grid-cols-4 lg:px-1 xl:mx-30'>
        <div className='order-2 md:order-1 md:col-span-1 lg:col-span-1'>
          <LeftsideBar leftSideData={cultureLeftsideData} />
        </div>

        <div className='order-1 md:order-2 md:col-span-2 lg:col-span-2'>
          <Mid midData={cultureInnovationMid} />
        </div>

        <div className='order-3 md:order-3 md:col-span-3 lg:col-span-1 md:row-span-2'>
          <RightsideBar rightsideData={cultureInnovationRight} />
        </div>
      </div>

      <Mainhistory />

      <div className='pt-4'>
        <div className='xl:px-30 mx-4'>
          <Hr className='bg-black' />
        </div>
        <Editors
          video={audioData}
          classNames='text-black'
          h2='text-xs'
          p='font-semibold text-sm leading-6 hover:underline decoration-2'
          border='border-none'
        />
      </div>

    </div>
  )
}

export default Innovation
