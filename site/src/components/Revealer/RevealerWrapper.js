import React, {Component} from 'react';
import ReactCompareImage from 'react-compare-image';

class RevealerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleIsLeft: false,
      handleIsRight: false
    }
  }

  handleSliderUpdate = (position) => {
    if(position > 0.75) {
      this.setState({
        handleIsRight: true,
        handleIsLeft: false
      })
    } else if(position < 0.21) {
      this.setState({
        handleIsRight: false,
        handleIsLeft: true
      })
    } else {
      this.setState({
        handleIsRight: false,
        handleIsLeft: false
      })
    }
  };

  render() {

    let classNames = require('classnames');

    let labelLeft = classNames({
      'label-left': !this.state.handleIsLeft,
      'label-left hide-but-keep': this.state.handleIsLeft
    });

    let labelRight = classNames({
      'label-right': !this.state.handleIsRight,
      'label-right hide-but-keep': this.state.handleIsRight
    });


    return (
      <div className={'revealer-container'} style={{width: this.props.width+'px'}}>
        <ReactCompareImage
          leftImage={this.props.compareLeft}
          rightImage={this.props.compareRight}
          sliderPositionPercentage={this.props.sliderPosition}
          onSliderPositionChange={(position) => this.handleSliderUpdate(position)}
          sliderLineColor={this.props.clsName === 'nextlock' ? '#009abf' : '#0096ce'}
          />
          <div className="labels">
            <p className={labelLeft} dangerouslySetInnerHTML={this.props.labelLeft} />
            <p className={labelRight} dangerouslySetInnerHTML={this.props.labelRight} />
          </div>

      </div>
      )
  }
}

export default RevealerWrapper;