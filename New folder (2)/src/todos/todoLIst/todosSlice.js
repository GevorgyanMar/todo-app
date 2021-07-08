import {CHANGE_TEXT} from "./constants";

const initialState = [];
function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      const newTodos = [...state];
      newTodos.push({
        id: nextTodoId(state),
        text: action.payload,
        completed: false,
      });
      return  [...newTodos];
    }
    case 'todos/todoToggled': {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    }

    case 'todos/todoDeleted': {
      return state.filter((todo) => todo.id !== action.payload)
    }
    case CHANGE_TEXT:
      const newTodos = state.map(item => {
        if (item.id === action.payload.id) {
          return {...item, text: action.payload.text};
        }
        return item;
      });
      return [...newTodos];
  
    default:
      return state;
  }
}
