import {extendTheme, theme as chakraTheme} from '@chakra-ui/react'
import {createBreakpoints} from '@chakra-ui/theme-tools'

const fonts = {...chakraTheme.fonts, heading: 'Raleway', body: 'Raleway'}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    tdsBlack: '#16161D',
    tdsBlue: '#0B88BE',
    tdsGreen: '#239B1F',
    tdsGray: '#505050',
    tdsRed: '#EF3635',
    tdsBorder: '#DBDBDB',
    tdsBgGray: '#F4F4F4',
    tdsTextGray: '#9B9B9B',
    tdsBgSelect: '#F6F6F6',
  },
  fonts,
  breakpoints,
  components: {
    Modal: {
      baseStyle: () => ({
        dialog: {
          borderRadius: '16px',
        },
      }),
    },
  },
  textStyles: {
    bold: {
      fontWeight: '700',
    },
  },
})

export default theme
