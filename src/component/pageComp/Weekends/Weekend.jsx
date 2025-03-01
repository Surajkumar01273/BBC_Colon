import React from 'react';
import WeekendCard from './WeekendCard';
import {Weekends} from '../../../Data/HomePageData'

const Weekend = () => {
  return (
    <>
      <WeekendCard cultureOscars={Weekends} text={'Only from BBC'}/>
    </>
  );
};

export default Weekend;
