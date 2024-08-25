import bgImg from "../Images/AboutPageImage.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="about-page-container">
        <div className="about-page-hero">
          <img
            src={bgImg}
            className="about-hero-image"
            alt="A beautiful setup"
          />
          <div className="about-page-content">
            <h1>
              Don’t compromise on space when you could create in the right
              space.
            </h1>
            <p>
              Our mission is to elevate your creative journey with the perfect
              space rental. Each space is carefully curated and ready for your
              next big idea, ensuring your creative flow never hits a roadblock.
              (A dash of creativity and motivation comes with every booking 😉)
            </p>
            <p>
              Our team is made up of creative minds who understand the power of
              the perfect space to bring ideas to life. We know firsthand the
              magic that happens when inspiration meets the right environment.
            </p>
          </div>
        </div>
        <div className="about-page-cta">
          <h2>
            Your Best Content is Waiting.
            <br />
            Your setup is ready.
          </h2>
          <Link className="link-button" to="/explore">
            Explore our Spaces
          </Link>
        </div>
      </div>
    </>
  );
}
