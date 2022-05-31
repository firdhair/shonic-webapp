import { Route, Routes } from 'react-router-dom';
import Auth from './pages/auth_page/Auth';
import Home from './pages/home_page/Home';

//Component
import FotAuth from '../src/components/auth_component/FotAuth';
import NavAuth from '../src/components/auth_component/NavAuth';
import ResetPassDone from '../src/components/auth_component/ResetPassDone';
import ResetPassNext from '../src/components/auth_component/ResetPassNext'; 
import ResetPass from '../src/components/auth_component/ResetPass'; 

//react router
import Login from '../src/components/auth_component/Login'; 
import Register from '../src/components/auth_component/Register'; 

function App() {
  return (
   <>
    <NavAuth />
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}></Route>
        <Route path="resetpass" element={<ResetPass/>}></Route>
      </Route>
    </Routes>
    <FotAuth />
   </>
  );
}

export default App;
