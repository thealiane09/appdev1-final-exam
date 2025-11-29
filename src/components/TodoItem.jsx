import { useDispatch } from "react-redux"
import { updateTodo, deleteTodo } from "../features/todos/todosSlice"

function TodoItem ({ todo }) {
  const dispatch = useDispatch()

  const toggleComplete = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }))
  }

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  }

  return (
    <li style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem 1.5rem',
      marginBottom: '0.5rem',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50px',
      listStyle: 'none',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease'
    }}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={toggleComplete}
        style={{
          width: '20px',
          height: '20px',
          cursor: 'pointer'
        }}
      />
      <span style={{
        flex: 1,
        fontSize: '1rem',
        textDecoration: todo.completed ? 'line-through' : 'none',
        opacity: todo.completed ? 0.5 : 1
      }}>
        {todo.title}
      </span>
      <button 
        onClick={handleDelete}
        style={{
          width: '30px',
          height: '30px',
          border: 'none',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.2)',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.target.style.background = 'rgba(255, 0, 0, 0.5)'
          e.target.style.transform = 'scale(1.1)'
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.2)'
          e.target.style.transform = 'scale(1)'
        }}
      >
        ×
      </button>
    </li>
  )
}

export default TodoItem