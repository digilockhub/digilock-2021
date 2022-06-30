import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans} from "gatsby-plugin-react-i18next";
import Accordion from '../../../../../components/ui/legacy/Accordion/Accordion'
import DigiSymbol from '../../../../../components/ui/legacy/DigiSymbols/DigiSymbol'
import {jumpAccordion} from "../../../../../utils/utils";


//IMAGES
import setupOne from './images/keypad/setup-one.png'
import setupTwo from './images/keypad/setup-two.png'
import setupThree from './images/keypad/setup-three.png'
import setupFour from './images/keypad/setup-four.png'

import expressRegisterOne from './images/keypad/express-reg-man-keys-one.png'
import expressRegisterTwo from './images/keypad/express-reg-man-keys-two.png'
import expressRegisterThree from './images/keypad/express-reg-man-keys-three.png'
import expressRegisterFour from './images/keypad/express-reg-man-keys-four.png'

import addManagerOne from './images/keypad/add-manager-keys-one.png'
import addManagerTwo from './images/keypad/add-manager-keys-two.png'
import addManagerThree from './images/keypad/add-manager-keys-three.png'
import addManagerFour from './images/keypad/add-manager-keys-four.png'

import replaceKeysOne from './images/keypad/replace-key-one.png'
import replaceKeysTwo from './images/keypad/replace-key-two.png'
import replaceKeysThree from './images/keypad/replace-key-three.png'
import replaceKeysFour from './images/keypad/replace-key-four.png'

import setLockFunctionOne from './images/keypad/setup-one.png'
import setLockFunctionTwo from './images/keypad/setup-two.png'

import autoUnlockOne from './images/keypad/auto-unlock-one.png'
import autoUnlockTwo from './images/keypad/auto-unlock-two.png'
import autoUnlockThree from './images/keypad/auto-unlock-three.png'
import autoUnlockFour from './images/keypad/auto-unlock-four.png'

import assignUserCredsOne from './images/keypad/assign-user-creds-one.png'
import assignUserCredsTwo from './images/keypad/assign-user-creds-two.png'
import assignUserCredsThree from './images/keypad/assign-user-creds-three.png'
import assignUserCredsFour from './images/keypad/assign-user-creds-four.png'

import expressRegCredsKeysOne from './images/keypad/express-reg-cred-keys-one.png'
import expressRegCredsKeysTwo from './images/keypad/express-reg-cred-keys-two.png'
import expressRegCredsKeysThree from './images/keypad/express-reg-cred-keys-three.png'
import expressRegCredsKeysFour from './images/keypad/express-reg-cred-keys-four.png'

import removeUserCredsOne from './images/keypad/remove-user-creds-one.png'
import removeUserCredsTwo from './images/keypad/remove-user-creds-two.png'
import removeUserCredsThree from './images/keypad/remove-user-creds-three.png'
import removeUserCredsFour from './images/keypad/remove-user-creds-four.png'

import replaceAssignedCredOne from './images/keypad/replace-assigned-cred-one.png'
import replaceAssignedCredTwo from './images/keypad/replace-assigned-cred-two.png'
import replaceAssignedCredThree from './images/keypad/replace-assigned-cred-three.png'

import operateInstructionSharedOne from './images/keypad/operating-shared-one.png'
import operateInstructionSharedTwo from './images/keypad/operating-shared-two.png'
import operateInstructionSharedThree from './images/keypad/operating-shared-three.png'
import operateInstructionSharedFour from './images/keypad/operating-shared-four.png'
import operateInstructionSharedFive from './images/keypad/operating-shared-five.png'
import operateInstructionSharedSix from './images/keypad/operating-shared-six.png'

import operateInstructionAssignedOne from './images/keypad/operateAssignedOne.png'
import operateInstructionAssignedTwo from './images/keypad/operateAssignedTwo.png'
import operateInstructionAssignedThree from './images/keypad/operateAssignedThree.png'
import operateInstructionAssignedFour from './images/keypad/operateAssignedFour.png'
import operateInstructionAssignedFive from './images/keypad/operateAssignedFive.png'
import operateInstructionAssignedSix from './images/keypad/operateAssignedSix.png'

import batteryReplaceSurface from './images/keypad/battery-surface.png'
import batteryReplaceRecessed from './images/keypad/battery-recessed.png'
import setupOneRFID from './images/rfid/setup-one.png'
import setupTwoRFID from './images/rfid/setup-two.png'
import setupThreeRFID from './images/rfid/setup-three.png'

import setupFourRFID from './images/rfid/setup-four.png'
import expressRegManCredOne from './images/rfid/express-reg-man-creds-one.png'
import expressRegManCredTwo from './images/rfid/express-reg-man-creds-two.png'
import expressRegManCredThree from './images/rfid/express-reg-man-creds-three.png'

import expressRegManCredFour from './images/rfid/express-reg-man-creds-four.png'
import addManagerCredsOne from './images/rfid/add-man-creds-one.png'
import addManagerCredsTwo from './images/rfid/add-man-creds-two.png'
import addManagerCredsThree from './images/rfid/add-man-creds-three.png'

import addManagerCredsFour from './images/rfid/add-man-creds-four.png'
import replaceProgKeyManCredsOne from './images/rfid/replace-prog-key-man-cred-one.png'
import replaceProgKeyManCredsTwo from './images/rfid/replace-prog-key-man-cred-two.png'
import replaceProgKeyManCredsThree from './images/rfid/replace-prog-key-man-cred-three.png'

import replaceProgKeyManCredsFour from './images/rfid/replace-prog-key-man-cred-four.png'
import requestFuncChangeOne from './images/rfid/request-func-change-one.png'
import requestFuncChangeTwo from './images/rfid/request-func-change-two.png'

import requestFuncChangeThree from './images/rfid/request-func-change-three.png'
import assignUserCredsOneRFID from './images/rfid/assign-user-creds-one.png'
import assignUserCredsTwoRFID from './images/rfid/assign-user-creds-two.png'
import assignUserCredsThreeRFID from './images/rfid/assign-user-creds-three.png'

import assignUserCredsFourRFID from './images/rfid/assign-user-creds-four.png'
import expressRegUserManCredsOne from './images/rfid/express-reg-user-man-creds-one.png'
import expressRegUserManCredsTwo from './images/rfid/express-reg-user-man-creds-two.png'
import expressRegUserManCredsThree from './images/rfid/express-reg-user-man-creds-three.png'

import expressRegUserManCredsFour from './images/rfid/express-reg-user-man-creds-four.png'
import removeUserCredsOneRFID from './images/rfid/remove-user-creds-one.png'
import removeUserCredsTwoRFID from './images/rfid/remove-user-creds-two.png'
import removeUserCredsThreeRFID from './images/rfid/remove-user-creds-three.png'

import removeUserCredsFourRFID from './images/rfid/remove-user-creds-four.png'
import replaceAssignedUserRfidCredOne from './images/rfid/replace-assigned-user-rfid-cred-one.png'
import replaceAssignedUserRfidCredTwo from './images/rfid/replace-assigned-user-rfid-cred-two.png'

import replaceAssignedUserRfidCredThree from './images/rfid/replace-assigned-user-rfid-cred-three.png'
import replaceRfidBlackKey from './images/rfid/replace-assigned-rfid-black-key.png'
import replaceRfidHand from './images/rfid/replace-assigned-rfid-hand.png'
import replaceRfidBlueKey from './images/rfid/replace-assigned-rfid-blue-key.png'

import replaceRfidCard from './images/rfid/replace-assigned-rfid-card.png'
import operateSharedOne from './images/rfid/operate-shared-use-one.png'
import operateSharedTwo from './images/rfid/operate-shared-use-two.png'
import operateSharedThree from './images/rfid/operate-shared-use-three.png'
import operateSharedFour from './images/rfid/operate-shared-use-four.png'
import operateSharedFive from './images/rfid/operate-shared-use-five.png'

import operateSharedSix from './images/rfid/operate-shared-use-six.png'
import operateAssignedOne from './images/rfid/operate-assigned-one.png'
import operateAssignedTwo from './images/rfid/operate-assigned-two.png'
import operateAssignedThree from './images/rfid/operate-assigned-three.png'
import operateAssignedFour from './images/rfid/operate-assigned-four.png'
import operateAssignedFive from './images/rfid/operate-assigned-five.png'
import operateAssignedSix from './images/rfid/operate-assigned-six.png'
import batteryReplacement from './images/rfid/battery-replace.png'

import catalog from './documents/DigilockCatalogNumeris2019.pdf';
import VersaKeypadFaq from '../../../faq/VersaKeypad';
import VersaRfidFaq from '../../../faq/VersaKeypad';

let datasheetsKeypad = [
  {
    "title": "Versa Mini Data Sheet Keypad",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/4jxzGuBIvzXtej2TmCnLae/85f6f4fbe89a3d54528622f8fdfda67c/DS-VersaMini-Keypad.pdf",
      "fileName": "DS-VersaMini-Keypad.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Versa Standard Data Sheet Keypad",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/64tuZ0ClmCumotRQ2xXSfa/2b881b1d2f462e3c354b28007524d667/DS-VersaStandard-Keypad.pdf",
      "fileName": "DS-VersaStandard-Keypad.pdf",
      "contentType": "application/pdf"
    }
  }
];
let installGuidesKeypad = [
  {
    "title": "Versa Standard Install Guide",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/45i2LxGT7Tc7T6niAOzCpF/8663c947b05f8641f5b64f4f34de9a78/IG-NMVS.pdf",
      "fileName": "IG-NMVS.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Versa Mini Install Guide",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/2yIR0OXOxfokzm89bTguxT/195d8e5a9e0015b271881bf213eca645/IG-NMVM.pdf",
      "fileName": "IG-NMVM.pdf",
      "contentType": "application/pdf"
    }
  }
];
let productGuidesKeypad = [
  {
    "title": "Versa Standard Product Guide Keypad",
    "file": {
      "url": "//downloads.ctfassets.net/q5vaqi9g69zw/2LuuHqImZSC9nm79yKNSCb/061bf4766c22a44943452c72fbacc968/PG-VersaStandard-Keypad.pdf",
      "fileName": "PG-VersaStandard-Keypad.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Versa Mini Product Guide Keypad",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/3I3hSGGfSzbeEPf0Nwx1OH/3539f30d732c0ad50b99feb0ce8e0fc5/PG-VersaMini-Keypad.pdf",
      "fileName": "PG-VersaMini-Keypad.pdf",
      "contentType": "application/pdf"
    }
  }
];
let datasheetsRFID = [
  {
    "title": "Versa Standard Data Sheet RFID",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/1tCWDWoLW8AXzROSTKwE8D/d99acc2a3d7f449263445c153bbcc2a8/DS-VersaStandard-RFID.pdf",
      "fileName": "DS-VersaStandard-RFID.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Versa Mini Data Sheet RFID",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/1z3fa9DsNLbwRE0jjy82fJ/55828fb81e90e8380238f80d171fd529/DS-VersaMini-RFID.pdf",
      "fileName": "DS-VersaMini-RFID.pdf",
      "contentType": "application/pdf"
    }
  }
];
let installGuidesRFID = [
  {
    "title": "Versa Standard Install Guide",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/45i2LxGT7Tc7T6niAOzCpF/8663c947b05f8641f5b64f4f34de9a78/IG-NMVS.pdf",
      "fileName": "IG-NMVS.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Versa Mini Install Guide",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/2yIR0OXOxfokzm89bTguxT/195d8e5a9e0015b271881bf213eca645/IG-NMVM.pdf",
      "fileName": "IG-NMVM.pdf",
      "contentType": "application/pdf"
    }
  }
];
let productGuidesRFID = [
  {
    "title": "Versa Mini Product Guide RFID",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/4QTWKgjm959vXrm9MWN7Cz/13e226e558c1bd6a0ceb8597ac57da7c/PG-VersaMini-RFID.pdf",
      "fileName": "PG-VersaMini-RFID.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Versa Standard Product Guide RFID",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/7uLbVx6OhFE2OvHJatYtph/97ab70fb13638bc3ac862f02d99a6b39/PG-VersaStandard-RFID.pdf",
      "fileName": "PG-VersaStandard-RFID.pdf",
      "contentType": "application/pdf"
    }
  }
];

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
            Versa <Trans>keypad</Trans>
          </li>
          <li
              className={getActiveClass(2, 'active')}
              onClick={() => toggleTab(2)}
          >
            Versa <Trans>rfid</Trans>
          </li>
        </ul>
        <div className="tab-content-container">
          <div className={"tab-content " + getActiveClass(1, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'./images/keypad/feature-keypad-vertical-top.png'}
                  loading={'lazy'}
                  width={'406'}
                  height={'762'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Versa Keypad Vertical Smart Lock"
              />
              <StaticImage
                  src={'./images/keypad/feature-keypad-vertical-bottom.png'}
                  loading={'lazy'}
                  width={'710'}
                  height={'762'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Versa Keypad Vertical Smart Lock"
              />
              <StaticImage
                  src={'./images/keypad/feature-keypad-horizontal.png'}
                  loading={'lazy'}
                  width={'652'}
                  height={'762'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Versa Keypad Horizontal Smart Lock"
              />
            </div>
            <div className="lists">
              <Accordion clsName={'numeris-support'}>
                {/*GETTING STARTED*/}
                <div label="Getting Started">
                  <Accordion clsName={'numeris-support'}>
                    <div label="Initial Setup">
                      <p>
                        Locks are shipped with factory default settings (only operates by pressing <DigiSymbol
                          ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/>). Each lock must be set up to operate with a
                        Programming Key and Manager Keys.
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
                            While the LED is flashing, insert one
                            Manager Key at a time. <br/>
                            A beep will be heard for each
                            Manager Key programmed.
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
                            Repeat above steps for each lock
                            or follow instructions to <span
                              onClick={() => jumpAccordion('Express Register Manager Keys')}>Express
                        Register Manager Keys</span> to setup
                            all locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Express Register Manager Keys">
                      <p>The Programming Key can quickly program multiple locks to operate with the same Manager
                        Keys.</p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={expressRegisterOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Go to a lock already programmed to operate with the Manager Keys.
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button06'}/><DigiSymbol ds={'button01'}/> <DigiSymbol ds={'buttonKey'}/>.
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressRegisterTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is flashing, insert the Programming Key. <br/>
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
                            Insert the Programming Key to program each lock to operate with the
                            same Manager Keys. <br/>
                            Two sets of two-tone beeps will be heard and the LED will flash twice to
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
                            End Express Registration mode.* <br/>
                            Go to any programmed lock. <br/>
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> then insert the Programming
                            Key.
                          </figcaption>
                        </figure>
                      </div>
                      <p className={'smaller-text'}>*The Programming Key will continue to function in Express
                        Registration mode until it is used to operate a lock.</p>
                    </div>
                    <div label="Add Manager Keys">
                      <p>
                        Manager Keys can be programmed to the locks at any time.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={addManagerOne}
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
                          <img src={addManagerTwo}
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
                          <img src={addManagerThree}
                               alt="step three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is flashing, insert
                            each additional Manager Key one
                            at a time. <br/>
                            A beep will be heard for each
                            Manager Key programmed.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerFour}
                               alt="step four"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard and
                            the LED will turn off. <br/>
                            Repeat above steps for each lock
                            or follow instructions to <span
                              onClick={() => jumpAccordion('Express Register Manager Keys')}>Express
                        Register Manager Keys</span> to quickly
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
                            Contact <a href="/contact">Digilock Support</a> to purchase a replacement Programming Key.
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
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button05'}/><DigiSymbol ds={'button05'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
                            The LED will flash.
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
                            Three sets of two-tone beeps will be heard and the LED will turn off. All
                            previously programmed Manager Keys will be erased. <br/>
                            Follow instructions to <span onClick={() => jumpAccordion('Add Manager Keys')}>Add Manager Keys</span> to
                            program the remaining and
                            replacement Manager Keys to the locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Set Lock Functionality">
                      <p>
                        Each lock can be set for either shared or assigned use functionality. Press <DigiSymbol
                          ds={'buttonKey'}/> to check functionality. If in shared use, LED is red. If in
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
                            The red LED will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setLockFunctionTwo}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the green LED will flash once.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure>
                          <img src={setLockFunctionOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>To set for shared use:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button05'}/><DigiSymbol ds={'button06'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
                            The green LED will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setLockFunctionTwo}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard and
                            the red LED will fl ash once.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Auto Unlock (In Shared Use Functionality)">
                      <p>
                        When in shared use functionality, each lock can be programmed to auto unlock after a set number
                        of hours. The default setting is OFF
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
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button09'}/><DigiSymbol ds={'button05'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
                            The LED will flash. <br/>
                            While the LED is flashing, insert the Programming Key. <br/>
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
                            While the LED is on, enter the number of hours from <DigiSymbol
                              ds={'button01'}/> - <DigiSymbol ds={'button09'}/> <DigiSymbol ds={'button09'}/>
                            then press <DigiSymbol ds={'buttonKey'}/>. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off.
                            For example: <br/>
                            Press <DigiSymbol ds={'button08'}/> <DigiSymbol ds={'buttonKey'}/> to set the lock to auto
                            unlock 8 hours after locking.
                          </figcaption>
                        </figure>
                      </div>

                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={autoUnlockThree}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To turn off Auto Unlock:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button09'}/><DigiSymbol ds={'button04'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={autoUnlockFour}
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

                    </div>
                    <div label="Assign User Credentials (for assigned use only)">
                      <p>
                        Make sure that the lock is set for assigned use functionality (a green LED will flash
                        when <DigiSymbol ds={'buttonC'}/> is pressed). Up to 20 user credentials (User Codes and/or User
                        Keys) may be assigned to each lock.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={assignUserCredsOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Assign User Codes:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button05'}/><DigiSymbol ds={'button05'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
                            The LED will flash. <br/>
                            While the LED is flashing, insert a valid Manager Key. <br/>
                            A two-tone beep will be heard and the LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={assignUserCredsTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, press <DigiSymbol ds={'buttonC'}/> <strong>[new 4-7 digit
                            code]</strong> <DigiSymbol ds={'buttonKey'}/>. <br/>
                            A two-tone beep will be heard. <br/>
                            Press <DigiSymbol ds={'buttonC'}/> <strong>[the same 4-7 digit code]</strong> <DigiSymbol
                              ds={'buttonKey'}/>. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={assignUserCredsThree}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Assign User Keys:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button05'}/><DigiSymbol ds={'button05'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
                            The LED will flash. <br/>
                            While the LED is flashing, insert a valid Manager Key.
                            A two-tone beep will be heard and the LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={assignUserCredsFour}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            While the LED is on, insert a User Key. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Express Register User Credentials and Manager Keys (for assigned use only)">
                      <p>
                        Make sure the lock is set for assigned use functionality (a green LED will flash
                        when <DigiSymbol ds={'buttonC'}/> is pressed). The Programming Key can quickly
                        program multiple locks to operate with the same user credentials and Manager Keys.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={expressRegCredsKeysOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Go to a lock already programmed <br/>
                            to operate with the user credentials <br/>
                            and Manager Keys. <br/>
                            Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button06'}/><DigiSymbol ds={'button06'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={expressRegCredsKeysTwo}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is flashing, insert the
                            Programming Key. <br/>
                            A two-tone beep will be heard and
                            the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={expressRegCredsKeysThree}
                               alt="step three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key to
                            program each lock to operate
                            with the same user credentials and
                            Manager Keys. <br/>
                            Two sets of two-tone beeps will be
                            heard and the LED will flash twice to
                            indicate successful programming.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={expressRegCredsKeysFour}
                               alt="step four"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            End Express Registration mode:*
                            Go to any programmed lock. <br/>
                            Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/> then insert the
                            Programming Key.
                          </figcaption>
                        </figure>
                      </div>
                      <p className="smaller-text">
                        *The Programming Key will continue to function in Express Registration mode until it is used to
                        operate a lock.
                      </p>
                    </div>
                    <div label="Remove User Credentials (for assigned use functionality only)">
                      <p>
                        Make sure the lock is in assigned use functionality (a green LED will flash when <DigiSymbol
                          ds={'buttonC'}/> is pressed). The locks must be reprogrammed to remove
                        user credentials from operating a lock.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={removeUserCredsOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Collect all remaining and replacement user credentials
                            (User Codes and User Keys).
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={removeUserCredsTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button05'}/><DigiSymbol ds={'button05'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
                            The LED will flash. <br/>
                            While the LED is flashing, insert a valid Manager Key. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={removeUserCredsThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Manager Key again. <br/>
                            Three sets of two-tone beeps will be heard and the LED will turn off. <br/>
                            All previously assigned user credentials will be removed.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={removeUserCredsFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Follow <span
                              onClick={() => jumpAccordion('Assign User Credentials (for assigned use only)')}>Assign User Credentials instructions</span> to
                            assign the remaining and
                            replacement user credentials to the locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Replace an Assigned User Credential">
                      <div className="step-images">
                        <figure>
                          <img src={replaceAssignedCredOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>Replace an Assigned User Code
                              with a New User Key:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/> then insert a valid
                            Manager Key. <br/>
                            A two-tone beep will be heard and the LED
                            will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceAssignedCredTwo}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is on,
                            press <DigiSymbol ds={'buttonC'}/> <strong>[assigned user code]</strong> <DigiSymbol
                              ds={'buttonKey'}/>. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceAssignedCredThree}
                               alt="step three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is on, insert a new User Key. <br/>
                            Two sets of two-tone beeps will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>

                      <div className="step-images">
                        <figure>
                          <img src={replaceAssignedCredOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>Replace an Assigned User Key
                              with a New User Key:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/> then insert a valid
                            Manager Key. <br/>
                            A two-tone beep will be heard and the LED
                            will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceAssignedCredThree}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is on, insert the assigned user Key. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceAssignedCredThree}
                               alt="step three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is on, insert a new User Key. <br/>
                            Two sets of two-tone beeps will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>

                      <div className="step-images">
                        <figure>
                          <img src={replaceAssignedCredOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>Replace an Assigned User Key
                              with a New User Code:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/> then insert a valid
                            Manager Key. <br/>
                            A two-tone beep will be heard and the LED
                            will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceAssignedCredThree}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is on, insert the assigned User Key. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceAssignedCredTwo}
                               alt="step three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is on,
                            Press <DigiSymbol ds={'buttonC'}/> <strong>[new 4-7 digit user code]</strong> <DigiSymbol
                              ds={'buttonKey'}/>
                            <br/>
                            <DigiSymbol ds={'buttonC'}/> <strong>[the same 4-7 digit user code]</strong> <DigiSymbol
                              ds={'buttonKey'}/>. <br/>
                            Two sets of two-tone beeps will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>


                    </div>
                    <div label="Operating Instructions - In Shared Use Functionality">
                      <p>
                        In shared use functionality, the user enters any 4-7 digit User Code or inserts any User Key to
                        lock and the same User Code or User Key to
                        unlock. Once unlocked, the lock is available for a different user.
                      </p>

                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateInstructionSharedOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a User Code</strong> <br/>
                            To lock: Close the door. Press <DigiSymbol ds={'buttonC'}/> <strong>[any 4-7 digit
                            code]</strong> <DigiSymbol ds={'buttonKey'}/> then turn the knob
                            to the locked position.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateInstructionSharedTwo}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To unlock: Press <DigiSymbol ds={'buttonC'}/> <strong>[the same 4-7 digit code]</strong>
                            <DigiSymbol ds={'buttonKey'}/> then turn the knob to the
                            unlocked position. Open the door.*
                          </figcaption>
                        </figure>
                      </div>

                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateInstructionSharedThree}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a User Key</strong> <br/>
                            To lock: Close the door. Insert any User Key then turn the
                            knob to the locked position.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateInstructionSharedFour}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To unlock: Insert the same User Key then turn the knob to the unlocked
                            position. <br/> Open the door.
                          </figcaption>
                        </figure>
                      </div>

                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateInstructionSharedFive}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a Manager Key</strong> <br/>
                            To lock: Close the door. Insert a valid Manager Key then turn the knob
                            to the locked position.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateInstructionSharedSix}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To unlock: Insert a valid Manager Key then turn the knob to the
                            unlocked position. Open the door.**
                          </figcaption>
                        </figure>
                      </div>
                      <p className="smaller-text">
                        * After 3 consecutive incorrect User Code entries, the keypad will be disabled for 1 minute
                        (Sleep Mode). <br/>
                        ** If a valid Manager Key is used to relock, the previous user credential will continue to
                        operate the lock.
                      </p>
                    </div>
                    <div label="Operating Instructions - In Assigned Use Functionality">
                      <p>
                        In assigned use functionality, users operate the lock with their assigned user credential
                        (either a User Code or a User Key).
                      </p>


                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateInstructionAssignedOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with the User Code</strong> <br/>
                            To unlock: Press <DigiSymbol ds={'buttonC'}/> <strong>[the assigned 4-7 digit code]</strong>
                            <DigiSymbol ds={'buttonKey'}/> then turn the knob to the
                            unlocked position. <br/> Open the door.*<sup>&dagger;</sup>
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateInstructionAssignedTwo}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To lock: Close the door then turn the knob to the locked position.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateInstructionAssignedThree}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with the User Key</strong> <br/>
                            To unlock: Insert the assigned User Key then turn the knob to the
                            unlocked position. <br/>
                            Open the door.<sup>&dagger;</sup>
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateInstructionAssignedFour}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To lock: Close the door then turn the knob to the locked position.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateInstructionAssignedFive}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a Manager Key</strong> <br/>
                            To unlock: Insert a valid Manager Key then turn the knob to the
                            unlocked position. <br/>
                            Open the door.<sup>&dagger;</sup>
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateInstructionAssignedSix}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To lock: Close the door then turn the knob to the locked position.
                          </figcaption>
                        </figure>
                      </div>
                      <p className={'smaller-text'}>
                        *After 3 consecutive incorrect User Code entries, the keypad will be disabled for 1 minute
                        (Sleep Mode). <br/>
                        <sup>&dagger;</sup>The lock will remain in the locked position if the knob is not turned within
                        approximately 6 seconds.
                      </p>
                    </div>
                  </Accordion>
                </div>
                <div label="Document Library">
                  <Accordion clsName={'numeris-support'}>
                    <div label="Catalog">
                      <div className="step-images">
                        <ul>
                          <li>
                            <a href={catalog} target={'_blank'}>Numeris Catalog</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div label="Data Sheets">
                      <div className="step-images">
                        <ul>
                          {
                            datasheetsKeypad.map((doc, index) => (
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
                            installGuidesKeypad.map((doc, index) => (
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
                            productGuidesKeypad.map((doc, index) => (
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
                  <Accordion clsName={'numeris-support'}>
                    <div label="Sleep Mode">
                      <p>
                        After three consecutive incorrect User Code entries to unlock, the lock will enter Sleep Mode
                        for one minute. For each subsequent incorrect
                        entry, the lock will remain in Sleep Mode for an additional minute. The keypad is disabled while
                        in Sleep Mode. A valid Manager Key may be
                        used to unlock while lock is in Sleep Mode.
                      </p>
                    </div>
                    <div label="Low Battery Indicator">
                      <p>
                        After locking or unlocking, the lock emits two sets of three beeps indicating that the batteries
                        are low. <span onClick={() => jumpAccordion('Battery Replacement')}>Replace the batteries</span>.
                      </p>
                    </div>
                    <div label="Does not Unlock with the User Code or User key">
                      <p>The lock does not recognize the User Code or User Key. For immediate access, operate with a
                        valid Manager Key. If in assigned use
                        functionality, follow instructions to <span
                            onClick={() => jumpAccordion('Aspire Keypad Getting Started', 'Assign User Credentials (for assigned use only)')}>Assign User Credentials</span> to
                        assign a new User Code or User Key to the lock.</p>
                    </div>
                    <div label="Does not Operate with a Manager Key">
                      <p>
                        The lock does not recognize the Manager Key. Follow instructions to Add Manager Keys to program
                        the Manager Key to the lock. For
                        immediate access, operate with another valid Manager Key.
                      </p>
                    </div>
                    <div label="Does not Operate with a Programming Key">
                      <p>
                        The lock does not recognize the Programming Key. If the Programming Key has been replaced,
                        operate with the Replacement
                        Programming Key. <a href="/contact">Contact Digilock support</a> for additional assistance.
                      </p>
                    </div>
                    <div label={['No Audible Feedback when ', <DigiSymbol ds={'buttonC'}/>, ' is Pressed']}>
                      <p>
                        The lock may be in Sleep Mode or the batteries may need to be replaced. For immediate access,
                        operate with a valid Manager Key. If the
                        error condition persists, <span onClick={() => jumpAccordion('Battery Replacement')}>replace the batteries</span>.
                      </p>
                    </div>
                    <div label="Battery Replacement">
                      <p>It is not necessary to uninstall the lock from the door.</p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={batteryReplaceSurface}
                               className={'img-responsive'}
                               alt="Surface Mount"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Surface Mount</strong>
                            <ol type={'a'}>
                              <li>Remove the screws and the battery pack.</li>
                              <li>Replace the two premium lithium CR2450 batteries.</li>
                              <li>Re-Insert battery pack and screws.</li>
                              <li>&nbsp;</li>
                              <li>Note: Never re-insert the battery pack empty as the tray cannot be removed from the
                                lock housing without batteries.
                              </li>
                            </ol>

                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={batteryReplaceRecessed}
                               className={'img-responsive'}
                               alt="Recessed Mount"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Recessed Mount</strong>
                            <ol type={'a'}>
                              <li>Remove the screws and the battery cover.</li>
                              <li>Replace the four premium AAA batteries.</li>
                              <li>Replace battery cover and screws.</li>
                            </ol>

                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </Accordion>
                </div>
                {/*FAQ*/}
                <div label="FAQ">
                  <VersaKeypadFaq product={'Versa'} clsName={'numeris-support'}/>
                </div>
              </Accordion>
            </div>
          </div>
          <div className={"tab-content " + getActiveClass(2, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'./images/rfid/feature-vertical-top.png'}
                  loading={'lazy'}
                  width={'406'}
                  height={'762'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Versa Keypad Vertical Smart Lock"
              />
              <StaticImage
                  src={'./images/rfid/feature-vertical-bottom.png'}
                  loading={'lazy'}
                  width={'710'}
                  height={'762'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Versa Keypad Vertical Smart Lock"
              />
              <StaticImage
                  src={'./images/rfid/feature-horizontal.png'}
                  loading={'lazy'}
                  width={'652'}
                  height={'762'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Versa Keypad Horizontal Smart Lock"
              />
            </div>
            <div className="lists">
              <Accordion clsName={'numeris-support'}>
                {/*GETTING STARTED*/}
                <div label="Getting Started">
                  <Accordion clsName={'numeris-support'}>
                    <div label="Initial Setup">
                      <p>
                        Locks are shipped with factory default settings (only operates by touching <DigiSymbol
                          ds={'buttonKey'}/>). Each lock must be set up to operate with a Programming
                        Key and Manager Credentials.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={setupOneRFID}
                               alt="step one"
                               className={'img-responsive'}
                               width={'404'}
                               height={'161'}
                          />
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={setupTwoRFID}
                               alt="step two"
                               className={'img-responsive'}
                               width={'404'}
                               height={'161'}
                          />
                          <figcaption>
                            While the LED is on, insert one Manager Key or present one RFID Credential
                            at a time. <br/>
                            A two-tone beep will be heard for each Manager Credential programmed.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={setupThreeRFID}
                               alt="step three"
                               className={'img-responsive'}
                               width={'404'}
                               height={'161'}
                          />
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={setupFourRFID}
                               alt="step four"
                               className={'img-responsive'}
                               width={'404'}
                               height={'161'}
                          />
                          <figcaption>
                            Repeat above steps for each lock or follow instructions to <span
                              onClick={() => jumpAccordion('Express Register Manager Credentials')}>Express Register
                        Manager Credentials</span> to set up all locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Express Register Manager Credentials">
                      <p>
                        The Programming Key can quickly program multiple locks to operate with the same manager
                        credentials.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={expressRegManCredOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Go to a lock already programmed to operate with the manager credentials. <br/>
                            Touch and hold <DigiSymbol ds={'buttonKey'}/> for 10 seconds (a two-tone beep will be heard
                            after
                            5 seconds followed by 2 sets of two-tone beeps after 10 seconds) then
                            release. The LED will flash.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressRegManCredTwo}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressRegManCredThree}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key to program each lock to operate with the same
                            manager credentials. <br/>
                            Two sets of two-tone beeps will be heard and the LED will flash once
                            to indicate successful programming.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressRegManCredFour}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            End express registration mode.* <br/>
                            Go to any programmed lock. <br/>
                            Touch <DigiSymbol ds={'buttonKey'}/> then insert the Programming Key. <br/>
                            Touch <DigiSymbol ds={'buttonKey'}/> then insert the Programming Key again to return the
                            bolt to the
                            original position.
                          </figcaption>
                        </figure>
                      </div>
                      <p className={'smaller-text'}>
                        *The Programming Key will continue to function in express registration mode until it is used to
                        operate a lock.
                      </p>
                    </div>
                    <div label="Add Manager Credentials">
                      <p>
                        Manager credentials can be programmed to the locks at any time.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={addManagerCredsOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Go to a lock requiring additional
                            manager credentials. <br/>
                            Touch and hold <DigiSymbol ds={'buttonKey'}/> for 5 seconds
                            (a two-tone beep will be heard after
                            5 seconds) then release. <br/>
                            The LED will flash and the Reader
                            will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerCredsTwo}
                               alt="step one"
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
                          <img src={addManagerCredsThree}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert each additional Manager Key
                            or present each Manager RFID one
                            at a time. <br/>
                            A two-tone beep will be heard for each
                            manager credential programmed.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerCredsFour}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard and
                            the LED and Reader will turn off. <br/>
                            Repeat above steps for each lock
                            or follow instructions to <span
                              onClick={() => jumpAccordion('Express Register Manager Credentials')}>Express
                        Register Manager Credentials</span> to
                            quickly program the same manager
                            credentials to operate multiple locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Replace Programming Key or Manager Credentials">
                      <p>
                        The locks must be reprogrammed to prevent the lost/stolen Programming Key or manager credentials
                        from operating a lock.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={replaceProgKeyManCredsOne}
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
                          <img src={replaceProgKeyManCredsTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Contact <a href="/contact">Digilock Support</a> to purchase a replacement Programming Key.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={replaceProgKeyManCredsThree}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To replace Manager Credentials:</strong> <br/>
                            Collect all remaining and replacement manager credentials. <br/>
                            Go to any lock operated by the lost/stolen manager credentials. <br/>
                            Touch and hold <DigiSymbol ds={'buttonKey'}/> for 5 seconds (a two-tone beep will be heard
                            after 5
                            seconds) then release. <br/>
                            The LED will flash and the Reader will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceProgKeyManCredsFour}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard. <br/>
                            Insert the Programming Key again. <br/>
                            Three sets of two-tone beeps will be heard and the LED and Reader will
                            turn off. All previously programmed manager credentials will be erased.
                            Follow <span onClick={() => jumpAccordion('Add Manager Credentials')}>instructions to Add Manager Credentials</span> to
                            program the remaining
                            and replacement manager credentials to the locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Request Functionality Change">
                      <div className="step-images">
                        <figure>
                          <img src={requestFuncChangeOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Note the order or serial number (found on the
                            lock’s rear).
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
                            (between shared use and assigned use), <a href="/contact">contact
                            Digilock Support</a> to request a Function Key.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Assign User Credentials">
                      <p>
                        Up to 20 user credentials (User Key or RFID) may be assigned to each lock.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={assignUserCredsOneRFID}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Touch and hold <DigiSymbol ds={'buttonKey'}/> for 5 seconds
                            (a two-tone beep will be heard after
                            5 seconds) then release. <br/>
                            The LED will flash and the Reader
                            will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={assignUserCredsTwoRFID}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert a valid Manager Key or present
                            a valid Manager RFID. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={assignUserCredsThreeRFID}
                               alt="step three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert each User Key or present
                            each User RFID one at a time. <br/>
                            Two sets of two-tone beeps will
                            be heard for each user credential
                            assigned to the lock.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={assignUserCredsFourRFID}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert a valid Manager Key or present
                            a valid Manager RFID. <br/>
                            A two-tone beep will be heard and
                            the LED and Reader will turn off.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Express Register User and Manager Credentials">
                      <p>
                        The Programming Key can quickly program multiple locks to operate with the same user and manager
                        credentials.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={expressRegUserManCredsOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Go to a lock already programmed to operate with the user and
                            manager credentials. <br/>
                            Touch and hold <DigiSymbol ds={'buttonKey'}/> for 15 seconds (a two-tone beep will be heard
                            after 5 seconds
                            followed by 2 sets of two-tone beeps after 10 seconds followed by 3 sets of two-tone
                            beeps after 15 seconds) then release. <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressRegUserManCredsTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={expressRegUserManCredsThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key to program each lock to operate with the same user
                            and manager credentials. <br/>
                            Two sets of two-tone beeps will be heard and the LED will fl ash once to indicate
                            successful programming.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressRegUserManCredsFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            End express registration.* <br/>
                            Go to any programmed lock. <br/>
                            Touch <DigiSymbol ds={'buttonKey'}/> then insert the Programming Key.
                          </figcaption>
                        </figure>
                      </div>

                    </div>
                    <div label="Remove User Credentials (for assigned use functionality only)">
                      <p>
                        Make sure the lock is in assigned use functionality (a green LED will flash when <DigiSymbol
                          ds={'buttonKey'}/> is touched). The locks must be reprogrammed to remove
                        user credentials from operating a lock.
                      </p>
                      <div className="step-images">

                        <figure className={'wide'}>
                          <img src={removeUserCredsOneRFID}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Collect all remaining and replacement user credentials
                            (User RFID Credentials and User Keys).
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={removeUserCredsTwoRFID}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Touch and hold <DigiSymbol ds={'buttonKey'}/> for 5 seconds (a two-tone beep will be heard
                            after 5
                            seconds) then release. <br/>
                            The LED will start to flash. <br/>
                            While the LED is fl ashing, insert a valid Manager Key or present a valid
                            Manager RFID Credential. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={removeUserCredsThreeRFID}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Manager Key or present the Manager RFID Credential again. <br/>
                            Three sets of two-tone beeps will be heard and the LED will turn off. <br/>
                            All previously assigned user credentials will be removed.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={removeUserCredsFourRFID}
                               className={'img-responsive'}
                               alt="Step four" k
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            Follow <span onClick={() => jumpAccordion('Assign User Credentials')}>Assign User Credentials instructions</span> to
                            assign the remaining and
                            replacement user credentials to the locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Replace an Assigned User Credential">

                      <div className="step-images">
                        <figure>
                          <img src={replaceAssignedUserRfidCredOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>Replace an Assigned User RFID
                              Credential with a New RFID Credential:</strong> <br/>
                            Touch and hold <DigiSymbol ds={'buttonKey'}/> for 5 seconds (a two-tone
                            beep will be heard after 5 seconds) then release. <br/>
                            Insert a valid Manager Key or present a valid
                            Manager RFID Credential. <br/>
                            A two-tone beep will be heard and the LED
                            will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceAssignedUserRfidCredTwo}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is on, present the assigned
                            User RFID Credential to be replaced.
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceAssignedUserRfidCredThree}
                               alt="step three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is on, present the new User
                            RFID Credential. <br/>
                            Two sets of two-tone beeps will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure>
                          <img src={replaceRfidBlackKey}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>Replace an Assigned User RFID
                              Credential with a New User Key:</strong> <br/>
                            Touch and hold <DigiSymbol ds={'buttonKey'}/> for 5 seconds (a two-tone
                            beep will be heard after 5 seconds) then release. <br/>
                            Insert a valid Manager Key or present a valid
                            Manager RFID Credential. <br/>
                            A two-tone beep will be heard and the LED
                            will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceRfidHand}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is on, present the assigned
                            User RFID Credential to be replaced.
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceRfidBlueKey}
                               alt="step three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is on, insert a new User Key. br
                            Two sets of two-tone beeps will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure>
                          <img src={replaceRfidBlackKey}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>Replace an Assigned User Key
                              with a New User Key:</strong> <br/>
                            Touch and hold <DigiSymbol ds={'buttonKey'}/> for 5 seconds (a two-tone
                            beep will be heard after 5 seconds) then release. <br/>
                            Insert a valid Manager Key or present a valid
                            Manager RFID Credential. <br/>
                            A two-tone beep will be heard and the LED
                            will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceRfidBlueKey}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is on, insert the assigned user Key.
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceRfidBlueKey}
                               alt="step three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is on, insert a new User Key.
                            Two sets of two-tone beeps will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure>
                          <img src={replaceRfidBlackKey}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>Replace an Assigned User Key
                              with a New User RFID Credential:</strong> <br/>
                            Touch and hold <DigiSymbol ds={'buttonKey'}/> for 5 seconds (a two-tone beep will
                            be heard after 5 seconds) then release. Insert a valid
                            Manager Key or present a valid Manager RFID Credential. <br/>
                            A two-tone beep will be heard and the LED will
                            turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceRfidBlueKey}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is on, insert the assigned User Key.
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceRfidCard}
                               alt="step three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            While the LED is on, present the new User
                            RFID Credential. <br/>
                            Two sets of two-tone beeps will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>

                    </div>
                    <div label="Operating Instructions - In Shared Use Functionality">
                      <p>
                        In shared use functionality, the user presents any User RFID Credential or inserts any User Key
                        to lock and uses the same User RFID
                        credential to unlock. Once unlocked, the lock is available for a different user.
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
                            To lock: Close the door. Touch <DigiSymbol ds={'buttonKey'}/> and present any User RFID
                            Credential, then turn the knob to the locked position.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateSharedTwo}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To unlock: Touch <DigiSymbol ds={'buttonKey'}/> and present the same User RFID Credential,
                            then
                            turn the knob to the unlocked position. Open the door.
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
                            <strong>Operate with a User Key</strong> <br/>
                            To lock: Close the door. Insert any User Key then turn the
                            knob to the locked position.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateSharedFour}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To unlock: Insert the same User Key then turn the knob to the unlocked
                            position. Open the door.
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
                            <strong>Operate with a Manager Credential</strong> <br/>
                            To lock: Close the door. Insert a valid Manager Key or touch <DigiSymbol ds={'buttonKey'}/>,
                            present a valid Manager RFID then turn the handle to the
                            locked position.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateSharedSix}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To unlock: Insert a registered Manager Key or touch <DigiSymbol ds={'buttonKey'}/>, present
                            a valid
                            Manager RFID then turn the handle to the unlocked position.
                            Open the door.*
                          </figcaption>
                        </figure>
                      </div>
                      <p className={'smaller-text'}>
                        *If a valid Manager Credential is used to relock, the previous user credential will continue to
                        operate the lock.
                      </p>
                    </div>
                    <div label="Operating Instructions - In Assigned Use Functionality">
                      <p>
                        In assigned use functionality, users operate the lock with their assigned user credential
                        (either a User RFID Credential or a User Key).
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={operateAssignedOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Operate with a RFID Credential</strong> <br/>
                            To unlock: Touch ` and present any User RFID Credential, then turn
                            the knob to the unlocked position. Open the door. **
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateAssignedTwo}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To lock: Close the door then turn the knob to the locked position.
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
                            To unlock: Insert the assigned User Key then turn the knob to the
                            unlocked position. Open the door.**
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateAssignedFour}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To lock: Close the door then turn the knob to the locked position.
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
                            <strong>Operate with a Manager Credential</strong> <br/>
                            To unlock: Insert a valid Manager Key or touch <DigiSymbol ds={'buttonKey'}/>, present a
                            valid Manager
                            RFID then turn the knob to the unlocked position.**
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={operateAssignedSix}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            To lock: Close the door then turn the knob to the locked position.
                          </figcaption>
                        </figure>
                      </div>
                      <p className={'smaller-text'}>
                        **The lock will remain in the locked position if the knob is not turned within approximately 6
                        seconds.
                      </p>
                    </div>
                  </Accordion>
                </div>
                {/*DOCUMENTS*/}
                <div label="Document Library">
                  <Accordion clsName={'numeris-support'}>
                    <div label="Catalog">
                      <div className="step-images">
                        <ul>
                          <li>
                            <a href={catalog} target={'_blank'}>Numeris Catalog</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div label="Data Sheets">
                      <div className="step-images">
                        <ul>
                          {
                            datasheetsRFID.map((doc, index) => (
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
                            installGuidesRFID.map((doc, index) => (
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
                            productGuidesRFID.map((doc, index) => (
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
                  <Accordion clsName={'numeris-support'}>
                    <div label="Low Battery Indicator">
                      <p>
                        After locking or unlocking, the lock emits two sets of three beeps indicating that the batteries
                        are low. <span onClick={() => jumpAccordion('Battery Replacement')}>Replace the batteries</span>.
                      </p>
                    </div>
                    <div label="Does not Unlock with the User RFID Credential or User Key">
                      <p>
                        The lock does not recognize the User RFID Credential or User Key. For immediate access, operate
                        with a valid Manager Credential. If in
                        assigned use functionality, follow instructions to <span
                          onClick={() => jumpAccordion('Versa RFID Getting Started', 'Assign User Credentials')}>Assign User Credentials</span> to
                        assign a new User RFID Credential or User Key to the lock.
                      </p>
                    </div>
                    <div label="Does not Operate with a Manager Credential">
                      <p>
                        The lock does not recognize the Manager Credential. Follow instructions to <span
                          onClick={() => jumpAccordion('Versa RFID Getting Started', 'Add Manager Credentials')}>Add Manager Credentials</span> to
                        program the Manager Credential to
                        the lock. For immediate access, operate with another valid Manager Credential.
                      </p>
                    </div>
                    <div label="Does not Operate with the Programming Key">
                      <p>
                        The lock does not recognize the Programming Key. If the Programming Key has been replaced,
                        operate with the Replacement Programming
                        Key. <a href="/contact">Contact Digilock support</a> for additional assistance.
                      </p>
                    </div>
                    <div label={['No Audible Feedback when ', <DigiSymbol ds={'buttonKey'}/>, ' is Touched']}>
                      <p>
                        The batteries may need to be replaced. For immediate access, operate with a valid Manager
                        Credential. If the error condition persists,
                        <span onClick={() => jumpAccordion('Battery Replacement')}>replace the batteries</span>.
                      </p>
                    </div>
                    <div label="Battery Replacement">
                      <p>It is not necessary to uninstall the lock from the door.</p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={batteryReplacement}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'404'}
                               height={'161'}/>
                          <figcaption>
                            <ol type={'a'}>
                              <li>Remove the screw and the battery cover.</li>
                              <li>Replace the four premium AA batteries.</li>
                              <li>Replace battery cover and screw.</li>
                            </ol>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </Accordion>
                </div>
                {/*FAQ*/}
                <div label="FAQ">
                  <VersaRfidFaq product={'Versa'} clsName={'numeris-support'}/>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

      </div>
  );
};

export default Tab;