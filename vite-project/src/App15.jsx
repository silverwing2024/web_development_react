import Customer1 from './Customer1';
import Customer2 from './Customer2';

import { MenuContext } from "./Context";

function App() {
  return (
    <MenuContext.Provider
      value={{
        아메리카노: "3500",
        카페라떼: "4000",
      }}
    >
      <Customer1 />
      <Customer2 />
    </MenuContext.Provider>
  );
}

export default App;