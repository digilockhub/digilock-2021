import React, { Component } from 'react';
import Accordion2 from './Accordion'

class AccordionsParent extends Component {

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
      <React.Fragment>
        <section className={'general-faq'}>
          <div className="accordion-title" onClick={() => this.handleAccordionClick()}>
            <h3 className={'label'} dangerouslySetInnerHTML={{__html: this.props.title}} />
            <div className={'expander'}>{this.state.isActive ? '-' : '+'}</div>
          </div>
          {
            this.state.isActive && <div className="content-grid grid-grey first-row">
              <div className="content-row">
                {/*<SupportGeneralComponent />*/}
                {
                  this.props.items.map(({node}) => (
                    <Accordion2 title={node.title} content={node.content} />
                  ))
                }
              </div>
            </div>
          }
        </section>
      </React.Fragment>
    );
  }
}

export default AccordionsParent;