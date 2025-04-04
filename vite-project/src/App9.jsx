import useTitle from "./script/useTitle";
import {useState} from "react"
import './App.css';

function Counter(){
  // 긁어왔으며 부족한 부분이 있는데 count/ setCount

  const[count, setCount] = useState(0);
  useTitle(`당신은 ${count}번 클릭했습니다.🎈`);

  return(
    <>
      <p>{count}</p>
      <br />
      <button onClick={()=>setCount(preCount => preCount + 1)}>증가</button>
    </>
  );
}

export default Counter;