import {useReducer } from 'react';
import './App.css'
import LoginForm from './components/LoginForm';
import Reducer from './reducer/reducer';



function App() {

  // const [id, setId] = useState('');
  // const [password, setPassword] = useState('');

  const [state, dispatch] = useReducer(Reducer, {isLogin: false, message: '', })

  
  return (
    <div>
      {state.isLogin ? (
        <>
        <strong>welcome!</strong>
        <button onClick={() => dispatch({type:"LOGOUT"})}>로그아웃</button>
        </>
      ): (
      <>
        <LoginForm state={state} dispatch={dispatch}/>
      </>
      )}      
    </div>
  );
}

export default App
