const breakpoints = ['40em', '52em', '64em', '80em']

const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`,
}

export interface Colors {
  white: string,
  dark: string,
  text: string,
  primary: string,
  secondary: string,
  lemon: string,
  orange: string,
  transparent: string,
}

export const colors: Colors = {
  white: '#fff',
  dark: '#202020',
  text: '#eeeeee',
  primary: '#aa0605',
  secondary: '#fbca03',
  lemon: '#ffe370',
  orange: '#b97c10',
  transparent: 'transparent',
}

export const borderWidths=[1,2,3]

export const  borderStyles = {
  contained: 'none',
  outline: 'solid',
}
  
export const radii = [0, 2, 4, 16]

export const sizes = {
  small: '5rem',
  medium: '7rem',
  thumbnail: '150px'
}

export const space = [
  '0rem', // 0
  '0.325rem', // 1
  '0.625rem', // 2
  '0.9rem', // 3
  '1rem', // 4
  '1.5rem', // 5
  '2rem', // 6
  '3rem', // 7
  '4rem', // 8
]
  
export const fontSizes = [
  '0.8rem', // 0
  '0.9rem', // 1
  '1rem', // 2
  '1.3rem', // 3
  '1.563rem', // 4
  '1.953rem', // 5
  '2.441rem', // 6
  '2.77rem', // 7
]

export const lineHeights = [
  '0', // 0
  '1.2rem', // 1
  '1.5rem', // 2
  '1.87rem', // 3
  '2rem', // 4
  '2.5rem', // 5
  '3rem', // 6
]
  
const theme = {
  fonts: {
    robotoCondensed: '"Roboto Condensed", sans-serif',
    monospace: `"Courier New", Courier, monospace`,
  },
  colors,
  radii,
  sizes,
  space,
  fontSizes,
  lineHeights,
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  shadows: {
    thin: '0 2px 2px 0 rgba(0, 0, 0, 0.45), 0 0 2px 0 rgba(0, 0, 0, 0.12)',
    light: '0 18px 29px -2px rgba(0, 0, 0, 0.26)',
    bold: 'rgb(74, 74, 74) 0px 0px 1px',
  },
  borderWidths,
  borderStyles,
  breakpoints,
  mediaQueries,
  transitions: "all 350ms"
}

export default theme