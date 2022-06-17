import React, {useState} from 'react';
import PropTypes from 'prop-types';

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
            Aspire Keypad
          </li>
          <li
              className={getActiveClass(2, 'active')}
              onClick={() => toggleTab(2)}
          >
            Aspire RFID
          </li>
        </ul>
        <div className="tab-content-container">
          <div className={"tab-content "+getActiveClass(1, 'active')}>Keypad</div>
          <div className={"tab-content "+getActiveClass(2, 'active')}>RFID</div>
        </div>

      </div>
  );

};

Tab.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default Tab;