import {useRef} from 'react';
import './App.css'

export default function App() {

  const textInput = useRef(null);// textInput 내에 {current: null}

  const ClickBtn = () => {
    console.log('클릭');
  }

  const handleClickBtn = () => {
    console.log('useRef 클릭');
    textInput.current.focus(); // useRef가 가리키는 input태그에 포커스 이벤트 적용
  }

  return (
    <div>
      <input type="text" />
      <input type="button" value="ref X" onClick={ClickBtn}/>
      <br />
      <br />
      <br />
      <input type="text" ref={textInput}/>
      <input type="button" value="ref X" onClick={handleClickBtn}/>
    </div>

  );
}