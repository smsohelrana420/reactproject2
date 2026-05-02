import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] bg-green-950">
      <div className="text-white bg-white p-8 max-w-sm">
        <h2 className="text-green-800 font-bold text-center text-2xl mb-6">
          Login
        </h2>
        <form className="space-y-4 bg-slate-500">
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2"
            name=""
            id=""
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded"
            name=""
            id=""
          />
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 cursor-pointer py-2"
          >
            Login
          </button>
        </form>
        <div className="flex flex-col space-y-3 mt-3">
          <button className="bg-red-600 py-2 rounded hover:bg-red-700 cursor-pointer">
            Login with Google
          </button>
          <button className="bg-gray-800 py-2 rounded hover:bg-gray-900 cursor-pointer">
            Login with Github
          </button>
        </div>
        <div className="text-blue-500">
          <p className="underline mt-2">
            Don't have an account? <Link to={"/register"}>Register Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login