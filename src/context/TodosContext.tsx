import { createContext, useState, useEffect } from "react";

const data = [
  {
    id: "1",
    text: "Design landing page",
    completed: true,
  },
  {
    id: "2",
    text: "Set up CI/CD pipeline",
    completed: true,
  },
  {
    id: "3",
    text: "Fix login bug",
    completed: false,
  },
  {
    id: "4",
    text: "Write unit tests",
    completed: false,
  },
  {
    id: "5",
    text: "Deploy to staging",
    completed: false,
  },
];

export const TodosContext = createContext(null);

interface TodosProviderProps {
  children: React.ReactNode;
}
export function TodosProvider({ children }: TodosProviderProps) {
  //state data
  //TODO: Read stored todos from localstorage

  const [todos, setTodos] = useState(() => {
    const storedToDos = localStorage.getItem("toDos");
    return storedToDos ? JSON.parse(storedToDos) : data;
  });
  console.log(todos);

  //TODO: store todos when the todos array changes
  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(todos));
  }, [todos]);

  //TODO: Actions
  const addTodo = (text) => {
    if (!text.trim()) return; // prevent empty todos

    const newTodo = {
      id: crypto.randomUUID(), // modern built-in ID generator
      text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  };

  const editTodo = (id, newText) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, text:newText}: todo));
  };

  const toggleTodo = (id) => {
     setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  };

  const clearCompleted = (id) => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  };
  

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        editTodo,
        clearCompleted,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
