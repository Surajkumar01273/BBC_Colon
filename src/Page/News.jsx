import React from 'react';
import LeftsideBar from '../component/pageComp/BreakingNews/LeftsideBar';
import Mid from '../component/pageComp/BreakingNews/Mid';
import RightsideBar from '../component/pageComp/BreakingNews/RightsideBar';
import Article from '../component/pageComp/Article';
import MoreArticle from '../component/pageComp/MoreNews/MoreArticle';
import {
  brekingNews,
  boxNews,
  tradeNews,
  malitryNews,
  japansNews,
  Islands,
  asia,
  trumpNews,
  zalnsky,
  myanmarsNews,
  usUkrain
} from '../Data/HomePageData';

function News() {
  return (
    <>
      {/* Section 1 */}
      <div className='grid md:grid-cols-3 md:gap-4 mt-12 lg:grid-cols-4 lg:px-1 xl:mx-30'>
        <div className='order-2 md:order-1 md:col-span-1 lg:col-span-1'>
          <LeftsideBar leftSideData={brekingNews} />
        </div>

        <div className='order-1 md:order-2 md:col-span-2 lg:col-span-2'>
          <Mid midData={boxNews} />
        </div>

        <div className='order-3 md:order-3 md:col-span-3 lg:col-span-1 md:row-span-2'>
          <RightsideBar rightsideData={tradeNews} />
        </div>
      </div>

      {/* Section 2 */}

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

      {/* Section - 3 */}

      <div>
        <MoreArticle />
      </div>


      {/* section - 4 */}

      <div>
        <div className='grid md:grid-cols-3 md:gap-4 mt-12 lg:grid-cols-4 lg:px-1 xl:mx-30'>
          <div className='order-2 md:order-1 md:col-span-1 lg:col-span-1'>
            <LeftsideBar leftSideData={trumpNews} className='grid-cols-1' />
          </div>

          <div className='order-1 md:order-2 md:col-span-2 lg:col-span-2'>
            <Mid midData={zalnsky} />
          </div>

          <div className='order-3 md:order-3 md:col-span-3 lg:col-span-1 md:row-span-2'>
            <RightsideBar rightsideData={myanmarsNews} />
          </div>
        </div>
      </div>

      {/* section 5 */}


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
            <Article articleData={usUkrain} text='US & Canada news' />
          </div>
        </div>
    </>
  );
}

export default News;
