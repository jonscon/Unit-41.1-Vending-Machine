import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import VendingMachine from "./VendingMachine.jsx";
import Popcorn from "./Popcorn.jsx";
import Pocky from "./Pocky.jsx";
import Soda from "./Soda.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<VendingMachine />} />
            <Route path="/popcorn" element={<Popcorn />} />
            <Route path="/pocky" element={<Pocky />} />
            <Route path="/soda"element={<Soda />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
