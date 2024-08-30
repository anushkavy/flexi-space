import { useOutletContext } from "react-router-dom";

export default function HostSpaceDetail() {
  const { space } = useOutletContext();
  return (
    <div className="host-space-detail-info">
      <div>
        <span className="host-space-info-title">Name: </span>
        {space.title}
      </div>
      <div>
        <span className="host-space-info-title">Description: </span>
        {space.description}
      </div>
      <div>
        <span className="host-space-info-title">Address: </span>
        {space.address}
      </div>
      <div>
        <span className="host-space-info-title">Availability Timings: </span>
        {space.availabilityTimings}
      </div>
      <div>
        <span className="host-space-info-title">Capacity: </span>
        {space.capacity}
      </div>
      <div>
        <span className="host-space-info-title">Size: </span>
        {space.size}
      </div>
      <div>
        <span className="host-space-info-title">Accessibility: </span>
        {space.accessibility}
      </div>
      <div>
        <span className="host-space-info-title">Parking: </span>
        {space.parking}
      </div>
      <div>
        <span className="host-space-info-title">Amenities: </span>
        <ul>
          {space.amenities.map((amenity) => {
            return <li key={amenity}>{amenity}</li>;
          })}
        </ul>
      </div>
      <div className="space-detail-rules">
        <span className="host-space-info-title">Rules:</span>
        <ul>
          {space.rules.map((rule) => {
            return <li key={rule}>{rule}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
