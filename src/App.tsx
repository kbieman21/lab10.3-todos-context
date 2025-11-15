import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodosList'
import TodoInput from './components/TodosInput'
import FilterControls from './components/FilterControls'

function App() {
  

  return (
    <>
     <h1>Todos Context</h1>
     <FilterControls/>
     <TodoList/>
     
    </>
  )
}

export default App
