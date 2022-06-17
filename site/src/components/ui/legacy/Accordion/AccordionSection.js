import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {replaceCharWithChar} from '../../../../utils/utils'


class AccordionSection extends Component {

  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    clsName: PropTypes.string.isRequired
  }

  onClick = () => {
    this.props.onClick(this.props.label);
  }

  render() {

    let classNames = require('classnames');
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    let accordionSectionClass = classNames({
      'accordion-section ': !this.props.isOpen,
      'accordion-section open': this.props.isOpen
    });

    let labelSelectionClass = classNames({
      'label': !this.props.isOpen,
      'label open': this.props.isOpen
    });

    return (
      <div className={accordionSectionClass + ' '+this.props.clsName}>
        <div className={'accordion '+this.props.clsName} onClick={onClick}>
          <h3 className={labelSelectionClass} id={replaceCharWithChar(label, ' ', '-')}>{label}</h3>
          <div className={'expander'}>
            {!isOpen && <span>&#43;</span>}
            {isOpen && <span>&#8722;</span>}
          </div>
        </div>
        {isOpen && (
          <div className={'accordion-content'}>
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

AccordionSection.propTypes = {
  //myProp: PropTypes.string.isRequired
}


export default AccordionSection;