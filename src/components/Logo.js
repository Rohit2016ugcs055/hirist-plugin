import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

import { LOGO, INC_HOST } from '../config';
import hiristLogo from '../image/hirist_logo.svg';

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

const H3 = styled.h3`
  font-size: 23px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 0px;
  line-height: 23px;
  letter-spacing: -1.54px;
  margin-left: ${props => props.logo === 'iimjobs'? '0px' : '-20px'};
`;

const Span = styled.span`
  font-size: 12px;
  line-height: 9px;
  float: right;
  margin-right: ${props => props.logo === 'iimjobs' ? '47px' : '68px'};
  @media only screen and (max-width:1023px) {
    margin-right: 23px;
  }
  @media only screen and (min-width:1024px) and (max-width:1279px){
    margin-right: ${props => props.logo === 'iimjobs' ? '28px' : '48px'}
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
  margin-left: 50px;
  height:40px;
  @media only screen and (max-width: 1023px) {
    margin-left: 18px;
  }
  @media only screen and (max-width:425px) {
    margin-left: 15px;
  }
`;

const Logo = ({ handleClick, onClickSideBar }) => (
  <LogoWrapper>
    <Icon className='icon-hemburger' onClick={onClickSideBar}/>
    <span onClick={handleClick}>
      {/* <H3 logo={LOGO}>{LOGO}</H3>
      <Span logo={LOGO}>.com</Span> */}
      <Image src={hiristLogo} alt={`${INC_HOST}.COM`} />
    </span>
  </LogoWrapper>
);



export default Logo;
