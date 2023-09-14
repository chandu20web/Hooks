import React, { useState } from "react";

const initialArray = [
    { id: 1783, firstName: "Chandu", lastName: "Thanneru", age: 27 },
    { id: 2243, firstName: "Chandrakanth", lastName: "T", age: 26 },
  ];

const UseState2 = () => {
  const [usersData, setData] = useState(initialArray);

  //   const changeFirstName = () => {
  //     setData({ ...usersData, firstName: "Chandrakanth" });
  //   };
  //   const changeLastName = () => {
  //     setData({ ...usersData, lastName: "T" });
  //   };

  const onDeleteUser = (comingId) => {
    const fiterData = usersData.filter((eachItem) => {
      return eachItem.id !== comingId;
    });
    setData(fiterData);
  };

  return (
    <div>
      {usersData.map((eachItem, index) => {
        const { id, firstName, lastName, age } = eachItem;
        return (
          <ul key={index}>
            <li key={id}>
              <p>FirstName: {firstName}</p>
              <p>LastName: {lastName}</p>
              <p>Age:{age}</p>
            </li>

            <button type="button" onClick={() => onDeleteUser(id)}>
              Delete
            </button>

            <hr />
          </ul>
        );
      })}
    </div>
  );
};

export default UseState2;
