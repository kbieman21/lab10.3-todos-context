import { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";

import { FaPencilAlt } from "react-icons/fa";

interface TodoItemProps {
  todo: {
    id: string;
    text: string;
    completed: boolean;
  };
}

function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, deleteTodo, editTodo } = useContext(TodosContext);

  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo.text);

    


  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        {isEditing ? (
          // it is in edit mode
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => {
              editTodo(todo.id, value);
              setIsEditing(false);
            }}
          />
        ) : (
          <span
            className="cursor-pointer flex items-center gap-2"
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}

            {/* pencil button */}
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 hover:text-blue-700 ml-2 "
            >
              <FaPencilAlt />
            </button>
          </span>
        )}
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
      
      

    </>
  );
}

export default TodoItem;
