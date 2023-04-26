import React from 'react';
import  Pricing  from '../Pricing/Pricing';
import  InfoSection from '../InfoSection/InfoSection';
import { homeObjOne, homeObjThree } from '../Data';

function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Services;