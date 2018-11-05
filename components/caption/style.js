import styled from 'styled-components'
import theme from '../../util/theme'
import media from 'styled-media-query'

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
  font-weight: ${theme.typography.caption.fontWeight};
  font-size: ${theme.typography.caption.fontSize};
  line-height: ${theme.typography.caption.lineHeight};
  letter-spacing: ${theme.typography.caption.letterSpacing};
  color: rgba(43, 51, 63, 0.7);

  display: flex;
  justify-content: ${getAlignment};
  padding: 24px 0;

  &:hover {
    cursor: help;
  }

  ${media.lessThan("medium")`
    justify-content: flex-start;
  `}
`
export const Text = styled.span`
  display: block;
  max-width: 80%;

  ${media.lessThan("medium")`
    max-width: 100%;
  `}
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