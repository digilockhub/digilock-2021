import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Accordion from "./Accordion";

const AccordionWrapper = (props) => {
  const [selected, setSelected] = useState(null);
  const toggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  }
  return (
      <div className={'-accordion'}>
        <div key={props.label} className={'item'}>
          <div className={selected === props.label ? 'title active' : 'title'} onClick={() => toggle(props.label)}>
            <p>{props.label}</p>
            <div className={selected === props.label ? 'expander active' : 'expander'} />
          </div>
          <div className={selected === props.label ? 'content show' : 'content'}>
            <Accordion data={props.data}/>
          </div>
        </div>
      </div>
  );
}

AccordionWrapper.propTypes = {
  label: PropTypes.string,
  data: PropTypes.array
};

export default AccordionWrapper;