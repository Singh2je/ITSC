import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    paragraph: '',
    title: 'EVENT SCHEDULE',
  };


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                 
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/avatar7.jpg')}
                      alt="Features tile icon 01"
                      width={150}
                      height={150} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <h6 className="mt-0 mb-8">
                  <div className="time">
                  09:05 A.M - 09:10 A.M
                  </div>
                </h6>
                  <h4 className="mt-0 mb-8">
                  Kristi Nelson, PhD
                    </h4>
                  <p className="m-0 text-sm">
                  Executive Vice President and Provost - University of Cincinnati                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/avatar5.jpg')}
                      alt="Features tile icon 02"
                      width={150}
                      height={150} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <h6 className="mt-0 mb-8">
                  <div className="time">
                  09:05 A.M - 09:10 A.M
                  </div>
                </h6>
                  <h4 className="mt-0 mb-8">
                  Nicole Jass
                    </h4>
                  <p className="m-0 text-sm">
                  Sr. VP of Products + Merchant Solutions - FIS                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/avatar4.jpg')}
                      alt="Features tile icon 03"
                      width={150}
                      height={150} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <h6 className="mt-0 mb-8">
                  <div className="time">
                  09:05 A.M - 09:10 A.M
                  </div>
                </h6>
                  <h4 className="mt-0 mb-8">
                  Hazem Said, PhD
                    </h4>
                  <p className="m-0 text-sm">
                  Director and Professor - School of IT                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/avatar1.jpg')}
                      alt="Features tile icon 04"
                      width={150}
                      height={150}/>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <h6 className="mt-0 mb-8">
                  <div className="time">
                  09:05 A.M - 09:10 A.M
                  </div>
                </h6>
                  <h4 className="mt-0 mb-8">
                  David Adams
                    </h4>
                  <p className="m-0 text-sm">
                  Chief Innovation Officer - University of Cincinnati, CEO - UCRI                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/avatar2.jpg')}
                      alt="Features tile icon 05"
                      width={150}
                      height={150}/>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <h6 className="mt-0 mb-8">
                  <div className="time">
                  09:05 A.M - 09:10 A.M
                  </div>
                </h6>
                  <h4 className="mt-0 mb-8">
                  Lawrence Johnson, PhD
                    </h4>
                  <p className="m-0 text-sm">
                  Dean and Professor - CECH
                  </p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;