import React from 'react';
import BreakingNews from '../../component/pageComp/BreakingNews/BreakingNews';
import Weekend from '../../component/pageComp/Weekends/Weekend';
import Hr from '../../component/pageComp/Hr';
import MoreArticle from '../../component/pageComp/MoreNews/MoreArticle';
import ArtMotion from '../../component/pageComp/ArtMotion';
import Editors from '../../component/pageComp/Editors';
import Mainhistory from '../../component/pageComp/HistoryComp/Mainhistory';
import Article from '../../component/pageComp/Article';
import {
  editorData,
  audioData,
  bbcData,
  artmotion,
  videoData,
  HomeBusinessData,
  homeTechData,
  homeUkraineNewsData,
  sportsNews,
  businessNews,
  techData,
  eartEnvirmentData
} from '../../Data/HomePageData';


function AllNewsArticle() {
  return (
    <div className=''>
      <BreakingNews />
      <Hr breaknewsStyle={'xl:mx-30 mx-4'} />
      <Weekend />
      <Hr style1={'mt-8 md:mt-12 mx-4 xl:mx-30 bg-gray-500'} />
      <MoreArticle />
      <div className='bg-zinc-900'>
        <ArtMotion videoData={artmotion} />
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

      {/* Home foren news section */} 

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

      <div className='bg-zinc-900'>
        <ArtMotion videoData={videoData} className='w-full lg:flex-2' flex1='lg:flex-1'/>
      </div>

      {/* Home Business section */} 


      <div className='grid md:grid-cols-2 lg:grid-cols-4 px-4 gap-5 xl:px-30'>
        <div className=''>
          <Article articleData={businessNews} text='Business' />
        </div>
        <div className=''>
          <Article articleData={HomeBusinessData} text='US & Canada news' />
        </div>
        <div className=''>
          <Article articleData={eartEnvirmentData} text='US & Canada news' />
        </div>
        <div className=''>
          <Article articleData={techData} text='US & Canada news' />
        </div>
      </div>

      <div className='bg-zinc-950 pt-10'>
        <Hr className='bg-white xl:mx-30 mx-4' />
        <Editors
          video={bbcData}
          classNames='text-white'
          h2='font-bold text-lg leading-6 hover:underline decoration-2'
          p='text-sm pt-3'
          hide='hidden'
        />
      </div>

      {/* Home Art Travel section */} 

      <div className='grid md:grid-cols-2 lg:grid-cols-4 px-4 gap-5 xl:px-30'>
        <div className=''>
          <Article articleData={eartEnvirmentData} text='US & Canada news' />
        </div>
        <div className=''>
          <Article articleData={techData} text='US & Canada news' />
        </div>
        <div className=''>
          <Article articleData={HomeBusinessData} text='US & Canada news' />
        </div>
        <div className=''>
          <Article articleData={sportsNews} text='US & Canada news' />
        </div>
      </div>
      
    </div>
  );
}

export default AllNewsArticle;
//bg-zinc-900
