import styled, { css } from 'styled-components';
import media from '../styles/media';


const defaultCss = css`
 background: transparent;
 color: ${(props) => props.theme.colors.buttonColor};
 border: 2px solid ${(props) => props.theme.colors.buttonColor};
`

const primaryCss = css`
 background: ${(props) => props.theme.colors.buttonColor};
 color: ${(props) => props.theme.colors.background};
`

const disabledCss = css`
 background-color: #f5f5f5;
 color: rgba(0,0,0,0.25);
 border: 1px solid #d9d9d9;
`

const StyledButton = styled.button`
padding-right: 15px;
padding-left: 15px;
height: ${(props: any) => props.theme.basic.buttonHeight};
border-radius: ${(props: any) => props.theme.basic.borderRadius};
margin-left: 15px;
transition: opacity 0.5s;
font-size: 15px;
font-weight: 500;
:hover {
  cursor: pointer;
  opacity: 0.7;
}
:focus {
  outline: none;
}
${defaultCss}
${media.mobile`
  width: 85%;
  margin-left: 0;
`}
`
interface Props {
  primary?: boolean
  disabled?: boolean
  default?: boolean
}

const Button = styled(StyledButton) <Props>`
  ${(props) => props.primary && primaryCss}
  ${(props) => props.disabled && disabledCss}
`


export default Button;