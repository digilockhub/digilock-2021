import React, { Component } from 'react';

//DIGISYMBOLS
import button0 from './images/digisymbol_button_0.svg';
import button01 from './images/digisymbol_button_1.svg';
import button02 from './images/digisymbol_button_2.svg';
import button03 from './images/digisymbol_button_3.svg';
import button04 from './images/digisymbol_button_4.svg';
import button05 from './images/digisymbol_button_5.svg';
import button06 from './images/digisymbol_button_6.svg';
import button07 from './images/digisymbol_button_7.svg';
import button08 from './images/digisymbol_button_8.svg';
import button09 from './images/digisymbol_button_9.svg';
import buttonC from './images/digisymbol_button_c.svg';
import buttonKey from './images/digisymbol_button_key.svg';
import buttonSoundHigh from './images/digisymbol_sound_high_symbol.svg';
import buttonSoundLow from './images/digisymbol_sound_low_symbol.svg';
import buttonSoundMute from './images/digisymbol_sound_mute_symbol.svg';
import buttonUser from './images/digisymbol_user_symbol.svg';
import buttonCircle from './images/digisymbol_circle.png';
import buttonLockLocked from './images/digisymbol_lock-locked.png';
import buttonLockUnlocked from './images/digisymbol_lock-unlocked.png';

class DigiSymbol extends Component {

  render() {

    const digiSymbols = {
      button0: button0,
      button01: button01,
      button02: button02,
      button03: button03,
      button04: button04,
      button05: button05,
      button06: button06,
      button07: button07,
      button08: button08,
      button09: button09,
      buttonC: buttonC,
      buttonKey: buttonKey,
      buttonSoundHigh: buttonSoundHigh,
      buttonSoundLow: buttonSoundLow,
      buttonSoundMute: buttonSoundMute,
      buttonUser: buttonUser,
      buttonCircle: buttonCircle,
      buttonLockLocked: buttonLockLocked,
      buttonLockUnlocked: buttonLockUnlocked
    }

    return (
      <img className={'digi-symbol'}
           src={digiSymbols[this.props.ds]}
           alt="icon"
           width={this.props.width}
           height={this.props.height}
      />
    );
  }
}

export default DigiSymbol;