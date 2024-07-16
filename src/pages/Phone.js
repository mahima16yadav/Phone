import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import ContactInfo from "../components/ContactInfo";
import Brand from "../components/Brand";
import FrameComponent from "../components/FrameComponent";
import "./Phone.css";

const Phone = () => {
  return (
    <div className="phone">
      <section className="video-card-parent">
        <div className="video-card">
          <img className="video-card-child" alt="" src="/rectangle-1@2x.png" />
          <header className="screenshot-2024-07-13-at-441-parent">
            <img
              className="screenshot-2024-07-13-at-441"
              loading="lazy"
              alt=""
              src="/screenshot-20240713-at-44106pm-1@2x.png"
            />
            <img
              className="cimenu-alt-01-icon"
              loading="lazy"
              alt=""
              src="/cimenualt01.svg"
            />
          </header>
          <FrameComponent9 />
          <FrameComponent8 />
        </div>
        <FrameComponent7 />
      </section>
      <FrameComponent6 />
      <div className="description">Description</div>
      <div className="options">
        <div className="value">Value</div>
        <div className="option-2">Option 2</div>
        <div className="option-3">Option 3</div>
        <div className="option-4">Option 4</div>
        <div className="option-5">Option 5</div>
      </div>
      <div className="description1">Description</div>
      <div className="options1">
        <div className="value1">Value</div>
        <div className="option-21">Option 2</div>
        <div className="option-31">Option 3</div>
        <div className="option-41">Option 4</div>
        <div className="option-51">Option 5</div>
      </div>
      <div className="description2">Description</div>
      <div className="options2">
        <div className="value2">Value</div>
        <div className="option-22">Option 2</div>
        <div className="option-32">Option 3</div>
        <div className="option-42">Option 4</div>
        <div className="option-52">Option 5</div>
      </div>
      <section className="frame-parent">
        <FrameComponent4 />
        {/* <FrameComponent3 /> */}
        {/* <FrameComponent2 /> */}
        {/* <FrameComponent1 /> */}
        <div className="contact-container-wrapper">
          <div className="contact-container">
            <div className="contact-content">
              <div className="contact-us">Contact us</div>
            </div>
            <div className="we-are-here">{`We are here to help you make a first move to greener choice. `}</div>
          </div>
        </div>
        {/* <ContactInfo /> */}
        {/* <Brand /> */}
        {/* <FrameComponent /> */}
        <div className="footer">
          <div className="flow-all-rights">
            © 2024 Flow. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Phone;
