import PropTypes from "prop-types";
import "./FrameComponent8.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <div className={`frame-group ${className}`}>
      <div className="our-services-wrapper">
        <b className="our-services">Our Services</b>
      </div>
      <div className="video-card-group">
        <div className="video-card1">
          <img className="video-card-item" alt="" src="/rectangle-1@2x.png" />
          <div className="content">
            <div className="content-inner">
              <div className="play-parent">
                <img
                  className="play-icon"
                  loading="lazy"
                  alt=""
                  src="/play.svg"
                />
                <b className="skyfall">Skyfall</b>
              </div>
            </div>
            <div className="frame-container">
              <div className="by-author-name-wrapper">
                <div className="by-author-name">By Author Name</div>
              </div>
              <div className="frame-div">
                <div className="k-views-parent">
                  <b className="k-views">10K views</b>
                  <div className="frame-child" />
                </div>
                <b className="hours-ago">1 hours ago</b>
              </div>
            </div>
          </div>
        </div>
        <div className="video-card2">
          <div className="rectangle-parent">
            <img className="frame-item" alt="" src="/rectangle-11@2x.png" />
            <div className="content1" />
          </div>
        </div>
        <div className="video-card3">
          <div className="rectangle-group">
            <img className="frame-inner" alt="" src="/rectangle-1-1@2x.png" />
            <div className="content2" />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
