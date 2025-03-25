import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {

  const tasks=[
    {
      todoname:"khelne ja",
      date:'2/2/2004'
    },
    {
      todoname:"ho gya?",
      date:'23/4/2010'
    }
  ]

  return (
    <>
      <center className="todo-container">

        <AppName/>
        <AddTodo/>
        <div className="items-container">
          <TodoItem taks={tasks}/>
        </div>
      </center>
    </>
  )
}

export default App;
