import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 16px;
`

export const AboutWrapper1 = styled.div`
  height: 200px;
  background-color: #ccc;
`

export const AboutWrapper2 = styled.div`
  height: 1000px;
  background-color: #ff55bb;
`

export const AboutWrapper3 = styled.div`
  height: 2500px;
  background-color: #ccc;
`

export const JumpBar = styled.div`
  position: fixed;
  right: 40px;
  top: 40px;
  bottom: 40px;
  width: 1px;
  background-color: #000;
`
export const JumpBarTracker = styled.div`
  position: absolute;
  width: 12px;
  height: 1px;
  transform: translate(-50%, 0);
  border-radius: 11px;
  background-color: #000000;
  transition: all 100ms cubic-bezier(0.250, 0.250, 0.750, 0.750);

  top: ${props => props.topOffset}%;
`