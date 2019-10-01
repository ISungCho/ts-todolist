const basicTheme = {
  borderRadius: '3px',
  inputHeight: '35px',
  buttonHeight: '35px',
}

const lightTheme = {
  basic: basicTheme,
  colors: {
    background: 'white',
    buttonColor: '#ffd1d1',
    defaultFont: '#282c34',
    primaryFont:  '#ffb7b7'
  },
}

const darkTheme = {
  basic: basicTheme,
  colors: {
    background: '#282c34',
    buttonColor: '#ffd1d1',
    defaultFont:  '#e8e8e8',
    primaryFont:  '#ffb7b7'
  }
}

export { lightTheme, darkTheme }
