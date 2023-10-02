import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [],
  },
  reducers: {
    adduser(state, action) {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    removeuser(state, action) {
      state.users.splice(action.payload, 1);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    updateUser(state, action) {
      const { index, updatedUser } = action.payload;
      state.users[index] = updatedUser;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    removeAlluser(state, action) {
      state.users = [];
      localStorage.removeItem("users");
    },
  },
});

export const { adduser, removeuser, updateUser, removeAlluser } = userSlice.actions;
export default userSlice.reducer;
