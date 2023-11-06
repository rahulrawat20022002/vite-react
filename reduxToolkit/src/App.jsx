import "./App.css";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-white">Todo List</h1>
      <TodoForm />
      <Todos />
    </>
  );
}

export default App;
