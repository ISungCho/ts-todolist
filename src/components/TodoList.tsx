import React from 'react';
import TodoItem from './TodoItem';
import { TodoItemDataParams } from '../store/modules/todos';
import styled from 'styled-components';
import Button from '../styled-components/Button';
import Input from '../styled-components/Input';

// style
const Title = styled.div`
font-size: 20px;
padding: 15px;
text-align: center;
font-weight: 500;
`

const Form = styled.form`
text-align: center;
`

const ListWrapper = styled.ul`
list-style-type: none;
border-top: 2px solid #e8e8e8;
padding: 15px;
`

// type
interface Props {
  input: string;
  todoItems: TodoItemDataParams[];
  onCreate(): void;
  onRemove(id: number): void;
  onToggle(id: number): void;
  onChange(e: any): void;
}

// component
const TodoList: React.FunctionComponent<Props> = ({
  input,
  todoItems,
  onCreate,
  onRemove,
  onToggle,
  onChange
}) => {
  const todoItemList = todoItems.map(todo =>
    todo ? (
      <TodoItem
        key={todo.id}
        done={todo.done}
        onToggle={() => onToggle(todo.id)}
        onRemove={() => onRemove(todo.id)}
        text={todo.text}
      />
    ) : null);

  return (
    <div>
      <Title>TO-DO LIST</Title>
      <Form onSubmit={(e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        onCreate();
      }}>
        <Input onChange={onChange} value={input} />
        <Button primary>추가하기</Button>
      </Form>
      <ListWrapper>
        {todoItemList}
      </ListWrapper>
    </div>
  );
}

export default TodoList;