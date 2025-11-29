import TodoItem from "./TodoItem";

function TodoList({ todos, theme }) {
  return (
    <ul style={{
      listStyle: 'none',
      padding: '20px',
      margin: '0'
    }}>
      {todos.length === 0 ? (
        <div style={{
          padding: '60px 20px',
          textAlign: 'center',
          opacity: 0.6,
          fontSize: '18px'
        }}>
          No tasks yet. Add one above! 📝
        </div>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} theme={theme} />
        ))
      )}
    </ul>
  );
}

export default TodoList