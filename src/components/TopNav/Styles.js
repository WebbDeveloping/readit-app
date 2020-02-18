import Styled from 'styled-components';

export const StyledHeader = Styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      max-width: 1280px;
      min-height: 0px;
    }
  }
`;

export const StyledRedLogo = Styled.img`
  width: 50px;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    width: 50px;
    margin-top: 5px;
  }
`;

export const StyledTMDBLogo = Styled.img`
  width: 122px;
  margin-top: 25px;
  float: right;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;
