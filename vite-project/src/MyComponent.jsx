import { useContext } from "react";
//제가 매번 작성하기 귀찮아서 아마도
//import React from 'react'가 있을 수도 있습니다. 그런가보다 하면 됩니다. 
import AuthContext from "./AuthContext";
//import React from 'react'가 있ㅇ르 수도 있습니다. 그런가보다 하면 됩니다. 
function MyComponent(){
  const authContext = useContext(AuthContext);

  return (
    <>
      Welcome {authContext}
    </>

  );
}

export default MyComponent;


