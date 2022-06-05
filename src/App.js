import { Route, Routes } from 'react-router-dom';
// import Auth from './pages/auth_page/Auth';
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
import Veriffikasi from '../src/components/auth_component/Verif';
import LengkapiPendaftaran from '../src/components/auth_component/LoginNext';
import ResetPassVerif from './components/auth_component/ResetPassVerif';
import ProtectedRoute from '../src/components/auth_component/ProtectedRoute'

function App() {
  return (
    <>
      <NavAuth />
      <Routes>
          <Route index element={<Login />}></Route>
          <Route element={<ProtectedRoute/>}>
              <Route path="/home" element={<Home />}/>
          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="resetpass" element={<ResetPass />}></Route>
          <Route path="resetpass_next" element={<ResetPassNext />}></Route>
          <Route path="resetpass_done" element={<ResetPassDone />}></Route>
          <Route path="resetpass_verif" element={<ResetPassVerif />}></Route>
          <Route path="verifikasi" element={<Veriffikasi />}></Route>
          <Route path="lengkapi_pendaftaran" element={<LengkapiPendaftaran />}></Route>

      </Routes>
      <FotAuth />
    </>
  );
}

export default App;
