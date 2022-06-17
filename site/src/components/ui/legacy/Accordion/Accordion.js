import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AccordionSection from './AccordionSection'
import {returnRouteName} from '../../../../utils/utils'

class Accordion extends Component {

  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    clsName: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    const openSections = {}
    this.state = { openSections, isProductSection: false }
    this.myRef = React.createRef()
  }

  accordionSectionCounter = 0 //fix unique key error for mapping

  componentDidMount() {
    this.setState({isProductSection: returnRouteName(document.location.pathname).indexOf('product') > -1})
  }

  onClick = label => {
    const {
      state: { openSections },
    } = this

    const isOpen = !openSections[label]

    this.setState({
      openSections: {
        [label]: !!isOpen,
      },
    })

  }

  render() {

    const {
      onClick,
      props: { children },
      state: { openSections },
    } = this

    return (
      //  TODO and Comment
      /*
      * This is messy. If user is on product page we only show documents and Contact Us
      * Should abstract this or consolidate if statements somehow
      */
      <div>
        {
          children.filter(child => {

            if(this.state.isProductSection && child.props.label === 'FAQ') {
              return false;
            }
            if(this.state.isProductSection && child.props.label === 'Getting Started') {
              return false;
            }
            if(this.state.isProductSection && child.props.label === 'Support') {
              return false;
            }
            return true;
          }).map((child) => {
              return (
                <AccordionSection
                  key={this.accordionSectionCounter++} //fix unique key error
                  isOpen={!!openSections[child.props.label]}
                  label={child.props.label}
                  clsName={this.props.clsName}
                  onClick={onClick}
                  ref={this.myRef}
                >
                  {child.props.children}
                </AccordionSection>

              )
            }
          )
        }

      </div>
    )
  }
}

Accordion.propTypes = {
  //myProp: PropTypes.string.isRequired
}


export default Accordion