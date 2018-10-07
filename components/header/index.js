import React from 'react';
import Router from 'next/router';
import * as Style from './style.js';

class Header extends React.Component {
  navigateTo(path) {
    Router.push({ pathname: path }, path, { shallow: true });
  }

  render() {

    return ( 
      <Style.Wrapper>
        <Style.FlexWrapper>

          <Style.LeftWrapper>
            <Style.LogoLink onClick={() => this.navigateTo('/')}>
              <Style.Logo>MW</Style.Logo>
            </Style.LogoLink>
          </Style.LeftWrapper>

          <Style.RightWrapper>
            <span>M. Woodward</span>
            <span>Creative Director — New York</span>
            <span>+1 (646) 571-9510</span>
          </Style.RightWrapper>

        </Style.FlexWrapper>
      </Style.Wrapper>
    )
  }
}

export default Header
