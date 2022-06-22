import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans, useI18next, I18nextContext} from "gatsby-plugin-react-i18next";
import Accordion from '../../../../components/ui/legacy/Accordion/Accordion'
import DigiSymbol from '../../../../components/ui/legacy/DigiSymbols/DigiSymbol'
import KeypadKeyManagedRfid from "../../faq/KeypadKeyManagedRfid";
import { jumpAccordion } from '../../../../utils/utils';

//SOLA IMAGES
import sola3Rfid from './images/sola3-rfid.svg'
import replaceBatteryOne from './images/battery-replace-one.png'
import replaceBatteryTwo from './images/battery-replace-two.png'
import replaceBatteryThree from './images/battery-replace-three.png'
import replaceBatteryFour from './images/battery-replace-four.png'
import { filterSupportObject } from '../../../../utils/utils'

import handlePos90 from './images/key-managed/handle-pos-90.png'
import handlePos180 from './images/key-managed/handle-pos-180.png'
import setupOne from './images/key-managed/setup-one.png'
import setupTwo from './images/key-managed/setup-two.png'
import setupThree from './images/key-managed/setup-three.png'
import setupFour from './images/key-managed/setup-four.png'
import expressManagerOne from './images/key-managed/express-manager-key-one.png'
import expressManagerTwo from './images/key-managed/express-manager-key-two.png'
import expressManagerThree from './images/key-managed/express-manager-key-three.png'
import expressManagerFour from './images/key-managed/express-manager-key-four.png'
import addManagerKeysOne from './images/key-managed/add-manager-keys-one.png'
import addManagerKeysTwo from './images/key-managed/add-manager-keys-two.png'
import addManagerKeysThree from './images/key-managed/add-manager-keys-three.png'
import addManagerKeysFour from './images/key-managed/add-manager-keys-four.png'
import replaceKeysOne from './images/key-managed/replace-keys-one.png'
import replaceKeysTwo from './images/key-managed/replace-keys-two.png'
import replaceKeysThree from './images/key-managed/replace-keys-three.png'
import replaceKeysFour from './images/key-managed/replace-keys-four.png'
import setLockFunctionOne from './images/key-managed/set-lock-function-one.png'
import setLockFunctionTwo from './images/key-managed/set-lock-function-two.png'
import setLockFunctionThree from './images/key-managed/set-lock-function-three.png'
import setLockFunctionFour from './images/key-managed/set-lock-function-four.png'
import assignUserCredOne from './images/key-managed/assign-user-cred-one.png'
import assignUserCredTwo from './images/key-managed/assign-user-cred-two.png'
import assignUserCredThree from './images/key-managed/assign-user-cred-three.png'
import assignUserCredFour from './images/key-managed/assign-user-cred-four.png'
import autoUnlockOne from './images/key-managed/auto-unlock-one.png'
import autoUnlockTwo from './images/key-managed/auto-unlock-two.png'
import autoUnlockThree from './images/key-managed/auto-unlock-three.png'
import autoUnlockFour from './images/key-managed/auto-unlock-four.png'
import operateInsOne from './images/key-managed/operate-ins-one.png'
import operateInsTwo from './images/key-managed/operate-ins-two.png'
import operateInsThree from './images/key-managed/operate-ins-three.png'
import operateInsFour from './images/key-managed/operate-ins-four.png'
import operateInsFive from './images/key-managed/operate-ins-five.png'
import operateInsSix from './images/key-managed/operate-ins-six.png'
import operateInsAssignedOne from './images/key-managed/operate-ins-assigned-one.png'
import operateInsAssignedTwo from './images/key-managed/operate-ins-assigned-two.png'
import operateInsAssignedThree from './images/key-managed/operate-ins-assigned-three.png'
import operateInsAssignedFour from './images/key-managed/operate-ins-assigned-four.png'
import batteryReplace3One from './images/key-managed/battery-replace-sola3-one.png'
import batteryReplace3Two from './images/key-managed/battery-replace-sola3-two.png'
import batteryReplace3Three from './images/key-managed/battery-replace-sola3-three.png'
import batteryReplace3Four from './images/key-managed/battery-replace-sola3-four.png'

import expressSetupOne from './images/rfid/express-register-one.png'
import expressSetupTwo from './images/rfid/express-register-two.png'
import expressSetupThree from './images/rfid/express-register-three.png'
import expressSetupFour from './images/rfid/express-register-four.png'

import assignUserCredentialOne from './images/rfid/assign-credential-one.png'
import assignUserCredentialTwo from './images/rfid/assign-credential-two.png'
import assignUserCredentialThree from './images/rfid/assign-credential-three.png'
import assignUserCredentialFour from './images/rfid/assign-credential-four.png'

import operateAssignedOne from './images/rfid/operating-assigned-with-rfid-one.png'
import operateAssignedTwo from './images/rfid/operating-assigned-with-rfid-two.png'
import operateAssignedThree from './images/rfid/operating-assigned-with-userkey-one.png'
import operateAssignedFour from './images/rfid/operating-assigned-with-userkey-two.png'
import operateAssignedFive from './images/rfid/operating-assigned-with-managerkey-one.png'
import operateAssignedSix from './images/rfid/operating-assigned-with-managerkey-two.png'

import operateSharedOne from './images/rfid/operating-shared-rfid-one.png'
import operateSharedTwo from './images/rfid/operating-shared-rfid-two.png'
import operateSharedThree from './images/rfid/operating-shared-user-one.png'
import operateSharedFour from './images/rfid/operating-shared-user-two.png'
import operateSharedFive from './images/rfid/operating-shared-manager-one.png'
import operateSharedSix from './images/rfid/operating-shared-manager-two.png'

import batteryReplace from './images/rfid/battery-replace-one.png'

let datasheetsKeyManaged = [
  {
    "title": "Sola Data Sheet Keypad",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/3mOz5DfLnYyonn9m3NDikG/0ee04a10da2a01dbe56acc3ff26e4034/Keypad.pdf",
      "fileName": "Keypad.pdf",
      "contentType": "application/pdf"
    }
  }
];
let installGuidesKeyManaged = [
  {
    "title": "Sola Install Guide",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/5Trl2r35qYo6f4KG69yEbp/289d10dc811daf5b12dd79e5eede0d9d/Keypad-RFID.pdf",
      "fileName": "Keypad-RFID.pdf",
      "contentType": "application/pdf"
    }
  }
];
let productGuidesKeyManaged = [
  {
    "title": "Sola Product Guide Keypad Key Managed With Dual Functionality",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/1oHUr4XqISQC3JidNMcRDb/138364e8118392b6c1b7635329723b4e/Keypad-Key-Managed-With-Dual-Functionality.pdf",
      "fileName": "Keypad-Key-Managed-With-Dual-Functionality.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Sola Product Guide Keypad Code Managed With Dual Functionality",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/7tfWtORupYnsvwW8pFvhTC/a2bff7f0f0d5f70403aeffbc8071ef8e/Keypad-Code-Managed-With-Dual-Functionality.pdf",
      "fileName": "Keypad-Code-Managed-With-Dual-Functionality.pdf",
      "contentType": "application/pdf"
    }
  }
];

let datasheetsCodeManaged = [
  {
    "title": "Sola Data Sheet Keypad",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/3mOz5DfLnYyonn9m3NDikG/0ee04a10da2a01dbe56acc3ff26e4034/Keypad.pdf",
      "fileName": "Keypad.pdf",
      "contentType": "application/pdf"
    }
  }
];
let installGuidesCodeManaged = [
  {
    "title": "Sola Install Guide",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/5Trl2r35qYo6f4KG69yEbp/289d10dc811daf5b12dd79e5eede0d9d/Keypad-RFID.pdf",
      "fileName": "Keypad-RFID.pdf",
      "contentType": "application/pdf"
    }
  }
];
let productGuidesCodeManaged = [
  {
    "title": "Sola Product Guide Keypad Code Managed With Dual Functionality",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/7tfWtORupYnsvwW8pFvhTC/a2bff7f0f0d5f70403aeffbc8071ef8e/Keypad-Code-Managed-With-Dual-Functionality.pdf",
      "fileName": "Keypad-Code-Managed-With-Dual-Functionality.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Sola 2 Code Managed Product Guide",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/77mM7vgkZOrcp5LdeFUqr1/27651bab18132c608c739f68213f2d54/PG-NXT-SKC-DEN.pdf",
      "fileName": "PG-NXT-SKC-DEN.pdf",
      "contentType": "application/pdf"
    }
  }
];

let datasheetsRFID = [
  {
    "title": "Sola Data Sheet Touch RFID",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/17wkYSVxFXFzdIDTDwekyR/49e3daadf4bbcaf1eda0dd9dbdb078a5/Touch-RFID.pdf",
      "fileName": "Touch-RFID.pdf",
      "contentType": "application/pdf"
    }
  }
];
let installGuidesRFID = [
  {
    "title": "Sola Install Guide",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/5Trl2r35qYo6f4KG69yEbp/289d10dc811daf5b12dd79e5eede0d9d/Keypad-RFID.pdf",
      "fileName": "Keypad-RFID.pdf",
      "contentType": "application/pdf"
    }
  }
]; 
let productGuidesRFID = [
  {
    "title": "Sola Product Guide Touch RFID Key Managed With Shared Use Functionality",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/5ciDCB0b1AnEyIlPkmzm09/a9723ba5056398054a48311167125121/Touch-RFID-Key-Managed-With-Shared-Use-Functionality.pdf",
      "fileName": "Touch-RFID-Key-Managed-With-Shared-Use-Functionality.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Sola Product Guide Touch RFID Key Managed With Assigned Use Functionality",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/3RfDrOOXFDNbv5CzsAVT5O/ef5906efd3d88875bed0b9da5de422e5/Touch-RFID-Key-Managed-With-Assigned-Use-Functionality.pdf",
      "fileName": "Touch-RFID-Key-Managed-With-Assigned-Use-Functionality.pdf",
      "contentType": "application/pdf"
    }
  }
];



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

  const changeToKeypadTab = () => {
    document.getElementsByClassName('tab-list')[0].firstChild.click();
  }

  return (
      <div className={'tab-container'}>
        <ul className="tab-list unstyled-list">
          <li
              className={getActiveClass(1, 'active')}
              onClick={() => toggleTab(1)}
          >
            Sola <Trans>keypad</Trans> <Trans>key_managed</Trans>
          </li>
          <li
              className={getActiveClass(2, 'active')}
              onClick={() => toggleTab(2)}
          >
            Sola <Trans>keypad</Trans> <Trans>code_managed</Trans>
          </li>
          <li
              className={getActiveClass(3, 'active')}
              onClick={() => toggleTab(3)}
          >
            Sola <Trans>rfid</Trans>
          </li>
        </ul>
        <div className="tab-content-container">
          {/*KEYPAD KEY MANAGED*/}
          <div className={"tab-content "+getActiveClass(1, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'./images/sola2KeyManaged.png'}
                  loading={'lazy'}
                  width={177}
                  height={322}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
              <StaticImage
                  src={'./images/sola3KeyManaged.png'}
                  loading={'lazy'}
                  width={170}
                  height={322}
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
                    <div label="Handle Positions">
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={handlePos90}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>

                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={handlePos180}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>

                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Initial Setup">
                      <p>
                        Locks are shipped with factory default settings (only operates by pressing <DigiSymbol
                          ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/>). Each lock must be set up to operate with a
                        Programming
                        Key and Manager Keys.
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
                            and the LED will flash.
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
                            While the LED is flashing, insert
                            one Manager Key at a time. <br/>
                            A two-tone beep will be heard for
                            each Manager Key programmed.
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
                            While the LED is flashing, insert
                            the Programming Key. <br/>
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
                            Repeat above steps for each lock
                            or follow instructions to Express
                            Register Manager Keys to setup
                            all locks.
                          </figcaption>
                        </figure>
                      </div>

                    </div>
                    <div label="Express Register Manager Keys">
                      <p>
                        The Programming Key can quickly program multiple locks to operate with the same Manager Keys.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={expressManagerOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Go to the lock already programmed to operate with the Manager Keys. <br/>
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button06'}/><DigiSymbol ds={'button06'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressManagerTwo}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is flashing, insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressManagerThree}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            At each lock to be programmed, insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will flash once to indicate
                            successful registration.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressManagerFour}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To end Express Registration mode:* <br/>
                            Go to any programmed lock. <br/>
                            Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/> then insert the Programming
                            Key.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
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
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button05'}/><DigiSymbol ds={'button05'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
                            The LED will flash.
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
                            While the LED is flashing, insert
                            the Programming Key. <br/>
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
                            While the LED is flashing, insert
                            each additional Manager Key one
                            at a time. <br/>
                            A two-tone beep will be heard for
                            each Manager Key programmed.
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
                            Repeat above steps for each lock
                            or follow instructions to Express
                            Register Manager Keys to quickly
                            program multiple locks to operate
                            with the same Manager Keys.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Replace Keys">
                      <p>
                        The locks must be reprogrammed to prevent the lost/stolen keys from operating a lock.
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
                            Note the order or serial number (found on the lock’s rear).
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysTwo}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Contact <a href="/contact/">Digilock Support</a> to purchase a replacement Programming Key.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={replaceKeysThree}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To replace the Manager Keys:</strong> <br/>
                            Collect all remaining and replacement Manager Keys. <br/>
                            Go to any lock operated by the lost/stolen Manager Keys. <br/>
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol ds={'button05'}/>
                            <DigiSymbol ds={'button05'}/> <DigiSymbol ds={'buttonKey'}/>. The LED will flash.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysFour}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is flashing, insert the Programming Key. <br/>
                            A two-tone beep will be heard. <br/>
                            Insert the Programming Key again. <br/>
                            Three sets of two-tone beeps will be heard and the LED will turn off. <br/>
                            All previously programmed Manager Keys will be erased. <br/>
                            Follow instructions to Add Manager Keys to program the remaining and
                            replacement Manager Keys to the locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Set Lock Functionality">
                      <p>
                        Each lock can be set for either shared or assigned use functionality. Press = to check
                        functionality. If in shared use, LED is red. If in
                        assigned use, LED is green.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={setLockFunctionOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>To set for assigned use:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button06'}/><DigiSymbol ds={'button05'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
                            The red LED will flash.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setLockFunctionTwo}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is flashing, insert
                            the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the green LED will flash once.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setLockFunctionThree}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            To set for shared use: <br/>
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button05'}/><DigiSymbol ds={'button06'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
                            The green LED will flash.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setLockFunctionFour}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is flashing, insert
                            the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the red LED will flash once.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Assign the User Credential (for assigned use functionality only)">
                      <p>
                        Make sure that the lock is set for assigned use functionality (a green LED will flash
                        when <DigiSymbol ds={'buttonC'}/> is pressed). Once a user credential is assigned,
                        the previously assigned user credential will no longer operate the lock.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={assignUserCredOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Assign a User Code:</strong> <br/>
                            Default user code: <DigiSymbol ds={'button01'}/><DigiSymbol ds={'button02'}/><DigiSymbol
                              ds={'button03'}/><DigiSymbol ds={'button04'}/> <br/>
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> then insert a valid Manager
                            Key.
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={assignUserCredTwo}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Press <DigiSymbol ds={'buttonC'}/> [any 4-digit code] <DigiSymbol ds={'buttonKey'}/>. A two-tone
                            beep will be heard. <br/>
                            Press <DigiSymbol ds={'buttonC'}/> [the same 4-digit code] <DigiSymbol ds={'buttonKey'}/>. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={assignUserCredThree}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Assign a User Key:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> then insert a valid Manager
                            Key. <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={assignUserCredFour}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, insert a User Key. <br/>
                            A two-tone beep will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Auto Unlock">
                      <p>
                        When in shared use functionality, each lock can be programmed to auto unlock after a set number of
                        hours. The default setting is OFF
                        (does not auto unlock).
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={autoUnlockOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To turn on Auto Unlock:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol ds={'button09'}/><DigiSymbol ds={'button05'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
                            The LED will flash. <br/>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={autoUnlockTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, enter the number of hours from <DigiSymbol ds={'button01'}/> - <DigiSymbol ds={'button09'}/> <DigiSymbol ds={'button09'}/> then
                            press <DigiSymbol ds={'buttonKey'}/>. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off. <br/>
                            For example: Press <DigiSymbol ds={'button08'}/> <DigiSymbol ds={'buttonKey'}/> to set the lock to auto unlock after 8 hours.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={autoUnlockThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To turn off Auto Unlock:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol ds={'button09'}/><DigiSymbol ds={'button04'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={autoUnlockFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is flashing, insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Operating Instructions - In Shared Use Functionality">
                      <p>
                        In shared use functionality, the user enters a self-selected 4-digit User Code or inserts any User Key to lock and the same User Code or
                        User Key to unlock. Once unlocked, the lock is available for a different user.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateInsOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a User Code</strong> <br/>
                            To lock: Close the door. <br/>
                            Press <DigiSymbol ds={'buttonC'}/> [any 4-digit code] <DigiSymbol ds={'buttonKey'}/> then turn the handle to the locked position.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateInsTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To unlock: Press <DigiSymbol ds={'buttonC'}/> [the same 4-digit code] <DigiSymbol ds={'buttonKey'}/> then turn the handle to the
                            unlocked position. <br/>
                            Open the door.*
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateInsThree}
                               className={'img-responsive'}
                               alt="Step five"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a User Key</strong> <br/>
                            To lock: Close the door. <br/>
                            Insert any User Key then turn the handle to the
                            locked position.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateInsFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To unlock: Insert the same User Key then turn the handle to the
                            unlocked position. <br/>
                            Open the door.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateInsFive}
                               className={'img-responsive'}
                               alt="Step five"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a Manager Key</strong> <br/>
                            To unlock: Insert a valid Manager Key then turn the handle to the
                            unlocked position. <br/>
                            Open the door.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateInsSix}
                               className={'img-responsive'}
                               alt="Step six"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To relock: Close the door. <br/>
                            Insert a valid Manager Key then turn the
                            handle to the locked position.**
                          </figcaption>
                        </figure>
                      </div>
                      <p className={'smaller-text'}>
                        * After 3 consecutive incorrect User Code entries, the keypad will be disabled for 1 minute (Sleep Mode). <br/>
                        ** If a valid Manager Key is used to relock, the previous user credential will continue to operate the lock.
                      </p>
                    </div>
                    <div label="Operating Instructions - In Assigned Use Functionality">
                      <p>
                        In assigned use functionality, users operate the lock with their assigned user credential (either a User Code or a User Key). To reassign a
                        lock to a different user, follow instructions to Assign the User Credential.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateInsAssignedOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with the User Code</strong><br/>
                            To unlock: Press <DigiSymbol ds={'buttonC'}/> [assigned 4-digit code] <DigiSymbol ds={'buttonKey'}/> then turn the handle to the
                            unlocked position. <br/>
                            Open the door.*<sup>&dagger;</sup>
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateInsAssignedTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To relock: Close the door then turn the handle to the locked position.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateInsAssignedThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with the User Key</strong> <br/>
                            To unlock: Insert the assigned User Key then turn the handle to the
                            unlocked position. Open the door.<sup>&dagger;</sup>
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateInsAssignedTwo}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To relock: Close the door then turn the handle to the locked position.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateInsAssignedFour}
                               className={'img-responsive'}
                               alt="Step five"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a Manager Key</strong> <br/>
                            To unlock: Insert a valid Manager Key then turn the handle to the
                            unlocked position. Open the door.<sup>&dagger;</sup>
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateInsAssignedTwo}
                               className={'img-responsive'}
                               alt="Step six"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To relock: Close the door then turn the handle to the locked position.
                          </figcaption>
                        </figure>
                      </div>
                      <p className="smaller-text">
                        *After 3 consecutive incorrect User Code entries, the keypad will be disabled for 1 minute (Sleep Mode). <br/>
                        <sup>&dagger;</sup>The lock will remain in the locked position if the handle is not turned within approximately 6 seconds.
                      </p>
                    </div>
                    <div label="Battery Replacement for Sola 2">
                      <div className="step-images">
                        <figure>
                          <img src={replaceBatteryOne}
                               className={'img-responsive'}
                               alt="Setup one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>

                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceBatteryTwo}
                               className={'img-responsive'}
                               alt="Setup two"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>

                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceBatteryThree}
                               className={'img-responsive'}
                               alt="Setup three"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>

                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceBatteryFour}
                               className={'img-responsive'}
                               alt="Setup four"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>

                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Battery Replacement for Sola 3">
                      <p>
                        It is not necessary to uninstall the lock from the door.
                        In case of battery failure, operate with a valid Manager Key.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={batteryReplace3One}
                               className={'img-responsive'}
                               alt="Setup one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Remove the 2 battery cover
                            plate screws. <br/>
                            <i>Loosen the battery cover by inserting
                              a small flat-head in either the top or
                              bottom notches of the cover plate.</i>
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={batteryReplace3Two}
                               className={'img-responsive'}
                               alt="Setup two"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Pull the battery pack from the
                            front housing.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={batteryReplace3Three}
                               className={'img-responsive'}
                               alt="Setup three"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Remove batteries and replace
                            with two premium lithium
                            CR2450 batteries.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={batteryReplace3Four}
                               className={'img-responsive'}
                               alt="Setup four"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Re-insert the battery pack and
                            screw cover plate in place. <br/><br/>

                            Note: Never re-insert the battery pack empty as the tray cannot be removed from the housing without batteries.

                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </Accordion>
                </div>
                {/*DOCUMENTS*/}
                <div label="Document Library">
                  <Accordion clsName={'next-support'}>
                    <div label="Data Sheets">

                      <div className="step-images">
                        <ul>
                          {
                              datasheetsKeyManaged.map((doc, index) => (
                                      <li key={index}>
                                        <a href={doc.file.url} target={'_blank'}>{doc.title}</a>
                                      </li>
                                  ),
                              )
                          }
                        </ul>
                      </div>

                    </div>
                    <div label="Install Guides">
                      <div className="step-images">
                        <ul>
                          {
                              installGuidesKeyManaged.map((doc, index) => (
                                      <li key={index}>
                                        <a href={doc.file.url} target={'_blank'}>{doc.title}</a>
                                      </li>
                                  ),
                              )
                          }
                        </ul>
                      </div>
                    </div>
                    <div label="Product Guides">
                      <div className="step-images">
                        <ul>
                          {
                              productGuidesKeyManaged.map((doc, index) => (
                                      <li key={index}>
                                        <a href={doc.file.url} target={'_blank'}>{doc.title}</a>
                                      </li>
                                  ),
                              )
                          }
                        </ul>
                      </div>
                    </div>
                  </Accordion>
                </div>
                {/*FAQ*/}
                <div label="FAQ">
                  <KeypadKeyManagedRfid product={'Sola Keypad Key Managed'} clsName={'next-support'} />
                </div>
              </Accordion>
            </div>
          </div>
          {/*KEYPAD CODE MANAGED*/}
          <div className={"tab-content "+getActiveClass(2, 'active')}>
            <h3 className={'which-generation'}>Identify your Generation</h3>
            <p className={'which-generation-sub'}>If you have a yellow Programming Key or black Manager Key, please refer to <a href="javascript:void(0)" onClick={changeToKeypadTab}>Sola Keypad Key Managed</a> section.</p>
            <div className="front-rear">
              <StaticImage
                  src={'./images/sola2CodeManaged.png'}
                  loading={'lazy'}
                  width={171}
                  height={332}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
              <StaticImage
                  src={'./images/sola3CodeManaged.png'}
                  loading={'lazy'}
                  width={168}
                  height={322}
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
                    <div label="Default Settings">
                      <p>
                        <strong>Functionality</strong> = Shared Use
                      </p>
                      <p>
                        <strong>Owner Code</strong> (6-digit code) = <DigiSymbol ds={'button01'}/>
                        <DigiSymbol ds={'button02'}/> <DigiSymbol ds={'button03'}/>
                        <DigiSymbol ds={'button04'}/> <DigiSymbol ds={'button05'}/>
                        <DigiSymbol ds={'button06'}/>
                      </p>
                      <p>
                        <strong>Manager Code</strong> (5-digit code) = <DigiSymbol ds={'button01'}/>
                        <DigiSymbol ds={'button02'}/> <DigiSymbol ds={'button03'}/>
                        <DigiSymbol ds={'button04'}/> <DigiSymbol ds={'button05'}/>
                      </p>
                    </div>
                    <div label="Initial Setup">
                      <p>New locks operate with the default Owner and Manager Codes. A new Owner and Manager Code must
                        be programmed on the lock to
                        prevent the default codes from operating the lock.
                      </p>
                      <p>
                        <strong>Program a New Owner Code</strong> <br/>
                      </p>
                      <p>
                        The owner code can only be programmed using the current owner code.
                      </p>
                      <ol type={'a'}>
                        <li>
                            <span>Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol
                                ds={'buttonKey'}/> [current Owner Code] <DigiSymbol
                                ds={'buttonKey'}/>. A two-tone beep will be heard and the LED will start to
                              flash.</span>
                        </li>
                        <li>
                            <span>Press <DigiSymbol ds={'buttonC'}/> [new Owner Code] <DigiSymbol
                                ds={'buttonKey'}/>. A two-tone beep will be heard.</span>
                        </li>
                        <li>
                            <span>To confirm, press <DigiSymbol
                                ds={'buttonC'}/> [the same new Owner Code] <DigiSymbol
                                ds={'buttonKey'}/>. Two sets of two-tone beeps will be heard and the LED will turn off.</span>
                        </li>
                      </ol>
                      <p>
                        <strong>
                          Program a New Manager Code
                        </strong>
                      </p>
                      <p>
                        To Program the Manager Code using the Owner Code:
                      </p>
                      <ol>
                        <li>Press <DigiSymbol ds={'buttonC'} /> <DigiSymbol ds={'buttonKey'} /> [Owner Code] <DigiSymbol ds={'buttonKey'} />. A two-tone beep will be heard and the LED will start to fl
                          ash.
                        </li>
                        <li>Press <DigiSymbol ds={'buttonC'} /> [new Manager Code] <DigiSymbol ds={'buttonKey'} />. A two-tone beep will be heard.</li>
                        <li>To confirm, press <DigiSymbol ds={'buttonC'} /> [the same new Manager Code] <DigiSymbol ds={'buttonKey'} />. Two sets of two-tone beeps will be
                          heard and the LED will turn off.
                        </li>
                      </ol>
                      <p>
                        To Program the Manager Code using the current Manager Code:
                      </p>
                      <ol>
                        <li>Press <DigiSymbol ds={'buttonC'} /> <DigiSymbol ds={'buttonKey'} /> [current Manager Code] <DigiSymbol ds={'buttonKey'} />. A two-tone beep will be heard and the LED will start
                          to flash.
                        </li>
                        <li>Press <DigiSymbol ds={'buttonC'} />  [new Manager Code] <DigiSymbol ds={'buttonKey'} />. A two-tone beep will be heard.</li>
                        <li>To confirm, press <DigiSymbol ds={'buttonC'} />  [the same new Manager Code] <DigiSymbol ds={'buttonKey'} />. Two sets of two-tone beeps will be
                          heard and the LED will turn off.
                        </li>
                      </ol>
                    </div>
                    <div label="Set Lock Functionality">
                      <p>
                        Each lock can be set for either shared or assigned use functionality. In shared use
                        functionality, the user enters a self-selected 4-digit
                        code to lock and later unlock. Once unlocked, the lock is available to be used by a different
                        user. In assigned use functionality,
                        the lock is programmed with an assigned 4-digit code. The user enters the assigned 4-digit
                        code to unlock and turns the handle to
                        relock. Press <DigiSymbol ds={'buttonC'}/> to check functionality. If in shared
                        use, LED is <strong style={{ color: 'red' }}>RED</strong>. If in assigned use, LED is <strong
                          style={{ color: 'green' }}>GREEN</strong>.
                      </p>
                      <p>
                        <strong>Set lock for shared use functionality:</strong>
                      </p>
                      <ol>
                        <li>
                            <span>
                            Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/> [Owner Code] <DigiSymbol
                                ds={'buttonKey'}/>. A two-tone beep will be heard and the LED will start to flash.</span>
                        </li>
                        <li>
                            <span>
                            Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol
                                ds={'button05'}/><DigiSymbol ds={'button06'}/> <DigiSymbol
                                ds={'buttonKey'}/>. Two sets of two-tone beeps will be heard and a <strong
                                style={{ color: 'red' }}>RED</strong> LED will flash twice.</span>
                        </li>
                        <li>
                            <span>
                            Make sure the lock is unlocked and available for use. Use the Owner or Manager Code to unlock.</span>
                        </li>
                      </ol>
                      <p>
                        <strong>Set lock for assigned use functionality:</strong>
                      </p>
                      <ol>
                        <li><span>Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol
                            ds={'buttonKey'}/> [Owner Code] <DigiSymbol ds={'buttonKey'}/>. A two-tone beep will be heard and the LED will start to flash.</span>
                        </li>
                        <li><span>Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol
                            ds={'button06'}/><DigiSymbol ds={'button05'}/> <DigiSymbol
                            ds={'buttonKey'}/>. Two sets of two-tone beeps will be heard and a <strong
                            style={{ color: 'green' }}>GREEN</strong> LED will flash twice.</span></li>
                        <li><span>Assign a User Code to the lock. Follow Assign a New User Code instructions.</span>
                        </li>
                        <li>
                          <span>Make sure the lock is in the locked position. Use the Owner or Manager Code to lock.</span>
                        </li>
                      </ol>
                    </div>
                    <div label="Assign a New User Code (for assigned use functionality only)">
                      <ol>
                        <li><span>Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol
                            ds={'buttonKey'}/> [Manager Code] <DigiSymbol ds={'buttonKey'}/>. A two-tone beep will be heard and the green LED will start to flash.</span>
                        </li>
                        <li><span>Press <DigiSymbol
                            ds={'buttonC'}/> [new assigned 4-digit User Code] <DigiSymbol
                            ds={'buttonKey'}/>. A two-tone beep will be heard.</span></li>
                        <li><span>Press <DigiSymbol
                            ds={'buttonC'}/> [the same new assigned 4-digit User Code] <DigiSymbol
                            ds={'buttonKey'}/>. Two sets of two-tone beeps will be heard and the green LED will turn off.</span>
                        </li>
                      </ol>
                    </div>
                    <div label="Shared Use Functionality">
                      <p>
                        <strong>Operate with a self-selected User Code:</strong>
                      </p>
                      <p>
                        Make sure the lock is unlocked and available for use. Use the Owner or Manager Code to unlock.
                      </p>
                      <ul>
                        <li>
                          To lock: Close the door, press <DigiSymbol ds={'buttonC'}/> [any 4-digit User
                          Code] <DigiSymbol ds={'buttonKey'}/>, and then turn the handle to
                          the locked position.
                        </li>
                        <li>
                          To unlock: Press <DigiSymbol ds={'buttonC'}/> [the same 4-digit
                          code] <DigiSymbol ds={'buttonKey'}/>, turn the handle to the unlocked position,
                          and then open the door.*
                        </li>
                      </ul>
                      <p>
                        <strong>Operate with the Manager Code:</strong>
                      </p>
                      <ul>
                        <li>
                          To unlock: Press <DigiSymbol ds={'buttonC'}/> [Manager Code] <DigiSymbol
                            ds={'buttonKey'}/>, turn the handle to the unlocked position, and then open the
                          door.*
                        </li>
                        <li>
                          To relock: Close the door, press <DigiSymbol ds={'buttonC'}/> [Manager
                          Code] <DigiSymbol ds={'buttonKey'}/>, and then turn the handle to the locked
                          position.**
                        </li>
                      </ul>
                      <p>
                        <strong>Operate with the Owner Code:</strong>
                        <ul>
                          <li>To unlock: Press <DigiSymbol ds={'buttonC'}/> [Owner code] <DigiSymbol
                              ds={'buttonKey'}/>, turn the handle to the unlocked position, and then open
                            the door.*
                          </li>
                          <li>To lock: Close the door, press <DigiSymbol ds={'buttonC'}/> [Owner
                            Code] <DigiSymbol ds={'buttonKey'}/>, and then turn the handle to the locked
                            position.**
                          </li>
                        </ul>
                      </p>
                    </div>
                    <div label="Assigned Use Functionality">
                      <p>
                        <strong>Operate with an Assigned User Code:</strong>
                      </p>
                      <ul>
                        <li>To unlock: Press <DigiSymbol ds={'buttonC'}/> [assigned 4-digit user
                          code] <DigiSymbol ds={'buttonKey'}/>, turn the handle to the unlocked
                          position, and then open the door.*
                        </li>
                        <li>To relock: Close the door, then turn the handle to the locked position.</li>
                      </ul>
                      <p>
                        <strong>Operate with the Manager Code:</strong>
                      </p>
                      <ul>
                        <li>To unlock: Press <DigiSymbol ds={'buttonC'}/> [Manager code] <DigiSymbol
                            ds={'buttonKey'}/>, turn the handle to the unlocked position, and then
                          open the door.*
                        </li>
                        <li>To relock: Close the door, then turn the handle to the locked position.</li>
                      </ul>
                      <p>
                        <strong>Operate with the Owner Code:</strong>
                      </p>
                      <ul>
                        <li>To unlock: Press <DigiSymbol ds={'buttonC'}/> [Owner code] <DigiSymbol
                            ds={'buttonKey'}/>, turn the handle to the unlocked position, and then open the
                          door.*
                        </li>
                        <li>To relock: Close the door, then turn the handle to the locked position.</li>
                      </ul>
                      <ul className={'single-ast'}>
                        <li>
                          After three consecutive incorrect entries to unlock, the lock will go into “Sleep Mode” for
                          one minute and for an additional
                          minute for each subsequent incorrect entry. The keypad is disabled while in “Sleep Mode”.
                        </li>
                      </ul>
                      <ul className={'double-ast'}>
                        <li>
                          If a Manager or Owner Code is used to unlock and relock, the previous User Code will
                          continue to operate the lock.
                        </li>
                      </ul>
                    </div>
                    {/*<div label="Battery Replacement">*/}
                    {/*  <p>*/}
                    {/*    It is not necessary to uninstall the lock from the door. In case of battery failure, operate with a valid Manager Key.*/}
                    {/*  </p>*/}
                    {/*  <p className={'smaller-text'}>*/}
                    {/*    CAUTION: Risk of explosion or leakage if battery is replaced by an incorrect type, mixed with a different battery type, or inserted backwards.  Replace all batteries of a set at the same time. Be sure to insert batteries with correct polarities. Remove exhausted batteries from product promptly and dispose of used batteries according to the battery manufacturer’s instructions.*/}
                    {/*  </p>*/}
                    {/*  <div className="step-images">*/}
                    {/*    <figure>*/}
                    {/*      <img src={batteryReplace}*/}
                    {/*           className={'img-responsive'}*/}
                    {/*           alt="Battery Replacement Step One"*/}
                    {/*           width={'226'}*/}
                    {/*           height={'208'}/>*/}
                    {/*      <figcaption>*/}
                    {/*        <ol type={'a'}>*/}
                    {/*          <li>*/}
                    {/*            Remove the screw and the battery cover.*/}
                    {/*          </li>*/}
                    {/*          <li>*/}
                    {/*            Replace the four premium AA batteries.*/}
                    {/*          </li>*/}
                    {/*          <li>*/}
                    {/*            Replace battery cover and screw.*/}
                    {/*          </li>*/}
                    {/*        </ol>*/}
                    {/*      </figcaption>*/}
                    {/*    </figure>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                    <div label="Battery Replacement for Sola 2">
                      <div className="step-images">
                        <figure>
                          <img src={replaceBatteryOne}
                               className={'img-responsive'}
                               alt="Setup one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>

                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceBatteryTwo}
                               className={'img-responsive'}
                               alt="Setup two"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>

                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceBatteryThree}
                               className={'img-responsive'}
                               alt="Setup three"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>

                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceBatteryFour}
                               className={'img-responsive'}
                               alt="Setup four"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>

                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </Accordion>
                </div>
                {/*DOCUMENTS*/}
                <div label="Document Library">
                  <Accordion clsName={'next-support'}>
                    <div label="Data Sheets">

                      <div className="step-images">
                        <ul>
                          {
                              datasheetsCodeManaged.map( (doc, index) => (
                                      <li key={index}>
                                        <a href={doc.file.url} target={'_blank'}>{doc.title}</a>
                                      </li>
                                  )
                              )
                          }
                        </ul>
                      </div>

                    </div>
                    <div label="Install Guides">
                      <div className="step-images">
                        <ul>
                          {
                              installGuidesCodeManaged.map( (doc, index) => (
                                      <li key={index}>
                                        <a href={doc.file.url} target={'_blank'}>{doc.title}</a>
                                      </li>
                                  )
                              )
                          }
                        </ul>
                      </div>
                    </div>
                    <div label="Product Guides">
                      <div className="step-images">
                        <ul>
                          {
                              productGuidesCodeManaged.map( (doc, index) => (
                                      <li key={index}>
                                        <a href={doc.file.url} target={'_blank'}>{doc.title}</a>
                                      </li>
                                  )
                              )
                          }
                        </ul>
                      </div>
                    </div>
                  </Accordion>
                </div>
                {/*FAQ*/}
                <div label="FAQ">
                  <Accordion clsName={'next-support'}>
                    <div label="My lock will not operate. I hear rapid beeping followed by two sets of 3 beeps.">
                      <p>If in the unlocked position, follow the Battery Replacement instructions.</p>
                      <p>If locked press firmly on the locker door, if there is room to, lift up on the door, move it
                        side to side in attempt to ajar it while operating the lock. If error condition persists,
                        contact Digilock support for assistance.</p>

                    </div>
                    <div label="The keypad is disabled and the LED flashes twice.">
                      <p>
                        After three consecutive incorrect User Code entries to unlock, the lock will go into "Sleep
                        Mode" for one minute and for an additional minute for each subsequent incorrect entry. While
                        in "Sleep Mode" the keypad is <u>disabled</u> and the LED flashes twice consecutively.
                      </p>
                    </div>
                    <div label="My locks can be unlocked with any code.">
                      <p>
                        Locks are shipped with factory default settings. <strong>Owner Code</strong> (6-digit-code) = <DigiSymbol ds={'button01'}/><DigiSymbol ds={'button02'}/><DigiSymbol ds={'button03'}/><DigiSymbol ds={'button04'}/><DigiSymbol ds={'button05'}/><DigiSymbol ds={'button06'}/>. <strong>Manager Code</strong> (5-digit-code) = <DigiSymbol ds={'button01'}/><DigiSymbol ds={'button02'}/><DigiSymbol ds={'button03'}/><DigiSymbol ds={'button04'}/><DigiSymbol ds={'button05'}/>. <br/>
                        Setup must be completed to register the Programming Key and Manager Keys to all the locks.
                      </p>
                    </div>
                    <div label="I hear 2 sets of three beeps after operating my lock.">
                      <p>
                        Low battery indicator, if unlocked replace the batteries as soon as possible.
                      </p>
                    </div>
                    <div label="What brand of batteries do you recommend for your Digilock product?">
                      For best performance, we recommend premium high-alkaline Duracell CopperTop or Energizer
                      batteries.
                    </div>
                  </Accordion>
                </div>
              </Accordion>
            </div>
          </div>
          {/*RFID*/}
          <div className={"tab-content "+getActiveClass(3, 'active')}>
            <div className="front-rear">
              <img src={sola3Rfid} alt=""/>
            </div>
            <div className="lists">
              <Accordion clsName={'next-support'}>
                {/*GETTING STARTED*/}
                <div label="Getting Started">
                  <Accordion clsName={'next-support'}>
                    <div label="Initial Setup">
                      <p>
                        Locks are shipped with factory default settings (only operates by pressing <DigiSymbol ds={'buttonKey'}/>). Each lock must be set up to operate with a Programming
                        Key and Manager Keys.
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
                            and the LED will flash.
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
                            While the LED is flashing, insert
                            one Manager Key at a time. <br/>
                            A two-tone beep will be heard for
                            each Manager Key programmed.
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
                            While the LED is flashing, insert
                            the Programming Key. <br/>
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
                            Repeat above steps for each lock
                            or follow instructions to Express
                            Register Manager Keys to setup
                            all locks.
                          </figcaption>
                        </figure>
                      </div>

                    </div>
                    <div label="Express Register Manager Keys">
                      <p>
                        The Programming Key can quickly program multiple locks to operate with the same Manager Keys.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={expressSetupOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Go to the lock already programmed to operate with the Manager Keys. <br/>
                            Touch and hold <DigiSymbol ds={'buttonKey'}/> for 10 seconds (a two-tone beep will be heard after
                            5 seconds followed by 2 sets of two-tone beeps after 10 seconds)
                            then release. <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressSetupTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is flashing, insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={expressSetupThree}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            At each lock to be programmed, insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will flash once to indicate
                            successful registration.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressSetupFour}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To end Express Registration mode:*
                            Go to any programmed lock. <br/>
                            Press <DigiSymbol ds={'buttonKey'}/> then insert the Programming Key.
                          </figcaption>
                        </figure>
                      </div>
                      <p className="smaller-text">
                        *The Programming Key will continue to function in Express Registration mode until it is used to operate a lock.
                      </p>
                    </div>
                    <div label="Add Manager Keys">
                      <p>
                        Manager Key(s) can be registered to a lock after Initial Setup has been completed.
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
                            Touch and hold <DigiSymbol ds={'buttonKey'}/> for 5 seconds
                            (a two-tone beep will be heard after
                            5 seconds) then release. <br/>
                            The LED will flash.
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
                            While the LED is flashing, insert
                            the Programming Key. <br/>
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
                            While the LED is flashing, insert
                            each additional Manager Key one
                            at a time. <br/>
                            A two-tone beep will be heard for
                            each Manager Key programmed.
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
                            Repeat above steps for each lock
                            or follow instructions to Express
                            Register Manager Keys to quickly
                            program multiple locks to operate
                            with the same Manager Keys.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Replace Keys">

                      <p>
                        The locks must be reprogrammed to prevent the lost/stolen keys from operating a lock.
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
                            Note the order or serial number (found on the lock’s rear).
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Contact <a href="/contact/">Digilock Support</a> to purchase a replacement Programming Key.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={replaceKeysThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To replace the Manager Keys:</strong> <br/>
                            Collect all remaining and replacement Manager Keys. <br/>
                            Go to any lock operated by the lost/stolen Manager Keys. <br/>Touch and
                            hold <DigiSymbol ds={'buttonKey'}/> for 5 seconds (a two-tone beep will be heard after 5 seconds)
                            then release. <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is flashing, insert the Programming Key. <br/>
                            A two-tone beep will be heard. <br/>
                            Insert the Programming Key again. <br/>
                            Three sets of two-tone beeps will be heard and the LED will turn off. All
                            previously programmed Manager Keys will be erased. <br/>
                            Follow instructions to Add Manager Keys to program the remaining and
                            replacement Manager Keys to the locks.
                          </figcaption>
                        </figure>
                      </div>

                    </div>
                    <div label="Assign the User Credential (Assigned Use Functionality)">

                      <p>
                        Once a user credential is assigned, the previously assigned user credential will no longer operate the lock.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={assignUserCredentialOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Assign a User RFID Credential:</strong> <br/>
                            Touch and hold <DigiSymbol ds={'buttonKey'}/> for 5 seconds (a two-tone beep will be heard after 5
                            seconds) then release. <br/>
                            The LED will flash and the RFID reader will turn on. <br/>
                            Insert a valid Manager Key. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={assignUserCredentialTwo}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Present the RFID credential to the RFID reader. <br/>
                            Two sets of two-tone beeps will be heard and the LED and RFID reader
                            will turn off.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={assignUserCredentialThree}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Assign a User Key:</strong> <br/>
                            Touch and hold <DigiSymbol ds={'buttonKey'}/> for 5 seconds (a two-tone beep will be heard after 5
                            seconds) then release. <br/>
                            The LED will flash and the RFID reader will turn on. <br/>
                            Insert a valid Manager Key. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={assignUserCredentialFour}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, insert a User Key. <br/>
                            A two-tone beep will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>

                    </div>
                    <div label="Operating Instructions (In Assigned Use Functionality)">
                      <p>
                        In assigned use functionality, users operate the lock with their assigned user credential (either an RFID Credential or a User Key). To
                        reassign a lock to a different user, follow instructions to Assign the User Credential.
                      </p>

                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateAssignedOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with the RFID credential</strong> <br/>
                            To unlock: Touch <DigiSymbol ds={'buttonKey'}/> then present the assigned RFID credential then turn <br/>the
                            handle to the unlocked position. <br/>Open the door.*
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateAssignedTwo}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To relock: Close the door then turn the handle to the locked position.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateAssignedThree}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with the User Key</strong> <br/>
                            To unlock: Insert the assigned User Key then turn <br/>the handle to the
                            unlocked position. <br/> Open the door.*
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateAssignedFour}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To relock: Close the door then turn the handle to the locked position.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateAssignedFive}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a Manager Key</strong> <br/>
                            To unlock: Insert a valid Manager Key then turn the handle to the
                            unlocked position. <br/>Open the door.*
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateAssignedSix}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To relock: Close the door then turn the handle to the locked position.
                          </figcaption>
                        </figure>
                      </div>
                      <p className={'smaller-text'}>
                        *The lock will remain in the locked position if the handle is not turned within approximately 6 seconds.
                      </p>
                    </div>
                    <div label="Operating Instructions (In Shared Use Functionality)">
                      <p>
                        In shared use functionality, the user presents an RFID credential or inserts any User Key to lock and the same User RFID Credential or User
                        Key to unlock. Once unlocked, the locker is available for a different user.
                      </p>

                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateSharedOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a User RFID Credential</strong> <br/>
                            To lock: Close the door. Touch <DigiSymbol ds={'buttonKey'}/> then present an RFID credential, then
                            turn the handle to the locked position.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateSharedTwo}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To unlock: Touch <DigiSymbol ds={'buttonKey'}/> then present the same RFID credential, then turn
                            the handle to the unlocked position. Open the door.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateSharedThree}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with the User Key</strong> <br/>
                            To lock: Close the door. Insert any User Key then turn the handle to the
                            locked position.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateSharedFour}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To unlock: Insert the same User Key then turn the handle to the
                            unlocked position. Open the door.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateSharedFive}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a Manager Key</strong> <br/>
                            To unlock: Insert a valid Manager Key then turn the handle to the
                            unlocked position. <br/>Open the door.*
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateSharedSix}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To relock: Close the door. Insert a valid Manager Key then turn the
                            handle to the locked position.*
                          </figcaption>
                        </figure>
                      </div>
                      <p className={'smaller-text'}>
                        * If a valid Manager Key is used to relock, the previous user credential will continue to operate the lock.
                      </p>
                    </div>
                  </Accordion>
                </div>
                {/*DOCUMENTS*/}
                <div label="Document Library">
                  <Accordion clsName={'next-support'}>
                    <div label="Data Sheets">

                      <div className="step-images">
                        <ul>
                          {
                              datasheetsRFID.map( (doc, index) => (
                                      <li key={index}>
                                        <a href={doc.file.url} target={'_blank'}>{doc.title}</a>
                                      </li>
                                  )
                              )
                          }
                        </ul>
                      </div>

                    </div>
                    <div label="Install Guides">
                      <div className="step-images">
                        <ul>
                          {
                              installGuidesRFID.map( (doc, index) => (
                                      <li key={index}>
                                        <a href={doc.file.url} target={'_blank'}>{doc.title}</a>
                                      </li>
                                  )
                              )
                          }
                        </ul>
                      </div>
                    </div>
                    <div label="Product Guides">
                      <div className="step-images">
                        <ul>
                          {
                              productGuidesRFID.map( (doc, index) => (
                                      <li key={index}>
                                        <a href={doc.file.url} target={'_blank'}>{doc.title}</a>
                                      </li>
                                  )
                              )
                          }
                        </ul>
                      </div>
                    </div>
                  </Accordion>
                </div>
                {/*SUPPORT*/}
                <div label="Troubleshooting">
                  <Accordion clsName={'next-support'}>
                    <div label="Low Battery Indicator">
                      <p>
                        After locking or unlocking, the lock emits two sets of three beeps indicating that the batteries are low. Replace the batteries.
                      </p>
                    </div>
                    <div label="Does not Unlock with the User RFID Credential or User Key">
                      <p>
                        The lock does not recognize the RFID Credential or User Key. For immediate access, operate with a valid Manager Key.
                      </p>
                    </div>
                    <div label="Does not Operate with a Manager Key">
                      <p>
                        The lock does not recognize the Manager Key. Follow instructions to Add Manager Keys to program the Manager Key to the lock. For
                        immediate access, operate with another valid Manager Key.
                      </p>
                    </div>
                    <div label="Does not Operate with the Programming Key">
                      <p>
                        The lock does not recognize the Programming Key. If the Programming Key has been replaced, operate with the Replacement Programming Key. Contact <a
                          href="/contact/">Digilock support</a> for additional assistance.
                      </p>
                    </div>
                    <div label={['No Audible Feedback when ', <DigiSymbol key={'keyToHandleIterateError'} ds={'buttonKey'}></DigiSymbol>, ' is Pressed']}>
                      <p>
                        The batteries may need to be replaced. For immediate access, operate with a valid Manager Key.
                      </p>
                    </div>
                    <div label="Battery Replacement">
                      <p>
                        It is not necessary to uninstall the lock from the door. In case of battery failure, operate with a valid Manager Key.
                      </p>
                      <p className={'smaller-text'}>
                        CAUTION: Risk of explosion or leakage if battery is replaced by an incorrect type, mixed with a different battery type, or inserted backwards.  Replace all batteries of a set at the same time. Be sure to insert batteries with correct polarities. Remove exhausted batteries from product promptly and dispose of used batteries according to the battery manufacturer’s instructions.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={batteryReplace}
                               className={'img-responsive'}
                               alt="Battery Replacement Step One"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            <ol type={'a'}>
                              <li>
                                Remove the screw and the battery cover.
                              </li>
                              <li>
                                Replace the four premium AA batteries.
                              </li>
                              <li>
                                Replace battery cover and screw.
                              </li>
                            </ol>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </Accordion>
                </div>
                {/*FAQ*/}
                <div label="FAQ">
                  <KeypadKeyManagedRfid product={'Sola Keypad Key Managed'} clsName={'next-support'} />
                </div>
              </Accordion>
            </div>
          </div>
        </div>

      </div>
  );
};

export default Tab;