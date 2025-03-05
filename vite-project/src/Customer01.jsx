// import {useContext} from "react";
// import {MenuContext} from "./Context";
// export default Customer01(){
//   const Price = useContext(MenuContext);
//   return <div>1번 고객님은 {Price.아메리카노}원을 지불합니다. </div>

// }


import { useContext } from "react";
import { MenuContext } from "./Context";
export default function Costomer01() {
  const price = useContext(MenuContext);
  return <div>1번 고객님은 {price.아메리카노}원을 지불합니다.</div>
}