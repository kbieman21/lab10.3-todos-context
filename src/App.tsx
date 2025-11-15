
import './App.css'
import TodoList from './components/TodosList'
import FilterControls from './components/FilterControls'
import ThemeToggle from './components/ThemeToggle'

function App() {
  

  return (
    <>
     <h1>Todos Context</h1>
      <ThemeToggle/>
     <FilterControls/>    
     <TodoList/>
     
    </>
  )
}

export default App
