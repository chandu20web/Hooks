import React, { useReducer, useEffect } from "react";

const reducer = (state, action) => {
  if (action.type === "UPDATE_USERS_DATA") {
    return {
      ...state,
      usersData: action.payload,
    };
  }
  return state;
};

const UseReducer2 = () => {
  const fetchingData = async (url) => {
    dispatch({ type: "LOADING", payload: true });
    dispatch({ type: "ERROR", payload: { status: false, msg: "" } });
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      dispatch({ type: "UPDATE_USERS_DATA", payload: responseData });
      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOADING", payload: false });
      dispatch({
        type: "ERROR",
        payload: { status: true, msg: error.message },
      });
    }
  };

  useEffect(() => {
    fetchingData("https://jsonplaceholder.typicode.com/users");
  }, []);

  const initialState = {
    usersData: [],
    isLoading: false,
    isError: { status: false, msg: "" },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDeleteUser = (userId) => {
    dispatch({
      type: "DELETE_USER",
      payload: userId,
    });
  };

  return (
    <div>
      <h3>Users Information</h3>
      <div>
        {state.usersData.map((eachUser) => {
          const {
            id,
            name,
            username,
            email,
            phone,
            company,
            website,
            address,
          } = eachUser;
          return (
            <ul key={id}>
              <li>
                <p>Name: {name}</p>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Company: {company}</p>
                <p>Website: {website}</p>
                <p>Adrres: {address}</p>
              </li>
              <hr />
              <button type="button" onClick={() => handleDeleteUser(id)}>
                Delete
              </button>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default UseReducer2;
