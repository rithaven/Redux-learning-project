import React from 'react';
import { useSelector } from 'react-redux';

export const Profile = () => {
   const user = useSelector((state) => state.user.value);
   const themeColor = useSelector((state) => state.theme.value);
   
   return (
    <div style={{color: themeColor}} className='flex flex-col items-center justify-center mt-20'>
       <h1 className='my-4 text-3xl font-bold'>Profile page </h1> 
       <div className='items-center'>
       <p><span className='font-bold'>Name: </span> {user.name}</p>
       <p><span className='font-bold'> Age: </span> {user.age}</p>
       <p><span className='font-bold'>Email:</span> {user.email}</p>
       </div>
    </div>
  )
}
