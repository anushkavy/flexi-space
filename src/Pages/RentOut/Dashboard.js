import { useOutletContext } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const userData = JSON.parse(localStorage.getItem("userData")) || null;
  const userName = userData?.user.name;

  const { hostSpaces, avgRating } = useOutletContext() || null;

  const spaceCard = hostSpaces?.map((space, index) => {
    return index < 3 ? (
      <Link
        to={`spaces/${space.id}`}
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
    ) : null;
  });

  return (
    <div className="dash-container">
      <div className="dash-head">
        <h1>Welcome Back{userName ? `, ${userName}!` : "!"}</h1>
        <div className="dash-head-cards">
          <div className="dash-income dash-head-card">
            <div className="dash-head-detail">
              <h3 className="dash-income-title">
                Income last
                <span className="dash-income-title-span">30 days</span>
              </h3>
              <Link to="income">
                <h4>Details</h4>
              </Link>
            </div>
            <h2 className="dash-head-detail-income">$2,260</h2>
          </div>

          <div className="dash-reviews dash-head-card">
            <div className="dash-head-detail">
              <h3 className="dash-income-title">Review Score</h3>
              <Link to="reviews">
                <h4>Details</h4>
              </Link>
            </div>
            <div className="dash-review-content">
              <FaStar className="dash-star" />
              <h5>
                <span className="dash-review-content-rating">{avgRating}</span>
                /5
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="dash-spaces-container">
        <div className=" dash-head-detail">
          <h3 id="dash-spaces-heading">Your listed Vans</h3>
          <Link to="spaces">
            <h4>View All</h4>
          </Link>
        </div>
        <div className="space-list-container dash-spaces-list space-list">
          {spaceCard}
        </div>
      </div>
    </div>
  );
}
