import { useState } from "react";
import { useTodo } from "../contexts";

function TodoList({todo}) {
    const [todoEditable, setTodoEditable] = useState(false);
    const [todoText, setTodoText] = useState(todo.todo);

    const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoText})
    }

    const toggleComplete = () => {
        toggleCompleted(todo.id)
    }

  return (
    <div
            className={`d-flex border rounded-3 px-3 py-2 gap-3 shadow-sm mb-3 ${
                todo.completed ? 'bg-success' : 'bg-secondary'
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleComplete}
            />
            <input
                type="text"
                className={`form-control border-0 bg-transparent ${todoEditable ? 'border-black' : 'border-0 shadow-none'} ${
                    todo.completed ? 'text-decoration-line-through' : ''
                }`}
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                readOnly={!todoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="btn btn-light btn-sm rounded-3 w-auto px-3"
                onClick={() => {
                    if (todo.completed) return;
                    if (todoEditable) {
                        editTodo();
                    } else {
                        setTodoEditable(!todoEditable);
                    }
                }}
                disabled={todo.completed}
            >
                {todoEditable ? '📁' : '✏️'}
            </button>
            {/* Delete Todo Button */}
            <button
                className="btn btn-light btn-sm rounded-3 w-auto px-3"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
  )
}

export default TodoList
