import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail"

// Please wrap your <Route> in a <Routes>

function App(){

  return(
  <Router>
  {/*루트경로*/}
  <Routes>
    <Route path="/" element={<Home />} />

    {/*영화 상세 정보*/}
    <Route path="/movie/:id" element={<Detail />} />
  </Routes>
  </Router>
  
  );
}

export default App;