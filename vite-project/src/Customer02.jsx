// import {useContext} from "react";
// import {MenuContext} from "./Context";
// export default Customer02(){
//   const Price = useContext(MenuContext);
//   return <div>2번 고객님은 {Price.카페라떼}원을 지불합니다. </div>

// }
import { useContext } from "react";
import { MenuContext } from "./Context";
export default function Costomer02() {
  const price = useContext(MenuContext);
  return <div>2번 고객님은 {price.카페라떼}원을 지불합니다.</div>
}