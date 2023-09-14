import { NavLink } from "react-router-dom";

import "./index.css";

const Header = () => {
  return (
    <nav className="hooks-nav-bar">
      <div className="buttons-container">
        <NavLink to="/useState-1">
          <button type="button">useState 1</button>
        </NavLink>
        <NavLink to="/useState-2">
          <button type="button">useState 2</button>
        </NavLink>
        <NavLink to="/useState-3">
          <button type="button">useState Reviews</button>
        </NavLink>
      </div>
      <div className="buttons-container">
        <NavLink to="/useEffect-1">
          <button type="button">useEffect 1</button>
        </NavLink>
        <NavLink to="/useEffect-2">
          <button type="button">useEffect 2</button>
        </NavLink>
      </div>

      <div className="buttons-container">
        <NavLink to="/useReducer1">
          <button type="button">useReducer 1</button>
        </NavLink>
        <NavLink to="/useReducer2">
          <button type="button">useReducer 2</button>
        </NavLink>
        <NavLink to="/useReducer3">
          <button type="button">useReducer 3</button>
        </NavLink>
      </div>

      <div className="buttons-container">
        <NavLink to="/counter">
          <button type="button">Counter</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
