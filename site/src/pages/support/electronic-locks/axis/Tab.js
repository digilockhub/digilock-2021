import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans} from "gatsby-plugin-react-i18next";
import Accordion from '../../../../components/ui/legacy/Accordion/Accordion'
import DigiSymbol from '../../../../components/ui/legacy/DigiSymbols/DigiSymbol'
import KeypadKeyManagedRfid from "../../faq/KeypadKeyManagedRfid";
//ACCORDION IMAGES
import setupOne from './images/keypad/setup-step-one.png'
import setupTwo from './images/keypad/setup-step-two.png'
import setupThree from './images/keypad/setup-step-three.png'
import setupFour from './images/keypad/setup-step-four.png'
import emkOne from './images/keypad/ermk-one.png';
import emkTwo from './images/keypad/ermk-two.png';
import emkThree from './images/keypad/ermk-three.png';
import emkFour from './images/keypad/ermk-four.png';
import addManagerKeysOne from './images/keypad/add-manager-keys-one.png';
import addManagerKeysTwo from './images/keypad/add-manager-keys-two.png';
import addManagerKeysThree from './images/keypad/add-manager-keys-three.png';
import addManagerKeysFour from './images/keypad/add-manager-keys-four.png';
import replaceKeysOne from './images/keypad/replace-keys-one.png';
import replaceKeysOneAB from './images/keypad/replace-keys-one-a-b.png';
import replaceKeysTwo from './images/keypad/replace-keys-two.png';
import replaceKeysTwoAB from './images/keypad/replace-keys-two-a-b.png';
import setLockFunctionAssignedOne from './images/keypad/set-lock-function-assigned-one.png';
import setLockFunctionAssignedTwo from './images/keypad/set-lock-function-assigned-two.png';
import setLockFunctionSharedOne from './images/keypad/set-lock-function-shared-one.png';
import setLockFunctionSharedTwo from './images/keypad/set-lock-function-shared-two.png';
import assignUserCodeOneAB from './images/keypad/assign-code-1a-1b.png';
import assignUserCodeTwoAB from './images/keypad/assign-code-2a-2b.png';
import assignUserKeyOneAB from './images/keypad/assign-key-1a-1b.png';
import assignUserKeyTwo from './images/keypad/assign-key-2.png';
import ledUsageOne from './images/keypad/led-usage-one.png';
import ledUsageTwo from './images/keypad/led-usage-two.png';
import autoUnlockOnOneAB from './images/keypad/auto-unlock-on-one-ab.png';
import autoUnlockOnTwo from './images/keypad/auto-unlock-on-two.png';
import autoUnlockOffOneAB from './images/keypad/auto-unlock-off-one-ab.png';
import autoUnlockOffTwo from './images/keypad/auto-unlock-off-two.png';
import batteryReplaceOne from './images/keypad/battery-replace-one.png';
import batteryReplaceTwo from './images/keypad/battery-replace-two.png';
import batteryReplaceThree from './images/keypad/battery-replace-three.png';

import setupOneRfid from './images/rfid/setup-step-one.png'
import setupTwoRfid from './images/rfid/setup-step-two.png'
import setupThreeRfid from './images/rfid/setup-step-three.png'
import setupFourRfid from './images/rfid/setup-step-four.png'

import emkOneRfid from './images/rfid/ermk-one.png';
import emkTwoRfid from './images/rfid/ermk-two.png';
import emkThreeRfid from './images/rfid/ermk-three.png';
import emkFourRfid from './images/rfid/ermk-four.png';


import addManagerKeysOneRfid from './images/rfid/add-manager-keys-one.png';
import addManagerKeysTwoRfid from './images/rfid/add-manager-keys-two.png';
import addManagerKeysThreeRfid from './images/rfid/add-manager-keys-three.png';
import addManagerKeysFourRfid from './images/rfid/add-manager-keys-four.png';

import replaceKeysOneABRfid from './images/rfid/replace-keys-one-a-b.png';
import replaceKeysTwoABRfid from './images/rfid/replace-keys-two-a-b.png';

import operatingInstructionsOneRfid from './images/rfid/operating-instruction-one.png'
import operatingInstructionsTwoRfid from './images/rfid/operating-instruction-two.png'
import operatingInstructionsThreeRfid from './images/rfid/operating-instruction-three.png'
import operatingInstructionsFourRfid from './images/rfid/operating-instruction-four.png'

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
            Axis <Trans>keypad</Trans>
          </li>
          <li
              className={getActiveClass(2, 'active')}
              onClick={() => toggleTab(2)}
          >
            Axis <Trans>rfid</Trans>
          </li>
        </ul>
        <div className="tab-content-container">
          <div className={"tab-content "+getActiveClass(1, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'./images/keypad-features-front.png'}
                  loading={'lazy'}
                  width={'995'}
                  height={'824'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
              <StaticImage
                  src={'./images/features-rear-unit.png'}
                  loading={'lazy'}
                  width={'995'}
                  height={'824'}
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
                    {/*SETUP*/}
                    <div label="Initial Setup">
                      <p>
                        Locks are shipped with factory default settings (only operates by pressing <DigiSymbol ds={'buttonC'}> </DigiSymbol> <DigiSymbol ds={'buttonKey'}> </DigiSymbol>). Setup must be
                        completed to register the Programming Key and Manager Keys to all the locks.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={setupOne}
                               className={'img-responsive'}
                               alt="Setup one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={setupTwo}
                               className={'img-responsive'}
                               alt="Setup one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Insert one Manager Key at a time.
                            A two-tone beep will be heard for
                            each Manager Key registered.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={setupThree}
                               className={'img-responsive'}
                               alt="Setup one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Insert the Programming Key.
                            A two-tone beep will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={setupFour}
                               className={'img-responsive'}
                               alt="Setup one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Repeat above steps for each lock
                            or follow instructions to Express
                            Register Manager Keys to setup
                            all locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    {/*EXPRESS REGISTER*/}
                    <div label="Express Register Manager Keys">
                      <p>
                        The Programming Key can quickly register the same Manager Keys to operate multiple locks.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={emkOne}
                               className={'img-responsive'}
                               alt="Express one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Go to the lock already registered to operate with the Manager Keys. <br/>
                            Press = <DigiSymbol ds={'buttonC'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'buttonKey'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button06'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button06'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'buttonKey'}> </DigiSymbol>.
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={emkTwo}
                               className={'img-responsive'}
                               alt="Express two"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={emkThree}
                               className={'img-responsive'}
                               alt="Express two"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            At each lock to be registered, insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will flash once to indicate
                            successful registration.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={emkFour}
                               className={'img-responsive'}
                               alt="Express two"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            End express registration mode. <br/>
                            Go to any registered lock.<br />
                            Press = <DigiSymbol ds={'buttonC'}> </DigiSymbol> <DigiSymbol ds={'buttonKey'}> </DigiSymbol> then insert the Programming Key.<br />
                            Press = <DigiSymbol ds={'buttonC'}> </DigiSymbol> <DigiSymbol ds={'buttonKey'}> </DigiSymbol> then insert the Programming Key again to return the bolt to the
                            original position.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    {/* ADD MANAGER KEYS*/}
                    <div label="Add Manager Keys">
                      <p>
                        Manager Keys can be registered to the locks at any time.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={addManagerKeysOne}
                               alt="Add Manager Keys Part One"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Go to a lock requiring additional
                            Manager Keys. <br/>
                            Press = <DigiSymbol ds={'buttonC'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'buttonKey'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button05'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button05'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'buttonKey'}> </DigiSymbol>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerKeysTwo}
                               alt="Add Manager Keys Part Two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key.
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerKeysThree}
                               alt="Add Manager Keys Part Three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert each additional Manager
                            Key one at a time.
                            A two-tone beep will be heard for
                            each Manager Key registered.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerKeysFour}
                               alt="Add Manager Keys Part Four"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key.
                            A two-tone beep will be heard
                            and the LED will turn off.
                            Repeat above steps for each lock
                            or follow instructions to Express
                            Register Manager Keys to register
                            the same Manager Keys to
                            multiple locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    {/*REPLACE KEYS*/}
                    <div label="Replace Keys">
                      <p>
                        Replacement keys must be purchased and registered to the locks to prevent the lost/stolen keys from operating a lock.
                      </p>

                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={replaceKeysOne}
                               className={'img-responsive'}
                               alt="Replace one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>
                              To replace the Programming Key:</strong><br />
                            Note the order number (found on the lock’s rear unit).
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysTwo}
                               className={'img-responsive'}
                               alt="Express one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Contact Digilock Support to purchase a replacement Programming Key.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysOneAB}
                               className={'img-responsive'}
                               alt="Express one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To replace the Manager Keys:</strong><br />
                            Collect all remaining Manager Keys.<br />
                            Go to any lock operated by the Manager Keys.
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'buttonKey'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button05'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button05'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'buttonKey'}> </DigiSymbol>
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysTwoAB}
                               className={'img-responsive'}
                               alt="Express one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key.<br />
                            A two-tone beep will be heard and the LED will turn on.<br />
                            Insert the Programming Key again.<br />
                            Three sets of two-tone beeps will be heard and the LED will turn off.<br />
                            All previously registered Manager Keys are erased.<br />
                            Follow instructions to Add Manager Keys to register the remaining
                            Manager Keys to the locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    {/*SET LOCK FUNCTIONALITY*/}
                    <div label="Set Lock Functionality - (Dual Function Only)">
                      <p>
                        Each lock can be set for either shared or assigned use functionality. Press <DigiSymbol ds={'buttonC'}> </DigiSymbol> to check functionality. If in shared use, LED is red. If in
                        assigned use, LED is green.
                      </p>

                      <div className="step-images">
                        <figure>
                          <img src={setLockFunctionAssignedOne}
                               className={'img-responsive'}
                               alt="Lock Function"
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>To set for assigned use:</strong><br />
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'buttonKey'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button06'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button05'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'buttonKey'}> </DigiSymbol> <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setLockFunctionAssignedTwo}
                               className={'img-responsive'}
                               alt="Lock Function"
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key.
                            A two-tone beep will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setLockFunctionSharedOne}
                               className={'img-responsive'}
                               alt="Lock Function"
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>To set for shared use:</strong><br />
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'buttonKey'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button05'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button06'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'buttonKey'}> </DigiSymbol> <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setLockFunctionSharedTwo}
                               className={'img-responsive'}
                               alt="Lock Function"
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key.
                            A two-tone beep will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    {/*ASSIGN USER CREDENTIALS*/}
                    <div label="Assign the User Credential (Assigned Use Only)">
                      <p>
                        Make sure that the lock is set for assigned use functionality. Once a user credential is assigned, the previously assigned user credential will
                        no longer operate the lock.
                      </p>

                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={assignUserCodeOneAB}
                               className={'img-responsive'}
                               alt="Replace one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Assign a User Code:</strong><br/>
                            Default user code <DigiSymbol ds={'button01'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button02'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button03'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button04'}> </DigiSymbol>&nbsp; <br/>
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'buttonKey'}> </DigiSymbol> then insert a registered Manager Key. <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={assignUserCodeTwoAB}
                               className={'img-responsive'}
                               alt="Express one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol> [new 4-digit code] <DigiSymbol ds={'buttonKey'}> </DigiSymbol>. A two-tone beep will be heard. <br/>
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol> [the same 4-digit code] <DigiSymbol ds={'buttonKey'}> </DigiSymbol>. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={assignUserKeyOneAB}
                               className={'img-responsive'}
                               alt="Express one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Assign a User Key:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol>&nbsp;<DigiSymbol ds={'buttonKey'}> </DigiSymbol> then insert a registered Manager Key. <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={assignUserKeyTwo}
                               className={'img-responsive'}
                               alt="Express one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Insert a User Key. <br/>
                            A two-tone beep will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    {/*LED USAGE INDICATOR*/}
                    <div label="LED Usage Indicator - (Shared Use Only)">
                      <p>
                        When in shared use functionality, each lock can be programmed to have the LED flash or not flash while the lock is in use. The default
                        setting is ON (red LED flashes while lock is in use).
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={ledUsageOne}
                               className={'img-responsive'}
                               alt="LED"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            <strong>To turn off the LED Usage Indicator:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'buttonKey'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button09'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button02'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'buttonKey'}> </DigiSymbol> <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={ledUsageTwo}
                               className={'img-responsive'}
                               alt="LED"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={ledUsageOne}
                               className={'img-responsive'}
                               alt="LED"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            <strong>To turn on the LED Usage Indicator:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'buttonKey'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button09'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button01'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'buttonKey'}> </DigiSymbol> <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={ledUsageTwo}
                               className={'img-responsive'}
                               alt="LED"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    {/*AUTO UNLOCK*/}
                    <div label="Auto Unlock - (Shared Use Only)">
                      <p>
                        When in shared use functionality, each lock can be programmed to auto unlock after a set number of hours. The default setting is OFF
                        (does not auto unlock).
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={autoUnlockOnOneAB}
                               className={'img-responsive'}
                               alt="Replace one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>
                              To turn on Auto Unlock:
                            </strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'buttonKey'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button09'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'button05'}> </DigiSymbol>&nbsp;
                            <DigiSymbol ds={'buttonKey'}> </DigiSymbol> <br/>
                            The LED will flash. <br/>
                            Insert the Programming Key. <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={autoUnlockOnTwo}
                               className={'img-responsive'}
                               alt="Express one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Press the set number of hours from <DigiSymbol ds={'button01'}> </DigiSymbol> - <DigiSymbol ds={'button09'}> </DigiSymbol> <DigiSymbol ds={'button09'}> </DigiSymbol> then press <DigiSymbol ds={'buttonKey'}> </DigiSymbol> <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off. <br/>
                            For example: Press <DigiSymbol ds={'button08'}> </DigiSymbol> <DigiSymbol ds={'buttonKey'}> </DigiSymbol> to set the lock to auto unlock after 8 hours.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={autoUnlockOffOneAB}
                               className={'img-responsive'}
                               alt="Express one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>
                              To turn off Auto Unlock:
                            </strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}> </DigiSymbol> <DigiSymbol ds={'buttonKey'}> </DigiSymbol> <DigiSymbol ds={'button09'}> </DigiSymbol> <DigiSymbol ds={'button04'}> </DigiSymbol>
                            <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={autoUnlockOffTwo}
                               className={'img-responsive'}
                               alt="Express one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </Accordion>
                </div>
                {/*SUPPORT*/}
                <div label="Troubleshooting">
                  <Accordion clsName={'next-support'}>
                    <div label="Sleep Mode">
                      <p>
                        After three consecutive incorrect User Code entries to unlock, the lock will go into "Sleep Mode"
                        for one minute and for an additional minute for each subsequent incorrect entry. While in "Sleep
                        Mode" the keypad is disabled and the LED flashes twice consecutively. A registered Manager Key may
                        be used to unlock while the lock is in "Sleep Mode".
                      </p>
                    </div>
                    <div label="Error Condition Indicators">
                      <ul>
                        <li>
                          <strong>10 rapid beeps:</strong> The lock is binding which means that either door (hinge or strike
                          plate) alignment or items in the locker are preventing the lock from operating. Press firmly on
                          the locker door, if there is room to, lift up on the door, move it side to side in attempt to ajar
                          it while operating the lock. If error condition persists, contact Digilock support for
                          assistance.
                        </li>
                        <li>
                          <strong>2 sets of three beeps:</strong> Low battery indicator, if unlocked replace the
                          batteries as soon as possible. If locked and the batteries are too low to operate with a code,
                          operate with a registered Manager Key and replace the batteries as soon as possible.
                        </li>

                      </ul>
                    </div>
                    <div label="Does not Unlock with the User Code or User Key">
                      <p>
                        If the lock gives off a single beep and flash it does not recognize the User Code or User Key.
                        First confirm the code/key is being attempted on the correct locker. If issue persists, operate
                        with a registered Manager Key. If in assigned use functionality, follow instructions to Assign the
                        User Credential to assign a new User Code or User Key to the lock. If in shared use, once unlocked using the manager key, the lock is ready to be reoccupied using a new 4-digit user code without any further programming needed.
                      </p>
                    </div>
                    <div label="Does not Operate with a Manager Key">
                      <p>
                        If the lock gives off a single beep and flash it does not recognize the Manager Key. Confirm key
                        is being inserted correctly. Inspect key for any physical damage. Try replacing the 9V battery inside of the manager
                        key. If issues persists, operate with another registered Manager key by simply inserting the manager key, or with the programming key, by pressing the C button then the key symbol button and then inserting the programming key, for immediate access.. Follow instructions to Add Manager Keys to then register the Manager Key to
                        the lock.
                      </p>
                    </div>
                    <div label="Manager Key Not Working">
                      <p>
                        If you don't receive an audible response upon inserting the manager key, you may be inserting the key incorrectly. If you hear 1 beep it maybe that the Manager Key is not registered or assigned to that lock or locker room. See your Supervisor in regards to obtaining the correct registered manager key for that lock.
                      </p>
                    </div>
                    <div label="Does not Operate with the Programming Key">
                      <p>
                        If the lock gives off a single beep and flash it does not recognize the Programming Key. Ensure <DigiSymbol ds={'buttonC'}></DigiSymbol>,
                        and <DigiSymbol ds={'buttonKey'}></DigiSymbol> are being pressed first, then insert the Programming Key. Confirm key is being inserted
                        correctly. Inspect key for any physical damage. Try replacing battery inside key. If the
                        Programming Key has been replaced, operate with the Replacement Programming Key. <a
                          href={'/contact/'}> Contact Digilock</a> for additional assistance.
                      </p>
                    </div>
                    <div label={['No Audible Feedback when ', <DigiSymbol key={'keyToHandleIterateError'} ds={'buttonC'}></DigiSymbol>, ' is Pressed']}>
                      <ul>
                        <li>
                          The lock may be in "Sleep Mode" or the batteries may need to be replaced. For immediate access,
                          operate with a registered Manager Key.
                        </li>
                        <li>
                          The front unit may not be properly connected to the rear unit. If unlocked remove the lock from
                          the door and check the connection. If locked contact Digilock support for assistance.
                        </li>
                      </ul>
                    </div>
                    <div label="Battery Replacement">
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
                  <KeypadKeyManagedRfid product={'Axis Keypad'} clsName={'next-support'} />
                </div>
              </Accordion>
            </div>
          </div>
          <div className={"tab-content "+getActiveClass(2, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'./images/rfid-features-front.png'}
                  loading={'lazy'}
                  width={'995'}
                  height={'824'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
              <StaticImage
                  src={'./images/features-rear-unit.png'}
                  loading={'lazy'}
                  width={'995'}
                  height={'824'}
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
                    {/*SETUP*/}
                    <div label="Initial Setup">
                      <p>
                        Locks are shipped with factory default settings (only operates by pressing <DigiSymbol ds={'buttonKey'}></DigiSymbol>). Each lock must be setup to operate with a Programming Key and Manager Keys.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={setupOneRfid}
                               className={'img-responsive'}
                               alt="Setup one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={setupTwoRfid}
                               className={'img-responsive'}
                               alt="Setup one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Insert one Manager Key at a time.
                            A two-tone beep will be heard for
                            each Manager Key registered.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={setupThreeRfid}
                               className={'img-responsive'}
                               alt="Setup one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Insert the Programming Key.
                            A two-tone beep will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={setupFourRfid}
                               className={'img-responsive'}
                               alt="Setup one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Repeat above steps for each lock
                            or follow instructions to Express
                            Register Manager Keys to setup
                            all locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    {/*EXPRESS REGISTER*/}
                    <div label="Express Register Manager Keys">
                      <p>
                        The Programming Key can quickly program multiple locks to operate with the same Manager Keys.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={emkOneRfid}
                               className={'img-responsive'}
                               alt="Express one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Go to a lock already programmed to operate with the Manager Keys. <br/>
                            Touch and hold <DigiSymbol ds={'buttonKey'}> </DigiSymbol> for 10 seconds (a two-tone beep will be heard after 5 seconds followed by 2 sets of two-tone beeps after 10 seconds) then release. <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={emkTwoRfid}
                               className={'img-responsive'}
                               alt="Express two"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={emkThreeRfid}
                               className={'img-responsive'}
                               alt="Express three"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key to program each lock to operate with the same Manager Keys. <br/>
                            A two-tone beep will be heard and the LED will flash once to indicate successful programming.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={emkFourRfid}
                               className={'img-responsive'}
                               alt="Express four"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>

                            End express registration mode. <br/>
                            *Go to any programmed lock. <br/>
                            Touch <DigiSymbol ds={'buttonKey'}></DigiSymbol> then insert the Programming Key. <br/>
                            Touch <DigiSymbol ds={'buttonKey'}></DigiSymbol> then insert the Programming Key again to return the bolt to the original position.






                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    {/* ADD MANAGER KEYS*/}
                    <div label="Add Manager Keys">
                      <p>
                        Manager Keys can be programmed to the locks at any time.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={addManagerKeysOneRfid}
                               alt="Add Manager Keys Part One"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Go to a lock requiring additional Manager Keys. <br/>
                            Touch and hold <DigiSymbol ds={'buttonKey'}></DigiSymbol> for 5 seconds (a two-tone beep will be heard after 5 seconds) then release. <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerKeysTwoRfid}
                               alt="Add Manager Keys Part Two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerKeysThreeRfid}
                               alt="Add Manager Keys Part Three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert each additional Manager
                            Key one at a time.
                            A two-tone beep will be heard for
                            each Manager Key registered.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerKeysFourRfid}
                               alt="Add Manager Keys Part Four"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the LED will turn off. <br/>
                            Repeat above steps for each lock
                            or follow instructions to Express
                            Register Manager Keys to register
                            the same Manager Keys to
                            multiple locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    {/*REPLACE KEYS*/}
                    <div label="Replace Keys">
                      <p>
                        Replacement keys must be purchased and registered to the locks to prevent the lost/stolen keys from operating a lock.
                      </p>

                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={replaceKeysOne}
                               className={'img-responsive'}
                               alt="Replace one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>
                              To replace the Programming Key:</strong><br />
                            Note the order number (found on the lock’s rear unit).
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysTwo}
                               className={'img-responsive'}
                               alt="Express one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Contact Digilock Support to purchase a replacement Programming Key.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysOneABRfid}
                               className={'img-responsive'}
                               alt="Express one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To replace the Manager Keys:</strong><br />
                            Collect all remaining and replacement Manager Keys. <br/>
                            Go to any lock operated by the lost/stolen Manager Keys. <br/>
                            Touch and hold <DigiSymbol ds={'buttonKey'}></DigiSymbol> for 5 seconds (a two-tone beep will be heard after 5 seconds) then release. <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysTwoABRfid}
                               className={'img-responsive'}
                               alt="Express one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will turn on. <br/>
                            Insert the Programming Key again. <br/>
                            Three sets of two-tone beeps will be heard and the LED will turn off. <br/>
                            All previously programmed Manager Keys will be erased.Follow instructions to Add Manager Keys to program the remaining and replacement Manager Keys to the locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    {/*SET LOCK FUNCTIONALITY*/}
                    <div label="Operating Instructions - (In Shared Use Functionality)">
                      <p>
                        In shared use functionality, the user presents an RFID credential or inserts any User Key to lock and the same RFID credential or User Key to unlock. Once unlocked, the locker is available for a different user.
                      </p>

                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operatingInstructionsOneRfid}
                               className={'img-responsive'}
                               alt="Lock Function"
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>Operate with an RFID credential </strong><br/>
                            To lock: Touch <DigiSymbol ds={'buttonKey'}> </DigiSymbol> then present an RFID credential. <br/>
                            To unlock: Touch <DigiSymbol ds={'buttonKey'}> </DigiSymbol> then present the same RFID credential.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operatingInstructionsTwoRfid}
                               className={'img-responsive'}
                               alt="Lock Function"
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>Operate with a User Key</strong><br/>
                            To lock: Insert any User Key. <br/>
                            To unlock: Insert the same User Key.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operatingInstructionsThreeRfid}
                               className={'img-responsive'}
                               alt="Lock Function"
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>Operate with a Manager Key</strong> <br/>
                            To unlock: Insert a valid Manager Key. <br/>
                            To relock: Insert a valid Manager Key.*
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operatingInstructionsFourRfid}
                               className={'img-responsive'}
                               alt="Lock Function"
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>Operate with the Programming Key</strong> <br/>
                            To unlock: Touch <DigiSymbol ds={'buttonKey'}> </DigiSymbol> then insert the Programming Key. <br/>
                            To relock: Touch <DigiSymbol ds={'buttonKey'}> </DigiSymbol> then insert the Programming Key.*
                          </figcaption>
                        </figure>
                      </div>
                      <p className="smaller-text">
                        *If a Manager Key or the Programming Key is used to relock, the previous user credential will continue to operate the lock.
                      </p>
                    </div>
                  </Accordion>
                </div>
                {/*SUPPORT*/}
                <div label="Troubleshooting">
                  <Accordion clsName={'next-support'}>
                    <div label="Error Condition Indicators">
                      <p>
                        <strong>10  rapid beeps:</strong> <br/>
                        <ul>
                          <li>
                            The lock is binding which means that either door alignment or items in the locker are preventing the lock from operating. Press on the door while operating the lock. If error condition persists, contact Digilock support for assistance.
                          </li>
                        </ul>
                        <strong>2 sets of three beeps:</strong> <br/>
                        <ul>
                          <li>
                            The batteries are low. Replace the batteries.
                          </li>
                        </ul>

                      </p>
                    </div>
                    <div label="Does not Unlock with the RFID credential or User Key">
                      <p>
                        The lock does not recognize the RFID credential or User Key. For immediate access, operate with a valid Manager Key.
                      </p>
                    </div>
                    <div label="Does not Operate with a Manager Key">
                      <p>
                        The lock does not recognize the Manager Key. Follow instructions to Add Manager Keys to program the Manager Key to the lock. For immediate access, operate with another valid Manager Key or with the Programming Key.
                      </p>
                    </div>
                    <div label="Does not Operate with the Programming Key">
                      <p>
                        The lock does not recognize the Programming Key. If the Programming Key has been replaced, operate with the Replacement Programming Key. Contact Digilock support for additional assistance.
                      </p>
                    </div>
                    <div label={['No Audible Feedback when ', <DigiSymbol key={'keyToHandleIterateError'} ds={'buttonC'}></DigiSymbol>, ' is Pressed']}>
                      <ul>
                        <li>The batteries may need to be replaced. For immediate access, use a registered Manager Key and then change the batteries in the lock.</li>
                        <li>Upon changing the batteries, ensure that the battery harness is connected to the pins on the circuit board so that the lock can receive power. </li>
                        <li>If after changing the batteries and checking the connection of the harness, the lock is still non-responsive, the front unit may not be properly connected to the rear unit. Remove the lock from the door and check the connection.</li>
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
                  <KeypadKeyManagedRfid product={'Axis RFID'} clsName={'next-support'} />
                </div>
              </Accordion>
            </div>
          </div>
        </div>

      </div>
  );
};

export default Tab;