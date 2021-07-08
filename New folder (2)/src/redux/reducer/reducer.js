import { combineReducers } from 'redux';

import todosReducer from '../../todos/todoLIst/todosSlice';
import filtersReducer from '../../todos/todoLIst/todosSlice';  

const rootReducer = combineReducers({

  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer;