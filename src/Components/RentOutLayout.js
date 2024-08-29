import { Outlet, NavLink } from "react-router-dom";
export default function RentOutLayout() {
  return (
    <>
      <nav className="rentOut-nav">
        <NavLink
          to="/rentOut"
          end
          className={({ isActive }) => {
            return isActive ? "rentOut-nav-selected" : null;
          }}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/rentOut/income"
          className={({ isActive }) => {
            return isActive ? "rentOut-nav-selected" : null;
          }}
        >
          Income
        </NavLink>
        <NavLink
          to="/rentOut/spaces"
          className={({ isActive }) => {
            return isActive ? "rentOut-nav-selected" : null;
          }}
        >
          Your Spaces
        </NavLink>
        <NavLink
          to="/rentOut/reviews"
          className={({ isActive }) => {
            return isActive ? "rentOut-nav-selected" : null;
          }}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
