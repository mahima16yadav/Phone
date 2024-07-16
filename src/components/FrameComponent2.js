import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`subtitle-parent ${className}`}>
      <div className="subtitle">
        <div className="subtitle-dot">
          <div className="dot" />
        </div>
        <div className="solutions">Solutions</div>
      </div>
      <div className="solutions-key">
        <div className="key-to-clean">Key to clean future</div>
      </div>
      <div className="solutions-commitment">
        <div className="our-commitment-to">{`Our commitment to green energy is paving the way for a cleaner, healthier planet. `}</div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
