import React from "react";
import classNames from "classnames";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PostList4 from "../components/PostList4";


const Btn4 = ({
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
              <span className="text-color-primary"></span>
            </h1>
            <div className="container-cs">
            <PostList4></PostList4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Btn4;
