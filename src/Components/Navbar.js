import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-item">
        <h1>FlexiSpace</h1>
      </Link>
      <div className="nav-content">
        <Link to="/rentOut" className="nav-item nav-btn">
          Rent Out Your Space
        </Link>
        <Link to="/about" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/explore" className="nav-item nav-btn">
          Explore Spaces
        </Link>
      </div>
    </nav>
  );
}
