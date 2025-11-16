import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import { FilterContext } from "../context/FilterContext";
import { ThemeContext } from "../context/ThemeContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useContext(TodosContext);
  const { filter } = useContext(FilterContext);



  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }
    if (filter === "completed") {
      return todo.completed;
    }

    return true; // if i select all button
  });
  

  return (
    <div>
    
      {todos.length === 0 && <p>No todos yet! Add one above</p>}
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
