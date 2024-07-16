import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`frame-parent3 ${className}`}>
      <div className="pricing-parent">
        <div className="pricing">Pricing</div>
        <div className="our-pricing-plans">
          Our pricing plans are simple and designed to cater to households and
          companies of various sizes. Choose a plan that suits your needs and
          budget.
        </div>
      </div>
      <div className="enterprise-wrapper">
        <div className="enterprise">
          <img className="lines-icon" alt="" src="/lines@2x.png" />
          <div className="tag">
            <div className="version-20-is">{`Inaugural Offer `}</div>
          </div>
          <div className="tag-wrapper">
            <div className="tag1">
              <div className="version-20-is1">Most Popular</div>
            </div>
          </div>
          <div className="enterprise-parent">
            <div className="enterprise1">Enterprise</div>
            <div className="enterprise-price">
              <div className="price-value">
                <div className="div1">
                  <span className="span5">{` `}</span>
                  <span className="span6">
                    <span>
                      <span>₹</span>
                      <span className="span7">{` `}</span>
                    </span>
                  </span>
                  <span>
                    <span className="span8">
                      <span>999</span>
                    </span>
                    <span className="span9">-50%</span>
                  </span>
                </div>
                <div className="monthly-price">
                  <div className="per-month1">per month</div>
                </div>
              </div>
              <div className="original-price">
                <div className="mrp-1999">M.R.P.: ₹̶1999</div>
              </div>
            </div>
            <div className="tailored-for-services">
              Tailored for services with significant demands
            </div>
            <Button className="button2" variant="primary" />
          </div>
          <div className="benefits1">
            <div className="included-header">
              <div className="whats-included1">What’s included</div>
              <img className="box-icon1" alt="" src="/box.svg" />
            </div>
            <div className="check-items1">
              <div className="check3">
                <div className="icon4">
                  <img className="check-icon3" alt="" src="/check.svg" />
                </div>
                <div className="advanced-analytics-and">
                  Advanced analytics and 24/7 priority support
                </div>
              </div>
              <div className="check4">
                <div className="icon5">
                  <img className="check-icon4" alt="" src="/check.svg" />
                </div>
                <div className="customizable-subscription-opti">
                  Customizable subscription options
                </div>
              </div>
              <div className="check5">
                <div className="icon6">
                  <img className="check-icon5" alt="" src="/check.svg" />
                </div>
                <div className="dedicated-technical-support">
                  Dedicated technical support and assistance
                </div>
              </div>
              <div className="check6">
                <div className="icon7">
                  <img className="check-icon6" alt="" src="/check.svg" />
                </div>
                <div className="advanced-analytics-and1">
                  Advanced analytics and 24/7 priority support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent5 />
      <FrameComponent5 propPadding="0rem var(--padding-42xl) var(--padding-7xs-9) var(--padding-43xl)" />
      <FrameComponent5 propPadding="0rem var(--padding-42xl) 0rem var(--padding-43xl)" />
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
