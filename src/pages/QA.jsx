import React from "react";
import classNames from "classnames";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ReactPlayer from "react-player";
import "../assets/scss/style.scss";
import { Link } from 'react-router-dom';


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

  const VEaasProjects = () => {
    showVEaasProjects();
  }

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
<button className="button-group">
              <Link to="/Btn1">
                <button className="button-secondary">
                  <p>
                    John Abraham<br></br>
                    Project: QA
                  </p>
                </button>
              </Link>
              <br></br>
              <br></br>
              <Link to="/Btn2">
              <button className="button-secondary" onClick="">
                <p>
                  Jessica<br></br>
                  Project: QA
                </p>
              </button>
            </Link>
              <br></br>
              <br></br>
              <Link to="/Btn3">
              <button className="button-secondary" onClick="">
                <p>
                  Hardron<br></br>
                  Project: QA
                </p>
              </button>
            </Link>
              <br></br>
              <br></br>
              <Link to="/Btn4">
              
              <button className="button-secondary" onClick="">
                <p>
                  Ali Khan<br></br>
                  Project: QA
                </p>
              </button>
              </Link>
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
