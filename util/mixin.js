import theme from './theme'

// Layouts
export function ColumnWrapper() {
  return `
    position: relative;
    max-width: 100%;
    margin: auto 0;
    padding: 0 40px;
  `
}
export function FullWrapper() {
  return `
    position: relative;
    max-width: 100%;
    margin: auto 0;
    padding: 0;
  `
}

// Functions
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
