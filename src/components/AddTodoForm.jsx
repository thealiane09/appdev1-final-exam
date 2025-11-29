import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todos/todosSlice"

function AddTodoForm ({ theme }) {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  const handleAdd = (e) => {
    e.preventDefault()
    if (title.trim() === "") return
    dispatch(addTodo(title))
    setTitle("")
  }

  const isLight = theme === 'light'

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <form onSubmit={handleAdd} style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
        <input
          className="todo-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a task."
          style={{
            flex: 1,
            padding: '18px 25px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '30px',
            background: isLight 
              ? 'rgba(255, 255, 255, 0.9)' 
              : 'rgba(255, 255, 255, 0.15)',
            color: isLight ? '#2d3436' : 'white',
            outline: 'none',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }}
        />
        <button 
          className="todo-btn"
          type="submit"
          style={{
            padding: '18px 35px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '30px',
            background: isLight 
              ? 'rgba(45, 52, 54, 0.9)' 
              : 'rgba(255, 255, 255, 0.25)',
            color: 'white',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            whiteSpace: 'nowrap'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
          }}
        >
          I Got This!
        </button>
      </form>
    </div>
  )
}

export default AddTodoForm