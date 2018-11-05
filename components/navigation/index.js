import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Style from './style.js'
import Link from 'next/link'
import { toggleNav } from '../../store'
import { Hidden, Visible } from 'react-grid-system'
import { MainMenu, Drawer, Mark } from './components'
import { VelocityTransitionGroup } from 'velocity-react'

class Navigation extends React.Component {

  nav = () => {
    this.props.toggleNav()
  }

  onNavShow = (navOpen) => {
    if(navOpen) {
      console.log('Nav Shown')
    }
  }

  onNavHide = (navOpen) => {
    if(!navOpen) {
      console.log('Nav Hidden')
    }
  }

  render() {
    const { navOpen } = this.props
    const enterAnimation = {
      animation: {
        opacity: 1,
        translateX: '0px'
      },
      begin: this.onNavShow(navOpen)
    }
    const exitAnimation = {
      animation: {
        opacity: 0,
        translateX: '-10px'
      },
      complete: this.onNavHide(navOpen)
    }

    return ( 
      <div>

        <Style.Header>
          <Visible xs>
            <Style.Mark onClick={this.nav}>
              <Mark active={navOpen} />
            </Style.Mark>
          </Visible>
          <Hidden xs>
            <Style.Mark>
              <Link href={'/'}>
                <a><Mark active={navOpen} /></a>
              </Link>
            </Style.Mark>
          </Hidden>
          <Hidden xs>
            <Style.MainMenu>
              <MainMenu />
            </Style.MainMenu>
          </Hidden>
        </Style.Header>

        <Visible xs>
          <Style.Drawer>
            <VelocityTransitionGroup
              enter={enterAnimation}
              leave={exitAnimation}>
              {navOpen ? <Drawer active={navOpen}/> : undefined}
            </VelocityTransitionGroup>
          </Style.Drawer>
        </Visible>

      </div>
    )
  }
}

const mapStateToProps = ({ navOpen }) => ({ navOpen })
const mapDispatchToProps = (dispatch) => {
  return {
    toggleNav: bindActionCreators(toggleNav, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
