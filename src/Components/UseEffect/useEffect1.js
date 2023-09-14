import React, { useState, useEffect, useCallback } from "react";

const UseEffect1 = ({ apiObj }) => {
  const initialObj = {
    isShowContent: true,
    inputVal: "",
    usersData: [],
    count: 0,
    url: "https://gorest.co.in/public/v2/users",
    token: "1b9df5712410ac12229641235690a70261991e433e20a2a451a7438441162603",
    httpMethod: "GET",
    apiDetails: {},
  };
  const [content, setContent] = useState(initialObj);
  const { count, apiDetails, url, token, httpMethod } = content;
  console.log("useEffect1 Component Calling ......");

  // const getUrlDetails = async (apiObj) => {
  //   await setContent((prevState) => ({
  //     ...prevState,
  //     apiDetails: apiObj,
  //   }));
  // };

  // const getAllSports = useCallback(async () => {
  //   const apiObj = {
  //     url: url,
  //     token: token,
  //     httpMethod: httpMethod,
  //   };
  //   await getUrlDetails(apiObj);
  //   console.log(apiDetails);
  // }, [apiObj]);

  // useEffect(() => {
  //   console.log("useEffect Calling...");
  //   getAllSports();
  // }, [getAllSports]);

  useEffect(() => {
    console.log("useEffect is Calling ......");
  }, [count]);

  const handleDecrement = () => {
    console.log("handleDecrement Before Calling ........");
    console.log(count);
    setContent((prevState) => ({
      ...prevState,
      count: prevState.count - 1,
    }));
    console.log("handleDecrement After Calling ........");
    console.log(count);
  };

  const handleIncrement = async () => {
    console.log("handleIncrement Before Calling ........");
    console.log(count);
    await setContent((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
    console.log("handleIncrement After Calling ........");
    console.log(count);
  };

  const handleReset = () => {
    console.log("handleReset Before Calling ........");
    console.log(count);
    setContent((prevState) => ({
      ...prevState,
      count: 0,
    }));
    console.log("handleReset Before Calling ........");
    console.log(count);
  };

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
      {console.log("render calling ....")}
      {console.log(count)}
      <button onClick={handleDecrement}>-</button>
      <span>{content.count}</span>
      <button onClick={handleIncrement}>+</button>
      <br />
      <button onClick={handleReset}>Reset</button>
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
