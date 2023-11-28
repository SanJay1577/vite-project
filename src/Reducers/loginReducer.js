/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { UserAPI } from "../helpers/API";

const loginreducerSlice = createSlice({
  name: "loginOperation",
  initialState: {
    data: {
      username: "",
      email: "",
      password: "",
    },
  },
  reducers: {
    loginUser: (state, action) => {
      state.data = action.payload;
      loginAndsetToken(action.payload).then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
        } else {
          console.log(data.error);
        }
      });
    },
    logoutUser: (state, action) => {
      state.data = { username: "", email: "", password: "" };
    },
  },
});
async function loginAndsetToken(payload) {
  const loginSet = {
    email: payload.email,
    password: payload.password,
  };
  const res = await fetch(`${UserAPI}/login`, {
    method: "POST",
    body: JSON.stringify(loginSet),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

export const { loginUser, logoutUser } = loginreducerSlice.actions;
export default loginreducerSlice.reducer;
