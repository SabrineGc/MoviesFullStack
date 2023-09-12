import React, {useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import { AppBar, Toolbar, Box,Typography, Button, Container } from "@mui/material";

const Layout = () => {
  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Movies Addiction
          </Typography>
          <Button color="inherit" component={Link} to="/all">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/login">
             se Connecter
          </Button>
          <Box flexGrow={1}>
          <Button variant="contained" onClick={() => handleOpenAdd()} color="inherit" component={Link} to="/add">
            Add
          </Button>
        </Box>
           <Button color="inherit" component={Link} to="/Cart">
             Favorites
           </Button>
        </Toolbar>
      </AppBar>

      <div sx={{ marginTop: 2, maxWidth: false }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
