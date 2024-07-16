import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={`container-wrapper ${className}`}>
      <div className="container1">
        <div className="about-us">About us</div>
        <div className="text-wrapper">
          <div className="at-lifeline-ambulance">
            At Lifeline Ambulance Services, we're committed to saving lives
            sustainably. From fuel-efficient vehicles to waste reduction, we're
            pioneering eco-conscious practices in emergency medical
            transportation. Join us in driving toward a greener future, one
            ambulance ride at a time.
          </div>
          <div className="button-container">
            <a href="/about" className="contact-button learn-more">
              Read more
            </a>
          </div>
          {/* <Button className="button1" variant="primary" /> */}
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
