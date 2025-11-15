import { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";


interface TodoItemProps{
    todo: {
    id: string;
    text: string;
    completed: boolean;
  };
}

function TodoItem({todo}:TodoItemProps){
    const {toggleTodo, deleteTodo, editTodo} = useContext(TodosContext)

    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(todo.text)

    return(
        <>
            <h1>Todo Item</h1>
            <li>
                <input 
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)} />

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
                    // this is normal display not edit mode
                    <span style={{textDecoration: todo.completed ? "line-through" : "none", }} 
                    onDoubleClick={() => setIsEditing(true)}
                    >
                        {todo.text}
                    </span>
                )}
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
            
        </>
    )
}

export default TodoItem;
