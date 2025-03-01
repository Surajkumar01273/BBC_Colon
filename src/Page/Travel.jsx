import React from 'react';
import Hr from '../component/pageComp/Hr';
import LeftsideBar from '../component/pageComp/BreakingNews/LeftsideBar';
import Mid from '../component/pageComp/BreakingNews/Mid';
import RightsideBar from '../component/pageComp/BreakingNews/RightsideBar';
import Editors from '../component/pageComp/Editors';
import Article from '../component/pageComp/Article';
import {
  cultureLeftSide,
  cultreMid,
  cultureRight,
  editorData,
  heroData,
  Skype,
  ukImportProductNews,
  HomeBusinessData,
  homeTechData,
  homeUkraineNewsData,
  sportsNews,
  audioData
} from '../Data/HomePageData';

function Travel() {
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

      {/* Section 2 */}

      <div className='bg-zinc-950 pt-10'>
        <Editors
          video={editorData}
          classNames='text-white'
          h2='font-bold text-lg leading-6 hover:underline decoration-2'
          p='text-sm pt-3'
          hide='hidden'
        />
      </div>

      {/* Section 3 */}

      <div className='grid md:grid-cols-3 md:gap-4 md:mx-4 mt-12 lg:grid-cols-4 lg:px-1 xl:mx-30'>
        <div className='order-2 md:order-1 md:col-span-1 lg:col-span-1'>
          <LeftsideBar leftSideData={heroData} />
        </div>

        <div className='order-1 md:order-2 md:col-span-2 lg:col-span-2'>
          <Mid midData={Skype} />
        </div>

        <div className='order-3 md:order-3 md:col-span-3 lg:col-span-1 md:row-span-2'>
          <RightsideBar rightsideData={ukImportProductNews} />
        </div>
      </div>

      {/* Section 4 */}

      <div className='grid md:grid-cols-2 lg:grid-cols-4 px-4 gap-5 xl:px-30'>
        <div className=''>
          <Article articleData={HomeBusinessData} text='US & Canada news' />
        </div>
        <div className=''>
          <Article articleData={homeTechData} text='Israel-Gaza war' />
        </div>
        <div className=''>
          <Article articleData={homeUkraineNewsData} text='War in Ukraine' />
        </div>
        <div className=''>
          <Article articleData={sportsNews} text='Sport' />
        </div>
      </div>

      {/* Section 5 */}

      <div>
        <Editors
          video={audioData}
          classNames='text-black'
          h2='text-xs'
          p='font-semibold text-sm leading-6 hover:underline decoration-2'
          border='border-none'
        />
      </div>
    </>
  );
}

export default Travel;
