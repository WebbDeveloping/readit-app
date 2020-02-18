import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import './nav.css';

import redLogo from '../images/reddit.png';
import mag from '../images/mag.png';
import { StyledHeader, StyledRedLogo, StyledTMDBLogo } from './Styles';

const SearchBar = Styled.div`
    margin-left: 16px;
    margin-right: 16px;
    width: auto;

`;
const Label = Styled.label`
    position: absolute;
    top: 50%;
    left: 0;
    height: 18px;
    margin-left: 16px;
    margin-top: -9px;`;
const Form = Styled.form`    
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;`;

const Input = Styled.input`-webkit-appearance: none;
    appearance: none;
    background-color: white
    border-radius: 4px;
    border: 1px solid white
    box-shadow: none;
    color: white
    display: block;
    height: 36px;
    outline: none;
    padding: 0 16px 0 40px;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    font-family: inherit;
    `;

const TopNav = () => (
  <StyledHeader>
    <div className='header-content flex-nav'>
      <Link to={'/'}>
        <StyledRedLogo src={redLogo} alt='RMDB-logo' />
      </Link>
      <SearchBar>
        {/* fix the mag image */}
        {/* <Label><img src={mag}></img></Label> */}
        <Form>
          <Input placeholder='Search'></Input>
        </Form>
      </SearchBar>
    </div>
  </StyledHeader>
);

export default TopNav;
