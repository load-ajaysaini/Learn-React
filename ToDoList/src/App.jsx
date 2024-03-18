import { useState } from "react"
import { ToDoProvider } from "./contexts"



function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todos) => {
    
  }

  return (
    <ToDoProvider value ={{todos, addTodo, deleteToDo, updateToDo, toggleComplete}}>
    <div className="bg-[#152d5a] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-lg bg-blue-700 rounded-lg px-4 py-3 text-white">
                    <h1 className="text-6xl font-bold text-center mb-8 mt-6">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </ToDoProvider>
  )
}

export default App
