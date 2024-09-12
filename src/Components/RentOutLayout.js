import { Outlet, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHostSpaces } from "../api";

export default function RentOutLayout() {
  const [hostSpaces, setHostSpaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadSpaces() {
      try {
        const data = await getHostSpaces();
        setHostSpaces(data);
      } catch (err) {
        console.log("Host spaces debug", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadSpaces();
  }, []);

  if (loading) return <h1 aria-live="polite"> Loading...</h1>;

  if (error)
    return <h1 aria-live="assertive"> Error Occurred: {error.message}</h1>;

  return (
    <div className="rent-out-layout">
      <nav className="rentOut-nav">
        <NavLink
          to="."
          end
          className={({ isActive }) => {
            return isActive ? "rentOut-nav-selected" : "rentOut-nav-item";
          }}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) => {
            return isActive ? "rentOut-nav-selected" : "rentOut-nav-item";
          }}
        >
          Income
        </NavLink>
        <NavLink
          to="spaces"
          className={({ isActive }) => {
            return isActive ? "rentOut-nav-selected" : "rentOut-nav-item";
          }}
        >
          Your Spaces
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => {
            return isActive ? "rentOut-nav-selected" : "rentOut-nav-item";
          }}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet context={hostSpaces} />
    </div>
  );
}
