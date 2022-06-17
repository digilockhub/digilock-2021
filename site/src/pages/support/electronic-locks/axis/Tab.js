import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {StaticImage} from "gatsby-plugin-image";
import {Trans} from "gatsby-plugin-react-i18next";

const Tab = (props) => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) => {
    return toggleState === index ? className : '';
  };

  return (
      <div className={'tab-container'}>
        <ul className="tab-list unstyled-list">
          <li
              className={getActiveClass(1, 'active')}
              onClick={() => toggleTab(1)}
          >
            Axis <Trans>keypad</Trans>
          </li>
          <li
              className={getActiveClass(2, 'active')}
              onClick={() => toggleTab(2)}
          >
            Axis <Trans>rfid</Trans>
          </li>
        </ul>
        <div className="tab-content-container">
          <div className={"tab-content "+getActiveClass(1, 'active')}>

            <StaticImage
                src={'./images/keypad-features-front.png'}
                loading={'lazy'}
                width={'995'}
                height={'824'}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Aspire Smart Lock"
            />
            <StaticImage
                src={'./images/features-rear-unit.png'}
                loading={'lazy'}
                width={'995'}
                height={'824'}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Aspire Smart Lock"
            />

          </div>
          <div className={"tab-content "+getActiveClass(2, 'active')}>
            <StaticImage
                src={'./images/rfid-features-front.png'}
                loading={'lazy'}
                width={'995'}
                height={'824'}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Aspire Smart Lock"
            />
            <StaticImage
                src={'./images/features-rear-unit.png'}
                loading={'lazy'}
                width={'995'}
                height={'824'}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Aspire Smart Lock"
            />
          </div>
        </div>

      </div>
  );
};

Tab.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default Tab;