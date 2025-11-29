import { useDispatch } from "react-redux"
import { updateTodo, deleteTodo } from "../features/todos/todosSlice"

function TodoItem ({ todo, theme }) {
  const dispatch = useDispatch()

  const toggleComplete = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }))
  }

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  }

  const isLight = theme === 'light'

  return (
    <li style={{
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      padding: '20px 25px',
      marginBottom: '12px',
      background: isLight 
        ? 'rgba(255, 255, 255, 0.8)' 
        : 'rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      listStyle: 'none'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateX(5px)'
      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateX(0)'
      e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)'
    }}
    >
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={toggleComplete}
        style={{
          width: '20px',
          height: '20px',
          cursor: 'pointer',
          accentColor: isLight ? '#2d3436' : '#00cec9'
        }}
      />
      <span style={{
        flex: 1,
        fontSize: '16px',
        color: isLight ? '#2d3436' : 'white',
        textDecoration: todo.completed ? 'line-through' : 'none',
        opacity: todo.completed ? 0.5 : 1,
        transition: 'all 0.3s ease',
        textAlign: 'left'
      }}>
        {todo.title}
      </span>
      <button 
        onClick={handleDelete}
        style={{
          background: 'transparent',
          border: 'none',
          color: isLight ? '#d63031' : '#ff7675',
          fontSize: '24px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          padding: '5px 10px'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.2)'
          e.target.style.color = '#d63031'
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)'
          e.target.style.color = isLight ? '#d63031' : '#ff7675'
        }}
      >
        🗑️
      </button>
    </li>
  )
}

export default TodoItem