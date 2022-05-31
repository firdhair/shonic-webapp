import { Route, Routes } from 'react-router-dom';
import Auth from './pages/auth_page/Auth';
import Home from './pages/home_page/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Auth />}></Route>
    </Routes>
  );
}

export default App;
