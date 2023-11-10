// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppContext from "./Context/AppContext.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import loginReducer from "./Reducers/loginReducer.js";

const store = configureStore({
  reducer: {
    loginOperation: loginReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <AppContext>
        <App />
      </AppContext>
    </Provider>
  </BrowserRouter>
);
