import { useSelector } from "react-redux";
import jwt_decode from 'jwt-decode'
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { username, password } = useSelector((state) => state);
  const storage = window.localStorage;
  const token = storage.getItem('token') 
  const decoded = token ? jwt_decode(token) : {}
  const isLoggedIn = decoded.exp > (Date.now()/1000)

  //console.log("decoded", decoded);
  console.log("username: ", username, ", password: ", password);

  if (isLoggedIn) {
    return <Outlet />;
  }
  return <Navigate to={'/login'} />;
}
