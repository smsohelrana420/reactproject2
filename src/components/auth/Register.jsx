import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaGoogle, FaEye, FaGithub, FaEyeSlash } from "react-icons/fa";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { AuthContext } from '../../providers/AuthProvider';
import { log } from 'firebase/firestore/lite/pipelines';


const Register = () => {

 const { createUserWithPass } = useContext(AuthContext);

  const handleRegisterForm=(e)=>{
   e.preventDefault()
   const fullname=e.target.fullname.value;
   const email=e.target.email.value;
   const password=e.target.password.value;
   const confirmPass=e.target.confirmPass.value;
  
   createUserWithPass(email,password)
   .then(result =>{
    const user=result.user;
    console.log(user)
   })
   .catch(err =>{
    console.error(err)
   })
  }
  const [showPass,setShowPass]=useState(false)
  const [confirmShowPass,setConfrimShowPass]=useState(false)
  return (
    <div className="flex items-center justify-center h-[100vh] sm:h-[140vh] bg-green-950">
      <div className=" bg-white p-8 max-w-lg">
        <h2 className="text-green-800 font-bold text-center text-2xl mb-6">
          Register
        </h2>
        <form onSubmit={handleRegisterForm} className="space-y-4 ">
          <input
            type="text"
            placeholder="Full-Name"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            name="fullname"
            id=""
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            name="email"
            id=""
            required
          />

          {/* Only Password */}

          <div className="flex relative items-center">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              name=""
              id="password"
              required
            />

            {showPass ? (
              <FaEyeSlash
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 cursor-pointer"
              />
            ) : (
              <FaEye
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 cursor-pointer"
              />
            )}
          </div>

          {/* Confirm Password */}

          <div className="relative flex items-center">
            <input
              type={confirmShowPass ? "text" : "password"}
              placeholder="Confirm-Password"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              name="confirmPass"
              id=""
              required
            />
            {
              confirmShowPass ?<FaEyeSlash
                onClick={() =>setConfrimShowPass(!confirmShowPass)}
                className="absolute right-3 cursor-pointer"/>
              : 
                <FaEye onClick={() =>setConfrimShowPass(!confirmShowPass)}
                className="absolute right-3 cursor-pointer" />
              
              
            }
            
          </div>
          <div className="flex items-center justify-between">
            <p>
              <input type="checkbox" name="" id="checkBox" required />
              <label htmlFor="checkBox">
                {" "}
                Accept Terms &{" "}
                <Link className="text-green-600 font-semibold hover:underline">
                  Conditions
                </Link>
              </label>
            </p>
            <p className="text-right hover:text-green-400 cursor-pointer hover:underline">
              Forgot Password
            </p>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-green-700 hover:bg-green-800 cursor-pointer py-2 rounded font-bold mb-2"
          >
            Register Now
          </button>
        </form>

        {/* Divider Here */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-700 "></div>
          <span className="mx-5 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-700 "></div>
        </div>
        <div className="flex flex-col space-y-3 text-white mt-6">
          <button className="bg-red-600 py-2 rounded hover:bg-red-700 cursor-pointer flex items-center justify-center">
            Register with Google <FaGoogle className="ml-2" />
          </button>
          <button className="bg-gray-800 py-2 rounded hover:bg-gray-900 cursor-pointer flex items-center justify-center">
            Register with Github <FaGithub className="ml-2" />
          </button>
        </div>
        <div className=" text-center text-sm">
          <p className=" mt-5">
            Already Have an Account?{" "}
            <Link
              to={"/login"}
              className="hover:underline font-bold text-blue-500"
            >
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register