import styled from 'styled-components';
import media from '../styles/media';

const Input = styled.input`
  width: 400px;
  height: 35px;
  border-radius: ${(props: any) => props.theme.basic.borderRadius};
  border: 1px solid #e8e8e8;
  font-size: 17px;
  padding-right: 10px;
  padding-left: 10px;
  background-color: rgba(0,0,0,0);
  :focus{
    outline: none
  }
  color: ${(props: any) => props.theme.colors.defaultFont};
  ${media.mobile`
    width: 80%;
    margin-bottom: 10px;
  `}
`;

export default Input;