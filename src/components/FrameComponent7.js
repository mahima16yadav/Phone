import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <div className={`frame-parent1 ${className}`}>
      <div className="partners-that-trusted-us-wrapper">
        <div className="partners-that-trusted"> Partners that trusted us</div>
      </div>
      <div className="logo-ticker">
        <div className="logo-ticker1">
          <img
            className="quantum-1-icon"
            loading="lazy"
            alt=""
            src="/quantum-1@2x.png"
          />
          <img
            className="pulse-1-icon"
            loading="lazy"
            alt=""
            src="/pulse-1@2x.png"
          />
          <img
            className="echo-1-icon"
            loading="lazy"
            alt=""
            src="/echo-1@2x.png"
          />
          <img
            className="celestia-1-icon"
            loading="lazy"
            alt=""
            src="/celestia-1@2x.png"
          />
          <img
            className="apex-1-icon"
            loading="lazy"
            alt=""
            src="/apex-1@2x.png"
          />
          <img
            className="acme-1-icon"
            loading="lazy"
            alt=""
            src="/acme-1@2x.png"
          />
          <div className="logo-ticker-child" />
        </div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
