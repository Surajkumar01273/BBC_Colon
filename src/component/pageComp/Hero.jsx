import React from 'react';
import LeftsideBar from './BreakingNews/LeftsideBar';
import Mid from './BreakingNews/Mid';
import RightsideBar from './BreakingNews/RightsideBar';
import Article from './Article';
import Editors from '../pageComp/Editors'
import Hr from './Hr';
import MoreArticle from './MoreNews/MoreNewsCards';
import WeekendCard from './Weekends/WeekendCard';
import ArtMotion from './ArtMotion'
import History from './HistoryComp/History'
import HistoryText from './HistoryComp/HistoryText';
import { FaChevronRight } from "react-icons/fa";

import {
  heroData,
  ukImportProductNews,
  Skype,
  malitryNews,
  japansNews,
  Islands,
  asia,
  editorData,
  artmotion,
  history,
  Weekends
} from '../../Data/HomePageData';

function Hero() {
  return (
    <>
      {/* Section 01 */}

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

      {/* Section 02 */}

      <div className='grid md:grid-cols-2 lg:grid-cols-4 mx-4 gap-4 xl:px-30'>
        <div className=''>
          <Article articleData={malitryNews} text='US & Canada news' />
        </div>
        <div className=''>
          <Article articleData={japansNews} text='US & Canada news' />
        </div>
        <div className=''>
          <Article articleData={Islands} text='US & Canada news' />
        </div>
        <div className=''>
          <Article articleData={asia} text='US & Canada news' />
        </div>
      </div>

      {/* Section 03 */}

      <MoreArticle />

      {/* Section 04 */}

      <WeekendCard cultureOscars={Weekends}/>

      {/* Section 05 */}

      <div className='bg-zinc-900'>
        <ArtMotion videoData={artmotion} />
      </div>

      {/* Section 06 */}

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

      {/* Section 07 */}

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

export default Hero;
