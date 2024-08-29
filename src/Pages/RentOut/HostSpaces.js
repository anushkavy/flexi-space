import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function YourSpaces() {
  const [hostSpaces, setHostSpaces] = useState([]);

  useEffect(() => {
    fetch("/api/host/spaces")
      .then((res) => res.json())
      .then((data) => setHostSpaces(data.spaces));
  }, []);

  // 0: accessibility: "Wheelchair accessible"
  // address: "123 Maple St, New York, NY 10001"
  // amenities: (3) ['Wi-Fi', 'Lighting Equipment', 'Props']
  // availabilityTimings: "8 AM - 8 PM"
  // available: true
  // capacity: 10
  // description: "A spacious and modern loft with large windows, perfect for photo shoots and video content."
  // hostId: "123"
  // id: "1"
  // imageUrl: "https://images.pexels.com/photos/6044445/pexels-photo-6044445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  // parking: "Street parking available"
  // price: 50
  // rating: 4.8
  // rules: (2) ['No loud music after 6 PM', 'No smoking']
  // size: "1200 sq ft"
  // title: "Bright Urban Loft"
  // type: "Fully Equipped"

  const spaceCard = hostSpaces.map((space) => {
    return (
      <Link to={`/host/${space.id}`} key={space.id} className="host-space-link">
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

  return (
    <div className="space-list-container">
      <h1>Your Listed Spaces</h1>
      <div className="space-list">{spaceCard}</div>
    </div>
  );
}
