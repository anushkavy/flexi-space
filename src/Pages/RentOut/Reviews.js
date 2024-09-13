import { useOutletContext } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { FaStar } from "react-icons/fa";
import { UserReviews } from "../../Dataset/UserReviews";

export default function Reviews() {
  const { hostSpaces, avgRating } = useOutletContext();
  const reviewData = hostSpaces.map((space) => {
    return space.rating;
  });

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;
  const len = reviewData.length;

  for (let i = 0; i < len; i++) {
    if (reviewData[i] === 5) count5 = count5 + 1;
    else if (reviewData[i] === 4) count4 = count4 + 1;
    else if (reviewData[i] === 3) count3 = count3 + 1;
    else if (reviewData[i] === 2) count2 = count2 + 1;
    else count1 = count1 + 1;
  }

  const BorderLinearProgress = styled(LinearProgress)`
    height: 10px;
    border-radius: 5px;
    background-color: #b9b9b9;
    ${`.MuiLinearProgress-bar1Determinate`} {
      background-color: #ff8c38;
    }
  `;
  return (
    <div className="dash-review-main">
      <h2>Reviews and Rating</h2>
      <div className="dash-review-head">
        <div className="dash-avg-rating">
          <div className="avg-rating">
            <h2>{avgRating}</h2>
            <FaStar className="dash-star" />
          </div>{" "}
          <h4 className="review-number">{UserReviews.length} Reviews</h4>
        </div>
        <div className="progress-bar-list">
          <div className="dash-progress-bar">
            <div className="progress-bar-label">
              <span>5</span>
              <FaStar className="star" />
            </div>

            <BorderLinearProgress
              variant="determinate"
              value={count5 * (100 / len)}
              sx={{ width: "0.7" }}
            />
            <span className="label-percentage">
              {Math.floor(count5 * (100 / len))}%
            </span>
          </div>

          <div className="dash-progress-bar">
            <div className="progress-bar-label">
              <span>4</span>
              <FaStar className="star" />
            </div>
            <BorderLinearProgress
              variant="determinate"
              value={count4 * (100 / len)}
              sx={{ width: "0.7" }}
            />
            <span className="label-percentage">
              {Math.floor(count4 * (100 / len))}%
            </span>
          </div>

          <div className="dash-progress-bar">
            <div className="progress-bar-label">
              <span>3</span>
              <FaStar className="star" />
            </div>
            <BorderLinearProgress
              variant="determinate"
              value={count3 * (100 / len)}
              sx={{ width: "0.7" }}
            />
            <span className="label-percentage">
              {Math.floor(count3 * (100 / len))}%
            </span>
          </div>

          <div className="dash-progress-bar">
            <div className="progress-bar-label">
              <span>2</span>
              <FaStar className="star" />
            </div>
            <BorderLinearProgress
              variant="determinate"
              value={count2 * (100 / len)}
              sx={{ width: "0.7" }}
            />
            <span className="label-percentage">
              {Math.floor(count2 * (100 / len))}%
            </span>
          </div>

          <div className="dash-progress-bar">
            <div className="progress-bar-label">
              <span>1</span>
              <FaStar className="star" />
            </div>
            <BorderLinearProgress
              variant="determinate"
              value={count1 * (100 / len)}
              sx={{ width: "0.7" }}
            />
            <span className="label-percentage">
              {Math.floor(count1 * (100 / len))}%
            </span>
          </div>
        </div>
      </div>

      <div className="dash-detailed-review-main">
        <h3>Reviews ({UserReviews.length})</h3>
        {UserReviews.map((review) => (
          <div key={review.id}>
            <div className="review">
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar className="star" key={i} />
                ))}{" "}
              </div>
              <div className="info">
                <p className="name">{review.name}</p>
                <p className="date">{review.date}</p>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
