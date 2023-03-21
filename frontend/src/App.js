import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  // Makes an axios requst to backend express app
  const callBackend = async () => {
    const req = await axios.get("http://localhost:9000");
    setData(req.data.itemList);
  };

  useEffect(() => {
    callBackend();
  }, []);

  return (
    <div className="App">
      <form>
        <label>input text</label>
        <input type="text"></input>
        <button type="submit">Add item</button>
      </form>

      {data.map((todo) => {
        return (
          <div>
            <li key={todo.id}>{todo.textinput}</li>
            <p>{todo.numinput}</p>
            <button>Edit</button>
            <button>Remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
