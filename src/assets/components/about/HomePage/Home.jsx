import React from 'react';
import InfoSection from '../InfoSection/InfoSection';
import Pricing from '../Pricing/Pricing';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from '../Data';
const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <Pricing />
        </>
    )
}

export default Home;