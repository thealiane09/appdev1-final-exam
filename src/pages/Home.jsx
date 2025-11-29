import { Link } from "react-router-dom";

function Home () {
  return (
    <div>
      <h1>Welcome to the Todo App</h1>
      <Link to="/login">Go to Login</Link>
    </div>
  )
}

export default Home