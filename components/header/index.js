import React from 'react';
import { locale } from '../../util/locale'
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

          <Style.LogoWrapper>
            <Style.Logo>
              <Style.BiLine>
                <Style.MenuItemLink active={true} onClick={() => this.navigateTo('/')}>
                  {locale.en.title}
                </Style.MenuItemLink>
              </Style.BiLine>
            </Style.Logo>
          </Style.LogoWrapper>

          <Style.MenuWrapper>
            <Style.Menu>
              <Style.MenuItem>
                <Style.MenuItemLink active={true} onClick={() => this.navigateTo('/about')}>
                  Biography
                </Style.MenuItemLink>
              </Style.MenuItem>
              <Style.MenuItem>
                <Style.MenuItemLink active={true} onClick={() => this.navigateTo('/')}>
                  Selected Works
                </Style.MenuItemLink>
              </Style.MenuItem>
              <Style.MenuItem>
                <Style.MenuItemLink active={true} onClick={() => this.navigateTo('/listen')}>
                  Listen
                </Style.MenuItemLink>
              </Style.MenuItem>
              <Style.MenuItem>
                <Style.MenuItemLink active={true} onClick={() => this.navigateTo('/products')}>
                  Products
                </Style.MenuItemLink>
              </Style.MenuItem>
            </Style.Menu>
          </Style.MenuWrapper>

        </Style.FlexWrapper>
      </Style.Wrapper>
    )
  }
}

export default Header
