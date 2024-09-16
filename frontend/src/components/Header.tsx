import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

// import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
  const auth = useAuth();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
            <>
              <NavigationLink
                bg="#DD2222"
                to="/"
                text="Home"
                textColor="black"
              />

              {/* <NavigationLink
                bg="#DD2222"
                to="/chat"
                text="Go To Chat"
                textColor="black"          
              /> */}

              {/* <NavigationLink
                bg="#DD2222"
                to="/"
                text="Go To Drop"
                textColor="black"          
              /> */}

              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ backgroundColor: "#DD2222", color: "black", '&:hover': { backgroundColor: '#DD2222' } }}
              >Therapy +
              </Button>  
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                // sx={{ backgroundColor: "#DD2222", color: "black" }}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                
              >
                <MenuItem onClick={() => { handleClose(); window.location.href = "/chat"; }} sx={{ backgroundColor: "#DD2222" }}>Therapy AI 🤖</MenuItem>
                {/* <MenuItem onClick={() => { handleClose(); window.location.href = "/chat"; }} sx={{ backgroundColor: "#DD2222" }}><NavigationLink
                bg="#DD2222"
                to="/"
                text="Go To Drop"
                textColor="black"          
              /></MenuItem> */}
                <MenuItem onClick={() => { handleClose(); window.location.href = "/selfhelp"; }} sx={{ backgroundColor: "#DD2222" }}>Self Help Tools 🧰</MenuItem>
                <MenuItem onClick={() => { handleClose(); window.location.href = "/educational"; }} sx={{ backgroundColor: "#DD2222" }}>Educational Materials 📚</MenuItem>
              </Menu>
              
              {/* <NavigationLink
                bg="#DD2222"
                to="/selfhelp"
                text="Self Help Tools 🧰"
                textColor="black"
              /> */}

              {/* <NavigationLink
                bg="#DD2222"
                to="/educational"
                text="Educational Materials 📚"
                textColor="black"
              /> */}

              <NavigationLink
                bg="#DD2222"
                to="/about"
                text="About"
                textColor="black"
              />

            </>

          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="#00fffc"
                to="/chat"
                text="Go To Chat"
                textColor="black"
              />
              <NavigationLink
                bg="#51538f"
                textColor="white"
                to="/"
                text="logout"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg="#00fffc"
                to="/login"
                text="Login"
                textColor="black"
              />
              <NavigationLink
                bg="#51538f"
                textColor="white"
                to="/signup"
                text="Signup"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
