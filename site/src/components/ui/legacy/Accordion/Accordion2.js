import React, { Component } from 'react';


class Accordions2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  handleAccordionClick = () => {
    console.log('clik');
    this.setState({isActive: !this.state.isActive})
  }

  render() {
    return (
      <React.Fragment>
        <div className="accordion">
          <div className={this.state.isActive ? 'accordion-section faq' : 'accordion-section'}>
            <div className="accordion-title" onClick={() => this.handleAccordionClick()}>
              <h3 className={'label'} dangerouslySetInnerHTML={{__html: this.props.title}} />
              <div className={'expander'}>{this.state.isActive ? '-' : '+'}</div>
            </div>
            {this.state.isActive && <div className="accordion-content" dangerouslySetInnerHTML={{__html: this.props.content}} />}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Accordions2;