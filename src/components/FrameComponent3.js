import InputFields from "./InputFields";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`get-in-touch-container-wrapper ${className}`}>
      <div className="get-in-touch-container">
        <div className="get-in-touch-content">
          <div className="get-in-touch-heading">
            <div className="get-in-touch-title">
              <div className="get-in-touch">Get in Touch</div>
            </div>
            <div className="we-are-here1">{`We are here to help you make a first move to greener choice. `}</div>
          </div>
        </div>
        <div className="rectangle-container">
          <div className="rectangle-div" />
          <div className="first-name">First Name</div>
          <div className="first-name-icons">
            <div className="first-name-icon-container">
              <img className="name-icon" alt="" src="/name-icon.svg" />
            </div>
            <img className="name-icon-copy" alt="" src="/name-icon-copy.svg" />
          </div>
          <div className="input-fields1">
            <div className="select-fields">
              <div className="last-name">Last Name</div>
              <div className="doe">Doe</div>
            </div>
            <img
              className="select-containers-icon"
              alt=""
              src="/name-icon-copy.svg"
            />
          </div>
          <div className="email-field">
            <div className="email">Email</div>
          </div>
          <div className="email-icons">
            <img className="email-icon" alt="" src="/name-icon-copy.svg" />
          </div>
          <div className="input-fields2">
            <div className="phone-number-parent">
              <div className="phone-number">Phone Number</div>
              <div className="div2">+1 012 3456 789</div>
            </div>
            <img className="input-fields-child" alt="" src="/vector-7.svg" />
          </div>
          <InputFields selectState="Select State" />
          <InputFields
            selectState="Select District"
            propPadding="0rem 0rem var(--padding-10xs)"
          />
          <InputFields
            selectState="Select City/Town"
            propPadding="0rem 0rem var(--padding-mini)"
          />
          <div className="submit-button">
            <div className="send-message">Send Message</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
