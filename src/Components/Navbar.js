import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="." className="nav-item">
        <h1>FlexiSpace</h1>
      </NavLink>
      <div className="nav-content">
        <NavLink
          to="rentOut"
          className={({ isActive }) => {
            return isActive
              ? "nav-item nav-btn nav-btn-selected"
              : "nav-item nav-btn";
          }}
        >
          Rent Out Your Space
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => {
            return isActive
              ? "nav-item nav-btn nav-btn-selected"
              : "nav-item nav-btn";
          }}
        >
          About
        </NavLink>
        <NavLink
          to="explore"
          className={({ isActive }) => {
            return isActive
              ? "nav-item nav-btn nav-btn-selected"
              : "nav-item nav-btn";
          }}
        >
          Explore Spaces
        </NavLink>
        <NavLink
          to="login"
          className={({ isActive }) => {
            return isActive
              ? "nav-item nav-btn login-link nav-btn-selected"
              : "nav-item nav-btn login-link";
          }}
        >
          <FaRegUserCircle />
        </NavLink>
      </div>
    </nav>
  );
}
