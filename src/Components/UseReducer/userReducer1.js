import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "DELETE") {
    const newPersons = state.userData.filter((personId) => {
      return personId.id !== action.payload;
    });
    return {
      userData: newPersons,
    };
  }
};

const UseReducer1 = () => {
  const initialState = {
    userData: [
      {
        id: 23432,
        firstName: "Chandu",
        lastName: "Thanneru",
        email: "chandu@gmail.com",
      },
      {
        id: 56126,
        firstName: "Chandrakanth",
        lastName: "T",
        email: "chanduT@gmail.com",
      },
    ],
    length: 2,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  return (
    <div>
      {state.userData.map((eachItem) => {
        const { id, firstName, lastName, email } = eachItem;
        return (
          <ul key={id} style={{ listStyle: "none" }}>
            <li>
              <p>Firstname: {firstName}</p>
              <p>Lastname: {lastName}</p>
              <p>Email: {email}</p>
            </li>
            <hr />
            <button type="button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </ul>
        );
      })}
    </div>
  );
};
export default UseReducer1;
