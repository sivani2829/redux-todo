import { useDispatch } from "react-redux";
import { useState } from "react";
import { addtodo } from "./action";
import TodoList from "./TodoList";
import logo from "./logo.svg";
import "./App.css";
import store from "./store";

let days=['sun','mon','tues','wed','thurs','friday','sat']

function App() {
  const [titleName, setTitleName] = useState("");
  const [day,setDay]=useState('')
  // const[idn,setIdn]=useState(1);
  let dispatch = useDispatch();

  const handleTodo = () => {
    if (titleName.trim()) {
      // setIdn(prev=>prev+1)
      let newTodo = { title: titleName };
      dispatch(addtodo(newTodo));
      setTitleName(" ");
    }
  };
  

  return (
    <div className="container mt-5 w-50">
      <h2 className="text-primary text-center">
        Todo Application Using React Redux
      </h2>
      
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setTitleName(e.target.value)}
        />
        <button className="btn btn-primary ml-3" onClick={() => handleTodo()}>
          Add
        </button>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
