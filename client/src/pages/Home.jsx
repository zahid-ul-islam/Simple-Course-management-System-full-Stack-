import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LoginRegistrationForm } from "../components/LoginRegistrationForm";
import { useAuth } from "../hooks/useAuth";


function Home() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const {isAuthenticated, onLogout } = useAuth()
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Box>
        <Toolbar>
          <AppBar position="static">
            <Button color="inherit" onClick={() => navigate("/")}>
              About Us
            </Button>
            {isAuthenticated()&& (<Button color="inherit" onClick={() => navigate("/courses")}>
              Courses
            </Button>)}
            
            {isAuthenticated()? (<Button color="inherit" onClick={onLogout}>Logout
            </Button>):(<Button color="inherit" onClick={handleClickOpen}>Login
            </Button>) }
           
            <LoginRegistrationForm open={open} handleClose={handleClose} />
          </AppBar>
        </Toolbar>
        <Outlet />
      </Box>
    </div>
  );
}

export default Home;
