import PropTypes from "prop-types";
import "./ContactInfo.css";

const ContactInfo = ({ className = "" }) => {
  return (
    <div className={`contact-info ${className}`}>
      <div className="contact-details">
        <div className="social-icon">
          <img
            className="custom-icon"
            loading="lazy"
            alt=""
            src="/custom-icon.svg"
          />
        </div>
        <div className="phone-info">
          <div className="phone-number1">
            <div className="phone-details">
              <div className="phone1">Phone</div>
            </div>
            <div className="we-are-available">
              We are available Monday-Friday from 8 AM until 5 PM
            </div>
          </div>
        </div>
        <div className="empty-container">
          <div className="div3">(239) 555-0108</div>
        </div>
        <div className="icon-fields">
          <img className="contact-icons" alt="" src="/vector-5-1.svg" />
          <div className="custom-icon-containers">
            <img className="custom-icon1" alt="" src="/custom-icon-1.svg" />
          </div>
        </div>
        <div className="email-info">
          <div className="email-address">
            <div className="email1">Email</div>
            <div className="we-will-reply">
              We will reply within 2 working days
            </div>
          </div>
        </div>
        <div className="website-address">
          <div className="helloflowcom">hello@flow.com</div>
        </div>
        <div className="icon-fields1">
          <img className="icon-fields-child" alt="" src="/vector-5-1.svg" />
          <div className="custom-icon-wrapper">
            <img className="custom-icon2" alt="" src="/custom-icon-2.svg" />
          </div>
        </div>
        <div className="office-info">
          <div className="office-address">
            <div className="office-details">
              <div className="office-info-parent">
                <div className="office-info1">
                  <div className="hq-office">HQ Office</div>
                </div>
                <div className="visit-us-in">Visit us in our office</div>
              </div>
            </div>
            <div className="ranchview-dr-richardson">
              3891 Ranchview Dr. Richardson, California 62639
            </div>
          </div>
        </div>
        <img className="location-icon" alt="" src="/vector-5-1.svg" />
      </div>
    </div>
  );
};

ContactInfo.propTypes = {
  className: PropTypes.string,
};

export default ContactInfo;
