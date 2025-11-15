import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import { FilterContext } from "../context/FilterContext";
import { ThemeContext } from "../context/ThemeContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useContext(TodosContext);
  const { filter } = useContext(FilterContext);

  const { theme, setTheme } = useContext(ThemeContext);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }
    if (filter === "completed") {
      return todo.completed;
    }

    return true; // if i select all button
  });
  // console.log();

  // const toggleTheme = (() => {
  //     if (theme === 'light'){
  //         console.log('it is light');

  //     }
  //     if (theme === 'dark'){
  //         console.log('it is dark');

  //     }
  // })

  // Toggle button handlers
  //   const light = () => setTheme('light');

  return (
    <div>
      <h2>Todos List</h2>
      {todos.length === 0 && <p>No todos yet!</p>}

      {/* <button onClick={toggleTheme}>Switch to Dark</button> */}

      {/* <input type="text" placeholder="enter a task"/>
           <button>Add Task</button> */}
      {/* {filteredTodos.map(todo => <li key={todo.id}>{todo.text}</li>)} */}
      {/* {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
             ))} */}
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
