import React from "react";

import { connect } from "react-redux";

const Counter = (props) => {
  return (
    <>
      <div>
        <button type="button" onClick={() => props.decrement()}>
          -
        </button>
        <span>{props.count}</span>
        <button type="button" onClick={() => props.increment()}>
          +
        </button>
      </div>
      <div>
        <button type="button" onClick={() => props.reset()}>
          Reset
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispathToProps = (dispath) => {
  return {
    increment: () =>
      dispath({
        type: "INCREMENT",
        payload: 2,
      }),

    decrement: () =>
      dispath({
        type: "DECREMENT",
        payload: 1,
      }),

    reset: () => {
      dispath({
        type: "RESET",
        payload: 0,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Counter);
