import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import UseState1 from "./Components/UseState/useState1";
import UseState2 from "./Components/UseState/useState2";
import UseStateReviews from "./Components/UseState/useStateReviews";
import UseReducer1 from "./Components/UseReducer/useReducer1";
import UseReducer2 from "./Components/UseReducer/useReducer2";
import UseReducer3 from "./Components/UseReducer/useReducer3";

import UseEffect1 from "./Components/UseEffect/useEffect1";

import Counter from "./Components/Counter/counter";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/useState-1" element={<UseState1 />} />
        <Route path="/useState-2" element={<UseState2 />} />
        <Route path="/useState-3" element={<UseStateReviews />} />
        <Route path="/useEffect-1" element={<UseEffect1 />} />
        <Route path="/useReducer1" element={<UseReducer1 />} />
        <Route path="/useReducer2" element={<UseReducer2 />} />
        <Route path="/useReducer3" element={<UseReducer3 />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
};

export default App;
