
import ToDo from '../routes/ToDo'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './TodoForm'
import EditTodoForm from './EditTodoForm'
import { useEffect, useState } from 'react'
uuidv4()

const TodoWrapper = () => {

    const [todos, setTodos] = useState([])

    // Obtener tareas del localStorage al cargar el componente
    useEffect(() => {
        const storedTodos = localStorage.getItem('todos')
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos))
        }
    }, [])

    // Funcion para agregar una tarea
    const addTodo = (todo, createdAt) => {
        const newTodo = {
            id: uuidv4(),
            task: todo,
            completed: false,
            isEditing: false,
            createdAt: createdAt
        }
        const updateTodos = [...todos, newTodo]
        setTodos(updateTodos)
        // Guardar el el localStorage
        localStorage.setItem('todos', JSON.stringify(updateTodos))
    }

    const toggleComplete = (id) => {
        const updateTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        setTodos(updateTodos)
        // Guardar el el localStorage
        localStorage.setItem('todos', JSON.stringify(updateTodos))
    }

    const deleteTodo = id => {
        const updateTodos = todos.filter(todo => todo.id !== id)
        setTodos(updateTodos)
        // Guardar el el localStorage
        localStorage.setItem('todos', JSON.stringify(updateTodos))
    }

    const editTodo = id => {
        const updateTodos = todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)
        setTodos(updateTodos)
        // Guardar el el localStorage
        localStorage.setItem('todos', JSON.stringify(updateTodos))
    }

    const editTask = (task, id) => {
        const updateTodos = todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)
        setTodos(updateTodos)
        // Guardar el el localStorage
        localStorage.setItem('todos', JSON.stringify(updateTodos))
    }

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) =>
                todo.isEditing ? (
                    // eslint-disable-next-line react/jsx-key
                    <EditTodoForm
                        editTodo={editTask}
                        task={todo}
                        key={todo.id}
                    />
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
