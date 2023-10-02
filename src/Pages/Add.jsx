
import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adduser } from '../Redux/UserSlice';

const initialstate = { username: "", email: "", password: "" };

const RegisterForm = () => {
  const [user, setUser] = useState({ ...initialstate });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adduser(user));

    if (!user.username || !user.email || !user.password) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!/^[A-Za-z]+$/.test(user.username)) {
      toast.error("Username should only contain letters");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(user.email)) {
      toast.error("Invalid email address");
      return;
    }

    if (user.password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    }

    toast.success("User added");
    navigate("/view");
  };

  return (
    <>
      <Container style={{ width: "30%", marginBottom: "5%", marginTop: "5%", border: "2px solid #8f8f8f", boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
        <h1 style={{ textAlign: "center" }}>Add User</h1>

        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            variant='outlined'
            color='secondary'
            name='username'
            label="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            fullWidth
            sx={{ mb: 4 }}
          />
          <TextField
            type="text"
            variant='outlined'
            color='secondary'
            name="email"
            label="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            fullWidth
            sx={{ mb: 4 }}
          />
          <TextField
            type="password"
            variant='outlined'
            color='secondary'
            name="password"
            label="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            fullWidth
            sx={{ mb: 4 }}
          />

          <Button variant="contained" color="primary" type="submit" fullWidth sx={{ marginBottom: '10%' }}>Save User</Button>
        </form>
      </Container>
    </>
  );
}

export default RegisterForm;
