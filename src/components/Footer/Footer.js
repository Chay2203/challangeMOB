import React from 'react';
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  Button,
  FormInput,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';
import yourLogoImage from '../../images/main.png';

function Footer() {

  const date = new Date();

  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Contact Us
        </FooterSubHeading>
        <FooterSubText>harshith.presents@outlook.com</FooterSubText>
        <FooterSubText>+91 7425882688</FooterSubText>
      </FooterSubscription>
      <SocialMedia>
        <SocialMediaWrap>
        <SocialLogo to='/'>
          <SocialIcon src={yourLogoImage} alt='Logo' />
        </SocialLogo>
          <WebsiteRights>ChallangeMOB © {date.getFullYear()} </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://www.instagram.com/harshith.presents/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='https://www.youtube.com/@thepapusgang' target='_blank' aria-label='YouTube' >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='https://www.linkedin.com/in/harshithtunuguntla/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;