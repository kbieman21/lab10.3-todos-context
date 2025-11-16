import { useContext, useState, type ChangeEvent } from "react";
import { TodosContext } from "../context/TodosContext";



function TodoInput(){
    const [text, setText] = useState("");
    const { addTodo} = useContext(TodosContext);

function handleChange(event:ChangeEvent<HTMLInputElement>){
    setText(event.target.value);
}

function handleSubmit() {
    if (text.trim() === "") return;
    addTodo(text);
    //setText(""); // clear input
  }


return(
    <>
       
          <input 
            type="text" 
            placeholder="What needs to be done" 
            value={text}
            onChange={handleChange}/>
        <button onClick={handleSubmit}>Add Task</button>
    </>
)

}

export default TodoInput;

/*
Purpose:
	• shows a text input
	• lets user press Enter or click a button to add a todo
	• calls addTodo(text) from context
Directions:
	• create a local state: text
	• controlled input: value={text}
	• on submit → call addTodo(text)
	• clear the input after adding
This component does NOT display any todos.
 */