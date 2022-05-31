import { Route, Routes } from 'react-router-dom';
import Auth from './pages/auth_page/Auth';
import Home from './pages/home_page/Home';
<<<<<<< HEAD
=======

//Component
import FotAuth from '../src/components/auth_component/FotAuth';
import NavAuth from '../src/components/auth_component/NavAuth';
import ResetPassDone from '../src/components/auth_component/ResetPassDone';
import ResetPassNext from '../src/components/auth_component/ResetPassNext'; 
import ResetPass from '../src/components/auth_component/ResetPass'; 

//react router
import Login from '../src/components/auth_component/Login'; 
import Register from '../src/components/auth_component/Register'; 
>>>>>>> d3c54db2459db64d4a8e9699dca0e032be3741cf

function App() {
  return (
   <>
    <NavAuth />
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Auth />}></Route>
=======
      <Route path="/">
        <Route index element={<Home/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}></Route>
        <Route path="resetpass" element={<ResetPass/>}></Route>
      </Route>
>>>>>>> d3c54db2459db64d4a8e9699dca0e032be3741cf
    </Routes>
    <FotAuth />
   </>
  );
}

export default App;
