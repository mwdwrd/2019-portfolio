import React from 'react'
import * as Style from './style.js'
import Mark from '../mark/index'
import Link from 'next/link'
import { withRouter } from "next/router"
import { Children } from "react"
import { Hidden } from 'react-grid-system'

const ActiveLink = withRouter(({ router, children, ...props }) => (
  <Link {...props}>
    {React.cloneElement(Children.only(children), {
      className: router.pathname === props.href ? `active` : null
    })}
  </Link>
))

class Header extends React.Component {
  render() {
    return ( 
      <Style.Wrapper>
        <Style.FlexWrapper>

          <Style.LeftWrapper>
            <ActiveLink activeClassName="active" href="/">
              <a><Mark /></a>
            </ActiveLink>
          </Style.LeftWrapper>

          <Hidden xs>
            <Style.RightWrapper>
              <ActiveLink activeClassName="active" href="/biography">
                <Style.NavLink>Biography</Style.NavLink>
              </ActiveLink>
              <Style.InActiveLink>
                Case Studies
                <Style.InActiveLabel>Coming Soon</Style.InActiveLabel>
              </Style.InActiveLink>
              <Style.InActiveLink>
                Prints
                <Style.InActiveLabel>Sold Out</Style.InActiveLabel>
              </Style.InActiveLink>
              <ActiveLink activeClassName="active" href="/other">
                <Style.NavLink>"Other"</Style.NavLink>
              </ActiveLink>
            </Style.RightWrapper>
          </Hidden>

        </Style.FlexWrapper>
      </Style.Wrapper>
    )
  }
}

export default Header
