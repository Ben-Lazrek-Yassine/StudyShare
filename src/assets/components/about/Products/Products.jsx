import React from 'react';
import  InfoSection  from '../InfoSection/InfoSection';
import { homeObjOne, homeObjTwo } from '../Data';

function Products() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Products;