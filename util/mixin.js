import theme from './theme'

export function transition(prop, time, ease) {
  return `
    -webkit-transition: ${prop} ${time} ${ease};
    -moz-transition: ${prop} ${time} ${ease};
    -ms-transition: ${prop} ${time} ${ease};
    -o-transition: ${prop} ${time} ${ease};
    transition: ${prop} ${time} ${ease};
  `
}

export function transform(prop, value) {
  return `
    -webkit-transform: ${prop}(${value});
    -moz-transform: ${prop}(${value});
    -o-transform: ${prop}(${value});
    transform: ${prop}(${value});
  `
}

export function transformOrigin(xAxis, yAxis) {
  return `
    -webkit-transform-origin: ${xAxis} ${yAxis};
    -moz-transform-origin: ${xAxis} ${yAxis};
    -o-transform-origin: ${xAxis} ${yAxis};
    transform-origin: ${xAxis} ${yAxis};
  `
}

export function airdropPreviewHeading() {
  return `
    font-family: ${theme.typography.airdrop.fontFamily};
    font-weight: ${theme.typography.airdrop.fontWeight};
    font-size: ${theme.typography.airdrop.fontSize};
    height: ${theme.typography.airdrop.fontSize};
    margin-bottom: ${theme.typography.airdrop.marginBottom};
    line-height: ${theme.typography.airdrop.lineHeight};
  `
}

export function airdropPreviewSubheading() {
  return `
    font-family: ${theme.typography.utility.fontFamily};
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  `
}

export function label() {
  return `
    font-family: ${theme.typography.utility.fontFamily};
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    margin: 0 0 8px 0;
  `
}

export function headingFont() {
  return `
  `
}

export function bodyFont() {
  return `
    font-size: 16px;

    p {
      margin: 0 0 20px 0;
      &:last-child {
        margin-bottom: 0;
      }
    }
  `
}
