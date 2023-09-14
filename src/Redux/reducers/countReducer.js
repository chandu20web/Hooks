import { counterConstants } from "../constants/constants";

const initialState = {
  count: 1,
};

const countReducer = (state = initialState, action) => {
  switch (action?.type) {
    case counterConstants.increase:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case counterConstants.decrease:
      return {
        ...state,
        count: state.count - action.payload,
      };
    case counterConstants.reset:
      return {
        ...state,
        count: 0,
      };
    default:
      return { ...state };
  }
};

export default countReducer;
