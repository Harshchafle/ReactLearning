import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {

  return (
    <>
      <center>

        <AppName/>
        <AddTodo/>
        <TodoItem/>

      </center>
    </>
  )
}

export default App;
