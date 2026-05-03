import React from 'react'
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Login = () => {
  return (
    <div className="flex items-center justify-center h-[115vh] bg-green-950 pt-10">
      <div className=" bg-white p-8 max-w-sm">
        <h2 className="text-green-800 font-bold text-center text-2xl mb-6">
          Login
        </h2>
        <form className="space-y-4 ">
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            name=""
            id=""
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            name=""
            id=""
          />

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