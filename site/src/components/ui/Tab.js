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
            Tab 1
          </li>
          <li
              className={getActiveClass(2, 'active')}
              onClick={() => toggleTab(2)}
          >
            Tab 2
          </li>
          <li
              className={getActiveClass(3, 'active')}
              onClick={() => toggleTab(3)}
          >
            Tab 3
          </li>
        </ul>
        <div className="tab-content-container">
          <div className={"tab-content "+getActiveClass(1, 'active')}>Content 1</div>
          <div className={"tab-content "+getActiveClass(2, 'active')}>Content 2</div>
          <div className={"tab-content "+getActiveClass(3, 'active')}>Content 3</div>
        </div>

      </div>
  );

};

Tab.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default Tab;