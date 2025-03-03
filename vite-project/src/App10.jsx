import {useState} from 'react';
import './App.css';

// function App(){
//   let drink = 0;

//   const drinkWater = ()=>{
//     drink += 1;
//     console.log(`버튼 클릭 횟수 : ${drink}번`);
//   }

//   return (
//     <>
//     <p>
//     오늘은 물을 <strong> {drink} </strong> 잔을 충전했습니다!!
//     </p>
//     <button onClick={drinkWater}>Water</button>
//     </>
//   )
// }

// export default App;


function App(){
  const [drink, setDrink] = useState(0);

  const drinkWater = () => {
    setDrink(drink + 1);
  }

  return (
    <>
    <p>
    오늘은 물을 <strong> {drink} </strong> 잔을 충전했습니다!!
    </p>
    <button onClick={drinkWater}>water</button>
    {console.log(`버튼 클릭 횟수 : ${drink}번`)}
    </>
  )
}

export default App;