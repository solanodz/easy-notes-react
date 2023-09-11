
import ToDo from '../routes/ToDo'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './TodoForm'
import { useState } from 'react'
import EditTodoForm from './EditTodoForm'
uuidv4()

const TodoWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTodo = (todo, createdAt) => {
        setTodos([...todos, {
            id: uuidv4(),
            task: todo,
            completed: false,
            isEditing: false,
            createdAt: createdAt
        }])
        console.log(todos)
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) =>
                todo.isEditing ? (
                    // eslint-disable-next-line react/jsx-key
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                    <ToDo
                        key={todo.id}
                        task={todo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        toggleComplete={toggleComplete}
                    />
                )
            )}
        </div>
    )
}

export default TodoWrapper
