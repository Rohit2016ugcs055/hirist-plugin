/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from './Logo';
import './AppHeader.scss';

const AppHeaderInnerWrapper = styled.div`
  background-color: #ffffff;
  width: 685px;
  position: fixed;
  height: auto;
  min-height: 70px;
  top: 0px;
  border-bottom: 1px solid #e6e6e6;
  z-index: 3;

  @media only screen and (max-width:767px){
    z-index: 3;
  }

  @media all and (max-width:425px){
    height: auto;
  } 
`;

class AppHeader extends React.Component {
  
  constructor() {
    super();
    this.state = {
      headerSticky: true,
    }
  }


  componentDidMount() {
   
  }


  handleLogoClick = () => {
    const ABS_URL =  "https://www.hirist.com";
    const { history, prefText } = this.props;
    window.location.href = `${ABS_URL}/jobfeed`;
  }

  render() {
      const { headerSticky } = this.state;
      const ABS_URL =  "https://www.hirist.com";
    return (
      <AppHeaderInnerWrapper style={ headerSticky ? {'position': 'fixed'} : {'position': 'unset'} }>
        <Logo handleClick={this.handleLogoClick} />
        <div className="hirist-logo-divider"></div>
        <div className="hirist-header-message">
          <div className="powered-message-heading">Powered by <a href={`${ABS_URL}/jobfeed`}>hirist.com</a></div>
          <div className="hirist-leading-portal">Hirist is a leading job portal for premium tech jobs.</div>
        </div>
      </AppHeaderInnerWrapper>
    )
  }

}

AppHeader.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default AppHeader;
