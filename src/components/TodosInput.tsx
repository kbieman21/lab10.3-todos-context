import { useContext, useState, type ChangeEvent } from "react";
import { TodosContext } from "../context/TodosContext";



function TodoInput(){
    const [text, setText] = useState("");
    const {addTodo} = useContext(TodosContext);

function handleChange(event:ChangeEvent<HTMLInputElement>){
    setText(event.target.value);
}

function handleSubmit() {
    if (text.trim() === "") return;
    addTodo(text);
    setText(""); // clear input
  }


return(
    <div className="flex gap-3 mt-8 mb-8">
       
          <input 
            type="text" 
            placeholder="What needs to be done" 
            value={text}
            onChange={handleChange}
            className="flex-1 px-4 py-2
          border "/>
        <button onClick={handleSubmit} className="px-5 py-2 rounded-md
          ">Add Task</button>
    </div>
)

}

export default TodoInput;

