import React from "react";
import 'daisyui/dist/full.css';
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { Avatar, IconButton, MenuItem, Menu } from "@material-ui/core";
import { Add, Apps, Menu as MenuIcon } from "@material-ui/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { auth, logout } from "../config/config";
import { createDialogAtom, joinDialogAtom } from "./atoms";
import "../Styles/Navbar.css";
import { useState } from "react";


const Navbar = () => {
  const [user, loading,error] = useAuthState(auth);
  const { currentUser, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
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
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
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
          <li>  <Link to="/documents">Shared Documents</Link>
          </li>
          <li>
            <a>
              Tools
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul>
              <li style={{ backgroundColor: "#102a37" }}>
                <Link to="/ocr">Image to text conversion</Link>
              </li>
              <li style={{ backgroundColor: "#102a37" }}>
                <Link to="/chatgpt">ChatGPT</Link>
              </li>
              <li style={{ backgroundColor: "#102a37" }}>
                <Link to="/chat">Group Chat</Link>
              </li>
              <li style={{ backgroundColor: "#102a37" }}>
                <Link to="/sketch">WhiteBoard</Link>
              </li>
            </ul>
          </li >
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end bg-w relative">

        <div className="dropdown">
          <label tabIndex={0} className="btn m-1 bg-primary-content">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
              <path d="M 12 2 C 11.172 2 10.5 2.672 10.5 3.5 L 10.5 4.1953125 C 7.9131836 4.862095 6 7.2048001 6 10 L 6 16 L 4 18 L 4 19 L 10.269531 19 A 2 2 0 0 0 10 20 A 2 2 0 0 0 12 22 A 2 2 0 0 0 14 20 A 2 2 0 0 0 13.728516 19 L 20 19 L 20 18 L 18 16 L 18 10 C 18 7.2048001 16.086816 4.862095 13.5 4.1953125 L 13.5 3.5 C 13.5 2.672 12.828 2 12 2 z M 12 6 C 14.206 6 16 7.794 16 10 L 16 16 L 16 16.828125 L 16.171875 17 L 7.828125 17 L 8 16.828125 L 8 16 L 8 10 C 8 7.794 9.794 6 12 6 z"></path>
            </svg>
          </label>
          <div className="dropdown-content card card-compact w-60 p-3 shadow bg-primary text-primary-content right-0">
            <div className="card-body">
              <h3 className="card-title">New Notifications!</h3>
              <h1>
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-7">
                    <span className="text-3xl">L</span>
                  </div>
                </div>
                {"     "}Yassine has sent a message!
              </h1>
              <h1>
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-7 font-bold">
                    <span className="text-3xl">Y</span>
                  </div>
                </div>
                {"     "}Louay has sent a message!
              </h1>
            </div>

          </div>
        </div>

      </div>
      <button className="btn logout-animation" onClick={handleLogout}>Logout</button>
      <IconButton onClick={logout}>
            <Avatar src={user?.photoURL} />
          </IconButton>
          
    </div>
  );
};

export default Navbar;
