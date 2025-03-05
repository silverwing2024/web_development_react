import AuthCOntext from "./AuthContext";
import MyComponent from "./MyComponent";

function App(){
  //사용자를 인증하고 사용자명을 가져온다. 
  const userName = 'john';

  return (
    <AuthCOntext.Provider value = {userName}>
      <MyComponent />

    </AuthCOntext.Provider>

  );

}

export default App;