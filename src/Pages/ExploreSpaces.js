import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function ExploreSpaces() {
  const [spaces, setspaces] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");
  const availabilityFilter = searchParams.get("availability");

  useEffect(() => {
    fetch("/api/spaces")
      .then((res) => res.json())
      .then((data) => setspaces(data.spaces));
  }, []);

  let displayedSpaces = spaces;

  if (spaces && typeFilter) {
    displayedSpaces = displayedSpaces.filter((space) => {
      let spaceTypeEl = space.type.toLowerCase().split(" ");
      spaceTypeEl =
        spaceTypeEl[0] +
        spaceTypeEl[1].charAt(0).toUpperCase() +
        spaceTypeEl[1].slice(1);
      return typeFilter === spaceTypeEl;
    });
  }
  if (spaces && availabilityFilter) {
    displayedSpaces = displayedSpaces.filter(
      (space) => space.available.toString() === availabilityFilter
    );
  }

  const spaceCard = displayedSpaces.map((space) => {
    return (
      <Link
        to={space.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
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

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }

      return prevParams;
    });
  }

  return (
    <div className="space-list-container">
      <h1>Explore our space options</h1>
      <div className="space-list-filters">
        <button
          className={`space-type filterBtn fullyFurnished ${
            typeFilter === "fullyFurnished" ? "selected" : null
          }`}
          onClick={() => {
            handleFilterChange("type", "fullyFurnished");
          }}
        >
          Fully Furnished
        </button>
        <button
          className={`space-type filterBtn semiFurnished ${
            typeFilter === "semiFurnished" ? "selected" : null
          }`}
          onClick={() => {
            handleFilterChange("type", "semiFurnished");
          }}
        >
          Semi Furnished
        </button>
        <button
          className={`space-type filterBtn lightlyDecorated ${
            typeFilter === "lightlyDecorated" ? "selected" : null
          }`}
          onClick={() => {
            handleFilterChange("type", "lightlyDecorated");
          }}
        >
          Lightly Decorated
        </button>
        <button
          className={`space-type filterBtn naturallyDecorated ${
            typeFilter === "naturallyDecorated" ? "selected" : null
          }`}
          onClick={() => {
            handleFilterChange("type", "naturallyDecorated");
          }}
        >
          Naturally Decorated
        </button>
        <button
          className={`space-type filterBtn rawSpace ${
            typeFilter === "rawSpace" ? "selected" : null
          }`}
          onClick={() => {
            handleFilterChange("type", "rawSpace");
          }}
        >
          Raw Space
        </button>
        <button
          className={`space-type filterBtn artfullyDecorated ${
            typeFilter === "artfullyDecorated" ? "selected" : null
          }`}
          onClick={() => {
            handleFilterChange("type", "artfullyDecorated");
          }}
        >
          Artfully Decorated
        </button>
        <button
          className={`space-type filterBtn lightlyDecorated ${
            availabilityFilter === "true" ? "selected" : null
          }`}
          onClick={() => {
            handleFilterChange("availability", true);
          }}
        >
          Available
        </button>
        <button
          className={`space-type filterBtn lightlyDecorated ${
            availabilityFilter === "false" ? "selected" : null
          }`}
          onClick={() => {
            handleFilterChange("availability", false);
          }}
        >
          Not Available
        </button>
        {(typeFilter || availabilityFilter) && (
          <button
            className={`space-type clear-filters`}
            onClick={() => {
              handleFilterChange("type", null);
              handleFilterChange("availability", null);
            }}
          >
            Clear Filters
          </button>
        )}
      </div>
      <div className="space-list">{spaceCard}</div>
    </div>
  );
}
