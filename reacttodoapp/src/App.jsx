import { useState } from "react";
import './App.css';

function App() {
  const [toDo, setTodo] = useState('');
  const [toDos, setTodos] = useState([]);

  const onChange = (event) => {
  setTodo(event.target.value)    
  };

  const onSubmit = (event) => {    
    event.preventDefault();
    
    if(toDo===''){
      return;
    }   
    setTodos((currentArray) => [toDo,...currentArray]); 
    setTodo('');         
  }
  
  return (
    <div>
      <h1>My To Dos</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          onChange={onChange}
          value={toDo}
          placeholder="Type your To Do 💻"/>
        <button>Add to do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}        
      </ul>
    </div>
  )
}

export default App