import {
  Outlet,
  NavLink,
  useParams,
  Link,
  useOutletContext,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { getHostSpace } from "../api";
import LoadingState from "./LoadingState";

export default function HostSpaceDetailLayout() {
  const { id } = useParams();

  const [space, setSpace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useOutletContext();

  useEffect(() => {
    async function loadSpaceDetail() {
      try {
        const data = await getHostSpace(userId, id);
        setSpace(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadSpaceDetail();
  }, [id]);

  if (loading) {
    return (
      <h1 aria-live="polite">
        <LoadingState />
      </h1>
    );
  }

  if (error) {
    return <h1 aria-live="assertive"> Error Occurred: {error.message}</h1>;
  }

  return (
    <div className="host-space-detail-layout">
      <div className="space-detail-container">
        <div className="space-detail host-space-detail">
          {/* Back to All Spaces Link */}
          <Link to=".." relative="path">
            <FaArrowLeft className="space-detail-faIcon" />
            <span className="space-detail-backLink">Back To Your Spaces </span>
          </Link>

          {/* Rest Information */}
          <div className="host-space-detail-layout-content">
            <img
              src={space.imageUrl}
              alt={space.title}
              className={space.available ? "" : "notAvailable"}
            />

            <div>
              <span className="space-detail-rating">
                <FaStar className="star" />
                {space.rating}
              </span>

              <div className="space-detail-tags">
                <i className={`space-type ${space.type} selected`}>
                  {space.type}
                </i>
                <i className={`space-type space-available`}>
                  {space.available ? "Available" : "Not Available"}
                </i>
              </div>

              <h2>{space.title}</h2>

              <p className="space-price">
                <span>${space.price}</span>/hour
              </p>
            </div>
          </div>

          <nav className="rentOut-nav host-space-detail-nav">
            <NavLink
              to="."
              end
              className={({ isActive }) => {
                return isActive ? "rentOut-nav-selected" : "rentOut-nav-item";
              }}
            >
              Details
            </NavLink>

            <NavLink
              to="pricing"
              className={({ isActive }) => {
                return isActive ? "rentOut-nav-selected" : "rentOut-nav-item";
              }}
            >
              Pricing
            </NavLink>

            <NavLink
              to="photos"
              className={({ isActive }) => {
                return isActive ? "rentOut-nav-selected" : "rentOut-nav-item";
              }}
            >
              Photos
            </NavLink>
          </nav>
        </div>
      </div>
      <Outlet context={{ space, id }} />
    </div>
  );
}
