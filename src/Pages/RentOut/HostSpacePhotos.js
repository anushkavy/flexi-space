import { useOutletContext } from "react-router-dom";
export default function HostSpacePhotos() {
  const { space } = useOutletContext();
  return (
    <div className="host-space-detail-info">
      <div>
        <img src={space.imageUrl} alt={space.title} />
      </div>
    </div>
  );
}
