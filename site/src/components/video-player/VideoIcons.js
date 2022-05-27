import React, {Component} from 'react';

class VideoIcons extends Component {
  render() {
    return(

        <nav className={'toggles'}>
          {this.props.toggleClassNames.map((btn, index) => (
              <button
                  onClick={() => this.props.videoIconClickHandler(index, this.props.bcVideoIds[index])}
                  className={this.props.currentVideoIndex === index ? 'selected video-icon '+this.props.toggleClassNames[index] : 'video-icon '+this.props.toggleClassNames[index]}
                  data-key={index}
                  key={index}>
                &nbsp;
              </button>
          ))}

        </nav>
    )
  }
}

export default VideoIcons;