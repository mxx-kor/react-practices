import { useState } from "react";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray])
    setToDo("");
  }
  return (
    <div>
      <h1>Daily To Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}><input type="checkbox"/>  {item}</li>)}
      </ul>
    </div>
  );
}

export default App;

//각 li태그에 체크박스가 체크되어있으면 밑줄
// 로컬 스토리지 가져오기.