import React, { useReducer, useEffect } from "react";
const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCHED_USER_DATA":
      return {
        ...state,
        apiStatus: action.payload.status,
        userData: action.payload.fetchedData,
      };
    case "LOADING":
      return { ...state, apiStatus: action.payload };
    case "ERROR":
      return {
        ...state,
        apiStatus: action.payload.status,
        errMsg: action.payload.msg,
      };
    case "DELETE":
      const filteredUsers = state.userData.filter((eachUser) => {
        return eachUser.id !== action.payload;
      });
      return { ...state, userData: filteredUsers };
    default:
      return { ...state };
  }
};
const UseReducer3 = () => {
  const fetchingUserData = async () => {
    const URL = "https://gorest.co.in/public/v2/users";
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer 5674c6f0c78bf0a21df31018f344e4f10f45450d1a190bc9245281d8165a919b",
      },
    };
    dispatch({ type: "LOADING", payload: apiStatusConstants.inProgress });
    try {
      const response = await fetch(URL, options);
      const responseData = await response.json();
      console.log(responseData);
      dispatch({
        type: "FETCHED_USER_DATA",
        payload: {
          status: apiStatusConstants.success,
          fetchedData: responseData,
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "ERROR",
        payload: { status: apiStatusConstants.failure, msg: error.message },
      });
    }
  };
  useEffect(() => {
    fetchingUserData();
  }, []);
  const initialState = {
    userData: [],
    apiStatus: apiStatusConstants.initial,
    errMsg: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDeleteUser = (userId) => {
    dispatch({ type: "DELETE", payload: userId });
  };
  const renderSuccessView = () => {
    return state.userData.map((eachUser, index) => {
      const { id, name, email, gender, status } = eachUser;
      return (
        <ul key={index} style={{ listStyle: "none" }}>
          <li key={id}>
            <p>Name: {name}</p> <p>Email: {email}</p> <p>Gender: {gender}</p>
            <p>Status: {status}</p>
          </li>
          <button type="button" onClick={() => handleDeleteUser(id)}>
            Delete
          </button>
          <hr />
        </ul>
      );
    });
  };
  const renderFailureView = () => {
    return <h1>Failure View</h1>;
  };
  const renderLoadingView = () => {
    return <h1>Loading ...</h1>;
  };
  const renderAllConstants = () => {
    switch (state.apiStatus) {
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      default:
        return null;
    }
  };
  return <div>{renderAllConstants()}</div>;
};
export default UseReducer3;
