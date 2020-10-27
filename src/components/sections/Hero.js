import React from "react";
import classNames from "classnames";
import ReactPlayer from "react-player";
import TimerVideo from "../TimerVideo";
import Timer from "./../Timer";
import Image from "./../elements/Image";

const Hero = ({
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
    "hero section center-content",
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
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <Timer></Timer>
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              <span className="text-color-primary">Mini IT-Expo</span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                Welcome to the Mini IT Expo. Created by your very loved Jaspreet
                Singh. Please watch the Live stream below
              </p>
            </div>
          </div>

          <div className="video-section">
            <div
              className="hero-figure reveal-from-bottom illustration-element-01"
              data-reveal-value="20px"
              data-reveal-delay="800"
            >
              <TimerVideo></TimerVideo>
              <Image
                src={require("./../../assets/images/holder.png")}
                alt="Nature Image"
                width={1}
                height={1}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
