import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <ul style={{
      padding: 0,
      margin: '2rem auto',
      maxWidth: '600px'
    }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList