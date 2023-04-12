
import { Avatar, IconButton, MenuItem, Menu } from "@material-ui/core";
import { Add, Apps, Menu as MenuIcon } from "@material-ui/icons";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { auth, logout } from "../config/config";
import { createDialogAtom, joinDialogAtom } from "./atoms";
import { useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";


function Room_Navbar() {
  const [user, loading,error] = useAuthState(auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const [createOpened, setCreateOpened] = useRecoilState(createDialogAtom);
  const [joinOpened, setJoinOpened] = useRecoilState(joinDialogAtom);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const navigateToUpload = () => {
    navigate('/upload');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__left">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img
            src="https://i.imgur.com/wMsR3ab.png"
            alt="Google Logo"
            className="navbar__logo"
          />{" "}
          <span>StudyShare</span>
        </div>
        <div className="navbar__right">
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Add />
          </IconButton>
          <IconButton>
          </IconButton>
          <IconButton onClick={logout}>
            <Avatar src={user?.photoURL} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                navigateToUpload();
                setCreateOpened(true);
                handleClose();
              }}
            >
              Upload A Document
            </MenuItem>
          </Menu>
        </div>
      </nav>
    </>
  );
}

export default Room_Navbar;
