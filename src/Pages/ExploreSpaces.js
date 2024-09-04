import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function ExploreSpaces() {
  const [spaces, setspaces] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("typeFilter");

  useEffect(() => {
    fetch("/api/spaces")
      .then((res) => res.json())
      .then((data) => setspaces(data.spaces));
  }, []);

  const displayedSpaces = typeFilter
    ? spaces.filter(
        (space) => space.type.toLowerCase().split(" ").join("") === typeFilter
      )
    : spaces;

  const spaceCard = displayedSpaces.map((space) => {
    return (
      <Link
        to={`/explore/${space.id}`}
        key={space.id}
        className="explore-space-link"
      >
        <div className="space-tile">
          <img
            src={space.imageUrl}
            alt={space.title}
            className={space.available ? "" : "notAvailable"}
          />
          <span className="space-detail-rating">
            <FaStar className="star" />
            {space.rating}
          </span>
          <h3>{space.title}</h3>
          <p className="space-price">
            <span>${space.price}</span>/hour
          </p>
          <div className="space-detail-tags">
            <i className={`space-type ${space.type} selected`}>{space.type}</i>
            <i className={`space-type space-available`}>
              {space.available ? "Available" : "Not Available"}
            </i>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="space-list-container">
      <h1>Explore our space options</h1>
      <div className="space-list">{spaceCard}</div>
    </div>
  );
}
