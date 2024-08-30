import { Outlet, NavLink } from "react-router-dom";
export default function RentOutLayout() {
  return (
    <div className="rent-out-layout">
      <nav className="rentOut-nav">
        <NavLink
          to="."
          end
          className={({ isActive }) => {
            return isActive ? "rentOut-nav-selected" : null;
          }}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) => {
            return isActive ? "rentOut-nav-selected" : null;
          }}
        >
          Income
        </NavLink>
        <NavLink
          to="spaces"
          className={({ isActive }) => {
            return isActive ? "rentOut-nav-selected" : null;
          }}
        >
          Your Spaces
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => {
            return isActive ? "rentOut-nav-selected" : null;
          }}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
