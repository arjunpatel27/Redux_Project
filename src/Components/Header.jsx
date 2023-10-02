
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { MenuItem } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Redux
        </Typography>
        <div style={{ marginLeft: '3%' }}>
          <Button color="inherit">
            <Link to="/" style={{color:"white",textDecoration:"none"}}>Home</Link>
          </Button>
          <Button color="inherit">
          <Link to="/add" style={{color:"white",textDecoration:"none"}}>Add User</Link>
          </Button>
          <Button color="inherit">
          <Link to="/view" style={{color:"white",textDecoration:"none"}}>View User</Link>
          </Button>           
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

