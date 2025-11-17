import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import { FilterContext } from "../context/FilterContext";

import TodoItem from "./TodoItem";
//import { todo } from "node:test";



interface TodoItemProps {
  todo: {
    id: string;
    text: string;
    completed: boolean;
  };
}


function TodoList({todo}: TodoItemProps) {
  const { todos, clearCompleted } = useContext(TodosContext);
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
      <button
  onClick={clearCompleted}
  disabled={!todos.some(t => t.completed)}
  className="
    px-4 py-2 mt-3 rounded-md
    text-white
    disabled:opacity-40 disabled:cursor-not-allowed
    bg-red-500 hover:bg-red-600
  "
>
  Clear Completed
</button>
    </div>
  );
}

export default TodoList;
