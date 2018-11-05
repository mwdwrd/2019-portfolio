import styled from 'styled-components'
import Link from 'next/link'

export const Wrapper = styled(Link)`
  width: 100%;
  height: 100%;
  position: relative;
`

export const Thumbnail = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: ${generateRatio};
  height: 0;
  margin: 0 0 16px 0;
  background-color: #f5f5f5;
`
export const ThumbnailContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const HyperLink = styled.a`
  cursor: pointer;
`

export const Header = styled.div`
  margin-bottom: 16px;
`
export const FlexWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

export const Body = styled.div``

export const Date = styled.div`
  font-size: 13px;
  text-align: left;
  font-family: 'Akkurat', Arial, Helvetica, sans-serif;
  font-weight: 600;
`

export const Title = styled.h2`
  flex: 1;
  font-family: 'Akkurat', Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 32px;
  text-align: right;

  span {
    display: block;
  }
`


function generateRatio(props) {
  console.log('Style Props', props)
  if (props.ratio) {
    const ratio = props.ratio
    const xRatio = ratio.slice(0, ratio.indexOf(":"))
    const yRatio = ratio.split(':')[1]
    const ratioOffset = yRatio / xRatio * 100

    console.log('Ratio:', ratioOffset)
    return `${ratioOffset}%`;
  } else {
    return `100%`;
  }
}
