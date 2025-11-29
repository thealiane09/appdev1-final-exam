import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos } from "../features/todos/todosSlice"
import AddTodoForm from "../components/AddTodoForm"
import TodoList from "../components/TodoList"

function Todos () {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.items)
    const [theme, setTheme] = useState("standard")
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const themes = {
        standard: {
            background: 'linear-gradient(to bottom right, #062e3f, #0a4d5c)',
            color: '#fff'
        },
        light: {
            background: 'linear-gradient(to bottom right, #ffeaa7, #fdcb6e)',
            color: '#2d3436'
        },
        darker: {
            background: 'linear-gradient(to bottom right, #000000, #434343)',
            color: '#fff'
        }
    }

    const currentTheme = themes[theme]

    const formatDateTime = () => {
        return currentTime.toLocaleString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        })
    }

    const totalTasks = todos.length
    const completedTasks = todos.filter(todo => todo.completed).length
    const pendingTasks = totalTasks - completedTasks

    return (
        <div style={{
            minHeight: '100vh',
            background: currentTheme.background,
            color: currentTheme.color,
            fontFamily: "'Work Sans', sans-serif",
            padding: '20px',
            transition: 'all 0.3s ease'
        }}>
            {/* Header with Theme Selector */}
            <div id="header" style={{
                textAlign: 'center',
                padding: '40px 0 20px 0'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '15px',
                    marginBottom: '30px'
                }}>
                    <div 
                        onClick={() => setTheme('standard')}
                        style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            background: 'linear-gradient(to bottom right, #062e3f, #0a4d5c)',
                            cursor: 'pointer',
                            border: theme === 'standard' ? '3px solid white' : '2px solid rgba(255,255,255,0.3)',
                            transition: 'all 0.3s ease'
                        }}
                    />
                    <div 
                        onClick={() => setTheme('light')}
                        style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            background: 'linear-gradient(to bottom right, #ffeaa7, #fdcb6e)',
                            cursor: 'pointer',
                            border: theme === 'light' ? '3px solid #2d3436' : '2px solid rgba(255,255,255,0.3)',
                            transition: 'all 0.3s ease'
                        }}
                    />
                    <div 
                        onClick={() => setTheme('darker')}
                        style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            background: 'linear-gradient(to bottom right, #000000, #434343)',
                            cursor: 'pointer',
                            border: theme === 'darker' ? '3px solid white' : '2px solid rgba(255,255,255,0.3)',
                            transition: 'all 0.3s ease'
                        }}
                    />
                </div>

                <h1 style={{
                    fontSize: '72px',
                    fontWeight: '300',
                    margin: '0',
                    letterSpacing: '2px'
                }}>
                    Just do it.
                    <div style={{
                        height: '3px',
                        width: '100px',
                        background: currentTheme.color,
                        margin: '10px auto 0 auto'
                    }} />
                </h1>
            </div>

            {/* Form */}
            <AddTodoForm theme={theme} />

            {/* Date Time Display */}
            <div style={{
                textAlign: 'center',
                fontSize: '14px',
                opacity: '0.7',
                margin: '20px 0'
            }}>
                <p>{formatDateTime()}</p>
            </div>

            {/* Productivity Panel */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '30px',
                margin: '30px 0',
                flexWrap: 'wrap'
            }}>
                {/* Task Statistics */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '20px 30px',
                    borderRadius: '15px',
                    backdropFilter: 'blur(10px)',
                    minWidth: '200px'
                }}>
                    <h3 style={{
                        margin: '0 0 15px 0',
                        fontSize: '18px',
                        fontWeight: '600'
                    }}>Task Statistics</h3>
                    <p style={{ margin: '8px 0' }}>Total: <strong>{totalTasks}</strong></p>
                    <p style={{ margin: '8px 0' }}>Completed: <strong>{completedTasks}</strong></p>
                    <p style={{ margin: '8px 0' }}>Pending: <strong>{pendingTasks}</strong></p>
                </div>

                {/* Streak Box */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '20px 30px',
                    borderRadius: '15px',
                    backdropFilter: 'blur(10px)',
                    minWidth: '200px',
                    textAlign: 'center'
                }}>
                    <h3 style={{
                        margin: '0 0 15px 0',
                        fontSize: '18px',
                        fontWeight: '600'
                    }}>🔥 Daily Streak</h3>
                    <p style={{ margin: '10px 0', fontSize: '24px', fontWeight: 'bold' }}>0 days</p>
                    <button style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '20px',
                        color: currentTheme.color,
                        cursor: 'pointer',
                        fontSize: '14px',
                        marginTop: '10px'
                    }}>
                        Mark today as done ✅
                    </button>
                </div>
            </div>

            {/* Todo List */}
            <div style={{
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <TodoList todos={todos} theme={theme} />
            </div>
        </div>
    )
}

export default Todos