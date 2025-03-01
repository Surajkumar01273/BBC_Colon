import React from 'react';
import LeftsideBar from '../component/pageComp/BreakingNews/LeftsideBar';
import Mid from '../component/pageComp/BreakingNews/Mid';
import RightsideBar from '../component/pageComp/BreakingNews/RightsideBar';
import MoreArticle from '../component/pageComp/MoreNews/MoreArticle';
import ArtMotion from '../component/pageComp/ArtMotion';
import Hr from '../component/pageComp/Hr';
import WeekendCard from '../component/pageComp/Weekends/WeekendCard';
import Article from '../component/pageComp/Article'
import Editors from '../component/pageComp/Editors'

import {
  cultureLeftSide,
  cultreMid,
  cultureRight,
  cultureInfluential,
  cultureOscars,
  cultureEdtor,
  Islands,
  asia,
  culture1,
  editorData
} from '../Data/HomePageData';




function Culture() {
  return (
    <>
      <div>
        <div className='px-4 xl:px-30 pt-4 text-4xl font-semibold'>
          <h1 className='text-4xl font-semibold pb-2'>Culture</h1>
          <Hr />
        </div>
        <div className='grid md:grid-cols-3 md:gap-4 md:mx-4 mt-12 lg:grid-cols-4 lg:px-1 xl:mx-30'>
          <div className='order-2 md:order-1 md:col-span-1 lg:col-span-1'>
            <LeftsideBar leftSideData={cultureLeftSide} />
          </div>

          <div className='order-1 md:order-2 md:col-span-2 lg:col-span-2'>
            <Mid midData={cultreMid} />
          </div>

          <div className='order-3 md:order-3 md:col-span-3 md:justify-between lg:col-span-1 md:row-span-2'>
            <RightsideBar rightsideData={cultureRight} />
          </div>
        </div>
      </div>

      <div>
        <MoreArticle />
      </div>

      <div className='pt-4'>
        <div>
          <Hr breaknewsStyle={'xl:mx-30 mx-4'} />
        </div>
        <ArtMotion
          videoData={cultureInfluential}
          className='w-full lg:flex-2'
          flex1='lg:flex-1'
          bg='bg-white'
          text='text-zinc-700'
        />
      </div>

      <div>
        <Hr breaknewsStyle={'xl:mx-30 mx-4'} />
        <WeekendCard cultureOscars={cultureOscars} text={'Oscars 2025'}/>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 mx-4 gap-4 xl:px-30'>
        <div className=''>
          <Article articleData={cultureEdtor} />
        </div>
        <div className=''>
          <Article articleData={culture1} />
        </div>
        <div className=''>
          <Article articleData={Islands}  />
        </div>
        <div className=''>
          <Article articleData={asia}  />
        </div>
      </div>
      
      <div className='bg-zinc-950 pt-10'>
        <Hr className='bg-white xl:mx-30 mx-4' />
        <Editors
          video={editorData}
          classNames='text-white'
          h2='font-bold text-lg leading-6 hover:underline decoration-2'
          p='text-sm pt-3'
          hide='hidden'
        />
      </div>
    </>
  );
}

export default Culture;
