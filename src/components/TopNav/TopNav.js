import React from 'react';
import styled from 'styled-components';

import redLogo from '../images/reddit.png';
import mag from '../images/mag.png';
import { StyledHeader, StyledRedLogo, StyledTMDBLogo } from './Styles';

const TopNav = () => (
  <StyledHeader>
    <div className='header-content'>
      <StyledRedLogo src={redLogo} alt='RMDB-logo' />
      <StyledTMDBLogo src={mag} alt='TMDB-logo' />
    </div>
  </StyledHeader>
);

export default TopNav;
