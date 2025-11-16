
import './App.css'
import TodoList from './components/TodosList'
import FilterControls from './components/FilterControls'
import ThemeToggle from './components/ThemeToggle'
import TodoInput from './components/TodosInput'

function App() {
  

  return (
    <>
     <h1>Todo App (Context API)</h1>
     <ThemeToggle/>
     <hr />
      
      <TodoInput text={""}/>
     <FilterControls/>    
     <TodoList/>
     
     
    </>
  )
}

export default App
