import React from 'react';
import styled, { css } from 'styled-components';

const SwitchText = css`
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  font-size: 10px;
  font-family: Verdana, sans-serif;
`

const LightText = styled.span`
  display: none;
  left: 40%;
  color: #282c34;
  ${SwitchText}
`

const DarkText = styled.span`
  left: 60%;
  color: #ffffff;
  ${SwitchText}
`

const SwitchLabel = styled.label`
position: relative;
display: inline-block;
width: 60px;
height: 24px;

& input {
  display: none;
}
`

const Slider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #696b70;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;

  :before {
    position: absolute;
    content: "";
    width: 18px;
    height: 18px;
    margin: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`

const Checkbox = styled.input`
  &:checked + ${Slider} {
    background-color: #CCCCCC;
  }
  &:focus + ${Slider} {
    box-shadow: 0 0 1px #CCCCCC;
  }

  &:checked + ${Slider}:before {
    -webkit-transform: translateX(36px);
    -ms-transform: translateX(36px);
    transform: translateX(36px);
  }

  &:checked + ${Slider} ${LightText}{
    display: block
  }

  &:checked + ${Slider} ${DarkText}{
    display: none
  }
`

interface Props {
  checked: boolean;
  onChange(e: any): void;
}

const Switch: React.FunctionComponent<Props> = ({ checked, onChange }) => {
  return <SwitchLabel>
    <Checkbox type="checkbox" onChange={onChange} checked={checked}/>
    <Slider>
      <LightText>light</LightText>
      <DarkText>dark</DarkText>
    </Slider>
  </SwitchLabel>
}

export default Switch;