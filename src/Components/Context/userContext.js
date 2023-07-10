import React from "react";

const initialState = {
  firstName: "Welcome",
  lastName: "Context",
  email: "welcome@gmail.com",
};

export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
};
