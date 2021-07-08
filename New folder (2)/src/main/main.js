import "./main.css"
import Header from "../todos/todoHeader/todoHeader";
import TodoList from "../todos/todoLIst/TodoList";


function MainTodoBlock() {
    return (
      <div className = "MainTodoBlock">
      <Header />
      <TodoList />
      </div>
    );
  }
  
  export default MainTodoBlock;
 