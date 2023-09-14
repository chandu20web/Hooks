import React from "react";
import { connect } from "react-redux";
import { counterActions } from "../../Redux/actions/actions";

const Counter = (props) => {
  return (
    <>
      <div>
        <button type="button" onClick={props.decrease}>
          -
        </button>
        <span>{props.count}</span>
        <button type="button" onClick={props.increase}>
          +
        </button>
      </div>
      <div>
        <button type="button" onClick={props.reset}>
          Reset
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispathToProps = (dispatch) => {
  return counterActions(dispatch);
};

export default connect(mapStateToProps, mapDispathToProps)(Counter);