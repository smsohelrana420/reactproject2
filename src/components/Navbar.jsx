import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen,setIsOpen] =useState(false)

  const toggleMenu =()=>{
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-green-700 border-b-2 border-green-500 text-white py-4 md:py-8 sticky top-0 z-10">
      <div className="container flex justify-between items-center">
        <h3>React Projects</h3>
        {/* Mobile Menu Button  */}

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <IoMdClose /> : <FaBars />}
          </button>
        </div>
        <ul className="hidden md:flex space-x-4 md:space-x-6">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"about"}>About</Link>
          </li>
          <li>
            <Link to={"products"}>Products</Link>
          </li>
          <li>
            <Link to={"blogs"}>Blogs</Link>
          </li>
          <li>
            <Link to={"contact"}>Contact</Link>
          </li>
        </ul>

        <button className="hidden md:block bg-white text-black cursor-pointer px-6 py-2 rounded text-xl hover:bg-slate-400 ">
          Login
        </button>

        {/* Mobile Menu Collapsed */}

        <div
          className={`md:hidden  w-full absolute bg-green-600 top-full left-0 ${isOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col items-center py-2 space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Blogs</li>
            <li>Contact</li>
            <li>
              <button className="bg-white text-black cursor-pointer px-6 py-2 rounded text-xl hover:bg-slate-400">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar