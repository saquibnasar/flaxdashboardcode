import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Devices from "./component/Devices";
import Setting from "./component/Setting";
import CreateCard from "./component/CreateCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createCard' element={<CreateCard />} />
        <Route path='/devices' element={<Devices />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/setting' element={<Setting type="setting" />} />
        <Route path='/setting_subscription' element={<Setting type="subscription" />} />
        <Route path='/setting_support' element={<Setting type="support" />} />
        <Route path='/setting_devices' element={<Setting type="devices" />} />
        <Route path='/setting_admin' element={<Setting type="admin" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
