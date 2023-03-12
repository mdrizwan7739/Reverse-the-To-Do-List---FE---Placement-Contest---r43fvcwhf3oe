import React, { useState } from 'react'
import '../styles/App.css';

function ToDo({todoId,createdAt}) {
  return (<tr>
    <td>
      <p>{todoId}</p>
    </td>
    <td>
      <input placeholder="Enter text here" />
    </td>
    <td>
      <p>{createdAt}</p>
    </td>
  </tr>
);
}

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);
  const reverseBtn=()=>{
  setTodos([...todos].reverse());
  };

  return (
    <div id="main">
      <button onClick={reverseBtn}>Reverse</button>
      <table>
        <tbody>
    {
    todos.map((todo)=>(
    <Todo key ={todo.id} todoid ={todo.id} createdAt={todo.createdAt} />
    ))
  }
        </tbody>
      </table>
    </div>
  )
}


export default App;
