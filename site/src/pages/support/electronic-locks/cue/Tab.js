import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans, useI18next, I18nextContext} from "gatsby-plugin-react-i18next";
import Accordion from '../../../../components/ui/legacy/Accordion/Accordion'
import DigiSymbol from '../../../../components/ui/legacy/DigiSymbols/DigiSymbol'
import KeypadKeyManagedRfid from "../../faq/KeypadKeyManagedRfid";
import { jumpAccordion } from '../../../../utils/utils';
import YouTube from '../../../../components/video-player/YouTube';


import setupOne from './images/keypad-key/setup-one.png'
import setupTwo from './images/keypad-key/setup-two.png'
import setupThree from './images/keypad-key/setup-three.png'
import setupFour from './images/keypad-key/setup-four.png'
import ermkOne from './images/keypad-key/ermk-one.png'
import ermkTwo from './images/keypad-key/ermk-two.png'
import ermkThree from './images/keypad-key/ermk-three.png'
import ermkFour from './images/keypad-key/ermk-four.png'
import addManagerOne from './images/keypad-key/add-manager-one.png'
import addManagerTwo from './images/keypad-key/add-manager-two.png'
import addManagerThree from './images/keypad-key/add-manager-three.png'
import addManagerFour from './images/keypad-key/add-manager-four.png'
import replaceKeysOne from './images/keypad-key/replace-keys-one.png'
import replaceKeysTwo from './images/keypad-key/replace-keys-two.png'
import replaceKeysThree from './images/keypad-key/replace-keys-three.png'
import replaceKeysFour from './images/keypad-key/replace-keys-four.png'
import setLockFuncOne from './images/keypad-key/set-lock-funtionality-one.png'
import setLockFuncTwo from './images/keypad-key/set-lock-funtionality-two.png'
import setLockFuncThree from './images/keypad-key/set-lock-funtionality-three.png'
import setLockFuncFour from './images/keypad-key/set-lock-funtionality-four.png'
import assignUserCredsOne from './images/keypad-key/assign-user-creds-one.png'
import assignUserCredsTwo from './images/keypad-key/assign-user-creds-two.png'
import assignUserCredsThree from './images/keypad-key/assign-user-creds-three.png'
import assignUserCredsFour from './images/keypad-key/assign-user-creds-four.png'
import ledUsageOne from './images/keypad-key/led-usage-one.png'
import ledUsageTwo from './images/keypad-key/led-usage-two.png'
import ledUsageThree from './images/keypad-key/led-usage-three.png'
import ledUsageFour from './images/keypad-key/led-usage-four.png'
import autoUnlockOne from './images/keypad-key/auto-unlock-one.png'
import autoUnlockTwo from './images/keypad-key/auto-unlock-two.png'
import autoUnlockThree from './images/keypad-key/auto-unlock-three.png'
import autoUnlockFour from './images/keypad-key/auto-unlock-four.png'
import operatingInsOne from './images/keypad-key/operating-inst-one.png'
import operatingInsTwo from './images/keypad-key/operating-inst-two.png'
import operatingInsThree from './images/keypad-key/operating-inst-three.png'

import batteryReplaceOne from '../axis/images/keypad/battery-replace-one.png'
import batteryReplaceTwo from '../axis/images/keypad/battery-replace-two.png'
import batteryReplaceThree from '../axis/images/keypad/battery-replace-three.png'

//RFID IMAGES
import setupRfidOne from './images/rfid/setup-one.png'
import setupRfidTwo from './images/rfid/setup-two.png'
import setupRfidThree from './images/rfid/setup-three.png'
import setupRfidFour from './images/rfid/setup-four.png'
import ermcOne from './images/rfid/ermc-one.png'
import ermcTwo from './images/rfid/ermc-two.png'
import ermcThree from './images/rfid/ermc-three.png'
import ermcFour from './images/rfid/ermc-four.png'
import replaceRfidOne from './images/rfid/replace-rfid-one.png'
import replaceRfidTwo from './images/rfid/replace-rfid-two.png'
import requestChangeOneRfid from './images/rfid/request-change-one.png'
import requestChangeTwoRfid from './images/rfid/request-change-two.png'
import requestChangeThreeRfid from './images/rfid/request-change-three.png'
import operateRfidOne from './images/rfid/operating-one.png'
import operateRfidTwo from './images/rfid/operating-two.png'
import operateRfidThree from './images/rfid/operating-three.png'

let youTubeVideos = {
  "de": "https://www.youtube.com/embed/videoseries?list=PLXWP8g8Rnc_auSY-_oaUfWLUu5YK7Orvi",
  "en": "https://www.youtube.com/embed/videoseries?list=PLXWP8g8Rnc_brMwRr1dm2wv_3qPqRY--Z",
  "es": "https://www.youtube.com/embed/videoseries?list=PLXWP8g8Rnc_Y6pQ_ZSmfMPXbY3J_kHZPH",
  "fr": "https://www.youtube.com/embed/videoseries?list=PLXWP8g8Rnc_ZPwxap7QizFNXTcz_--wiY"
};

const Tab = (props) => {
  const {changeLanguage} = useI18next();
  const context = React.useContext(I18nextContext);
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const getActiveClass = (index, className) => {
    return toggleState === index ? className : '';
  };

  return (
      <div className={'tab-container'}>
        <ul className="tab-list unstyled-list">
          <li
              className={getActiveClass(1, 'active')}
              onClick={() => toggleTab(1)}
          >
            Cue <Trans>keypad</Trans> <Trans>key_managed</Trans>
          </li>
          <li
              className={getActiveClass(2, 'active')}
              onClick={() => toggleTab(2)}
          >
            Cue <Trans>keypad</Trans> <Trans>code_managed</Trans>
          </li>
          <li
              className={getActiveClass(3, 'active')}
              onClick={() => toggleTab(3)}
          >
            Cue <Trans>rfid</Trans>
          </li>
        </ul>
        <div className="tab-content-container">
          {/*KEYPAD KEY MANAGED*/}
          <div className={"tab-content "+getActiveClass(1, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'./images/keypad-code/features-front-unit.png'}
                  loading={'lazy'}
                  width={'995'}
                  height={'665'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
              <StaticImage
                  src={'../../../../images/shared/features-rear.png'}
                  loading={'lazy'}
                  width={'1244'}
                  height={'829'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
            </div>
            <div className="lists">
              <Accordion clsName={'next-support'}>
                {/*GETTING STARTED*/}
                <div label="Getting Started">
                  <Accordion clsName={'next-support'}>
                    <div label="Initial Setup">
                      <div className="step-images">
                        <figure>
                          <img src={setupOne}
                               className={'img-responsive'}
                               alt="Setup one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard <br/>
                            and the LED will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setupTwo}
                               className={'img-responsive'}
                               alt="Setup two"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            While the LED is on, insert one
                            Manager Key at a time. <br/>
                            A two-tone beep will be heard for
                            each Manager Key programmed.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setupThree}
                               className={'img-responsive'}
                               alt="Setup three"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setupFour}
                               className={'img-responsive'}
                               alt="Setup four"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Repeat above steps for each lock
                            or follow instructions to <span onClick={() => jumpAccordion('Express Register Manager Keys')}>Express
                        Register Manager Keys</span> to set up
                            all locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Express Register Manager Keys">
                      <p>
                        The Programming Key can quickly program the same Manager Keys to operate multiple locks.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={ermkOne}
                               className={'img-responsive'}
                               alt="ermk"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Go to the lock already programmed to operate with the Manager Keys. <br/>
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol><DigiSymbol ds={'buttonKey'}> </DigiSymbol> <DigiSymbol ds={'button06'}> </DigiSymbol><DigiSymbol ds={'button06'}> </DigiSymbol> <DigiSymbol ds={'buttonKey'}> </DigiSymbol>.
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={ermkTwo}
                               className={'img-responsive'}
                               alt="ermk"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={ermkThree}
                               className={'img-responsive'}
                               alt="ermk"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            At each lock to be programmed, insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will flash once to indicate
                            successful programming.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={ermkFour}
                               className={'img-responsive'}
                               alt="ermk"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            To end Express Registration mode: <br/>
                            Go to any programmed lock. <br/>
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol> <DigiSymbol ds={'buttonKey'}> </DigiSymbol> then insert the Programming Key. <br/>
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol> <DigiSymbol ds={'buttonKey'}> </DigiSymbol>then insert the Programming Key again to return the bolt to the
                            original position.*
                          </figcaption>
                        </figure>
                      </div>
                      <p className="smaller-text">
                        * The Programming Key will continue to function in Express Registration mode until it is used to operate a lock.
                      </p>
                    </div>
                    <div label="Add Manager Keys">
                      <p>
                        Manager Keys can be programmed to the locks at any time.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={addManagerOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Go to a lock requiring additional
                            Manager Keys. <br/>
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol> <DigiSymbol ds={'buttonKey'}> </DigiSymbol> <DigiSymbol ds={'button05'}> </DigiSymbol><DigiSymbol ds={'button05'}> </DigiSymbol> <DigiSymbol ds={'buttonKey'}> </DigiSymbol>.
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerTwo}
                               className={'img-responsive'}
                               alt="Setup two"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            While the LED is on, insert the
                            Programming Key. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerThree}
                               className={'img-responsive'}
                               alt="Setup three"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Insert each additional Manager
                            Key one at a time. <br/>
                            A two-tone beep will be heard for
                            each Manager Key programmed.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerFour}
                               className={'img-responsive'}
                               alt="Setup four"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the LED will turn off. <br/>
                            Repeat above steps for each
                            lock or follow instructions to
                            Express Register Manager Keys to
                            program the same Manager Keys
                            to multiple locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Replace Keys">
                      <p>
                        Replacement keys must be purchased and programmed to the locks to prevent the lost/stolen keys from operating a lock.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={replaceKeysOne}
                               className={'img-responsive'}
                               alt="Replace keys"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To replace the Programming Key:</strong> <br/>
                            Note the order number (found on the lock’s rear unit).
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysTwo}
                               className={'img-responsive'}
                               alt="Replace Keys"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Contact Digilock Support to purchase a replacement Programming Key.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysThree}
                               className={'img-responsive'}
                               alt="Replace Keys"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To replace the Manager Keys:</strong> <br/>
                            Collect all remaining Manager Keys. <br/>
                            Go to any lock operated by the Manager Keys.
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol><DigiSymbol ds={'buttonKey'}></DigiSymbol> <DigiSymbol ds={'button05'}> </DigiSymbol><DigiSymbol ds={'button05'}> </DigiSymbol><DigiSymbol ds={'buttonKey'}> </DigiSymbol>. The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysFour}
                               className={'img-responsive'}
                               alt="Replace Keys"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will remain on. <br/>
                            Insert the Programming Key again. <br/>
                            Three sets of two-tone beeps will be heard and the LED will turn off. All
                            previously programmed Manager Keys are erased. <br/>
                            Follow instructions to Add Manager Keys to program the intended
                            Manager Keys to the locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Set Lock Functionality">
                      <p>
                        Each lock can be set for either shared or assigned use functionality. Press <DigiSymbol ds={'buttonC'}> </DigiSymbol> to check functionality. If in shared use, LED is red. If in
                        assigned use, LED is green.
                      </p>
                      <div className="step-images">

                        <figure>
                          <img src={setLockFuncOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            <strong>To set for assigned use:</strong> <br/>

                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol><DigiSymbol ds={'buttonKey'}> </DigiSymbol> <DigiSymbol ds={'button06'}> </DigiSymbol><DigiSymbol ds={'button05'}> </DigiSymbol> <DigiSymbol ds={'buttonKey'}> </DigiSymbol>.
                            The LED will turn on.
                          </figcaption>
                        </figure>

                        <figure>
                          <img src={setLockFuncTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            While the LED is on, insert the
                            Programming Key. <br/>
                            A two-tone beep will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>

                        <figure>
                          <img src={setLockFuncThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            <strong>To set for shared use:</strong> <br/>

                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol><DigiSymbol ds={'buttonKey'}> </DigiSymbol> <DigiSymbol ds={'button05'}> </DigiSymbol><DigiSymbol ds={'button06'}> </DigiSymbol> <DigiSymbol ds={'buttonKey'}> </DigiSymbol>.
                            The LED will turn on.
                          </figcaption>
                        </figure>

                        <figure>
                          <img src={setLockFuncFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            While the LED is on, insert the
                            Programming Key. <br/>
                            A two-tone beep will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Assign User Credentials (for assigned use functionality only)">
                      <p>
                        Make sure that the lock is set for assigned use functionality. Once a user credential is assigned, the previously assigned user credential will
                        no longer operate the lock.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={assignUserCredsOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Assign a User Code:</strong> <br/>
                            Default User Code: <DigiSymbol ds={'button01'}> </DigiSymbol> <DigiSymbol ds={'button02'}> </DigiSymbol> <DigiSymbol ds={'button03'}> </DigiSymbol> <DigiSymbol ds={'button04'}> </DigiSymbol> <br/>
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol> <DigiSymbol ds={'buttonKey'}> </DigiSymbol> then insert a valid Manager Key. <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={assignUserCredsTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, press <DigiSymbol ds={'buttonC'}> </DigiSymbol> <strong>[new 4-digit code]</strong> <DigiSymbol ds={'buttonKey'}> </DigiSymbol>. A two-tone beep will
                            be heard. <br/>
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol> <strong>[the same 4-digit code]</strong> <DigiSymbol ds={'buttonKey'}> </DigiSymbol>. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={assignUserCredsThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Assign a User Key:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol> <DigiSymbol ds={'buttonKey'}> </DigiSymbol> then insert a valid Manager Key. <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={assignUserCredsFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, insert a User Key. <br/>
                            A two-tone beep will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="LED Usage Indicator">
                      <p>
                        When in shared use functionality, each lock can be programmed to have the LED fl ash or not fl ash while the lock is in use. The default
                        setting is ON (red LED fl ashes while lock is in use).
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={ledUsageOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            <strong>To turn off the LED Usage Indicator:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol><DigiSymbol ds={'buttonKey'}> </DigiSymbol> <DigiSymbol ds={'button09'}> </DigiSymbol><DigiSymbol ds={'button02'}> </DigiSymbol> <DigiSymbol ds={'buttonKey'}> </DigiSymbol>. <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={ledUsageTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            While the LED is flashing, insert
                            the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={ledUsageThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            <strong>To turn on the LED Usage Indicator:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol><DigiSymbol ds={'buttonKey'}> </DigiSymbol> <DigiSymbol ds={'button09'}> </DigiSymbol><DigiSymbol ds={'button01'}> </DigiSymbol> <DigiSymbol ds={'buttonKey'}> </DigiSymbol>. <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={ledUsageFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            While the LED is flashing, insert
                            the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Auto Unlock">
                      <p>
                        When in shared use functionality, each lock can be programmed to auto unlock after a set number of hours. The default setting is OFF
                        (does not auto unlock).
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={autoUnlockOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To turn on Auto Unlock:</strong> <br/>
                            Press<DigiSymbol ds={'buttonC'}> </DigiSymbol><DigiSymbol ds={'buttonKey'}> </DigiSymbol> <DigiSymbol ds={'button09'}> </DigiSymbol><DigiSymbol ds={'button05'}> </DigiSymbol> <DigiSymbol ds={'buttonKey'}> </DigiSymbol>. <br/>
                            The LED will flash. <br/>
                            While the LED is flashing, insert the Programming Key. <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={autoUnlockTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, press the set number of hours from <DigiSymbol ds={'button01'}> </DigiSymbol> - <DigiSymbol ds={'button09'}> </DigiSymbol> <DigiSymbol ds={'button09'}> </DigiSymbol> then press <DigiSymbol ds={'buttonKey'}> </DigiSymbol>. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off. <br/>
                            For example: Press 8 <DigiSymbol ds={'buttonKey'}> </DigiSymbol> to set the lock to auto unlock after 8 hours.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={autoUnlockThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To turn off Auto Unlock:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol><DigiSymbol ds={'buttonKey'}> </DigiSymbol> <DigiSymbol ds={'button09'}> </DigiSymbol><DigiSymbol ds={'button04'}> </DigiSymbol> <DigiSymbol ds={'buttonKey'}> </DigiSymbol>. <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={autoUnlockFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is flashing, insert the Programming Key. <br />
                            A two-tone beep will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Operating Instructions - In Shared Use Functionality">
                      <p>
                        In shared use functionality, users enter a self-selected 4-digit User Code or insert any User Key to lock and the same User Code or User
                        Key to unlock. Once unlocked, the lock is available for a different user.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operatingInsOne}
                               className={'img-responsive'}
                               alt=""
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a User Code</strong> <br/>
                            To lock: Close the door. Press <DigiSymbol ds={'buttonC'}> </DigiSymbol> <strong>[any 4-digit code]</strong> <DigiSymbol ds={'buttonKey'}> </DigiSymbol>. <br/>
                            To unlock: Press <DigiSymbol ds={'buttonC'}> </DigiSymbol> <strong>[the same 4-digit code]</strong> <DigiSymbol ds={'buttonKey'}> </DigiSymbol>.* Open the door.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operatingInsTwo}
                               className={'img-responsive'}
                               alt=""
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a User Key</strong> <br/>
                            To lock: Close the door. Insert any User Key. <br/>
                            To unlock: Insert the same User Key. Open the door.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operatingInsThree}
                               className={'img-responsive'}
                               alt=""
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a Manager Key</strong> <br/>
                            To unlock: Insert a valid Manager Key. Open the door. <br/>
                            To relock: Close the door. Insert a valid Manager Key.**
                          </figcaption>
                        </figure>
                      </div>
                      <p className="smaller-text">
                        * After 3 consecutive incorrect User Code entries, the keypad will be disabled for 1 minute (Sleep Mode). <br/>
                        ** If a valid Manager Key is used to relock, the previous user credential will continue to operate the lock.
                      </p>
                    </div>
                    <div label="Operating Instructions - In Assigned Use Functionality">
                      <p>
                        In assigned use functionality, users operate the lock with their assigned user credential (either a User Code or a User Key). To reassign a
                        lock to a different user, follow instructions to Assign User Credentials.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operatingInsOne}
                               className={'img-responsive'}
                               alt=""
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with the User Code</strong> <br/>
                            To unlock: Press <DigiSymbol ds={'buttonC'}> </DigiSymbol> <strong>[assigned 4-digit code]</strong> <DigiSymbol ds={'buttonKey'}> </DigiSymbol>*. Open the door. <br/>
                            To relock: Close the door. Press <DigiSymbol ds={'buttonC'}> </DigiSymbol><DigiSymbol ds={'buttonKey'}> </DigiSymbol><DigiSymbol ds={'buttonKey'}> </DigiSymbol>.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operatingInsTwo}
                               className={'img-responsive'}
                               alt=""
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a User Key</strong> <br/>
                            To unlock: Insert the assigned User Key. Open the door. <br/>
                            To relock: Close the door. Insert the assigned User Key.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operatingInsThree}
                               className={'img-responsive'}
                               alt=""
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a Manager Key</strong> <br/>
                            To unlock: Insert a valid Manager Key. Open the door. <br/>
                            To relock: Close the door. Insert a valid Manager Key.
                          </figcaption>
                        </figure>
                      </div>
                      <p className="smaller-text">
                        *After 3 consecutive incorrect User Code entries, the keypad will be disabled for 1 minute (Sleep Mode).
                      </p>
                    </div>
                  </Accordion>
                </div>
                {/*SUPPORT*/}
                <div label="Troubleshooting">
                  <Accordion clsName={'next-support'}>



                    <div label="Sleep Mode">
                      <p>
                        After three consecutive incorrect User Code entries to unlock, the lock will go into “Sleep
                        Mode” for one minute and for an additional minute for each subsequent incorrect entry. The keypad is disabled while in “Sleep Mode”. A registered manager key may be used to override the lock in order to gain access when the lock is in sleep mode.
                      </p>
                    </div>
                    <div label="Error Condition Indicator">
                      <p>
                        <strong>10 rapid beeps:</strong><br/>
                        The lock is binding which means that either door alignment or items in the locker are
                        preventing the lock from operating. Press on the door
                        while operating the lock. If error condition persists, contact Digilock support for
                        assistance.
                      </p>
                      <p>
                        <strong>2 sets of three beeps:</strong> <br/>
                        The batteries are low. Replace the batteries.
                      </p>
                      <p>
                        <strong>10 rapid beeps with 2 sets of 3 beeps</strong> <br/>
                        The lock is binding with low batteries, the lock doesn’t have enough power to operate. If unlocked change the batteries and attempt to operate the lock again to see if the error indicator has cleared. If the lock is locked, use a registered manager key with a fresh battery to override the lock. Immediately change the batteries in the lock.
                      </p>
                    </div>
                    <div label="Does not Unlock with the User Code or User Key">
                      <p>
                        The lock does not recognize the User Code or User Key. For immediate access, operate with a valid Manager Key. Follow instructions to
                        <span onClick={() => jumpAccordion('Cue Keypad Key Managed Getting Started', 'Assign User Credentials (for assigned use functionality only)')}> Assign User Credentials</span> to assign a new User Code or User Key to the lock.
                      </p>
                    </div>
                    <div label="Does not operate with a Manager Key">
                      <p>
                        The lock does not recognize the Manager Key. Follow instructions to <span onClick={() => jumpAccordion('Cue Keypad Key Managed Getting Started', 'Add Manager Keys')}>Add Manager Keys</span> to program the Manager Key to the lock. For
                        immediate access, operate with another valid Manager Key.
                      </p>
                    </div>
                    <div label="Does not operate with a Programming Key">
                      <p>
                        If the Programming Key has been replaced, operate with the Replacement
                        Programming Key. Contact <a href="/contact/">Digilock support</a> for additional assistance.
                      </p>
                    </div>
                    <div label={['No Audible Feedback when ', <DigiSymbol ds='buttonC'></DigiSymbol>, ' is Pressed']}>

                      <ul>
                        <li>The lock may be in “Sleep Mode”. The keypad is disabled for one minute while in sleep
                          mode.
                        </li>
                        <li>The batteries may need to be replaced.</li>
                        <li>The front unit may not be properly connected to the rear unit. Remove the lock from the
                          door and check the cable connection.
                        </li>
                        <li>If error condition persists, <a href="/contact/">contact Digilock support</a>.</li>
                      </ul>
                    </div>
                    <div label="Battery Replacement">
                      <p>
                        It is not necessary to uninstall the lock from the door.
                      </p>
                      <p className={'smaller-text'}>
                        <strong>CAUTION: Risk of explosion or leakage if battery is replaced by an incorrect type,
                          mixed with a different battery type, or inserted backwards. Replace all batteries of a set
                          at the same time. Be sure to insert batteries with correct polarities. Remove exhausted
                          batteries from product promptly and dispose of used batteries according to the battery
                          manufacturer’s instructions.</strong>
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={batteryReplaceOne}
                               className={'img-responsive'}
                               alt="Battery Replacement Step One"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Remove the screws and the cover plate.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={batteryReplaceTwo}
                               className={'img-responsive'}
                               alt="Battery Replacement Two"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Pull the battery pack from the rear housing. <br/>
                            Replace with four premium alkaline
                            AA batteries.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={batteryReplaceThree}
                               className={'img-responsive'}
                               alt="LED"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Place the battery pack back into the rear
                            housing and screw cover plate in place.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </Accordion>
                </div>
                {/*FAQ*/}
                <div label="FAQ">
                  <KeypadKeyManagedRfid product={'Cue Keypad Key Managed'} clsName={'next-support'} />
                </div>
              </Accordion>
            </div>
          </div>
          {/*KEYPAD CODE MANAGED*/}
          <div className={"tab-content "+getActiveClass(2, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'./images/keypad-code/features-front-unit.png'}
                  loading={'lazy'}
                  width={'995'}
                  height={'665'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
              <StaticImage
                  src={'../../../../images/shared/features-rear.png'}
                  loading={'lazy'}
                  width={'1244'}
                  height={'829'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
            </div>
            <div className="lists">
              <Accordion clsName={'next-support'}>
                <div label="Instructional Videos">
                  <YouTube videos={youTubeVideos} lang={context.language} videoTitle={'Cue Instructional Videos'} />
                </div>
                {/*SUPPORT*/}
                <div label="Troubleshooting">
                  <Accordion clsName={'next-support'}>
                    <div label="Sleep Mode">
                      <p>
                        After three consecutive incorrect User Code entries to unlock, the lock will go into “Sleep
                        Mode” for one minute and for an additional minute
                        for each subsequent incorrect entry. The keypad is disabled while in “Sleep Mode”.
                      </p>
                    </div>
                    <div label="Error Condition Indicator">
                      <p>
                        <strong>10 rapid beeps:</strong><br/>
                        The lock is binding which means that either door alignment or items in the locker are
                        preventing the lock from operating. Press on the door
                        while operating the lock. If error condition persists, contact Digilock support for
                        assistance.
                      </p>
                      <p>
                        <strong>2 sets of three beeps:</strong> <br/>
                        The batteries are low. Replace the batteries.
                      </p>
                      <p>
                        <strong>1 beep:</strong> <br/>
                        The lock does not recognize the User Code, Manager Code, or Owner Code.
                      </p>
                    </div>
                    <div label="Does not Unlock with the User Code">
                      <p>
                        The lock does not recognize the User Code. For access, operate with the Manager Code. If in
                        assigned use functionality, follow <span onClick={() => jumpAccordion('Cue Keypad Code Managed Getting Started', 'Assign User Code (for assigned use functionality only)')}>Assign User
                    Code instructions</span> to assign a new User Code to the lock.
                      </p>
                    </div>
                    <div label="Does not operate with a Manager Code">
                      <p>
                        The lock does not recognize the Manager Code. Follow <span onClick={() => jumpAccordion('Cue Keypad Code Managed Getting Started', 'Program a New 5-digit Manager Code')}>instructions to Program a New 5-digit
                    Manager Code</span> by using the Owner Code.
                        For access, operate with the Owner Code.
                      </p>
                    </div>
                    <div label="Does not operate with the Owner Code">
                      <p>
                        The lock does not recognize the Owner Code. <a href="/contact/">Contact Digilock support</a>.
                      </p>
                    </div>
                    <div label={['No Audible Feedback when ', <DigiSymbol ds='buttonC'></DigiSymbol>, ' is Pressed']}>

                      <ul>
                        <li>The lock may be in “Sleep Mode”. The keypad is disabled for one minute while in sleep
                          mode.
                        </li>
                        <li>The batteries may need to be replaced.</li>
                        <li>The front unit may not be properly connected to the rear unit. Remove the lock from the
                          door and check the cable connection.
                        </li>
                        <li>If error condition persists, <a href="/contact/">contact Digilock support</a>.</li>
                      </ul>
                    </div>
                  </Accordion>
                </div>
                {/*FAQ*/}
                <div label="FAQ">
                  <Accordion clsName={'next-support'}>
                    <div label="My lock will not operate. I hear rapid beeping followed by two sets of 3 beeps.">
                      <p>The lock is binding due to low battery.</p>
                      <p>If in the unlocked position, follow the <span onClick={() => jumpAccordion('Battery Replacement')}>Battery Replacement instructions</span>.</p>
                      <p>If locked press firmly on the locker door, if there is room to, lift up on the door, move it
                        side to side in attempt to ajar it while operating the lock. If error condition persists,
                        contact <a href="/contact/">Digilock support for assistance</a>.</p>

                    </div>
                    <div label="The keypad is disabled and the LED flashes twice.">
                      <p>
                        After three consecutive incorrect User Code entries to unlock, the lock will go into "Sleep
                        Mode" for one minute and for an additional minute for each subsequent incorrect entry. While
                        in "Sleep Mode" the keypad is <u>disabled</u> and the LED flashes twice consecutively.
                      </p>
                    </div>
                    <div label="I hear rapid beeping from my lock and the lock will not operate.">
                      <p>
                        The lock is binding. This is often due to door misalignment, incorrect installation, or excess
                        pressure on the rear unit.
                      </p>
                      <p>
                        If the lock is in the unlocked state, loosen the mounting hardware and attempt to operate the
                        lock to test if the error condition persists. If the lock is still emitting the rapid beeping,
                        uninstall the lock and test in hand.
                      </p>
                      <p>
                        If the lock is in the locked state and you cannot access the rear unit (i.e., the door is
                        locked), press on the door while operating the lock. If the error condition still persists,
                        contact Digilock Support for assistance.
                      </p>
                    </div>
                    <div label="I hear 2 sets of three beeps after operating my lock.">
                      <p>
                        If locked and the batteries are too low to operate, you will need to use your CUE power jumper to provide power to the lock, while the power jumper is plugged in, use your user code, or manager code to operate the lock, <span onClick={() => jumpAccordion('Battery Replacement')}>immediately change the batteries</span>.
                      </p>
                    </div>
                    <div
                        label="I have changed the batteries in my lock and it is still non-responsive. What should I do?">
                      <p>
                        Ensure that the battery harness is properly connected to the circuit board and that you are
                        using premium high-alkaline batteries. We recommend Duracell CopperTop or Energizer batteries.
                      </p>
                      <p>
                        If the lock is still non-responsive after checking these two items, it may be a connection
                        issue with the pins on the rear unit and the back of the front unit or an issue with the cable connection. To test, uninstall the
                        lock and press <DigiSymbol ds={'buttonC'}> </DigiSymbol> or <DigiSymbol
                          ds={'buttonKey'}> </DigiSymbol> (RFID locks) several times while the front unit and rear unit
                        are separated. Connect the front and rear units and test lock functionality before
                        reinstalling the lock. If the error condition still persists, contact Digilock Support for
                        assistance.
                      </p>
                    </div>
                    <div label="What brand of batteries do you recommend for your Digilock product?">
                      For best performance, we recommend premium high-alkaline Duracell CopperTop or Energizer
                      batteries. Rear units with (3) screws on the battery cover take (2) 9V batteries. Rear Units
                      with (4) screws on the battery cover take (4) AA batteries.
                    </div>
                    <div label="I received my Replacement Programming Key. How do I program it to work on my locks?">
                      <p>
                        Follow the Replacement Programming Key instructions. Note: The Replacement Programming Key can
                        only override (1) previous Programming Key.
                      </p>
                    </div>
                    <div label="I received my Reset Key. What do I do now?">
                      Follow the Reset Key instructions. After inserting the Reset Key into each lock, confirm that
                      the lock has returned to factory default by pressing <DigiSymbol ds={'buttonC'}> </DigiSymbol>
                      <DigiSymbol ds={'buttonKey'}> </DigiSymbol>. The lock should now operate.
                    </div>
                    <div label="Battery Replacement" id={'batterReplacement'}>
                      <p>
                        It is not necessary to uninstall the lock from the door.
                      </p>
                      <p className={'smaller-text'}>
                        <strong>CAUTION: Risk of explosion or leakage if battery is replaced by an incorrect type,
                          mixed with a different battery type, or inserted backwards. Replace all batteries of a set
                          at the same time. Be sure to insert batteries with correct polarities. Remove exhausted
                          batteries from product promptly and dispose of used batteries according to the battery
                          manufacturer’s instructions.</strong>
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={batteryReplaceOne}
                               className={'img-responsive'}
                               alt="Battery Replacement Step One"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Remove the screws and the cover plate.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={batteryReplaceTwo}
                               className={'img-responsive'}
                               alt="Battery Replacement Two"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Pull the battery pack from the rear housing. <br/>
                            Replace with four premium alkaline
                            AA batteries.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={batteryReplaceThree}
                               className={'img-responsive'}
                               alt="LED"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Place the battery pack back into the rear
                            housing and screw cover plate in place.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </Accordion>
                </div>
              </Accordion>
            </div>
          </div>
          {/*RFID*/}
          <div className={"tab-content "+getActiveClass(3, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'./images/rfid/features-front.png'}
                  loading={'lazy'}
                  width={'666'}
                  height={'542'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
              <StaticImage
                  src={'../../../../images/shared/features-rear.png'}
                  loading={'lazy'}
                  width={'1244'}
                  height={'829'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
            </div>
            <div className="lists">
              <Accordion clsName={'next-support'}>
                {/*GETTING STARTED*/}
                <div label="Getting Started">
                  <Accordion clsName={'next-support'}>
                    <div label="Initial Setup">
                      <p>
                        Locks are shipped with factory default settings (only operates by pressing <DigiSymbol ds={'buttonKey'} />). Setup must be completed to program the Programming Key
                        and Manager Keys or Manager RFID Credentials to all the locks.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={setupRfidOne}
                               className={'img-responsive'}
                               alt="Setup one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard <br/>
                            and the LED will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setupRfidTwo}
                               className={'img-responsive'}
                               alt="Setup two"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            While the LED is on, insert one
                            Manager Key or present one
                            Manager RFID Credential at a time. <br/>
                            A two-tone beep will be heard for
                            each Manager Key or Manager
                            RFID Credential programmed.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setupRfidThree}
                               className={'img-responsive'}
                               alt="Setup three"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setupRfidFour}
                               className={'img-responsive'}
                               alt="Setup four"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Repeat above steps for each lock
                            or follow instructions to <span onClick={() => jumpAccordion('Express Register Manager Credentials')}>Express
                        Register Manager Credentials</span> to
                            set up all locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Express Register Manager Credentials">
                      <p>
                        The Programming Key can quickly program the same Manager Keys and Manager RFID Credentials to operate multiple locks.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={ermcOne}
                               className={'img-responsive'}
                               alt="ermk"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Go to the lock already programmed to operate with the Manager Keys and
                            Manager RFID Credentials. <br/>
                            Press and hold <DigiSymbol ds={'buttonKey'}> </DigiSymbol> for 10 seconds (a two-tone beep will be heard after 5
                            seconds followed by 2 sets of two-tone beeps after 10 seconds) then release. <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={ermcTwo}
                               className={'img-responsive'}
                               alt="ermk"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, insert the Programming Key Insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={ermcThree}
                               className={'img-responsive'}
                               alt="ermk"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            At each lock to be programmed, insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will fl ash once to indicate
                            successful programming.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={ermcFour}
                               className={'img-responsive'}
                               alt="ermk"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            To end Express Registration mode: <br/>
                            Go to any programmed lock. <br/>
                            Press <DigiSymbol ds={'buttonKey'}> </DigiSymbol> then insert the Programming Key. <br/>
                            Press <DigiSymbol ds={'buttonKey'}> </DigiSymbol> then insert the Programming Key again to return the bolt to the
                            original position.*
                          </figcaption>
                        </figure>
                      </div>
                      <p className="smaller-text">
                        * The Programming Key will continue to function in Express Registration mode until it is used to operate a lock.
                      </p>
                    </div>
                    <div label="Add Manager Keys and RFID Credentials">
                      <p>
                        Manager Keys can be programmed to the locks at any time.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={addManagerOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Go to a lock requiring additional
                            Manager Keys. <br/>
                            Press and hold <DigiSymbol ds={'buttonKey'}></DigiSymbol> for 5 seconds (a
                            two-tone beep will be heard after 5
                            seconds) then release. <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerTwo}
                               className={'img-responsive'}
                               alt="Setup two"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            While the LED is on, insert the
                            Programming Key. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerThree}
                               className={'img-responsive'}
                               alt="Setup three"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Insert each additional Manager
                            Key or Manager RFID Credential
                            one at a time. <br/>
                            A two-tone beep will be heard for
                            each Manager Key or Manager
                            RFID Credential programmed.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerFour}
                               className={'img-responsive'}
                               alt="Setup four"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the LED will turn off. <br/>
                            Repeat above steps for each lock
                            or follow instructions to Express
                            Register Manager Credentials to
                            program the same Manager Keys
                            to multiple locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Replace Keys">
                      <p>
                        Replacement keys must be purchased and programmed to the locks to prevent the lost/stolen keys from operating a lock.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={replaceKeysOne}
                               className={'img-responsive'}
                               alt="Replace keys"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To replace the Programming Key:</strong> <br/>
                            Note the order number (found on the lock’s rear unit).
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysTwo}
                               className={'img-responsive'}
                               alt="Replace Keys"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Contact Digilock Support to purchase a replacement Programming Key.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceRfidOne}
                               className={'img-responsive'}
                               alt="Replace Keys"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To replace the Manager Keys:</strong> <br/>
                            Collect all remaining Manager Keys. <br/>
                            Go to any lock operated by the lost/stolen manager credentials. <br/>
                            Press and hold <DigiSymbol ds={'buttonKey'} /> for 5 seconds (a two-tone beep will be heard after 5 seconds)
                            then release. <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceRfidTwo}
                               className={'img-responsive'}
                               alt="Replace Keys"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will remain on. <br/>
                            Insert the Programming Key again. <br/>
                            Three sets of two-tone beeps will be heard and the LED will turn off. All
                            previously programmed Manager Keys and Manager RFID Credential
                            are erased. <br/>
                            Follow instructions to Add Manager Keys and RFID Credentials to
                            program the intended Manager Keys to the locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Request Functionality Change">
                      <div className="step-images">

                        <figure>
                          <img src={requestChangeOneRfid}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Note the order or serial number (found on the
                            lock’s rear unit).
                          </figcaption>
                        </figure>

                        <figure>
                          <img src={requestChangeTwoRfid}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Note the current color of the LED.
                          </figcaption>
                        </figure>

                        <figure>
                          <img src={requestChangeThreeRfid}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            To change the functionality of the locks (between
                            shared use and assigned use), contact <a href={'/support/'}> Digilock
                            Support</a> to request a Function Key.
                          </figcaption>
                        </figure>

                      </div>
                    </div>
                    <div label="Operating Instructions - In Shared Use Functionality">
                      <p>
                        In shared use functionality, the user presents a User RFID Credential or inserts any User Key to lock and the same User RFID Credential or
                        User Key to unlock. Once unlocked, the lock is available for a different user.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateRfidOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a User RFID Credential</strong>
                            To lock: Close the door. Press <DigiSymbol ds={'buttonKey'}> </DigiSymbol> then present any User RFID Credential. <br/>
                            To unlock: Press <DigiSymbol ds={'buttonKey'}> </DigiSymbol> then present the same User RFID Credential. <br/>
                            Open the door.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateRfidTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a User Key</strong> <br/>
                            To lock: Close the door. Insert any User Key. <br/>
                            To unlock: Insert the same User Key. Open the door.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateRfidThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a Manager Key</strong> <br/>
                            To unlock: Insert a valid Manager Key. Open the door. <br/>
                            To relock: Close the door. Insert a valid Manager Key.*
                          </figcaption>
                        </figure>
                      </div>
                      <p className="smaller-text">
                        * If a valid Manager Key is used to relock, the previous user credential will continue to operate the lock.
                      </p>
                    </div>
                  </Accordion>
                </div>
                {/*SUPPORT*/}
                <div label="Troubleshooting">
                  <Accordion clsName={'next-support'}>
                    <div label="Error Condition Indicator">
                      <p>
                        <strong>10 rapid beeps:</strong><br/>
                        The lock is binding which means that either door alignment or items in the locker are
                        preventing the lock from operating. Press on the door
                        while operating the lock. If error condition persists, contact <a href="/contact/">Digilock support</a> for
                        assistance.
                      </p>
                      <p>
                        <strong>2 sets of three beeps:</strong> <br/>
                        The batteries are low. <span onClick={() => jumpAccordion('Battery Replacement')}>Replace the batteries</span>.
                      </p>
                    </div>
                    <div label="Does not Unlock with the User RFID Credential or User Key">
                      <p>
                        The lock does not recognize the User RFID or User Key. For immediate access, operate with a valid Manager Key.
                      </p>
                    </div>
                    <div label="Does not Operate with a Manager Key">
                      <p>
                        The lock does not recognize the Manager Key. Follow instructions to <span onClick={() => jumpAccordion('Cue RFID Getting Started', 'Add Manager Keys and RFID Credentials')}>Add Manager Keys and RFID Credentials</span> to program the Manager
                        Key to the lock. For immediate access, operate with another valid Manager Key.
                      </p>
                    </div>
                    <div label="Does not Operate with the Programming Key">
                      <p>
                        The lock does not recognize the Programming Key. If the Programming Key has been replaced, operate with the Replacement
                        Programming Key. <a href="/contact/">Contact Digilock support</a> for additional assistance.
                      </p>
                    </div>
                    <div label={['No Audible Feedback when ', <DigiSymbol ds='buttonKey' />, ' is Pressed']}>

                      <ul>
                        <li>The batteries may need to be replaced.</li>
                        <li>The front unit may not be properly connected to the rear unit. Remove the lock from the
                          door and check the cable connection.
                        </li>
                        <li>If error condition persists, <a href="/contact/">contact Digilock support</a>.</li>
                      </ul>
                    </div>
                    <div label="Battery Replacement">
                      <p>
                        It is not necessary to uninstall the lock from the door.
                      </p>
                      <p className={'smaller-text'}>
                        <strong>CAUTION: Risk of explosion or leakage if battery is replaced by an incorrect type,
                          mixed with a different battery type, or inserted backwards. Replace all batteries of a set
                          at the same time. Be sure to insert batteries with correct polarities. Remove exhausted
                          batteries from product promptly and dispose of used batteries according to the battery
                          manufacturer’s instructions.</strong>
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={batteryReplaceOne}
                               className={'img-responsive'}
                               alt="Battery Replacement Step One"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Remove the screws and the cover plate.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={batteryReplaceTwo}
                               className={'img-responsive'}
                               alt="Battery Replacement Two"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Pull the battery pack from the rear housing. <br/>
                            Replace with four premium alkaline
                            AA batteries.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={batteryReplaceThree}
                               className={'img-responsive'}
                               alt="LED"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Place the battery pack back into the rear
                            housing and screw cover plate in place.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </Accordion>
                </div>
                {/*FAQ*/}
                <div label="FAQ">
                  <KeypadKeyManagedRfid product={'Cue RFID'} clsName={'next-support'} />
                </div>
              </Accordion>
            </div>
          </div>
        </div>

      </div>
  );
};

export default Tab;