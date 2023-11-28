/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";

//step1
const AppCtx = createContext(null);
const AppContext = ({ children }) => {
  // provider with data
  const [theme, setTheme] = useState("dark");
  const [token, setToken] = useState("");
  return (
    <AppCtx.Provider
      value={{
        theme,
        setTheme,
        token,
        setToken,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};

export const AppState = () => {
  //step 3 using the context
  return useContext(AppCtx);
};
export default AppContext;
