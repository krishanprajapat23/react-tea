import { useEffect, useState } from "react";
import {TodoProvider} from "./contexts";
import {TodoForm, TodoList} from "./components";


function App() {
  const [todos, setTodos] = useState([]);


  // Adds a new todo with a unique id to the todos list using setTodos
  const addTodo = (todo) => {
    const todoEl = {id: Date.now(), ...todo};
    setTodos((prev) => [...prev, todoEl]);
  }
  

  // Deletes the todo with the matching id by filtering it
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }


  // Updates a todo by replacing the one with the matching id
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  }


  // Toggles the completed status of the todo with the matching id
  const toggleCompleted = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
      )
    )
  }


  // getting items from local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])
  
  
  // set items from local storage
  useEffect(() => {
    localStorage.setItem('tooos', JSON.stringify(todos))
  }, [todos])
  

  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleCompleted}}>
      <div className="bg-dark min-vh-100 py-4">
        <div className="container">
            <div className="w-100 max-w-2xl mx-auto shadow-lg rounded-3 px-4 py-3 text-white bg-dark">
                <h1 className="fs-3 fw-bold text-center mb-5 mt-2">Manage Your Todos</h1>
                <div className="mb-4">
                    <TodoForm />
                </div>
                <div className="d-flex flex-wrap gap-3">
                    <div className="w-100">
                        {todos.map((todo) => (
                          <TodoList key={todo.id} todo={todo} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>

    </TodoProvider>
  )
}

export default App
