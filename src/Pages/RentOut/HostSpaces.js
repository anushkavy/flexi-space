import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHostSpaces } from "../../api";

export default function YourSpaces() {
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

  return hostSpaces.length > 0 ? (
    <div className="space-list-container host-space-list-container">
      <h1>Your Listed Spaces</h1>
      <div className="space-list host-space-list">{spaceCard}</div>
    </div>
  ) : (
    <h1>You have not listed any spaces yet!</h1>
  );
}
