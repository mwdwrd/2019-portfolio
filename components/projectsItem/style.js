import styled from 'styled-components'
import Link from 'next/link'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
export const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
`
export const RouterLink = styled(Link)``
export const HyperLink = styled.a`
  cursor: pointer;
`

export const Caption = styled.div`
  display: none;
`
