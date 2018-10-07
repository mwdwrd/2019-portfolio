import React from 'react';
import * as Style from './about.style.js';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0,
      innerHeight: 0,
      documentHeight: 0,
      scrollPosition: 0
    };
    this.handleScroll = this.handleScroll.bind(this)
    this.checkScrollOnLoad = this.checkScrollOnLoad.bind(this)
  }

  componentDidMount() {
    const body = document.body
    const html = document.documentElement
    const innerHeight = window.innerHeight
    const documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
    
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    
    this.setState({
      innerHeight,
      documentHeight
    })

    this.checkScrollOnLoad(innerHeight, documentHeight)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  checkScrollOnLoad(innerHeight, documentHeight) {
    const windowScrolled = window.scrollY
    const scrolledOffset = documentHeight - innerHeight
    const percentScrolled = parseFloat(((windowScrolled/scrolledOffset) * 100).toFixed(2))

    this.setState({
      scrollY: windowScrolled,
      scrollPosition: percentScrolled
    })
  }

  handleScroll() {
    const { innerHeight, documentHeight } = this.state
    const windowScrolled = window.scrollY
    const scrolledOffset = documentHeight - innerHeight
    const percentScrolled = parseFloat(((windowScrolled/scrolledOffset) * 100).toFixed(2))

    this.setState({
      scrollY: windowScrolled,
      scrollPosition: percentScrolled
    })
  }

  render() {
    const { scrollPosition, loaded } = this.state

    return (
      <div>

        <Style.JumpBar loaded={loaded}>
          <Style.JumpBarTracker topOffset={scrollPosition} />
        </Style.JumpBar>

        <Style.AboutWrapper1>About 1</Style.AboutWrapper1>
        <Style.AboutWrapper2>About 2</Style.AboutWrapper2>
        <Style.AboutWrapper3>About 3</Style.AboutWrapper3>
      </div>
    )
  }
}
