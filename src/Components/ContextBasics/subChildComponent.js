import { useContext } from "react";
import { UserContext } from "../Context/userContext";

export const SubChildComponent = () => {
  const userDetails = useContext(UserContext);
  const { firstName, lastName, email } = userDetails;

  return (
    <div>
      <h3>Sub Child Component</h3>
      <div>Firstname: {firstName}</div>
      <div>Lastname: {lastName}</div>
      <div>Email: {email} </div>
    </div>
  );
};
