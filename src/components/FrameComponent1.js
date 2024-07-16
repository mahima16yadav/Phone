import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`emergency-ambulance-container-wrapper ${className}`}>
      <div className="emergency-ambulance-container">
        <div className="emergency-ambulance-content">
          <div className="content-wrapper1">
            <div className="text-wrapper1">
              <div className="emergency-ambulance">Emergency Ambulance</div>
              <img
                className="image-icon"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <div className="solar-panels-convert">
                Solar panels convert sunlight into electricity. Photovoltaic
                (PV) cells on these panels capture the energy from the sun and
                convert it into electrical power.
              </div>
            </div>
            <Button variant="primary" />
          </div>
          <div className="arrow-left-parent">
            <img
              className="arrow-left-icon"
              loading="lazy"
              alt=""
              src="/arrowleft.svg"
            />
            <img
              className="arrow-right-icon"
              loading="lazy"
              alt=""
              src="/arrowright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
