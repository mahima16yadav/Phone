import PropTypes from "prop-types";
import "./Brand.css";

const Brand = ({ className = "" }) => {
  return (
    <div className={`brand ${className}`}>
      <div className="brand-info">
        <div className="brand-logo">
          <div className="icon8">
            <div className="icon-inner" />
            <div className="group-div">
              <div className="frame-child1" />
              <div className="frame-child2" />
            </div>
            <img className="group-icon" alt="" src="/group-39943@2x.png" />
            <div className="rectangle-parent1">
              <div className="frame-child3" />
              <div className="frame-child4" />
            </div>
            <img
              className="icon-child1"
              loading="lazy"
              alt=""
              src="/group-39944@2x.png"
            />
          </div>
          <div className="logo-wrapper">
            <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
          </div>
        </div>
        <div className="brand-name">
          <div className="ez-ambulance">EZ Ambulance</div>
        </div>
      </div>
    </div>
  );
};

Brand.propTypes = {
  className: PropTypes.string,
};

export default Brand;
