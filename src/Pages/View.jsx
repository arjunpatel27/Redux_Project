import React, { useState } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Container, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeAlluser, removeuser, updateUser } from '../Redux/UserSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const View = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editedUser, setEditedUser] = useState({ username: '', email: '', password: '' });

  const handleEditClick = (index, user) => {
    setEditIndex(index);
    setEditedUser(user);
    setIsEditing(true);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setEditIndex(null);
    setEditedUser({ username: '', email: '', password: '' });
  };

  const handleEditSave = () => {
    dispatch(updateUser({ index: editIndex, updatedUser: editedUser }));
    setIsEditing(false);
    setEditIndex(null);
    setEditedUser({ username: '', email: '', password: '' });
  };

  return (
    <>
      <h1>All Users</h1>
      <Container>
        <h1 style={{ textAlign: 'center' }}>User Details Table</h1>
        <TableContainer
          sx={{
            width: '70%',
            marginLeft: '18%',
            marginTop: '1%',
            marginBottom: '2%',
            border: '2px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Table>
            <TableHead sx={{ backgroundColor: '#e0efff' }}>
              <TableRow>
                <TableCell align="center" style={{ fontWeight: 'bold', color: 'black' }}>
                  Sr.No
                </TableCell>
                <TableCell align="center" style={{ fontWeight: 'bold', color: 'black' }}>
                  Username
                </TableCell>
                <TableCell align="center" style={{ fontWeight: 'bold', color: 'black' }}>
                  Email
                </TableCell>
                <TableCell align="center" style={{ fontWeight: 'bold', color: 'black' }}>
                  Password
                </TableCell>
                <TableCell align="center" style={{ fontWeight: 'bold', color: 'black' }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: '#ffe8c9' }}>
              {users.length === 0 && <TableRow><TableCell colSpan={5}>No user Found</TableCell></TableRow>}
              {users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{user.username}</TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  <TableCell align="center">{user.password}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary" style={{ width: '40px', textAlign: 'center' }} onClick={() => handleEditClick(index, user)}>
                     <EditIcon/>
                    </Button>
                    <Button variant="contained" color="secondary" style={{ width: '40px', textAlign: 'center', marginLeft: '5px', backgroundColor:"red" }} onClick={() => dispatch(removeuser(index))}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" color="primary" style={{ marginLeft: '18%' }} onClick={() => dispatch(removeAlluser())}>
          Remove All user
        </Button>
      </Container>

      {/* Edit Dialog */}
      <Dialog open={isEditing} onClose={handleEditCancel}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={editedUser.username}
            onChange={(e) => setEditedUser({ ...editedUser, username: e.target.value })}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={editedUser.email}
            onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={editedUser.password}
            onChange={(e) => setEditedUser({ ...editedUser, password: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleEditSave}>
            Save
          </Button>
          <Button variant="contained" color="secondary" onClick={handleEditCancel}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default View;







