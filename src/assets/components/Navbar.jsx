import React from "react";
import 'daisyui/dist/full.css';
import {Link, useNavigate}   from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { Style } from "@material-ui/icons";


const Navbar = () => {
  const { currentUser, logout } = UserAuth();
  const navigate=useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      setTimeout(() => {
        navigate("/");
      }, 500); 
    } catch(error) {
      console.log(error)
    }
  }
  return (

<div className="body navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li>
          <a className="justify-between">
            Tools
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
          <li>
  <Link to="/ocr">Image to text conversion</Link>
        </li>
        <li>
  <Link to="/chatgpt">ChatGPT</Link>
        </li>          <li>
  <Link to="/chat">Group Chat</Link>
        </li>
          </ul>
        </li>
        <li><a>Shared Documents</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">StudyShare</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 bg-c">
      <li>
      <Link to="/home">Home</Link>
      </li>
      <li>
        <a>
          Tools
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul>
          <li  style={{backgroundColor: "#102a37"}}>
  <Link to="/ocr">Image to text conversion</Link>
        </li>
        <li  style={{backgroundColor: "#102a37"}}>
  <Link to="/chatgpt">ChatGPT</Link>
        </li>
        <li  style={{backgroundColor: "#102a37"}}>
  <Link to="/chat">Group Chat</Link>
        </li>
        </ul>
      </li >
      <li>  <Link to="/documents">Shared Documents</Link></li>
      <li>  <Link to="/courses">Courses</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn logout-animation" onClick={handleLogout}>Logout</button>
  </div>
</div>
  );
};

export default Navbar;
