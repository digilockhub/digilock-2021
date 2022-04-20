
/*
 vid = BrightCove Video ID
 dynId = id attribute given to vid container elem
 translation = label text
*/

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ReactPlayerLoader from '@brightcove/react-player-loader'
import bcSettings from '../../constants/brightcove/settings'

class BCResponsivePlayer extends Component {


  componentDidMount() {

    const reactPlayerLoader = window.reactPlayerLoader = ReactDOM.render(
        React.createElement(ReactPlayerLoader, {
          accountId: bcSettings.ACCOUNT_ID,
          videoId: this.props.vid,
          playerId: bcSettings.PLAYER_RESPONSIVE,
          embedOptions: {
            options: {
              aspectRatio: '16:9'
            }
          },

          onSuccess: function (success) {
            // two ways to get the underlying player/iframe at this point.
            let bcovePlayer = success.ref;
            // bcovePlayer.player().controlBar.hide();
            bcovePlayer.addClass('vjs-fluid');
            bcovePlayer.on('ended', function () {
              bcovePlayer.removeClass('vjs-has-started');
              bcovePlayer.currentTime(0);
            });
          }
        }),
        document.getElementById(this.props.dynId)
    );

    let img = new Image();
  }

  render() {
    return (
        <div className={'video-holder'}>
          <div className={'learn-more-video'} id={this.props.dynId}/>
        </div>
    )
  }
}

export default BCResponsivePlayer