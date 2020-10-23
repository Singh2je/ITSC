import React from "react";
import classNames from "classnames";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ReactPlayer from "react-player";
import "../assets/scss/style.scss";

const VEaas = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <Header navPosition="right" className="reveal-from-bottom" />

      <div className="container-sm">
        <div className={innerClasses}>
          <div className="V-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              <span className="text-color-primary">List of VEaas Projects</span>
            </h1>
            <div className="container-cs">

              <button className="button-primary" onClick={}>
                <p>
                  Jaspreet<br></br>
                  Project: Mini IT Expo
                </p>
              </button>
              <br></br>
              <br></br>
              <button className="button-primary" onClick="">
                <p>
                  Pranav<br></br>
                  Project: Mini IT Expo
                </p>
              </button>
              <br></br>
              <br></br>
              <button className="button-primary" onClick="">
                <p>
                  Anand Pandey<br></br>
                  Project: Mini IT Expo
                </p>
              </button>
              <br></br>
              <br></br>
              <button className="button-primary" onClick="">
                <p>
                  Sara<br></br>
                  Project: Mini IT Expo
                </p>
              </button>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default VEaas;
