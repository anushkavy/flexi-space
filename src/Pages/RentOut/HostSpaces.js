import { Link, useOutletContext } from "react-router-dom";

export default function YourSpaces() {
  const hostSpaces = useOutletContext() || null;

  const spaceCard = hostSpaces?.map((space) => {
    return (
      <Link to={space.id} key={space.id} className="host-space-link">
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

  return hostSpaces?.length > 0 ? (
    <div className="space-list-container host-space-list-container">
      <h2>Your Listed Spaces</h2>
      <div className="space-list host-space-list">{spaceCard}</div>
    </div>
  ) : (
    <h1>You have not listed any spaces yet!</h1>
  );
}
