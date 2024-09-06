import { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function SpaceDetail() {
  const Params = useParams();
  const [space, setSpace] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetch(`/api/spaces/${Params.id}`)
      .then((res) => res.json())
      .then((data) => setSpace(data.spaces));
  }, [Params.id]);

  const search = location.state?.search || "";

  const spaceNameEl =
    search === "?"
      ? ""
      : search
          .split("?type=")[1]
          ?.split("&")[0]
          .split(/(?=[A-Z])/) || "";

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
      {space ? (
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
              src={space.imageUrl}
              alt={space.title}
              className={space.available ? "" : "notAvailable"}
            />
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
            <p className="space-detail-description">{space.description}</p>
            <p className="space-detail-address">{space.address}</p>

            <div className="space-detail-infogrid">
              <div className="grid-item">
                <span className="item-title">Availability Timings</span>
                <span className="item-content">
                  {space.availabilityTimings}
                </span>
              </div>
              <div className="grid-item">
                <span className="item-title">Capacity</span>
                <span className="item-content">{space.capacity}</span>
              </div>
              <div className="grid-item">
                <span className="item-title">Size</span>
                <span className="item-content">{space.size}</span>
              </div>
              <div className="grid-item">
                <span className="item-title">Accesibility</span>
                <span className="item-content">{space.accessibility}</span>
              </div>
              <div className="grid-item">
                <span className="item-title">Parking</span>
                <span className="item-content">{space.parking}</span>
              </div>
            </div>

            <div className="space-detail-amenities">
              <span className="item-title">Amenities</span>
              <div className="space-detail-ammenity-items">
                {space.amenities.map((amenity) => {
                  return (
                    <div className="space-detail-amenity" key={amenity}>
                      {amenity}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-detail-rules">
              <span className="item-title">Rules</span>
              <ul>
                {space.rules.map((rule) => {
                  return <li key={rule}>{rule}</li>;
                })}
              </ul>
            </div>
            <button className="link-button">Rent this space</button>
          </div>
        </div>
      ) : (
        <h1> Loading...</h1>
      )}
    </>
  );
}
