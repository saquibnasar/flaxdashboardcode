import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Devices from "./component/Devices";
import Setting from "./component/Setting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/devices' element={<Devices />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/setting' element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
