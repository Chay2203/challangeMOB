import React from 'react';
import { GiCrystalBars, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  OriginalPrice,
  PricingCardPlan,
  PricingCardCost,
  PricingCardFeatures,
  PricingCardFeature,
  ExternalButton // Use the new styled component for external links
} from './Pricing.elements';

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Live Challenges</PricingHeading>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>BASIC</PricingCardPlan>
                <OriginalPrice>₹699/-</OriginalPrice>
                <PricingCardCost>₹99/-</PricingCardCost>
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
                <ExternalButton href="https://pages.razorpay.com/challengemobxharshith" target="_blank" primary>
                  Enroll Now
                </ExternalButton>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing;
