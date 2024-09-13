import { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { getSpace } from "../api";
import LoadingState from "../Components/LoadingState";

export default function SpaceDetail() {
  const Params = useParams();
  const [space, setSpace] = useState(null);
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadSpaceDetail() {
      try {
        const data = await getSpace(Params.id);
        setSpace(data);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadSpaceDetail();
  }, [Params.id]);

  if (loading)
    return (
      <h1 aria-live="polite">
        {" "}
        <LoadingState />
      </h1>
    );

  if (error)
    return <h1 aria-live="assertive"> Error Occurred: {error.message}</h1>;

  const search = location.state?.search || "";
  const type = location.state?.type || "";

  const spaceNameEl = type === "" ? "" : type.split(/(?=[A-Z])/);

  const spaceName =
    spaceNameEl === ""
      ? "All Spaces"
      : spaceNameEl[0].charAt(0).toUpperCase() +
        spaceNameEl[0].slice(1) +
        " " +
        spaceNameEl[1] +
        " Spaces";

  return (
    <>
      <div className="space-detail-container">
        <div className="space-detail">
          {/* Back to All Spaces Link */}
          <Link to={`..${search}`} relative="path">
            <FaArrowLeft className="space-detail-faIcon" />
            <span className="space-detail-backLink">
              {`Back To ${spaceName}`}{" "}
            </span>
          </Link>

          {/* Rest Information */}

          <img
            src={space?.imageUrl}
            alt={space?.title}
            className={space?.available ? "" : "notAvailable"}
          />
          <span className="space-detail-rating">
            <FaStar className="star" />
            {space?.rating}
          </span>

          <div className="space-detail-tags">
            <i className={`space-type ${space?.type} selected`}>
              {space?.type}
            </i>
            <i className={`space-type space-available`}>
              {space?.available ? "Available" : "Not Available"}
            </i>
          </div>

          <h2>{space?.title}</h2>

          <p className="space-price">
            <span>${space?.price}</span>/hour
          </p>
          <p className="space-detail-description">{space?.description}</p>
          <p className="space-detail-address">{space?.address}</p>

          <div className="space-detail-infogrid">
            <div className="grid-item">
              <span className="item-title">Availability Timings</span>
              <span className="item-content">{space?.availabilityTimings}</span>
            </div>
            <div className="grid-item">
              <span className="item-title">Capacity</span>
              <span className="item-content">{space?.capacity}</span>
            </div>
            <div className="grid-item">
              <span className="item-title">Size</span>
              <span className="item-content">{space?.size}</span>
            </div>
            <div className="grid-item">
              <span className="item-title">Accesibility</span>
              <span className="item-content">{space?.accessibility}</span>
            </div>
            <div className="grid-item">
              <span className="item-title">Parking</span>
              <span className="item-content">{space?.parking}</span>
            </div>
          </div>

          <div className="space-detail-amenities">
            <span className="item-title">Amenities</span>
            <div className="space-detail-ammenity-items">
              {space?.amenities.map((amenity) => {
                return (
                  <div className="space-detail-amenity" key={amenity}>
                    {amenity}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space?-detail-rules">
            <span className="item-title">Rules</span>
            <ul>
              {space?.rules.map((rule) => {
                return <li key={rule}>{rule}</li>;
              })}
            </ul>
          </div>
          <button className="link-button">Rent this space</button>
        </div>
      </div>
    </>
  );
}
