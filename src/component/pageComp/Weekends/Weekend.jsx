import React from 'react';
import WeekendCard from './weekendCard';
import {Weekends} from '../../../Data/HomePageData'

const Weekend = () => {
  return (
    <>
      <WeekendCard cultureOscars={Weekends} text={'Only from BBC'}/>
    </>
  );
};

export default Weekend;
