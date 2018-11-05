import React, { Children } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from "next/router"
import Link from 'next/link'
import * as Style from './style.js'
import { closeNav } from '../../../../store'

const ActiveLink = withRouter(({ router, children, ...props }) => (
  <Link {...props}>
    {React.cloneElement(Children.only(children), {
      className: router.pathname === props.href ? `active` : null
    })}
  </Link>
))

class Drawer extends React.Component {
  closeDrawer() {
    this.props.closeNav()
  }

  render() {
    const trans = 'fade-up'
    const transDelay = 50

    return ( 
      <Style.Wrapper>
        <Style.Container>

          <Style.NavWrapper>

            <Style.NavItem data-aos={trans}>
              <ActiveLink href="/">
                <Style.NavLink onClick={() => this.closeDrawer()}>
                  {'Index'}
                </Style.NavLink>
              </ActiveLink>
            </Style.NavItem>

            <Style.NavItem data-aos={trans} data-aos-delay={transDelay/2}>
              <ActiveLink href="/biography">
                <Style.NavLink onClick={() => this.closeDrawer()}>
                  {'Biography'}
                </Style.NavLink>
              </ActiveLink>
            </Style.NavItem>

            <Style.NavItem data-aos={trans} data-aos-delay={transDelay*1}>
              <Style.InActiveLink>
                {'Case Studies'}
                <Style.InActiveLabel>Coming Soon</Style.InActiveLabel>
              </Style.InActiveLink>
            </Style.NavItem>

            <Style.NavItem data-aos={trans} data-aos-delay={transDelay*1}>
              <Style.InActiveLink>
                {'Prints'}
                <Style.InActiveLabel>Sold Out</Style.InActiveLabel>
              </Style.InActiveLink>
            </Style.NavItem>

            <Style.NavItem data-aos={trans} data-aos-delay={transDelay*2}>
              <ActiveLink href="/other">
                <Style.NavLink onClick={() => this.closeDrawer()}>
                  {'Other'}
                </Style.NavLink>
              </ActiveLink>
            </Style.NavItem>

            <Style.NavItem data-aos={trans} data-aos-delay={transDelay*3}>
              <Style.NavLink>—</Style.NavLink>
            </Style.NavItem>

            <Style.NavItem data-aos={trans} data-aos-delay={transDelay*4}>
              <Style.NavLink target="_blank" href="tel:+16465719510">
                +1 (646) 571-9510
              </Style.NavLink>
            </Style.NavItem>

            <Style.NavItem data-aos={trans} data-aos-delay={transDelay*5}>
              <Style.NavLink target="_blank" href="https://instagram.com/mwdwrd/">
                Instagram
              </Style.NavLink>
            </Style.NavItem>

            <Style.NavItem data-aos={trans} data-aos-delay={transDelay*6}>
              <Style.NavLink target="_blank" href="#">
                WNW
              </Style.NavLink>
            </Style.NavItem>

            <Style.NavItem data-aos={trans} data-aos-delay={transDelay*7}>
              <Style.NavLink target="_blank" href="https://github.com/mwdwrd/">
                Github
              </Style.NavLink>
            </Style.NavItem>

            <Style.NavItem data-aos={trans} data-aos-delay={transDelay*8}>
              <Style.NavLink target="_blank" href="https://www.linkedin.com/in/mwdwrd/">
                LinkedIn
              </Style.NavLink>
            </Style.NavItem>

          </Style.NavWrapper>

        </Style.Container>
      </Style.Wrapper>
    )
  }
}

const mapStateToProps = ({ navOpen }) => ({ navOpen })
const mapDispatchToProps = (dispatch) => {
  return {
    closeNav: bindActionCreators(closeNav, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)