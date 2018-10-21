import styled from 'styled-components'
import theme from '../../util/theme'

function getAlignment(props) {
  if (props.align === 'left') {
    return 'flex-start'
  } else if (props.align === 'center') {
    return 'center';
  } else {
    return 'flex-end';
  }
}


export const Wrapper = styled.div`
  font-family: ${theme.typography.caption.fontFamily};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: ${theme.typography.caption.letterSpacing};
  display: flex;
  justify-content: ${getAlignment};
  padding: 24px;

  &:hover {
    cursor: help;
  }
`
export const Text = styled.span`
  display: block;
  max-width: 90%;
`

// export const Wrapper = styled.div`
//   font-family: ${theme.typography.caption.fontFamily};
//   font-weight: ${theme.typography.caption.fontWeight};
//   font-size: ${theme.typography.caption.fontSize};
//   letter-spacing: ${theme.typography.caption.letterSpacing};
//   text-align: ${props => props.align};
//   padding: 8px 0;

//   &:hover {
//     cursor: help;
//   }
// `

// letter-spacing: 0.1px;
// text-align: left;
// padding: 8px 0;
// margin-top: 8px;
// max-width: 50%;