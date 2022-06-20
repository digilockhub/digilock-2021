import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans} from "gatsby-plugin-react-i18next";
import Accordion from '../../../../components/ui/legacy/Accordion/Accordion'
import DigiSymbol from '../../../../components/ui/legacy/DigiSymbols/DigiSymbol'
import { jumpAccordion } from '../../../../utils/utils';
import KeypadKeyManagedRfid from '../../faq/KeypadKeyManagedRfid';


//RANGE IMAGES
import featuresFront from './images/keypad/features-front.svg'
import featuresRear from '../../../../images/shared/features-rear.svg'
import featuresFrontRfid from './images/rfid/features-front.png'
import featuresRearRfid from '../../../../images/shared/features-rear.svg'
//ACCORDION IMAGES
import setupOne from './images/keypad/initial-setup-one.png'
import setupTwo from './images/keypad/initial-setup-two.png'
import setupThree from './images/keypad/initial-setup-three.png'
import setupFour from './images/keypad/initial-setup-four.png'

import expressRegisterOne from './images/keypad/express-register-one.png'
import expressRegisterTwo from './images/keypad/express-register-two.png'
import expressRegisterThree from './images/keypad/express-register-three.png'
import expressRegisterFour from './images/keypad/express-register-four.png'

import addManagerKeysOne from './images/keypad/add-manager-key-one.png'
import addManagerKeysTwo from './images/keypad/add-manager-key-two.png'
import addManagerKeysThree from './images/keypad/add-manager-key-three.png'
import addManagerKeysFour from './images/keypad/add-manager-key-four.png'

import replaceKeysOne from './images/keypad/replace-keys-one.png'
import replaceKeysTwo from './images/keypad/replace-keys-two.png'
import replaceKeysThree from './images/keypad/replace-keys-three.png'
import replaceKeysFour from './images/keypad/replace-keys-four.png'

import assignUserCredsOne from './images/keypad/assign-user-creds-one.png'
import assignUserCredsTwo from './images/keypad/assign-user-creds-two.png'
import assignUserCredsThree from './images/keypad/assign-user-creds-three.png'
import assignUserCredsFour from './images/keypad/assign-user-creds-four.png'

import operatingInstructionsOne from './images/keypad/operating-instructions-one.png'
import operatingInstructionsTwo from './images/keypad/operating-instructions-two.png'
import operatingInstructionsThree from './images/keypad/operating-instructions-three.png'

import batteryReplaceOne from '../../../../images/shared/battery-replacement-5g-one.png'
import batteryReplaceTwo from '../../../../images/shared/battery-replacement-5g-two.png'
import batteryReplaceThree from '../../../../images/shared/battery-replacement-5g-three.png'

import requestFuncChangeOne from './images/rfid/request-func-change-one.png'
import requestFuncChangeTwo from './images/rfid/request-func-change-two.png'
import requestFuncChangeThree from './images/rfid/request-func-change-three.png'


const Tab = (props) => {

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
            Range <Trans>keypad</Trans>
          </li>
          <li
              className={getActiveClass(2, 'active')}
              onClick={() => toggleTab(2)}
          >
            Range <Trans>rfid</Trans>
          </li>
        </ul>
        <div className="tab-content-container">
          <div className={"tab-content "+getActiveClass(1, 'active')}>
            <div className="front-rear">
              <img src={featuresFront} alt="Range features"/>
              <img src={featuresRear} alt="Range features"/>
            </div>
            <div className="lists">
              <Accordion clsName={'next-support'}>
                {/*GETTING STARTED*/}
                <div label="Getting Started">
                  <Accordion clsName={'next-support'}>
                    {/*SETUP*/}
                    <div label="Initial Setup">

                      <p>
                        Locks are shipped with factory default settings (only operates by pressing <DigiSymbol ds={'buttonC'} /> <DigiSymbol ds={'buttonKey'} />). Setup must be completed to program the Programming Key
                        and Manager Keys to all the locks.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={setupOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the LED will turn on.
                          </figcaption>
                        </figure>

                        <figure>
                          <img src={setupTwo}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is on, insert one
                            Manager Key at a time. <br/>
                            A two-tone beep will be
                            heard for each Manager Key
                            programmed.
                          </figcaption>
                        </figure>

                        <figure>
                          <img src={setupThree}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setupFour}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Repeat above steps for each
                            lock or follow instructions to
                            <span onClick={() => jumpAccordion('Express Register Manager Keys')}> Express Register Manager Keys </span>
                            to set up all locks.
                          </figcaption>
                        </figure>

                      </div>
                    </div>
                    {/*EXPRESS REGISTER*/}
                    <div label="Express Register Manager Keys">
                      <p>
                        The Programming Key can quickly program the same Manager Keys to operate multiple locks.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={expressRegisterOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Go to the lock already programmed to operate with the Manager Keys. <br/>
                            Press <DigiSymbol ds={'buttonC'} /><DigiSymbol ds={'buttonKey'} /> <DigiSymbol ds={'button06'} /><DigiSymbol ds={'button06'} /> <DigiSymbol ds={'buttonKey'} />. <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressRegisterTwo}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressRegisterThree}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            At each lock to be programmed, insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will flash once to
                            indicate successful programming.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressRegisterFour}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To end Express Registration mode: <br/>
                            Go to any programmed lock. <br/>
                            Press <DigiSymbol ds={'buttonC'} /> <DigiSymbol ds={'buttonKey'} /> then insert the Programming Key.* Note: The latch will
                            automatically release and relock 6 seconds after unlocking.
                          </figcaption>
                        </figure>
                      </div>
                      <p className={'smaller-text'}>
                        * The Programming Key will continue to function in Express Registration mode until it is used to operate a lock.
                      </p>
                    </div>
                    {/* ADD MANAGER KEYS*/}
                    <div label="Add Manager Keys">
                      <p>
                        Manager Keys can be programmed to the locks at any time.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={addManagerKeysOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Go to a lock requiring additional
                            Manager Keys. <br/>
                            Press <DigiSymbol ds={'buttonC'} /><DigiSymbol ds={'buttonKey'} /> <DigiSymbol ds={'button05'} /><DigiSymbol ds={'button05'} />  <DigiSymbol ds={'buttonKey'} />. <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerKeysTwo}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is on, insert the
                            Programming Key. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerKeysThree}
                               alt="step three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert each additional Manager
                            Key one at a time. <br/>
                            A two-tone beep will be
                            heard for each Manager Key
                            programmed.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerKeysFour}
                               alt="step four"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the LED will turn off. <br/>
                            Repeat above steps for each
                            lock or follow instructions to
                            <span onClick={() => jumpAccordion('Express Register Manager Keys')}>Express Register Manager Keys</span>
                            to program the same Manager
                            Keys to multiple locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    {/*REPLACE KEYS*/}
                    <div label="Replace Keys">
                      <p>
                        Replacement keys must be purchased and programmed to the locks to prevent the lost/stolen keys from operating a lock.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={replaceKeysOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To replace the Programming Key:</strong> <br/>
                            Note the order number (found on the lock’s rear unit).
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Contact Digilock Support to purchase a replacement Programming
                            Key.
                          </figcaption>
                        </figure>
                      </div>
                      <div className={'step-images'}>
                        <figure className={'wide'}>
                          <img src={replaceKeysThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To replace the Manager Keys: <br/>
                            Collect all remaining Manager Keys. <br/>
                            Go to any lock operated by the Manager Keys. <br/>
                            Press <DigiSymbol ds={'buttonC'} /><DigiSymbol ds={'buttonKey'} /> <DigiSymbol ds={'button05'} /> <DigiSymbol ds={'button05'} /> <DigiSymbol ds={'buttonKey'} />. The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will remain on. <br/>
                            Insert the Programming Key again. <br/>
                            Three sets of two-tone beeps will be heard and the LED will turn
                            off. All previously programmed Manager Keys are erased. <br/>
                            Follow instructions to <span onClick={() => jumpAccordion('Add Manager Keys')}>Add Manager Keys</span> to program the intended
                            Manager Keys to the locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    {/*ASSIGN USER CREDENTIALS*/}
                    <div label="Assign User Credentials">
                      <p>
                        Once a user credential is assigned, the previously assigned user credential will no longer operate the lock.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={assignUserCredsOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Assign a User Code:</strong> <br/>
                            Default User Code: <DigiSymbol ds={'button01'} /> <DigiSymbol ds={'button02'} /> <DigiSymbol ds={'button03'} /> <DigiSymbol ds={'button04'} /> <br/>
                            Press <DigiSymbol ds={'buttonC'} /> <DigiSymbol ds={'buttonKey'} /> then insert a valid Manager Key. <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={assignUserCredsTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, press <DigiSymbol ds={'buttonC'} /> [new 4-digit code] <DigiSymbol ds={'buttonKey'} />. A two-tone
                            beep will be heard. <br/>
                            Press <DigiSymbol ds={'buttonC'} /> [the same 4-digit code] <DigiSymbol ds={'buttonKey'} />. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                      <div className={'step-images'}>
                        <figure className={'wide'}>
                          <img src={assignUserCredsThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Assign a User Key:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'} /> <DigiSymbol ds={'buttonKey'} /> then insert a valid Manager Key. <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={assignUserCredsFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, insert a User Key. <br/>
                            A two-tone beep will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    {/*OPERATING INSTRUCTIONS*/}
                    <div label="Operating Instructions">
                      <p>
                        In assigned use functionality, users operate the lock with their assigned user credential (either a User Code or a User Key). To reassign a lock to
                        a different user, follow instructions to <span onClick={() => jumpAccordion('Assign User Credentials')}>Assign User Credentials</span>.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operatingInstructionsOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with the User Code</strong> <br/>
                            To unlock: Press <DigiSymbol ds={'buttonC'} /> [assigned 4-digit code] <DigiSymbol ds={'buttonKey'} />.* Open the door.** <br/>
                            To relock: Close the door.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operatingInstructionsTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with the User Key</strong> <br/>
                            To unlock: Insert the assigned User Key. Open the door.** <br/>
                            To relock: Close the door.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operatingInstructionsThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a Manager Key</strong> <br/>
                            To unlock: Insert a valid Manager Key. Open the door.** <br/>
                            To relock: Close the door.
                          </figcaption>
                        </figure>
                      </div>
                      <p className={'smaller-text'}>
                        *After 3 consecutive incorrect User Code entries, the keypad will be disabled for 1 minute (Sleep Mode). <br/>
                        **After unlocking, the latch will automatically relock in 6 seconds.
                      </p>

                    </div>
                  </Accordion>
                </div>
                {/*SUPPORT*/}
                <div label="Troubleshooting">
                  <Accordion clsName={'next-support'}>
                    <div label="Sleep Mode">
                      <p>
                        After three consecutive incorrect User Code entries to unlock, the lock will go into Sleep Mode for one minute. For each subsequent incorrect
                        entry, the lock will remain in Sleep Mode for an additional minute. The keypad is disabled while in Sleep Mode. A valid Manager Key may be
                        used to unlock while the lock is in Sleep Mode.
                      </p>
                    </div>
                    <div label="Error Condition Indicators">
                      <p>
                        <strong>10 rapid beeps:</strong> <br/>
                        The lock is binding, meaning either door alignment or items in the locker are preventing the lock from operating. Press on the door while
                        operating the lock. If error condition persists, contact Digilock support for assistance.
                      </p>
                      <p>
                        <strong>2 sets of three beeps:</strong> <br/>
                        The batteries are low. Replace the batteries.
                      </p>
                    </div>
                    <div label="Does not Unlock with the User Code or User Key">
                      <p>
                        The lock does not recognize the User Code or User Key. For immediate access, operate with a valid Manager Key. Follow instructions to <span onClick={() => jumpAccordion('Range Keypad Getting Started', 'Assign User Credentials')}>Assign
                    User Credentials</span> to assign a new User Code or User Key to the lock.
                      </p>
                    </div>
                    <div label="Does not Operate with a Manager Key">
                      <p>
                        The lock does not recognize the Manager Key. Follow instructions to <span onClick={() => jumpAccordion('Range Keypad Getting Started', 'Add Manager Keys')}>Add Manager Keys</span> to program the Manager Key to the lock. For immediate access, operate with another valid Manager Key.
                      </p>
                    </div>
                    <div label="Does not Operate with the Programming Key">
                      <p>
                        The lock does not recognize the Programming Key. If the Programming Key has been replaced, operate with the Replacement Programming
                        Key. <a href="/contact/">Contact Digilock support</a> for additional assistance.
                      </p>
                    </div>
                    <div label={['No Audible Feedback when ', <DigiSymbol key={'keyToHandleIterateError'} ds={'buttonC'}></DigiSymbol>, ' is Pressed']}>
                      <ul>
                        <li>
                          The lock may be in Sleep Mode or the batteries may need to be replaced. For immediate access, operate with a valid Manager Key.
                        </li>
                        <li>
                          The front unit may not be properly connected to the rear unit. Remove the lock from the door and check the connection.
                        </li>
                      </ul>
                    </div>
                    <div label="Battery Replacement">
                      <p className="smaller-text">
                        It is not necessary to remove the lock from the door. In case of battery failure, operate with a valid Manager Key.
                      </p>
                      <p className={'smaller-text'}>
                        <strong>CAUTION: Risk of explosion or leakage if battery is replaced by an incorrect type, mixed with a different battery type, or inserted backwards.
                          Replace all batteries of a set at the same time. Be sure to insert batteries with correct polarities. Remove exhausted batteries from product
                          promptly and dispose of used batteries according to the battery manufacturer’s instructions.</strong>
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={batteryReplaceOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Remove the screw from the Cover Plate
                            with a Phillips head screwdriver. <br/>
                            Remove the Cover Plate by lifting the tab at
                            the edge of the cover, below the arrows.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={batteryReplaceTwo}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Remove the batteries from the housing. <br/>
                            Replace with four premium alkaline AA
                            batteries. Recycle used batteries according
                            to local regulations.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={batteryReplaceThree}
                               alt="step three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Replace the Cover Plate and secure with
                            screw.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </Accordion>
                </div>
                {/*FAQ*/}
                <div label="FAQ">
                  <KeypadKeyManagedRfid product={'Range Keypad'} clsName={'next-support'} />
                </div>
              </Accordion>
            </div>
          </div>
          <div className={"tab-content "+getActiveClass(2, 'active')}>
            <div className="front-rear">
              <img src={featuresFrontRfid} alt="Range features"/>
              <img src={featuresRearRfid} alt="Range features"/>
            </div>
            <div className="lists">
              <Accordion clsName={'next-support'}>
                {/*GETTING STARTED*/}
                <div label="Getting Started">
                  <Accordion clsName={'next-support'}>
                    {/*SETUP*/}
                    <div label="Initial Setup">
                      <p>
                        Locks are shipped with factory default settings (only operates by pressing <DigiSymbol ds={'buttonKey'} />). Setup must be completed to program the Programming Key
                        and Manager Keys or Manager RFID Credentials to all the locks.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={setupOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the LED will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setupTwo}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is on, insert one
                            Manager Key or present one
                            Manager RFID Credential at a
                            time. <br/>
                            A two-tone beep will be
                            heard for each Manager Key
                            or Manager RFID Credential
                            programmed.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setupThree}
                               alt="step three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setupFour}
                               alt="step four"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Repeat above steps for each
                            lock or follow instructions to
                            <span onClick={() => jumpAccordion('Express Register Manager Credentials')}>Express Register Manager
                        Credentials</span> to set up all locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    {/*EXPRESS REGISTER*/}
                    <div label="Express Register Manager Credentials">
                      <p>
                        The Programming Key can quickly program the same Manager Keys and Manager RFID Credentials to operate multiple locks.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={expressRegisterOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Go to the lock already programmed to operate with the Manager
                            Keys and Manager RFID Credentials. <br/>
                            Press and hold <DigiSymbol ds={'buttonKey'} /> for 10 seconds (a two-tone beep will be heard
                            after 5 seconds followed by 2 sets of two-tone beeps after 10
                            seconds) then release. The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressRegisterTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressRegisterThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            At each lock to be programmed, insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will flash once to
                            indicate successful programming.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressRegisterFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To end Express Registration mode: <br/>
                            Go to any programmed lock. <br/>
                            Press <DigiSymbol ds={'buttonKey'} /> then insert the Programming Key. <br/>
                            Press <DigiSymbol ds={'buttonKey'} /> then insert the Programming Key again to return the bolt
                            to the original position.*
                          </figcaption>
                        </figure>
                      </div>
                      <p className="smaller-text">
                        * The Programming Key will continue to function in Express Registration mode until it is used to operate a lock.
                      </p>
                    </div>
                    {/* ADD MANAGER KEYS*/}
                    <div label="Add Manager Keys and RFID Credentials">
                      <p>
                        Manager Credentials can be programmed to the locks at any time.
                      </p>

                      <div className="step-images">
                        <figure>
                          <img src={addManagerKeysOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Go to a lock requiring additional
                            Manager Credentials. <br/>
                            Press and hold <DigiSymbol ds={'buttonKey'} /> for 5
                            seconds (a two-tone beep will
                            be heard after 5 seconds) then
                            release. <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure>
                          <img src={addManagerKeysTwo}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is on, insert the
                            Programming Key. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure>
                          <img src={addManagerKeysThree}
                               alt="step three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert each additional Manager
                            Key or present each Manager
                            RFID Credential one at a time. <br/>
                            A two-tone beep will be
                            heard for each Manager Key
                            or Manager RFID Credential
                            programmed
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure>
                          <img src={addManagerKeysFour}
                               alt="step four"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the LED will turn off. <br/>
                            Repeat above steps for each
                            lock or follow instructions to
                            <span onClick={() => jumpAccordion('Express Register Manager Credentials')}>Express Register Manager
                        Credentials</span> to program the
                            same Manager Credentials to
                            multiple locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    {/*REPLACE KEYS*/}
                    <div label="Replace Keys">
                      <p>
                        Replacement keys must be purchased and programmed to the locks to prevent the lost/stolen keys from operating a lock.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={replaceKeysOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To replace the Programming Key:</strong> <br/>
                            Note the order or serial number (found on the lock’s rear unit).
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <a href="/contact/">Contact Digilock Support</a> to purchase a replacement
                            Programming Key.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To replace the Manager Keys:</strong> <br/>
                            Collect all remaining Manager Keys. <br/>
                            Go to any lock operated by the lost/stolen manager keys. Press
                            and hold <DigiSymbol ds={'buttonKey'} /> for 5 seconds (a two-tone beep will be heard after 5
                            seconds) then release. <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will remain on. <br/>
                            Insert the Programming Key again. <br/>
                            Three sets of two-tone beeps will be heard and the LED will turn
                            off. All previously programmed Manager Keys and Manager RFID
                            Credential are erased. <br/>
                            Follow instructions to <span onClick={() => jumpAccordion('Add Manager Keys and RFID Credentials')}>Add Manager Keys and RFID Credentials</span> to
                            program the intended Manager Credentials to the locks.
                          </figcaption>
                        </figure>
                      </div>

                    </div>
                    {/*REQUEST FUNCTIONALITY CHANGE*/}
                    <div label="Request Functionality Change">
                      <p>
                        Make sure that the lock is set for assigned use functionality. Once a user credential is assigned, the previously assigned user credential will no
                        longer operate the lock.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={requestFuncChangeOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Note the order or serial number (found on
                            the lock’s rear unit).
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={requestFuncChangeTwo}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Note the current color of the LED.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={requestFuncChangeThree}
                               alt="step three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            To change the functionality of the locks
                            (between shared use and assigned use),
                            <a href="/contact/">contact Digilock Support</a> to request a
                            Function Key.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    {/*Assign User Credentials (for assigned use functionality only)*/}
                    <div label="Assign User Credentials (for assigned use functionality only)">
                      <p>
                        Make sure that the lock is set for assigned use functionality. Once a user credential is assigned, the previously assigned user credential will no
                        longer operate the lock.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={assignUserCredsOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Assign a User RFID Credential:</strong> <br/>
                            Press and hold <DigiSymbol ds={'buttonKey'} /> for 5 seconds (a two-tone beep will be heard after 5
                            seconds) then release. <br/>
                            The LED will turn on. <br/>
                            Insert a valid Manager Key or present a valid Manager RFID Credential. <br/>
                            A two tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={assignUserCredsTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, present the new User RFID Credential. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={assignUserCredsThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Assign a User Key:</strong> <br/>
                            Press and hold <DigiSymbol ds={'buttonKey'} /> for 5 seconds (a two-tone beep will be heard after 5
                            seconds) then release. <br/>
                            The LED will turn on. <br/>
                            Insert a valid Manager Key or present a valid Manager RFID Credential.
                            A two tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={assignUserCredsFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, insert a User Key. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </Accordion>
                </div>
                {/*SUPPORT*/}
                <div label="Troubleshooting">
                  <Accordion clsName={'next-support'}>
                    <div label="Error Condition Indicators">
                      <p>
                        <strong>10 rapid beeps:</strong> <br/>
                        The lock is binding, meaning either door alignment or items in the locker are preventing the lock from operating. Press on the door while
                        operating the lock. If error condition persists, <a href="/contact/">contact Digilock support</a> for assistance.
                      </p>
                      <p>
                        <strong>2 sets of three beeps:</strong> <br/>
                        The batteries are low. Replace the batteries.
                      </p>
                    </div>
                    <div label="Does not Unlock with the RFID credential or User Key">
                      <p>
                        The lock does not recognize the User RFID or User Key. For immediate access, operate with a valid Manager Key.
                      </p>
                    </div>
                    <div label="Does not Operate with a Manager Key">
                      <p>
                        The lock does not recognize the Manager Key. Follow instructions to <span onClick={() => jumpAccordion('Range RFID Getting Started', 'Add Manager Keys and RFID Credentials')}>Add Manager Keys and RFID Credentials</span> to program the Manager
                        Key to the lock. For immediate access, operate with another valid Manager Key.
                      </p>
                    </div>
                    <div label="Does not Operate with the Programming Key">
                      <p>
                        The lock does not recognize the Programming Key. If the Programming Key has been replaced, operate with the Replacement
                        Programming Key. <a href="/contact/">Contact Digilock support</a> for additional assistance.
                      </p>
                    </div>
                    <div label={['No Audible Feedback when ', <DigiSymbol key={'keyToHandleIterateError'} ds={'buttonC'}></DigiSymbol>, ' is Pressed']}>
                      <ul>
                        <li>The batteries may need to be replaced. For immediate access, operate with a valid Manager Key.</li>
                        <li>The front unit may not be properly connected to the rear unit. Remove the lock from the door and check the connection.</li>
                      </ul>
                    </div>
                    <div label="Battery Replacement (shown with cable rear unit)">
                      <p>
                        It is not necessary to uninstall the lock from the door.
                      </p>
                      <p className={'smaller-text'}>
                        <strong>CAUTION: Risk of explosion or leakage if battery is replaced by an incorrect type, mixed with a different battery type, or inserted backwards.  Replace all batteries of a set at the same time. Be sure to insert batteries with correct polarities. Remove exhausted batteries from product promptly and dispose of used batteries according to the battery manufacturer’s instructions.</strong>
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
                  <KeypadKeyManagedRfid product={'Range RFID'} clsName={'next-support'} />
                </div>
              </Accordion>
            </div>
          </div>
        </div>

      </div>
  );
};

export default Tab;