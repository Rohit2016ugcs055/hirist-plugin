import React from 'react';
import styled from 'styled-components';

import hiristLogo from '../image/hirist_logo.svg';

const INC_HOST= "HIRIST";

const LogoWrapper = styled.div`
  width: 170px;
  height: 100%;
  display: inline-block;
  vertical-align: top;
  margin-top: 19px;
  cursor: pointer;
  margin-left:20px;
  
  @media only screen and (min-width:1024px) and (max-width:1279px){
    width: 132px;
  }

  @media only screen and (min-width:768px) and (max-width:1023px){
    float: left;
  }
  @media all and (max-width: 425px) {
    margin-top: 19px;
  }
  @media only screen and (max-width:1023px){
    padding-right: 22px;
  }
  @media only screen and (max-width:767px){
    margin-left: -26px;
  }
`;


const Icon = styled.a`
  display : none !important;
  
  @media only screen and (max-width:1023px) {
    display: inline-block !important;
    float: left;
    font-size: 18px;
    width: 35px;
    margin-top: 2px;
    height: 18px;
  }
  @media only screen and (max-width:425px) {
    margin-left: 6px;
  }
`;

const Image = styled.img`
  width: 33%;
  margin-left: 52px;
  height:40px;
  @media only screen and (max-width: 1023px) {
    margin-left: 20px;
  }
  @media only screen and (max-width:425px) {
    margin-left: 15px;
  }
`;

const Logo = ({ handleClick, onClickSideBar }) => (
  <LogoWrapper>
    <Icon className="" onClick={onClickSideBar}/>
    <span onClick={handleClick}>
      {/* <H3 logo={LOGO}>{LOGO}</H3>
      <Span logo={LOGO}>.com</Span> */}
      <Image src={hiristLogo} alt={`${INC_HOST}.COM`} />
    </span>
  </LogoWrapper>
);



export default Logo;
