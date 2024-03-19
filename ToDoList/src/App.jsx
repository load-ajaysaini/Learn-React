import { useEffect, useState } from "react"
import { ToDoProvider } from "./contexts"
import { ToDoForms } from "./components"
import { ToDoItem } from "./components" 



function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateToDo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteToDo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <ToDoProvider value ={{todos, addTodo, deleteToDo, updateToDo, toggleComplete}}>
    <div className="bg-[#152d5a] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-lg bg-blue-700 rounded-lg px-4 py-3 text-white">
                    <h1 className="text-6xl font-bold text-center mb-8 mt-6">Manage Your Todos</h1>
                    <div className="mb-4">
                        <ToDoForms />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                          <div key = {todo.id} className= "w-full">
                            <ToDoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </ToDoProvider>
  )
}

export default App
