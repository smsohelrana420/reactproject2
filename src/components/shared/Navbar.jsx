import React, { useContext, useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Navbar = () => {

  const { user, handleSignOut } = useContext(AuthContext);
 
  const [isOpen,setIsOpen] =useState(false)

  const [activeLink,setActiveLink]=useState('/')

  const location=useLocation()

  const handleSignOutUser=()=>{
    handleSignOut()
  }

  useEffect(()=>{
  setActiveLink(location.pathname || '/')
  },[location.pathname])

  const toggleMenu =()=>{
    setIsOpen(!isOpen);
  }

  const handleLinkClick=(path)=>{
    setActiveLink(path)
    
  }

  return (
    <nav className="bg-black/60 text-white py-4 md:py-8 fixed w-full top-0 ">
      <div className="container flex justify-between items-center">
        <h3>Simple React</h3>
        {/* Mobile Menu Button  */}

        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu}>
            {isOpen ? <IoMdClose /> : <FaBars />}
          </button>
        </div>
        <ul className="hidden md:flex space-x-4 md:space-x-6 relative">
          <li>
            <Link
              onClick={() => handleLinkClick("/")}
              to={`/`}
              className={`${activeLink === "/" ? "text-red-500" : "hover:text-green-500"}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleLinkClick("/about")}
              to={"/about"}
              className={`${activeLink === "/about" ? "text-red-500" : "hover:text-green-500"}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/products"}
              onClick={() => handleLinkClick("/products")}
              className={`${activeLink === "/products" ? "text-red-500" : "hover:text-green-500"}`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to={"/blogs"}
              onClick={() => handleLinkClick("/blogs")}
              className={`${activeLink === "/blogs" ? "text-red-500" : "hover:text-green-500"}`}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleLinkClick("/contact")}
              className={`${activeLink === "/contact" ? "text-red-500" : "hover:text-green-500"}`}
              to={"/contact"}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div>
          {user ? (
            <div className="flex items-center">
              <span>{user?.email}</span>{" "}
              <button onClick={handleSignOutUser} className="hidden md:block bg-white text-black cursor-pointer px-6 py-2 rounded text-xl hover:bg-slate-400 ">
                Sign Out
              </button>{" "}
            </div>
          ) : (
            <div>
              <span>{user?.email}</span>
              <Link to={"/login"}>
                <button className="hidden md:block bg-white text-black cursor-pointer px-6 py-2 rounded text-xl hover:bg-slate-400 ">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Collapsed */}

        <div
          className={`md:hidden  w-full absolute bg-green-950 top-full left-0 ${isOpen ? "block" : "hidden"}`}
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