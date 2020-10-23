import React from 'react';
import classNames from 'classnames';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ReactPlayer from 'react-player';

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
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    
    <section
    
      {...props}
      className={outerClasses}
    >
     <Header navPosition="right" className="reveal-from-bottom" />

      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className="text-color-primary">Mini IT-Expo</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Welcome to the Mini IT Expo. Created by your very loved Jaspreet Singh. Please watch the Live stream below
                
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
              
              </div>
            </div>
          </div>
          
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <ReactPlayer url="https://youtu.be/P7d1H83IcjE" 
            width={899}            
            height={504}
            controls={true}>
            </ReactPlayer> 
            <div>
         
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}



export default VEaas;