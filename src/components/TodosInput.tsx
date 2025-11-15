import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

function TodoInput(){
    const {todos} = useContext(TodosContext);

function addHandler(){
    
}
return(
    <>
        <h1>Todos Input</h1>
          <input type="text" placeholder="enter a task"/>
           <button onClick={addHandler}>Add Task</button>
    </>
)

}

export default TodoInput;