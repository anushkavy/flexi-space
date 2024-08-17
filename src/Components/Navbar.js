import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-btn">
        <h1>FlexiSpace</h1>
      </Link>
      <div className="nav-content">
        <Link to="/about" className="nav-btn">
          About
        </Link>
        <Link to="/explore" className="nav-btn">
          Explore Spaces
        </Link>
      </div>
    </nav>
  );
}
