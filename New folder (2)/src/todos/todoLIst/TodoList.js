import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import TodoListItem from '../todoLIst/TodoListItem';

const selectTodoIds = (state) => state.todos.map((todo) => todo.id);

const TodoList = () => {

  const todoIds = useSelector(selectTodoIds, shallowEqual)

  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId}  />
    
  })

  return <div>{renderedListItems}</div>
}

export default TodoList;