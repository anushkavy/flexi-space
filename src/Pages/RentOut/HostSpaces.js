import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function YourSpaces() {
  const [hostSpaces, setHostSpaces] = useState([]);

  useEffect(() => {
    fetch("/api/rentOut/spaces")
      .then((res) => res.json())
      .then((data) => setHostSpaces(data.spaces));
  }, []);

  const spaceCard = hostSpaces.map((space) => {
    return (
      <Link
        to={`/rentOut/spaces/${space.id}`}
        key={space.id}
        className="host-space-link"
      >
        <div className="host-space-tile">
          <img
            src={space.imageUrl}
            alt={space.title}
            className="host-space-img"
          />

          <div className="host-space-info">
            <h3>{space.title}</h3>
            <p>${space.price}/hour</p>
          </div>
        </div>
      </Link>
    );
  });

  return hostSpaces.length > 0 ? (
    <div className="space-list-container host-space-list-container">
      <h1>Your Listed Spaces</h1>
      <div className="space-list host-space-list">{spaceCard}</div>
    </div>
  ) : (
    <h1>You have not listed any spaces yet!</h1>
  );
}
