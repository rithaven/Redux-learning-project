import { useDispatch } from "react-redux";
import {login, logout} from "../features/user";

const Login = () => {
  const dispatch = useDispatch()
  return (
    <div className="top-0 flex items-center justify-center gap-4">
      <button onClick={() =>{
        dispatch(login( {name: "Ritha", age: 20, email: "ritha@gmail.com"}));
      }} className="p-2 text-white border rounded-xl bg-blue-950"> Login </button>
      <button onClick={() =>{
        dispatch(logout());
      }} className="p-2 text-white border rounded-xl bg-blue-950">Logout</button>
    </div>
  );
};

export default Login;
