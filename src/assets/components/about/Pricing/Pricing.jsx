import React from 'react';
import { Button } from '../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock, } from 'react-icons/gi';
import {FcAssistant,FcDocument} from 'react-icons/fc';
import { GiFloatingCrystal } from 'react-icons/gi';
import {FaTools} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';
import SignUpForm from '../../Signup';

 const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>  
            <PricingCard to='/Signup'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FcAssistant />
                </PricingCardIcon>
                <PricingCardPlan>Chat with friends</PricingCardPlan>
                <PricingCardLength>in real time!</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Use our real-time chatting, emojis and voting system to interact with your friends!</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/Signup'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FcDocument />
                </PricingCardIcon>
                <PricingCardPlan>Share Documents</PricingCardPlan>
                <PricingCardLength>pdfs, images and other</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Safely share documents through our very safe database</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/Signup'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaTools />
                </PricingCardIcon>
                <PricingCardPlan>Use our tools</PricingCardPlan>
                <PricingCardLength>these include:</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>AI text assistant</PricingCardFeature>
                  <PricingCardFeature>Math calculations and plotting</PricingCardFeature>
                  <PricingCardFeature>White board to tutor friends!</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing