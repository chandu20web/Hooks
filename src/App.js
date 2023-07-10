import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import UseState1 from "./Components/UseState/useState1";
import UseState2 from "./Components/UseState/useState2";
import UseStateReviews from "./Components/UseState/useStateReviews";
import UseReducer1 from "./Components/UseReducer/userReducer1";

import UseEffect1 from "./Components/UseEffect/useEffect1";
// import UseEffect2 from "./Components/UseEffect/UseEffect2";
import { ParentComponent } from "./Components/ContextBasics/parentComponent";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/useState-1" element={<UseState1 />} />
        <Route path="/useState-2" element={<UseState2 />} />
        <Route path="/useState-3" element={<UseStateReviews />} />
        <Route path="/useEffect-1" element={<UseEffect1 />} />
        <Route path="/context" element={<ParentComponent />} />
        <Route path="/useReducer" element={<UseReducer1 />} />
      </Routes>
    </>
  );
};

export default App;
