import { Route, Routes } from 'react-router-dom';
import Home from './pages/homepage/Home';
import Login from './pages/loginpage/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
