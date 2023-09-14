import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
// import countReducer from "./countReducer";

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

export default store;