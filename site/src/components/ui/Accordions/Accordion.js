import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Accordion = (props) => {
  const [selected, setSelected] = useState(false);
  const toggle = (id) => {
    if (selected === id) {
      return setSelected(false);
    }
    setSelected(id);
  }
  return (
      <div className={'-accordion'}>
        {props.data.map((item, i) => {
          return (
              <div key={i} className={'item'}>
                <div className={selected === i ? 'title active' : 'title'} onClick={() => toggle(i)}>
                  <p>{item.node.title}</p>
                  <div className={selected === i ? 'expander active' : 'expander'} />
                </div>
                <div className={selected === i ? 'content show' : 'content'}>
                  <p className={'answer'} dangerouslySetInnerHTML={{__html:item.node.content}} />
                </div>
              </div>
          )
        })}
      </div>
  );
}

Accordion.propTypes = {
  data: PropTypes.array
};

export default Accordion;