import React, { useState } from 'react';
import {Button} from 'antd'
import { useNavigate } from 'react-router-dom'
import { dataset, signUpUser } from '../Firebase/firebasefunction';
 const Signup = () => {

  const [model,setModel] = useState({});
  const navigate = useNavigate();

  const btn = () => {
    signUpUser(model)
    .then( async (res) => {
        console.log(res.user.uid);
        await dataset(`users`, model , res.user.uid);
    } ).catch((err)=>{
      console.log(err);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form  className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-6"> SignUp</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
          onChange={(e)=> setModel({...model, email:e.target.value})}
            type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
          onChange={(e)=> setModel({...model, password:e.target.value})}
            type="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
        onClick={btn}
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          SignUp
        </button>
        < Button onClick={()=> navigate('/login')} >
          Login
          </Button>
      </form>
      
    </div>
  );
};

export default Signup;