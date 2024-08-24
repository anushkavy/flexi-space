import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function ExploreSpaces() {
  const [spaces, setspaces] = useState([]);

  useEffect(() => {
    fetch("/api/spaces")
      .then((res) => res.json())
      .then((data) => setspaces(data.spaces));
  }, []);

  const spaceCard = spaces.map((space) => {
    return (
      <Link to={`/explore/${space.id}`} key={space.id}>
        <div className="space-tile">
          <img src={space.imageUrl} alt={space.title} />
          <div className="space-info">
            <h3>{space.title}</h3>
            <p className="space-price">
              ${space.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`space-type ${space.type} selected`}>{space.type}</i>
        </div>
      </Link>
    );
  });

  return (
    <>
      <Navbar />
      <div className="space-list-container">
        <h1>Explore our space options</h1>
        <div className="space-list">{spaceCard}</div>
      </div>
    </>
  );
}
