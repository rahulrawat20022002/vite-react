import "./App.css";
import {TodoProvider}

function App() {
  return (
    <TodoProvider value={todos,updateTodo}>
      <h1>hello</h1>
    </TodoProvider>
  );
}

export default App;
