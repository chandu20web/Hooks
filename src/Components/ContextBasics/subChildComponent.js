import { useContext } from "react";
import { UserContext } from "../Context/userContext";

export const SubChildComponent = () => {
  const userData = useContext(UserContext);
  const { firstName, lastName, email } = userData;

  return (
    <div>
      <h3>Sub Child Component</h3>
      <div>Firstname: {firstName}</div>
      <div>Lastname: {lastName}</div>
      <div>Email: {email} </div>
    </div>
  );
};
