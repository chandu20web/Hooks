import { Link } from "react-router-dom";

import "./index.css";

const Header = () => {
  return (
    <nav className="hooks-nav-bar">
      <div className="buttons-container">
        <Link to="/useState-1">
          <button type="button">useState 1</button>
        </Link>
        <Link to="/useState-2">
          <button type="button">useState 2</button>
        </Link>
        <Link to="/useState-3">
          <button type="button">useState Reviews</button>
        </Link>
      </div>
      <div className="buttons-container">
        <Link to="/useEffect-1">
          <button type="button">useEffect 1</button>
        </Link>

        <Link to="/useEffect-2">
          <button type="button">useEffect 2</button>
        </Link>
      </div>

      <div className="buttons-container">
        <Link to="/context">
          <button type="button">useContext</button>
        </Link>
      </div>

      <div className="buttons-container">
        <Link to="/useReducer">
          <button type="button">useReducer</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
