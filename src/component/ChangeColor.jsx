import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

const ChangeColor = () => {
  
     const [color, setColor] = useState("");
     const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-between">
      <input className="mt-4 border border-red-900 rounded-md"
       type="text"
        onChange={(event) =>{
        setColor(event.target.value);
      }} 
      />
        <button onClick={()=> {
          dispatch(changeColor(color));
        }} className='p-4 mt-4 font-bold text-white rounded-xl bg-blue-950'>CHANGE COLOR</button>
    </div>
  )
}

export default ChangeColor;