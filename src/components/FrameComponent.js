import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`newsletter-container-wrapper ${className}`}>
      <div className="newsletter-container">
        <div className="newsletter">
          <div className="text-wrapper2">
            <div className="your-source-for">
              Your Source for Green Energy Updates
            </div>
            <div className="stay-in-the">
              Stay in the loop with our Green Horizon newsletter, where we
              deliver bite-sized insights into the latest green energy
              solutions.
            </div>
          </div>
          <div className="form">
            <div className="input">
              <div className="label1">
                <div className="label2">Label</div>
              </div>
              <div className="content3">
                <div className="input1">
                  <img className="user-icon" alt="" src="/user.svg" />
                  <div className="placeholder">Your e-mail...</div>
                  <img className="eye-icon" alt="" src="/eye.svg" />
                </div>
                <div className="hint">
                  <div className="placeholder1">Your e-mail...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe-button">
          <Button variant="primary" />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
