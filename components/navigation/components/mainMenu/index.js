import React, { Children } from 'react'
import { withRouter } from "next/router"
import Link from 'next/link'
import * as Style from './style.js'

const ActiveLink = withRouter(({ router, children, ...props }) => (
  <Link {...props}>
    {React.cloneElement(Children.only(children), {
      className: router.pathname === props.href ? `active` : null
    })}
  </Link>
))

export default class MainMenu extends React.Component {
  render() {
    return ( 
      <Style.Wrapper>
        <ActiveLink href="/biography">
          <Style.NavLink>
            {'Biography'}
          </Style.NavLink>
        </ActiveLink>
        <Style.InActiveLink>
          {'Case Studies'}
          <Style.InActiveLabel>
            {'Coming Soon'}
          </Style.InActiveLabel>
        </Style.InActiveLink>
        <Style.InActiveLink>
          {'Prints'}
          <Style.InActiveLabel>
            {'Sold Out'}
          </Style.InActiveLabel>
        </Style.InActiveLink>
        <ActiveLink href="/other">
          <Style.NavLink>
            {'"Other"'}
          </Style.NavLink>
        </ActiveLink>
      </Style.Wrapper>
    )
  }
}
