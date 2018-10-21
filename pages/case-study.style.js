import styled from 'styled-components'
import { keyframes } from 'styled-components'

const headlineFontFamily = 'Akkurat-Light';
const headlineFontFamilyBold = 'Akkurat-Bold';
const headingFontFamily = 'Founders Grotesk';
const bodyFontFamily = 'Akkurat';

// Pulse
const pulsePiece = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  50% {
    transform: translate(0, 10px) rotate(5deg) scale(.95);
  }
`;
const pulseRocks = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    transform: translate(0, -5px) rotate(-5deg) scale(.95);
  }
  50% {
    transform: translate(0, 3px) rotate(6deg) scale(.90);
  }
  75% {
    transform: translate(0, -5px) rotate(-5deg) scale(.93);
  }
`;
const pulseBase = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  50% {
    transform: translate(0, 0) rotate(3deg) scale(1.1);
  }
`;


// Block
export const Block = styled.div`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
`
export const Content = styled.div`
  max-width: 1430px;
  margin: 0 auto;
  padding: 70px 40px;
  display: block;
`
export const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  display: block;
`

// Introduction
export const Intro = styled.div`
  position: relative;
  overflow: hidden;
`
export const TopBlock = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  margin-bottom: 140px;
  overflow: hidden;
`
export const TopImageContain = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${pulsePiece} 30s linear infinite;
`
export const TopImageRocks = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 102%;
  height: 102%;
  position: absolute;
  animation: ${pulseRocks} 60s linear infinite;
`
export const TopImageBase = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${pulseBase} 60s linear infinite;
`
export const TopImageCover = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
`
export const CoverBlock = styled.div`
  width: 100%;
  height: 620px;
  position: relative;
  background-color: #f5ce94;
`
export const CoverImage = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
`

export const IntroContentContainer = styled.div`
  padding-bottom: 140px;
  position: relative;
  z-index: 20;
`
export const IntroMediaContainer = styled.div`
  z-index: 10;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
`


// Specs
export const Specs = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
export const Spec = styled.li`
  font-family: ${bodyFontFamily};
  font-size: 15px;
  line-height: 25px;
  letter-spacing: -0.29px;
  margin: 0 0 30px 0;
`
export const SpecKey = styled.span`
  display: block;
  font-family: ${headlineFontFamilyBold};
  font-weight: 500;
`
export const SpecValue = styled.span`
  font-family: ${bodyFontFamily};
  display: block;

  a {
    color: inherit;
    text-decoration: none;
  }
`

// Typography
export const Heading1 = styled.h2`
  font-family: ${headlineFontFamily};
  font-size: 72px;
  line-height: 68px;
  font-weight: 100;
  padding: 0;
  margin: 0 0 62px 0;
  letter-spacing: -2px;

  b {
    font-family: ${headlineFontFamilyBold};
    font-weight: 500;
  }
`
export const Heading2 = styled.h2`
  font-family: ${headingFontFamily};
  font-size: 36px;
  font-weight: 400;
  padding: 0;
  margin: 0;
`
export const Text = styled.div`
  font-family: ${bodyFontFamily};
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.29px;

  large {
    font-size: 24px;
    line-height: 32px;
  }

  p {
    margin-bottom: 28px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`