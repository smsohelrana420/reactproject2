import React from 'react'
import { Link } from 'react-router-dom';
import { FaGoogle, FaEye, FaGithub, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] sm:h-[140vh] bg-green-950">
      <div className=" bg-white p-8 max-w-lg">
        <h2 className="text-green-800 font-bold text-center text-2xl mb-6">
          Register
        </h2>
        <form className="space-y-4 ">
          <input
            type="text"
            placeholder="Full-Name"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            name=""
            id=""
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            name=""
            id=""
            required
          />
          
          {/* Only Password */}

          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            name=""
            id=""
            required
          />

          {/* Confirm Password */}

          <input
            type="password"
            placeholder="Confirm-Password"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            name=""
            id=""
            required
          />

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
            Register with Google <FaGoogle className='ml-2'/>
          </button>
          <button className="bg-gray-800 py-2 rounded hover:bg-gray-900 cursor-pointer flex items-center justify-center">
            Register with Github <FaGithub className='ml-2'/>
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