import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans, useI18next, I18nextContext} from "gatsby-plugin-react-i18next";
import Accordion from '../../../../components/ui/legacy/Accordion/Accordion'
import DigiSymbol from '../../../../components/ui/legacy/DigiSymbols/DigiSymbol'
import resetManagerKey from './images/resetManagerKey.png'
import changeCoreOne from './images/change-core-one.png'
import changeCoreTwo from './images/change-core-two.png'
import changeCoreThree from './images/change-core-three.png'
import changeCoreFour from './images/change-core-four.png'
import changeCoreFive from './images/change-core-five.png'
import { jumpAccordion } from '../../../../utils/utils';
import YouTube from "../../../../components/video-player/YouTube";
let youTubeVideos = {
  "mech": {
    "en": "https://www.youtube.com/embed/videoseries?list=PLXWP8g8Rnc_byXTixxLeqpdRg55E_QPYn"
  }
}

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
            <Trans>dial</Trans> <Trans>combo</Trans>
          </li>
          <li
              className={getActiveClass(2, 'active')}
              onClick={() => toggleTab(2)}
          >
            <Trans>hasp</Trans>
          </li>
          <li
              className={getActiveClass(3, 'active')}
              onClick={() => toggleTab(3)}
          >
            <Trans>laser_cam</Trans>
          </li>
        </ul>
        <div className="tab-content-container">
          {/*DIAL COMBO*/}
          <div className={"tab-content "+getActiveClass(1, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'./images/dial-combo.jpg'}
                  loading={'lazy'}
                  width={'600'}
                  height={'408'}
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
                    <div label="Assign a User Code">
                      <p>
                        Factory default code = 0-0-0-0
                      </p>
                      <ol>
                        <li>
                            <span>
                              Set the dial to show the current
                          user code.
                            </span>
                        </li>
                        <li>
                            <span>
                          Insert the Programming Key and turn
                          the knob to the <DigiSymbol ds={'button0'}/> position.
                            </span>
                        </li>
                        <li>
                            <span>
                          Set any 4-digit code.
                            </span>
                        </li>
                        <li>
                            <span>
                          Turn the knob to the <DigiSymbol ds={'buttonLockLocked'}/> position and
                          remove the Programming key.
                            </span>
                        </li>
                        <li>
                            <span>
                          Scramble the code.
                            </span>
                        </li>
                      </ol>
                      <p>
                        Once a new user code is assigned, the
                        previously assigned user code will no
                        longer operate the lock.
                      </p>
                      <p>
                        If the current user code is unknown,
                        follow the <span onClick={() => jumpAccordion('Reset Instructions')}>Reset Instructions</span> to
                        assign
                        a new user code.
                      </p>
                      <p>
                        Note: Removing the Programming Key in the <DigiSymbol ds={'button0'}/> position will remove the
                        core.
                        See <span
                          onClick={() => jumpAccordion('Change Core Instructions')}>Change Core Instructions</span> to
                        reinsert the core.
                      </p>
                    </div>
                    <div label="Operate with a Code">
                      <p>
                        <strong>To Lock:</strong>
                      </p>
                      <ol>
                        <li><span>Make sure the knob
                            is in the <DigiSymbol ds={'buttonLockUnlocked'}/> position.</span></li>
                        <li>
                          <span>Close the door.</span>
                        </li>
                        <li>
                          <span>Set any 4-digit code.</span>
                        </li>
                        <li>
                            <span>Turn the knob to
                            the <DigiSymbol ds={'buttonLockLocked'}/> position.</span>
                        </li>
                        <li>
                          <span>Scramble the code.</span>
                        </li>
                      </ol>
                      <p>
                        <strong>To Unlock:</strong>
                      </p>
                      <ol>
                        <li><span>Enter your 4-digit code.</span></li>
                        <li>
                          <span>Turn the knob to the <DigiSymbol ds={'buttonLockUnlocked'}/> position.</span>
                        </li>
                        <li>
                          <span>Open the door.</span>
                        </li>
                        <li>
                          <span>Scramble the code..</span>
                        </li>
                      </ol>
                    </div>
                    <div label="Operate with the Manager Key">
                      <ol>
                        <li><span>Insert the Manager Key.</span></li>
                        <li><span>Turn the knob to the <DigiSymbol ds={'buttonLockUnlocked'}/> symbol.</span></li>
                        <li><span>Open the door.</span></li>
                      </ol>
                      <p className="smaller-text">
                        <u>Note:</u> If opened in error, use the Manager Key to turn the lock to the
                        <DigiSymbol ds={'buttonLockLocked'}/> position. The original code will continue to operate the
                        lock.
                        If the code is forgotten, follow the Reset Instructions to make the lock
                        available for another user.
                      </p>
                    </div>
                    <div label="Reset Instructions">
                      <div className="simple-images">
                        <img src={resetManagerKey} alt="Reset Key" className={'img-responsive'} width={'160'}/>
                        <ol>
                          <li><span>Insert the Manager key.</span></li>
                          <li><span>Turn the knob to the <DigiSymbol ds={'buttonLockLocked'}/> position.</span></li>
                          <li><span>Remove the Manager Key.</span></li>
                          <li><span>Insert the Reset Tool.</span></li>
                          <li><span>Push in the Reset Tool and
                        simultaneously turn all dials until it stops.</span></li>
                          <li><span>The final code displayed is
                        the current code.</span></li>
                          <li><span>Turn the knob to the <DigiSymbol ds={'buttonLockUnlocked'}/> position.</span></li>
                        </ol>
                      </div>
                    </div>
                    <div label="Change Core Instructions">
                      <p>
                        If the Manager Key is lost or stolen, <a
                          href="/contact/">contact support@digilock.com</a> for a
                        Replacement Set (Manager Key, Replacement Removal Key, and Cores).
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={changeCoreOne}
                               alt="Step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Turn the knob to <DigiSymbol ds={'buttonLockUnlocked'}/> position.
                            Insert the removal key and turn
                            the knob to <DigiSymbol ds={'buttonCircle'}/> position.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={changeCoreTwo}
                               alt="Step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Pull the key to remove the knob
                            and core.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={changeCoreThree}
                               alt="Step three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the replacement Removal Key into the knob
                            and place a new core on the knob. The triangle
                            mark on the knob should be aligned with the
                            raised wafers.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={changeCoreFour}
                               alt="Step four"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the new core subassembly
                            into the lock. The triangle mark
                            should be aligned with the <DigiSymbol ds={'buttonCircle'}/> position.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={changeCoreFive}
                               alt="Step five"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Turn the knob to <DigiSymbol ds={'buttonLockUnlocked'}/> position. Remove
                            the Replacement Removal Key.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </Accordion>
                </div>
                {/*VIDEOS*/}
                <div label="Instructional Video">
                  <YouTube videos={youTubeVideos.mech} lang={context.language} videoTitle={'Mech Dial Combo Instructional Video'} />
                </div>
              </Accordion>
            </div>
          </div>
          {/*HASP*/}
          <div className={"tab-content "+getActiveClass(2, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'./images/hasp.jpg'}
                  loading={'lazy'}
                  width={'433'}
                  height={'356'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
            </div>
            <div className="lists">
             FPO Copy
            </div>
          </div>
          {/*Laser Cam*/}
          <div className={"tab-content "+getActiveClass(3, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'./images/laser-cam.jpg'}
                  loading={'lazy'}
                  width={'140'}
                  height={'281'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
            </div>
            <div className="lists">

                FPO copy

            </div>
          </div>
        </div>

      </div>
  );
};

export default Tab;