import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "DELETE") {
    const filterUserData = state.userData.filter((eachUser) => {
      return eachUser.id !== action.payload;
    });
    return {
      ...state,
      userData: filterUserData,
      length: state.length - 1,
    };
  }
  throw new Error("Action not found");
};

const UseReducer1 = () => {
  const initialState = {
    userData: [
      {
        id: "dkk435dsfdsf",
        firstName: "Chandu",
        lastName: "Thanneru",
        email: "chandu@example.com",
      },
      {
        id: "kjd485ihkjdfh",
        firstName: "Chandrakanth",
        lastName: "T",
        email: "chandrakanth@example.com",
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
      {/* <h3>Current Users: {state.userData.length}</h3> */}
      <h3>Current Users: {state.length}</h3>
      {state.userData.map((eachUser) => {
        const { id, firstName, lastName, email } = eachUser;
        return (
          <ul key={id}>
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
