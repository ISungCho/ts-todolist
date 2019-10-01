import React from 'react';
import styled from 'styled-components';

// style
const List = styled.li`
// border-radius: 3px;
font-size: 17px;
padding: 10px 15px;
margin-bottom: 5px;
// border: 1px solid #e8e8e8;
border-bottom: 1px solid #e8e8e8;
`

const Button = styled.button`
float: right;
color: #ffb7b7;
border: none;
font-size: 14px;
background: rgba(0,0,0,0);
transition: opacity 0.5s;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
  :focus{
    outline: none;
  }
`

const Text = styled.span`
text-decoration: ${(props: StyleProps) => props.done ?
  "line-through" : "none"
}
`
interface StyleProps {
  done: boolean
}

interface Props {
  text: string;
  done: boolean;
  onToggle(): void;
  onRemove(): void;
}

const TodoItem: React.FunctionComponent<Props> = ({text, done, onToggle, onRemove}) => (
  <List>
    <Text onClick={onToggle} done={done} >
      {text}
    </Text>
    <Button onClick={onRemove}>[ 지우기 ]</Button>
  </List>
)

export default TodoItem;