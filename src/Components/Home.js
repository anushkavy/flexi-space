import Navbar from "./Navbar";
// import HomePageImage from "../Images/HomePageImage.png";
import { Link } from "react-router-dom";

export default function ExploreSpaces() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        {/* <img
          src={HomePageImage}
          alt="Beautiful Creator Setups"
          className="home-main-img"
        /> */}

        <h1>You got the Perfect Content, we got the Perfect Setup.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="vans">Explore Spaces</Link>
      </div>
    </>
  );
}
