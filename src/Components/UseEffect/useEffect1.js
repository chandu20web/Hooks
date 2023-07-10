import React, { useState, useEffect } from "react";

const UseEffect1 = () => {
  const initialObj = { isShowContent: true, inputVal: "", usersData: [] };
  const [content, setContent] = useState(initialObj);

  useEffect(() => {
    const getApiCall = async () => {
      const url = "https://gorest.co.in/public/v2/users";

      const options = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer 1b9df5712410ac12229641235690a70261991e433e20a2a451a7438441162603",
        },
      };

      const response = await fetch(url, options);
      const responseData = await response.json();

      if (response.ok === true) {
        setContent((prevData) => ({
          ...prevData,
          usersData: responseData,
        }));
      }
    };
    getApiCall();
  }, []);

  const onChangeContent = () => {
    const { isShowContent } = content;
    setContent((prevData) => ({
      ...prevData,
      isShowContent: !isShowContent,
    }));
  };

  const onChangeInputFeild = (event) => {
    setContent((prevData) => ({
      ...prevData,
      inputVal: event.target.value,
    }));
  };

  return (
    <>
      <div>
        <button type="button" onClick={onChangeContent}>
          {content.isShowContent ? "Hide Content" : "Show Content"}
        </button>
        {content.isShowContent ? (
          <div>
            The current docs are for React 18. For React 17, see
            https://17.reactjs.org. See our FAQ for information about our
            versioning policy and commitment to stability.
          </div>
        ) : (
          <div>Content is Hide</div>
        )}
      </div>
      <div>
        <input
          type="text"
          value={content.inputVal}
          onChange={onChangeInputFeild}
          placeholder="Text"
        />
        <h1>{content.inputVal}</h1>
      </div>

      <div>
        {content.usersData.map((eachItem, index) => {
          const { id, email, name, gender, status } = eachItem;
          return (
            <ul key={index}>
              <li key={id}>
                <p>Id: {id}</p>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Gender: {gender}</p>
                <p>Status: {status}</p>
              </li>
              <hr />
            </ul>
          );
        })}
        <hr />
      </div>
    </>
  );
};

export default UseEffect1;
