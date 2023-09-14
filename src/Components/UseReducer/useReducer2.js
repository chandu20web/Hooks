import React, { useReducer, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCHED_USER_DATA":
      return { ...state, userData: action.payload };
    case "LOADING":
      return { ...state, isLoading: action.payload };
    case "ERROR":
      return { ...state, isError: action.payload };
    case "DELETE":
      const filteredUsers = state.userData.filter((eachUser) => {
        return eachUser.id !== action.payload;
      });
      return { ...state, userData: filteredUsers };
    default:
      return { ...state };
  }
};
const UseReducer2 = () => {
  const fetchingUserData = async (URL) => {
    dispatch({ type: "LOADING", payload: true });
    dispatch({ type: "ERROR", payload: { status: false, msg: "" } });
    try {
      const response = await fetch(URL);
      const responseData = await response.json();
      console.log(responseData);
      dispatch({ type: "FETCHED_USER_DATA", payload: responseData });
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: "ERROR",
        payload: { status: true, msg: error.message },
      });
      dispatch({ type: "LOADING", payload: false });
    }
  };
  useEffect(() => {
    fetchingUserData("https://jsonplaceholder.typicode.com/users");
  }, []);
  const initialState = {
    userData: [],
    isLoading: false,
    isError: { status: false, msg: "" },
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleDeleteUser = (userId) => {
    dispatch({ type: "DELETE", payload: userId });
  };
  if (state.isLoading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div>
      {state.userData.map((eachUser) => {
        const { id, name, username, email, phone, website } = eachUser;
        return (
          <ul key={id} style={{ listStyle: "none" }}>
            <li>
              <p>Name: {name}</p> <p>Username: {username}</p>{" "}
              <p>Email: {email}</p> <p>Phone: {phone}</p>{" "}
              <p>Website: {website}</p>{" "}
            </li>
            <button type="button" onClick={() => handleDeleteUser(id)}>
              Delete
            </button>
            <hr />
          </ul>
        );
      })}
    </div>
  );
};
export default UseReducer2;
