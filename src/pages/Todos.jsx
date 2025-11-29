import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos } from "../features/todos/todosSlice"
import AddTodoForm from "../components/AddTodoForm"
import TodoList from "../components/TodoList"

function Todos () {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.items)
    const [theme, setTheme] = useState("dark")

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    const themeStyles = {
        dark: {
            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
            color: 'white'
        },
        light: {
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            color: '#333'
        },
        blue: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white'
        }
    }

    return (
        <div style={{
            minHeight: '100vh',
            padding: '2rem',
            transition: 'all 0.3s ease',
            ...themeStyles[theme]
        }}>
            {/* Theme Switcher */}
            <div style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                display: 'flex',
                gap: '1rem'
            }}>
                <button 
                    onClick={() => setTheme('dark')}
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#1e3c72',
                        border: theme === 'dark' ? '3px solid white' : 'none',
                        cursor: 'pointer',
                        transition: 'transform 0.2s'
                    }}
                    aria-label="Dark theme"
                ></button>
                <button 
                    onClick={() => setTheme('light')}
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#f5f7fa',
                        border: theme === 'light' ? '3px solid #333' : 'none',
                        cursor: 'pointer',
                        transition: 'transform 0.2s'
                    }}
                    aria-label="Light theme"
                ></button>
                <button 
                    onClick={() => setTheme('blue')}
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#667eea',
                        border: theme === 'blue' ? '3px solid white' : 'none',
                        cursor: 'pointer',
                        transition: 'transform 0.2s'
                    }}
                    aria-label="Blue theme"
                ></button>
            </div>

            <h1 style={{
                textAlign: 'center',
                fontSize: '4rem',
                fontWeight: '300',
                margin: '4rem 0 2rem 0',
                letterSpacing: '2px'
            }}>Just do it.</h1>

            <AddTodoForm />
            <TodoList todos={todos} />
            
            <div style={{
                textAlign: 'center',
                marginTop: '3rem',
                opacity: 0.7,
                fontSize: '0.9rem'
            }}>
                {new Date().toLocaleString('en-US', { 
                    month: '2-digit', 
                    day: '2-digit', 
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true 
                })}
            </div>
        </div>
    )
}

export default Todos