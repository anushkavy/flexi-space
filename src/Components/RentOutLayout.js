import { Outlet, Link } from "react-router-dom";
export default function RentOutLayout() {
  return (
    <>
      <nav className="rentOut-nav">
        <Link to="/rentOut">Dashboard</Link>
        <Link to="/rentOut/income">Income</Link>
        <Link to="/rentOut/reviews">Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
}
