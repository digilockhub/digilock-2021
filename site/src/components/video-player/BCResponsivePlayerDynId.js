
/*
 vid = BrightCove Video ID
 dynId = id attribute given to vid container elem
 translation = label text
*/

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ReactPlayerLoader from '@brightcove/react-player-loader'
import bcSettings from '../../constants/brightcove/settings'

class BCResponsivePlayerDynId extends Component {


  componentDidMount() {

    const reactPlayerLoader = window.reactPlayerLoader = ReactDOM.render(
        React.createElement(ReactPlayerLoader, {
          accountId: bcSettings.ACCOUNT_ID,
          videoId: this.props.vid,
          playerId: bcSettings.PLAYER_FULL_SCREEN,
          embedOptions: {
            options: {
              aspectRatio: '16:9'
            }
          },

          onSuccess: function (success) {
            // two ways to get the underlying player/iframe at this point.

            let bcovePlayer = success.ref;
            bcovePlayer.player().controlBar.hide();
            bcovePlayer.addClass('vjs-fluid');
            bcovePlayer.on("loadedmetadata", function (evt) {
              // let img = new Image();
              // let elm = document.getElementsByTagName('video')[0];
              // img.src = elm.getAttribute('poster');
              // bcovePlayer.play();
            });
            bcovePlayer.on('ended', function () {
              // bcovePlayer.removeClass('vjs-has-started');
              // bcovePlayer.currentTime(0);
              bcovePlayer.play();
            });
            bcovePlayer.on('play', function () {
              // code
            });

          }
        }),
        document.getElementById(this.props.dynId)
    );

    let img = new Image();
  }

  render() {
    return (
        <div className={'fw-video-holder'}>
            <div className="video-overlay container" dangerouslySetInnerHTML={{__html: this.props.translation}} />
            <div className={'learn-more-video'} id={this.props.dynId}/>
        </div>
    )
  }
}

export default BCResponsivePlayerDynId