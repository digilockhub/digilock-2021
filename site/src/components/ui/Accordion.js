import React, { Component } from 'react';


class Accordions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }

  handleAccordionClick = () => {
    this.setState({isActive: !this.state.isActive})
  };

  render() {
    return (
      <>
        <div className="accordion-child">
          <div className={this.state.isActive ? 'accordion-section faq' : 'accordion-section'}>
            <div className="accordion-title" onClick={() => this.handleAccordionClick()}>
              <p className={'label'} dangerouslySetInnerHTML={{__html: this.props.title}} />
              <div className={'expander'}>{this.state.isActive ? '-' : '+'}</div>
            </div>
            {
              this.state.isActive ?
                  <p className="accordion-content" dangerouslySetInnerHTML={{__html: this.props.content}} />
                  : null
            }
          </div>
        </div>
      </>
    );
  }
}

export default Accordions;