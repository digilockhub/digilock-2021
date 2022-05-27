import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactPlayerLoader from '@brightcove/react-player-loader'
import bcSettings from '../../constants/brightcove/settings'

class BCPlayer360 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: this.props.vid,
      product: 'nextlock'
    }
  }


  loadBCPlayer = (vidID) => {
    const reactPlayerLoader = window.reactPlayerLoader = ReactDOM.render(
      React.createElement(ReactPlayerLoader, {
        accountId: bcSettings.ACCOUNT_ID,
        videoId: vidID,

        onSuccess: function(success) {

          let bcovePlayer = success.ref;

          bcovePlayer.on("loadedmetadata", function(evt) {
            let tt = bcovePlayer.textTracks()[0];
            tt.oncuechange = function() {
              let origCp = tt.activeCues[0].originalCuePoint;
            }
          });

          bcovePlayer.on('ended',function(){
            bcovePlayer.removeClass('vjs-has-started');
            bcovePlayer.currentTime(0);
          });

          bcovePlayer.on('play',function(){
            bcovePlayer.addClass('vjs-has-started');

          });

        }
      }),
      document.getElementById('bcoveContainer')
    );
  }

  componentDidMount() {
    this.loadBCPlayer(this.props.vid);
    this.setState({product: this.props.loc.indexOf('nextlock') > -1 ? 'nextlock' : 'numeris'})
  }


  componentDidUpdate(prevProps, prevState) {
    if (this.props.vid !== prevProps.vid) {
      this.loadBCPlayer(this.props.vid);
    }
  }

  render() {
    return (
      <div className={'three60-container'}>
        <div id="bcoveContainer" className={this.state.product} />
        <div className="three60" />
      </div>

    )
  }
}

export default BCPlayer360