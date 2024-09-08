import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>You got the Perfect Content, we got the Perfect Setup.</h1>
        <p>
          Elevate your content by booking the perfect creative space. Turn your
          vision into reality, one shoot at a time.
        </p>
        <Link to="/explore">Explore Spaces</Link>
      </div>
    </div>
  );
}
