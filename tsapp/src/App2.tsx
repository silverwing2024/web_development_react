import { useState } from 'react'
import './App.css'

function App() {
  
  const [name, setName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert(`안녕, ${name}!`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="Name" onChange = {handleChange} value={name} />
      {/* <input type="text" name="Name" onChange = {event => setName(event.target.value)} value={name} /> */}
      <input type="submit" value="제출"/>
    </form>
  )
}

export default App
