import styled from 'styled-components'

const headingFontFamily = 'Founders Grotesk';
const bodyFontFamily = 'Akkurat';

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

  p {
    margin-bottom: 28px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`