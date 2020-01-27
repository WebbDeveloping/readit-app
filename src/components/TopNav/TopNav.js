import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import redLogo from '../images/reddit.png';
import mag from '../images/mag.png';
import { StyledHeader, StyledRedLogo, StyledTMDBLogo } from './Styles';

const TopNav = () => (
  <StyledHeader>
    <div className='header-content'>
      <Link to={'/'}>
        <StyledRedLogo src={redLogo} alt='RMDB-logo' />
      </Link>
      <StyledTMDBLogo src={mag} alt='TMDB-logo' />
    </div>
  </StyledHeader>
);

export default TopNav;
