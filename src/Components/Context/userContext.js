import React from "react";

const userDetails = {
  firstName: "Chandu",
  lastName: "Thanneru",
  email: "chandu@example.com",
};

export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={userDetails}>{children}</UserContext.Provider>
  );
};
