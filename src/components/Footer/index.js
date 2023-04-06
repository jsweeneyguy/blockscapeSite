import React from "react";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaDiscord, FaMedium, FaEthereum } from "react-icons/fa";
import { FontAwesomeIcon } from 'react-icons/fa';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faEtherscan } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>blockScapes</SocialLogo>
            <WebsiteRights>
              blockScapes &copy; {new Date().getFullYear()} 
            </WebsiteRights>
            <SocialIcons>
            <SocialIconLink onClick={() => window.location.href ="https://etherscan.io/"} target="_blank" aria-label="Twitter">
                <FaEthereum />
              </SocialIconLink>
              <SocialIconLink onClick={() => window.location.href ="https://twitter.com/blockscapes"} target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink onClick={() => window.location.href ="https://medium.com/@blockscapesnft"} target="_blank" aria-label="Medium">
                <FaMedium />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
