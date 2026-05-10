import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';
const Login = () => {

 const { signInWithEmailPass } = useContext(AuthContext);
  const [showPass,setShowPass]=useState(false)
  const handleLoginForm =(e)=>{
    e.preventDefault();

    const email=e.target.email.value;
    const password=e.target.password.value;

    signInWithEmailPass(email,password)
    .then(result =>{
      const user=result.user
      console.log(user);
      
    }).catch((err)=>{
      console.error(err)
    })
    


  }
  return (
    <div className="flex items-center justify-center h-[125vh] bg-green-950 pt-10">
      <div className=" bg-white p-8 w-100">
        <h2 className="text-green-800 font-bold text-center text-2xl mb-6">
          Login
        </h2>
        <form onSubmit={handleLoginForm} className="space-y-4 ">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              name="email"
              id=""
            />
          </div>

          <div className="flex relative items-center">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              name="password"
              id=""
            />
            {showPass ? (
              <FaEye
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 cursor-pointer"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 cursor-pointer"
              />
            )}
          </div>

          <p className="text-right hover:text-green-400 cursor-pointer hover:underline">
            Forgot Password
          </p>
          <button
            type="submit"
            className="w-full text-white bg-green-700 hover:bg-green-800 cursor-pointer py-2 rounded font-bold mb-2"
          >
            Login
          </button>
        </form>

        {/* Divider Here */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-700 "></div>
          <span className="mx-5 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-700 "></div>
        </div>
        <div className="flex flex-col space-y-3 text-white mt-6">
          <button className="bg-red-600 flex items-center justify-center  py-2 rounded hover:bg-red-700 cursor-pointer">
            Login with Google <FaGoogle className="ml-2" />
          </button>
          <button className="bg-gray-800 py-2 rounded hover:bg-gray-900 cursor-pointer flex items-center justify-center">
            Login with Github <FaGithub className="ml-2" />
          </button>
        </div>
        <div className=" text-center text-sm">
          <p className=" mt-5">
            Don't have an account?{" "}
            <Link
              to={"/register"}
              className="hover:underline font-bold text-blue-500"
            >
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login