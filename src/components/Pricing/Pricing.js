import React from 'react';
import { GiCrystalBars } from 'react-icons/gi';
import { GiRock } from 'react-icons/gi';
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
  PricingCardFeatures,
  PricingCardFeature, 
  Button
} from './Pricing.elements';

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>BASIC</PricingCardPlan>
                <PricingCardCost>₹99</PricingCardCost>
                <PricingCardFeatures>
                  <PricingCardFeature>LinkedIn Cookbook</PricingCardFeature>
                  <PricingCardFeature>AI Linked Tool</PricingCardFeature>
                  <PricingCardFeature>Daily JS Checklist</PricingCardFeature>
                  <PricingCardFeature>Private WhatsApp Group</PricingCardFeature>
                  <PricingCardFeature>Pro JS Checklist</PricingCardFeature>
                  <PricingCardFeature>Job Sheet Tracker</PricingCardFeature>
                  <PricingCardFeature>Webinar Recording</PricingCardFeature>
                  <PricingCardFeature>Job Search Templates</PricingCardFeature>
                  
                </PricingCardFeatures>
                <Button primary>Enroll Now</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing;
