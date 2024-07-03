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
                <PricingCardCost>₹79</PricingCardCost>
                <PricingCardFeatures>
                  <PricingCardFeature>LinkedIn Cookbook</PricingCardFeature>
                  <PricingCardFeature>Daily JS Checklist</PricingCardFeature>
                  <PricingCardFeature>Pro JS Checklist</PricingCardFeature>
                  <PricingCardFeature>Job Sheet Tracker</PricingCardFeature>
                  <PricingCardFeature>Webinar Recording</PricingCardFeature>
                  <PricingCardFeature>Job Search Templates</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Pro</PricingCardPlan>
                <PricingCardCost>₹199</PricingCardCost>
                <PricingCardFeatures>
                  <PricingCardFeature>LinkedIn Cookbook</PricingCardFeature>
                  <PricingCardFeature>All-Star Checklist</PricingCardFeature>
                  <PricingCardFeature>Daily JS Checklist</PricingCardFeature>
                  <PricingCardFeature>Pro JS Checklist</PricingCardFeature>
                  <PricingCardFeature>Job Sheet Tracker</PricingCardFeature>
                  <PricingCardFeature>Webinar Recording</PricingCardFeature>
                  <PricingCardFeature>Job Search Templates</PricingCardFeature>
                  <PricingCardFeature>Private WhatsApp Group</PricingCardFeature>
                  <PricingCardFeature>1 - 1  guidance call</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary style={{ background: '#fff', color: '#000000' }}>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing;
