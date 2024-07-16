import PropTypes from "prop-types";
import "./FrameComponent9.css";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <div className={`content-wrapper-wrapper ${className}`}>
      <div className="content-wrapper">
        <div className="text">
          <div className="header">
            <div className="caption">
              <div className="icon">
                <div className="icon-child" />
                <div className="icon-item" />
              </div>
              <div className="future-of-care">Future of Care</div>
            </div>
            <div className="a-sustainable-vision">
              {" "}
              A Sustainable Vision<br/> for Ambulance<br/> Services
            </div>
          </div>
        </div>
        <div className="buttons">
          <div className="button">
            <div className="container">
              <div className="label">Get in touch</div>
              <img className="tail-icon" alt="" src="/tail-icon.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
