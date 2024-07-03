import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const PricingSection = styled.div`
  padding: 60px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffdf59;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;


export const Button = styled.button`
  border-radius: 10px;
  background: ${({ primary }) => (primary ? '#fff' : '#fff')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #000000;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;



export const PricingHeading = styled.h1`
  color: #000000;
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  border-radius: 8px; /* Adjust the radius as needed */
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
  }
`;


export const PricingCard = styled(Link)`
  background: #101522;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 550px;
  text-decoration: none;
  border-radius: 25px;
  overflow: hidden; /* Ensure blur doesn't overflow */
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }

  /* Apply blur filter conditionally */
  ${props =>
    props.blur &&
    css`
      filter: blur(10px);
    `}
`;
export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
  font-family: 'Poppins', sans-serif;
`;


export const PricingCardIcon = styled.div`
  margin: 16px 0;
  
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
  font-family: 'Poppins', sans-serif;
`;


export const PricingCardFeatures = styled.ul`
  margin: 16px 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
  width: 100%;
  height: 100%;
`;

export const PricingCardFeature = styled.li`
  font-family: 'Poppins', sans-serif;
`;
