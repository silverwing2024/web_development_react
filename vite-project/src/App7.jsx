import {useState, useEffect} from 'react';
import './App.css'

// function Counter(){

//   const[count, setCount] = useState(0);

//   //useEffect 적용
//   useEffect(() => {
//     console.log('useEffect가 실행이 되었습니다.')
//   });

//   return(
//   <>
//     <p>{count}</p>
//     <br />
//     <button onClick={()=>setCount(preCount => preCount + 1)}>+1 수행</button>
//   </>);
// }

// export default Counter;

// 이상의 코드대로 실행했을 경우 콜백 함수는 렌더링이 이루어질 때 마다 실행됨
// 즉, 버튼을 누를 때 마다 useEffect가 실행되었습니다가 출력될겁니다. 

// 이상의 문제를 해결하기 위한 방식으로 사용할 수 있는 방법이
// 두 번째 argument만 dependencies 배열을 이용하는 방법
// 이번에 작성할 코드는 count 상태 값이 변경되면(즉, 이전 값과 현재 값을 비교해서 달라졌다면)
//useEffect 콜백 함수가 호출되도록 정의하는 방식입니다.

// 두 번째 argument 는 배열이므로 내부에 다양한 element가 들어갈 수 있고, 여러 상태 값 중 하나만 변경되더라도 useEffect의 콜백함수가 호출되도록 작성할 수도 있습니다. 

// function Counter(){

//   const[count, setCount] = useState(0);

//   //useEffect 적용
//   useEffect(() => {
//     console.log('useEffect가 실행이 되었습니다.')
//   }, [count]);

//   return(
//   <>
//     <p>{count}</p>
//     <br />
//     <button onClick={()=>setCount(preCount => preCount + 1)}>+1 수행</button>
//   </>);
// }

// export default Counter;

// function Counter(){

//   const[count, setCount] = useState(0);

//   //useEffect 적용
//   useEffect(() => {
//     console.log('useEffect가 실행이 되었습니다.')
//   }, []);

//   return(
//   <>
//     <p>{count}</p>
//     <br />
//     <button onClick={()=>setCount(preCount => preCount + 1)}>+1 수행</button>
//   </>);
// }

// export default Counter;

//리소스 정리를 위한 useEffect

function Counter(){

  const[count, setCount] = useState(0);

  //useEffect 적용
  useEffect(() => {
    console.log('Hello from useEffect');
    return () => {
      console.log('Clean Up Function');
    }
  }, [count]);

  return(
  <>
    <p>{count}</p>
    <br />
    <button onClick={()=>setCount(preCount => preCount + 1)}>+1 수행</button>
  </>);
}

export default Counter;