import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      darkPurple: string
      lightPurple: string
      lightBlue: string
      backgroundColor: string
      white: string
      text: string
      success: string
      info: string
      warning: string
    }
  }
}
