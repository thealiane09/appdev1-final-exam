import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todos/todosSlice"

function AddTodoForm () {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (title.trim() === "") return
    dispatch(addTodo(title))
    setTitle("")
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleAdd()
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      margin: '2rem auto',
      maxWidth: '600px'
    }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a task..."
        style={{
          flex: 1,
          padding: '1rem 1.5rem',
          fontSize: '1rem',
          border: 'none',
          borderRadius: '50px',
          background: 'rgba(255, 255, 255, 0.2)',
          color: 'white',
          outline: 'none',
          backdropFilter: 'blur(10px)'
        }}
      />
      <button 
        onClick={handleAdd}
        style={{
          padding: '1rem 2rem',
          fontSize: '1rem',
          border: 'none',
          borderRadius: '50px',
          background: 'rgba(255, 255, 255, 0.3)',
          color: 'white',
          cursor: 'pointer',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)'
        }}
        onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.5)'}
        onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
      >
        I Got This!
      </button>
    </div>
  )
}

export default AddTodoForm