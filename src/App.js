import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Signup from "./component/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
