import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
    const [todo, setTodo] = useState('');


    const {addTodo} = useTodo();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!todo) return;

        addTodo({todo, completed: false})
        setTodo("");
        console.log(todo)
    }
  return (
    <form onSubmit={handleSubmit} className="d-flex">
        <input
            type="text"
            placeholder="Write Todo..."
            className="form-control border-end-0 rounded-start px-3 py-2 bg-light"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
        <button
            type="submit"
            className="btn btn-success rounded-end px-3 py-2"
        >
            Add
        </button>
    </form>
  )
}

export default TodoForm
