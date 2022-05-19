import React, {Component} from 'react';
import Accordion from './Accordion'

class AccordionsParent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }

  handleAccordionClick = () => {
    this.setState({isActive: !this.state.isActive});
  };

  render() {
    return (
        <>
          <div className={'accordion-parent'}>
            <div className="accordion-title" onClick={() => this.handleAccordionClick()}>
              <p className={this.state.isActive ? 'label active' : 'label'}
                 dangerouslySetInnerHTML={{__html: this.props.title}}/>
              {/*<div className={'expander'}>{this.state.isActive ? '-' : '+'}</div>*/}
              <div className={this.state.isActive ? 'expander active' : 'expander'}/>
            </div>
            {
              this.state.isActive ?
                  <div>
                    {
                      this.props.items.map(({node, index}) => (
                          <span key={index}>
                           <Accordion key={index} title={node.title} content={node.content}/>
                          </span>
                      ))
                    }
                  </div>
                  : null
            }
          </div>
        </>
    );
  }
}

export default AccordionsParent;