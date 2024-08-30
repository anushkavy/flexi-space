import { useOutletContext } from "react-router-dom";
export default function HostSpacePricing() {
  const { space } = useOutletContext();
  return (
    <div className="host-space-detail-info">
      <div>
        <span className="host-space-info-title">Price: </span>${space.price}
        /hour
      </div>
    </div>
  );
}
