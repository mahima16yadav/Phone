import { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "", propPadding }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`basic-wrapper ${className}`} style={frameDivStyle}>
      <div className="basic">
        <div className="basic-inner">
          <div className="frame-parent2">
            <div className="basic-container">
              <div className="basic1">Basic</div>
            </div>
            <div className="parent">
              <div className="div">
                <span className="span">{` `}</span>
                <span className="span1">
                  <span>
                    <span>₹</span>
                    <span className="span2">{` `}</span>
                  </span>
                </span>
                <span>
                  <span className="span3">
                    <span>999</span>
                  </span>
                  <span className="span4">-50%</span>
                </span>
              </div>
              <div className="per-month-wrapper">
                <div className="per-month">per month</div>
              </div>
            </div>
          </div>
        </div>
        <div className="for-small-households-or-busine-parent">
          <div className="for-small-households">
            For small households or businesses with moderate energy consumption
          </div>
          <Button variant="primary" />
        </div>
        <div className="benefits">
          <div className="frame">
            <div className="whats-included">What’s included</div>
            <img className="box-icon" alt="" src="/box1.svg" />
          </div>
          <div className="check-items">
            <div className="check">
              <div className="icon1">
                <img className="check-icon" alt="" src="/check-4.svg" />
              </div>
              <div className="fixed-amount-of">
                Fixed amount of renewable energy supply
              </div>
            </div>
            <div className="check1">
              <div className="icon2">
                <img className="check-icon1" alt="" src="/check-4.svg" />
              </div>
              <div className="installation-support-for">
                Installation support for chosen energy type
              </div>
            </div>
            <div className="check2">
              <div className="icon3">
                <img className="check-icon2" alt="" src="/check-4.svg" />
              </div>
              <div className="basic-customer-support">
                Basic customer support included
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default FrameComponent5;
