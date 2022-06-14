
import React, {Component} from 'react'
import ImageGallery from 'react-image-gallery';

class CarouselWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dynamicAside: null,
      showNav: false,
      isVideoPlaying: false,
      currentSlideIndex: 0
    };
  }


componentDidMount() {
    setTimeout(() => {
      if(this.props.dynamicAside) {
        this.setState({dynamicAside: document.getElementsByClassName('dynamic-aside')[0]});
      }
    }, 200);

  // this._imageGallery.pause();

}

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isVideoPlaying !== prevProps.isVideoPlaying) {
      if(this.props.isVideoPlaying) {
        this._imageGallery.pause();
      } else {
        this._imageGallery.play();
      }
    }
  }

  _onSlide(index) {
    if(this.props.dynamicAside) {
      // eslint-disable-next-line
      this.state.dynamicAside.innerHTML = this.props.asides[index];
      this.updateStateSlideIndex(index);
    }
  }

  _onMouseOver = (e) => {
    // this._imageGallery.pause();
  };

  _onMouseLeave = (e) => {
    // this._imageGallery.play();
  };

  _onImageClick = () => {
    if(this.props.allowImageClick) {
      window.location = this.props.items[this.state.currentSlideIndex].productLink;
    }
  }

  updateStateSlideIndex = (i) => {
    this.setState({...this.state, currentSlideIndex: i});
  }



  render() {

    return (
        <div className="carousel-container">
          <div className="carousel-hero">

            {
                this.props.dynamicAside &&
                this.props.projectAside
            }

            <ImageGallery
                ref={i => this._imageGallery = i}
                items={this.props.items}
                showThumbnails={this.props.showThumbnails}
                showNav={false}
                showPlayButton={false}
                showBullets={this.props.showBullets}
                showFullscreenButton={false}
                onSlide={this._onSlide.bind(this)}
                onMouseLeave={this._onMouseLeave}
                onMouseOver={this._onMouseOver}
                onClick={this._onImageClick}
                lazyLoad={true}
                autoPlay={this.props.autoPlay}
                slideInterval={5000}
            />
          </div>
        </div>
    );
  }
}

export default CarouselWrapper;