import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans} from "gatsby-plugin-react-i18next";
import Accordion from '../../../../components/ui/legacy/Accordion/Accordion'
import DigiSymbol from '../../../../components/ui/legacy/DigiSymbols/DigiSymbol'
import {jumpAccordion} from "../../../../utils/utils";

//IMAGES
import supportOne from './images/setup-one.png'
import supportTwo from './images/setup-two.png'
import supportThree from './images/setup-three.png'
import supportFour from './images/setup-four.png'
import ermkOne from './images/ermk-one.png'
import ermkTwo from './images/ermk-two.png'
import ermkThree from './images/ermk-three.png'
import ermkFour from './images/ermk-four.png'
import addManagerOne from './images/add-manager-one.png'
import addManagerTwo from './images/add-manager-two.png'
import addManagerThree from './images/add-manager-three.png'
import addManagerFour from './images/add-manager-four.png'
import replaceKeysOne from './images/replace-keys-one.png'
import replaceKeysTwo from './images/replace-keys-two.png'
import replaceKeysThree from './images/replace-keys-three.png'
import replaceKeysFour from './images/replace-keys-four.png'
import setLockFunctionalityOne from './images/set-functionality-one.png'
import setLockFunctionalityTwo from './images/set-functionality-two.png'
import setLockFunctionalityThree from './images/set-functionality-three.png'
import setLockFunctionalityFour from './images/set-functionality-four.png'
import assignUserCredsOne from './images/assign-user-creds-one.png'
import assignUserCredsTwo from './images/assign-user-creds-two.png'
import assignUserCredsThree from './images/assign-user-creds-three.png'
import assignUserCredsFour from './images/assign-user-creds-four.png'
import erucOne from './images/eruc-one.png'
import erucTwo from './images/eruc-two.png'
import erucThree from './images/eruc-three.png'
import erucFour from './images/eruc-four.png'
import removeCredsOne from './images/remove-creds-one.png'
import removeCredsTwo from './images/remove-creds-two.png'
import removeCredsThree from './images/remove-creds-three.png'
import removeCredsFour from './images/remove-creds-four.png'
import replaceUserCredOne from './images/replace-user-cred-one.png'
import replaceUserCredTwo from './images/replace-user-cred-two.png'
import replaceUserCredThree from './images/replace-user-cred-three.png'
import replaceUserCredFour from './images/replace-user-cred-four.png'
import replaceUserCredFive from './images/replace-user-cred-five.png'
import replaceUserCredSix from './images/replace-user-cred-six.png'
import autoUnlockOne from './images/auto-unlock-one.png'
import autoUnlockTwo from './images/auto-unlock-two.png'
import autoUnlockThree from './images/auto-unlock-three.png'
import autoUnlockFour from './images/auto-unlock-four.png'
import batteryReplaceOne from './images/battery-replace-one.png'
import batteryReplaceTwo from './images/battery-replace-two.png'
import batteryReplaceThree from './images/battery-replace-three.png'
//ASPIRE IMAGES
import setupOne from './images/setup-rfid-one.png'
import setupTwo from './images/setup-rfid-two.png'
import setupThree from './images/setup-rfid-three.png'
import setupFour from './images/setup-rfid-four.png'
import expressRegOne from './images/express-reg-rfid-one.png'
import expressRegTwo from './images/express-reg-rfid-two.png'
import expressRegThree from './images/express-reg-rfid-three.png'
import expressRegFour from './images/express-reg-rfid-four.png'
import addManagerCredOne from './images/add-man-cred-rfid-one.png'
import addManagerCredTwo from './images/add-man-cred-rfid-two.png'
import addManagerCredThree from './images/add-man-cred-rfid-three.png'
import addManagerCredFour from './images/add-man-cred-rfid-four.png'
import replaceProgKeyOne from './images/replace-prog-key-rfid-one.png'
import replaceProgKeyTwo from './images/replace-prog-key-rfid-two.png'
import replaceProgKeyThree from './images/replace-prog-key-rfid-three.png'
import replaceProgKeyFour from './images/replace-prog-key-rfid-four.png'
import assignUserCredsOneRFID from './images/assign-creds-rfid-one.png'
import assignUserCredsTwoRFID from './images/assign-creds-rfid-two.png'
import assignUserCredsThreeRFID from './images/assign-creds-rfid-three.png'
import assignUserCredsFourRFID from './images/assign-creds-rfid-four.png'
import expressRegUserManCredsOne from './images/express-reg-user-man-rfid-one.png'
import expressRegUserManCredsTwo from './images/express-reg-user-man-rfid-two.png'
import expressRegUserManCredsThree from './images/express-reg-user-man-rfid-three.png'
import expressRegUserManCredsFour from './images/express-reg-user-man-rfid-four.png'
import removeUserCredsOne from './images/remove-user-creds-rfid-one.png'
import removeUserCredsTwo from './images/remove-user-creds-rfid-two.png'
import removeUserCredsThree from './images/remove-user-creds-rfid-three.png'
import removeUserCredsFour from './images/remove-user-creds-rfid-four.png'
import operatingInsOne from './images/operate-ins-rfid-one.png'
import operatingInsTwo from './images/operate-ins-rfid-two.png'
import operatingInsThree from './images/operate-ins-rfid-three.png'
import operatingInsFour from './images/operate-ins-rfid-four.png'

import catalog from './documents/DigilockCatalogNumeris2019.pdf';
import AspireRfidFaq from "../../faq/VersaRfid";
import AspireKeypadFaq from "../../faq/VersaKeypad";

let datasheetsKeypad = [
  {
    "title": "Aspire Data Sheet Keypad Dual",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/2GUI7FMfdl4xgKyUhFpKlV/783b35343c10a3ab58661aecb3dcbf58/DS-Aspire-Dual-Keypad.pdf",
      "fileName": "DS-Aspire-Dual-Keypad.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Aspire Data Sheet Keypad Assigned",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/2d7Jc88koSwaTpZvlCfhl6/f34db2dfe0a4b7d3808bfdb1d5cbea8e/DS-Aspire-Assigned-Keypad.pdf",
      "fileName": "DS-Aspire-Assigned-Keypad.pdf",
      "contentType": "application/pdf"
    }
  }
];
let installGuidesKeypad = [
  {
    "title": "Aspire Install Guide",
    "file": {
      "url": "//downloads.ctfassets.net/q5vaqi9g69zw/45AECNHMwyt8usbChi4fMt/ce6e3f89d22ba4d4a1355d898e7b633a/IG-Numeris-Aspire-5G.pdf",
      "fileName": "IG-Numeris-Aspire-5G.pdf",
      "contentType": "application/pdf"
    }
  }
];
let productGuidesKeypad = [
  {
    "title": "Aspire Product Guide Keypad Dual",
    "file": {
      "url": "//downloads.ctfassets.net/q5vaqi9g69zw/nOj1Z5wMrD7h7m6vV2XCy/142a552177b8c4ded9b449f0d9e0771d/PG-Aspire-Dual-Keypad.pdf",
      "fileName": "PG-Aspire-Dual-Keypad.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Aspire Product Guide Keypad Assigned",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/7bil0w8KuO7px6epQ3vBob/5fd7256d1b2160a436550baf326f393c/PG-Aspire-Assigned-Keypad.pdf",
      "fileName": "PG-Aspire-Assigned-Keypad.pdf",
      "contentType": "application/pdf"
    }
  }
];
let datasheetsRFID = [
  {
    "title": "Aspire Data Sheet RFID Shared",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/6o8MpogIcPCHgQkthu0w09/3ca7cf851ca8765030a9b33f874b7794/DS-Aspire-Shared-RFID.pdf",
      "fileName": "DS-Aspire-Shared-RFID.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Aspire Data Sheet RFID Assigned",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/37Bmv596QvnGUd8Pnz6Uat/12c94f34401b29cdd1fe625a85d6e092/DS-Aspire-Assigned-RFID.pdf",
      "fileName": "DS-Aspire-Assigned-RFID.pdf",
      "contentType": "application/pdf"
    }
  }
];
let installGuidesRFID = [
  {
    "title": "Aspire Install Guide",
    "file": {
      "url": "//downloads.ctfassets.net/q5vaqi9g69zw/45AECNHMwyt8usbChi4fMt/ce6e3f89d22ba4d4a1355d898e7b633a/IG-Numeris-Aspire-5G.pdf",
      "fileName": "IG-Numeris-Aspire-5G.pdf",
      "contentType": "application/pdf"
    }
  }
];
let productGuidesRFID = [
  {
    "title": "Aspire Product Guide RFID Assigned",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/4f03m4CJmZICQbslTfHZdQ/7325c5f34cceb64689c72d4d4ee08814/PG-Aspire-Assigned-RFID.pdf",
      "fileName": "PG-Aspire-Assigned-RFID.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Aspire Product Guide RFID Shared",
    "file": {
      "url": "//assets.ctfassets.net/q5vaqi9g69zw/6EnMGYYmp9U9x9qaHINVN0/2f3a9ea4ed72e26c2e7a11f43bf54868/PG-Aspire-Shared-RFID.pdf",
      "fileName": "PG-Aspire-Shared-RFID.pdf",
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
          <div className={"tab-content "+getActiveClass(1, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'./images/feature-front-keypad.png'}
                  loading={'lazy'}
                  width={'995'}
                  height={'889'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
              <StaticImage
                  src={'../../../../images/shared/features-rear-unit.png'}
                  loading={'lazy'}
                  width={'795'}
                  height={'624'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
            </div>
            <div className="lists">
              <Accordion clsName={'numeris-support'}>
                {/*GETTING STARTED*/}
                <div label="Getting Started">
                  <Accordion clsName={'numeris-support'}>
                    <div label="Initial Setup">
                      <p>
                        Locks are shipped with factory default settings (only operates by pressing <DigiSymbol ds={'buttonC'} /> <DigiSymbol ds={'buttonKey'} />). Each lock must be setup to operate with a Programming
                        Key and Manager Keys.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={supportOne}
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
                          <img src={supportTwo}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert one Manager Key at a time. <br/>
                            A beep will be heard for each
                            Manager Key programmed.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={supportThree}
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
                          <img src={supportFour}
                               alt="step one"
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
                      <p>The Programming Key can quickly program multiple locks to operate with the same Manager Keys.</p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={ermkOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Go to a lock already programmed to operate with the Manager Keys. <br/>
                            Press <DigiSymbol ds={'buttonC'} /><DigiSymbol ds={'buttonKey'} /> <DigiSymbol ds={'button06'} /><DigiSymbol ds={'button01'} /> <DigiSymbol ds={'buttonKey'} />. <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={ermkTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={ermkThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key to program each lock to operate with the
                            same Manager Keys. <br/>
                            Two sets of two-tone beeps will be heard and the LED will fl ash twice to
                            indicate successful programming.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={ermkFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            End express registration mode.* <br/>
                            Go to any programmed lock. <br/>
                            Press <DigiSymbol ds={'buttonC'} /><DigiSymbol ds={'buttonKey'} /> then insert the Programming Key. <br/>
                            Press <DigiSymbol ds={'buttonC'} /><DigiSymbol ds={'buttonKey'} /> then insert the Programming Key again to return the bolt to the
                            original position.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Add Manager Keys">
                      <p>Manager Keys can be programmed to the locks at any time.</p>
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
                            Press <DigiSymbol ds={'buttonC'} /><DigiSymbol ds={'buttonKey'} /> <DigiSymbol ds={'button05'} /><DigiSymbol ds={'button05'} /> <DigiSymbol ds={'buttonKey'} />. <br/>
                            The LED will turn on.
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
                            Insert the Programming Key. <br/>
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
                            Insert each additional Manager Key
                            one at a time. <br/>
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
                               width={'405'}
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
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Contact <a href="/support/">Digilock Support</a> to purchase a replacement Programming Key.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To replace the Manager Keys:</strong> <br/>
                            Collect all remaining and replacement Manager Keys. <br/>
                            Go to any lock operated by the lost/stolen Manager Keys. <br/>
                            Press <DigiSymbol ds={'buttonC'} /><DigiSymbol ds={'buttonKey'} />  <DigiSymbol ds={'button05'} /><DigiSymbol ds={'button05'} />  <DigiSymbol ds={'buttonKey'} />. <br/>
                            The LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceKeysFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard. <br/>
                            Insert the Programming Key again. <br/>
                            Three sets of two-tone beeps will be heard and the LED will turn off. All
                            previously programmed Manager Keys will be erased. <br/>
                            Follow instructions to <span onClick={() => jumpAccordion('Add Manager Keys')}>Add Manager Keys</span> to program the remaining and
                            replacement Manager Keys to the locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Set Lock Functionality (Bolt Only)">
                      <p>
                        Each lock can be set for either shared or assigned use functionality. Press <DigiSymbol ds={'buttonC'} /> to check functionality. If in shared use, LED is red. If in
                        assigned use, LED is green.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={setLockFunctionalityOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>To set for assigned use:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'} /><DigiSymbol ds={'buttonKey'} /> <DigiSymbol ds={'button06'} /><DigiSymbol ds={'button05'} /> <DigiSymbol ds={'buttonKey'} />. <br/>
                            The red LED will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setLockFunctionalityTwo}
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
                        <figure>
                          <img src={setLockFunctionalityThree}
                               alt="step three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>To set for shared use:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'} /><DigiSymbol ds={'buttonKey'} /> <DigiSymbol ds={'button05'} /><DigiSymbol ds={'button06'} /> <DigiSymbol ds={'buttonKey'} />. <br/>
                            The green LED will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setLockFunctionalityFour}
                               alt="step four"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard
                            and the red LED will flash once.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Assign User Credentials (for assigned use functionality only)">
                      <p>
                        Make sure that the lock is set for assigned use functionality (a green LED will flash when <DigiSymbol ds={'buttonC'} /> is pressed). Up to 20 user credentials (User Codes and/or User Keys) may be assigned to each lock.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={assignUserCredsOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>Assign User Codes:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'} /><DigiSymbol ds={'buttonKey'} /> <DigiSymbol ds={'button05'} /><DigiSymbol ds={'button05'} /> <DigiSymbol ds={'buttonKey'} />. <br/>
                            The LED will turn on. <br/>
                            Insert a valid Manager Key. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={assignUserCredsTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Press <DigiSymbol ds={'buttonC'} /> [<strong>new 4-7 digit code</strong>] <DigiSymbol ds={'buttonKey'} />. A two-tone beep will be heard. <br/>
                            Press = [<strong>the same 4-7 digit code</strong>] `. <br/>
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
                            <strong>Assign User Keys:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'} /><DigiSymbol ds={'buttonKey'} /> <DigiSymbol ds={'button05'} /><DigiSymbol ds={'button05'} /> <DigiSymbol ds={'buttonKey'} />. <br/>
                            The LED will turn on. <br/>
                            Insert a valid Manager Key. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={assignUserCredsFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Insert a User Key. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Express Register User Credentials and Manager Keys">

                      <p>Make sure the lock is set for assigned use functionality (a green LED will flash when <DigiSymbol ds={'buttonC'} /> is pressed). The Programming Key can quickly
                        program multiple locks to operate with the same user credentials and Manager Keys.</p>
                      <div className="step-images">
                        <figure>
                          <img src={erucOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Go to a lock already programmed
                            to operate with the user credentials
                            and Manager Keys. <br/>
                            Press <DigiSymbol ds={'buttonC'} /> <DigiSymbol ds={'buttonKey'} /> <DigiSymbol ds={'button06'} /><DigiSymbol ds={'button06'} /> <DigiSymbol ds={'buttonKey'} />. The LED
                            will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={erucTwo}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard and
                            the LED will turn off.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={erucThree}
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
                            heard and the LED will fl ash twice to
                            indicate successful programming.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={erucFour}
                               alt="step four"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            End express registration mode.* <br/>
                            Go to any programmed lock. <br/>
                            Press <DigiSymbol ds={'buttonC'} /> <DigiSymbol ds={'buttonKey'} /> then insert the
                            Programming Key. <br/>
                            Press <DigiSymbol ds={'buttonC'} /> <DigiSymbol ds={'buttonKey'} /> then insert the
                            Programming Key again to return
                            the bolt to the original position.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Remove User Credentials">
                      <p>
                        Make sure the lock is in assigned use functionality (a green LED will flash when <DigiSymbol ds={'buttonC'} /> is pressed). The locks must be reprogrammed to remove
                        user credentials from operating a lock.
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={removeCredsOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Collect all remaining and replacement user credentials
                            (User Codes and User Keys).
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={removeCredsTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Press <DigiSymbol ds={'buttonC'} /><DigiSymbol ds={'buttonKey'} /> <DigiSymbol ds={'button05'} /><DigiSymbol ds={'button05'} /> <DigiSymbol ds={'buttonKey'} />. <br/>
                            The LED will turn on. <br/>
                            Insert a valid Manager Key. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={removeCredsThree}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Manager Key again. <br/>
                            Three sets of two-tone beeps will be heard and the LED will turn off. <br/>
                            All previously assigned user credentials will be removed.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={removeCredsFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Follow Assign User Credentials instructions to assign the remaining and
                            replacement user credentials to the locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Replace a User Credential">
                      <p>
                        <strong>Replace an Assigned User Key
                          with a New User Key:</strong>
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={replaceUserCredOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Press <DigiSymbol ds={'buttonC'} /> <DigiSymbol ds={'buttonKey'} /> then insert a valid Manager Key. <br/>
                            A two-tone beep will be heard and the LED will
                            turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceUserCredTwo}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the assigned user Key. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceUserCredThree}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert a new User Key. <br/>
                            Two sets of two-tone beeps will be heard <br/>
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                      <p>
                        <strong>Replace an Assigned User Key
                          with a New User Code:</strong>
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={replaceUserCredFour}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Press <DigiSymbol ds={'buttonC'} /> <DigiSymbol ds={'buttonKey'} /> then insert a valid Manager Key. <br/>
                            A two-tone beep will be heard and the LED will
                            turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceUserCredFive}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert the assigned User Key. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceUserCredSix}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Press <DigiSymbol ds={'buttonC'}/> <strong>[new 4-7 digit user code]</strong> <DigiSymbol ds={'buttonKey'} />
                            <br/>
                            <DigiSymbol ds={'buttonC'}/> <strong>[the same 4-7 digit user code]</strong> <DigiSymbol ds={'buttonKey'}/>. <br/>
                            Two sets of two-tone beeps will be heard
                            and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Set Additional Lock Features (for shared use functionality only)">

                      <p>
                        <strong>LED Usage Indicator</strong> <br/>
                        When in shared use functionality, each lock can be programmed to have the LED flash or not flash while the lock is in use. The default
                        setting is ON (red LED flashes while lock is in use).
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={setLockFunctionalityOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>To turn off the LED Usage
                              Indicator:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'} /><DigiSymbol ds={'buttonKey'} /> <DigiSymbol ds={'button09'} /><DigiSymbol ds={'button02'} /> <DigiSymbol ds={'buttonKey'} />. <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setLockFunctionalityTwo}
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
                          <img src={setLockFunctionalityOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>To turn on the LED Usage
                              Indicator:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'} /><DigiSymbol ds={'buttonKey'} /> <DigiSymbol ds={'button09'} /><DigiSymbol ds={'button01'} /> <DigiSymbol ds={'buttonKey'} />. <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={setLockFunctionalityTwo}
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
                      </div>

                      <p>
                        <strong>Auto Unlock</strong> <br/>
                        When in shared use functionality, each lock can be programmed to auto unlock after a set number of hours. The default setting is OFF
                        (does not auto unlock).
                      </p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={autoUnlockOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'405'}
                               height={'161'}
                          />
                          <figcaption>
                            <strong>To turn on Auto Unlock:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'} /><DigiSymbol ds={'buttonKey'} /> 95 <DigiSymbol ds={'buttonKey'} />.
                            The LED will flash. <br/>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={autoUnlockTwo}
                               alt="step two"
                               className={'img-responsive'}
                               width={'405'}
                               height={'161'}
                          />
                          <figcaption>
                            Enter the number of hours from <DigiSymbol ds={'button01'} /> - <DigiSymbol ds={'button09'} /> <DigiSymbol ds={'button09'} /> then press <DigiSymbol ds={'buttonKey'} />. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off. <br/>
                            For example: Press <DigiSymbol ds={'button08'} /> <DigiSymbol ds={'buttonKey'} /> to set the lock to auto unlock after 8 hours.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={autoUnlockThree}
                               alt="step three"
                               className={'img-responsive'}
                               width={'405'}
                               height={'161'}
                          />
                          <figcaption>
                            <strong>To turn off Auto Unlock:</strong> <br/>
                            Press <DigiSymbol ds={'buttonC'} /><DigiSymbol ds={'buttonKey'} /> <DigiSymbol ds={'button09'} /><DigiSymbol ds={'button04'} /> `. <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={autoUnlockFour}
                               alt="step four"
                               className={'img-responsive'}
                               width={'405'}
                               height={'161'}
                          />
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard and the LED will turn off.
                          </figcaption>
                        </figure>
                      </div>

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
                              datasheetsKeypad.map( (doc, index) => (
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
                              installGuidesKeypad.map( (doc, index) => (
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
                              productGuidesKeypad.map( (doc, index) => (
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
                        After three consecutive incorrect User Code entries to unlock, the lock will go into “Sleep Mode” for one minute and for an additional minute
                        for each subsequent incorrect entry. The keypad is disabled while in “Sleep Mode”. A valid Manager Key may be used to unlock while the
                        lock is in “Sleep Mode”.
                      </p>
                    </div>
                    <div label="Error Condition Indicators">
                      <ul>


                        <li>
                          <strong>10 rapid beeps:</strong> <br/>
                          The lock is binding which means that either door alignment or stored items are preventing the lock from operating. Press on the door while
                          operating the lock. If error condition persists, contact Digilock support for assistance.</li>
                        <li>
                          <strong>2 sets of three beeps:</strong> <br/>
                          The batteries are low. Replace the batteries.
                        </li>
                      </ul>
                    </div>
                    <div label="Does not Unlock with the User Code or User Key">
                      <p>
                        The lock does not recognize the User Code or User Key. For immediate access, operate with a valid Manager Key. If in assigned use
                        functionality, follow <span onClick={() => jumpAccordion('Aspire Keypad Getting Started', 'Assign User Credentials (for assigned use functionality only)')}>instructions to Assign the User Credentials</span> to assign user credential to the lock.
                      </p>
                    </div>
                    <div label="Does not Operate with a Manager Key">
                      <p>
                        The lock does not recognize the Manager Key. Follow instructions to Add Manager Keys to program the Manager Key to the lock. For
                        immediate access, operate with another valid Manager Key or with the Programming Key.
                      </p>
                    </div>
                    <div label="Does not Operate with the Programming Key">
                      <p>
                        The lock does not recognize the Programming Key. If the Programming Key has been replaced, operate with the Replacement
                        Programming Key. <a href="/contact/">Contact Digilock support</a> for additional assistance.
                      </p>
                    </div>
                    <div label={['No Audible Feedback when ',
                      <DigiSymbol key={'keyToHandleIterateError'} ds={'buttonC'}></DigiSymbol>, ' is Pressed']}>
                      <ul>
                        <li>
                          The lock may be in "Sleep Mode" or the batteries may need to be replaced. For immediate
                          access,
                          operate with a registered Manager Key.
                        </li>
                        <li>
                          The front unit may not be properly connected to the rear unit. If unlocked remove the lock
                          from
                          the door and check the connection. If locked contact Digilock support for assistance.
                        </li>
                      </ul>
                    </div>
                    <div label="Battery Replacement (shown with cable rear mount)">
                      <p>It is not necessary to uninstall the lock from the door.</p>
                      <div className="step-images">
                        <figure>
                          <img src={batteryReplaceOne} alt="Step One" width={226} height={208}/>
                          <figcaption>
                            Remove the screws and the cover plate.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={batteryReplaceTwo} alt="Step Two" width={226} height={208}/>
                          <figcaption>
                            Pull the battery pack from the rear housing. <br/>
                            Replace with four premium alkaline <br/>
                            AA batteries.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={batteryReplaceThree} alt="Step Three" width={226} height={208}/>
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
                  <AspireKeypadFaq product={'Aspire'} clsName={'numeris-support'} />
                </div>
              </Accordion>
            </div>
          </div>
          <div className={"tab-content "+getActiveClass(2, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'./images/feature-rfid-front.png'}
                  loading={'lazy'}
                  width={'995'}
                  height={'877'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
              <StaticImage
                  src={'../../../../images/shared/features-rear-unit.png'}
                  loading={'lazy'}
                  width={'995'}
                  height={'824'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
            </div>
            <div className="lists">
              <Accordion clsName={'numeris-support'}>
                {/*GETTING STARTED*/}
                <div label="Getting Started">
                  <Accordion clsName={'numeris-support'}>
                    {/*SETUP*/}
                    <div label="Initial Setup">
                      <p>Locks are shipped with factory default settings (only operates by pressing <DigiSymbol ds={'buttonKey'} />). Each lock must be setup to operate with a Programming Key
                        and manager credentials (Manager Key or RFID).</p>
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
                            A two-tone beep will be heard and
                            the LED and Reader will turn on.
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
                            Insert one Manager Key or present
                            one Manager RFID at a time.
                            A two-tone beep will be heard for each
                            manager credential programmed.
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
                            Insert the Programming Key.
                            A two-tone beep will be heard and
                            the LED and Reader will turn off .
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
                            Repeat above steps for each lock
                            or follow <span onClick={() => jumpAccordion('Express Register Manager Credentials')}>instructions to Express
                        Register Manager Credentials</span> to
                            setup all the locks.
                          </figcaption>
                        </figure>

                      </div>
                    </div>
                    <div label="Express Register Manager Credentials">
                      <p>The Programming Key can quickly program the locks to operate with the same manager credentials.</p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={expressRegOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Go to the lock already programmed to operate with the manager credentials. <br/>
                            Touch and hold <DigiSymbol ds={'buttonKey'} /> for 10 seconds (a two-tone beep will be heard after
                            5 seconds followed by 2 sets of two-tone beeps after 10 seconds) then
                            release. The LED will flash.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressRegTwo}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off .
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressRegThree}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key to program each lock to operate with the same
                            manager credentials. <br/>
                            Two sets of two-tone beeps will be heard and the LED will flash once
                            to indicate successful programming.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={expressRegFour}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            End express registration mode.* <br/>
                            Go to any programmed lock. <br/>
                            Touch <DigiSymbol ds={'buttonKey'} /> then insert the Programming Key.
                          </figcaption>
                        </figure>
                      </div>
                      <p className={'smaller-text'}>
                        *The Programming Key will continue to function in express registration mode until it is used to operate a lock.
                      </p>
                    </div>
                    <div label="Add Manager Credentials">
                      <p>Manager credentials can be programmed to the locks at any time.</p>
                      <div className="step-images">
                        <figure>
                          <img src={addManagerCredOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Go to a lock requiring additional
                            manager credentials. <br/>
                            Touch and hold <DigiSymbol ds={'buttonKey'} /> for 5 seconds
                            (a two-tone beep will be heard after
                            5 seconds) then release. <br/>
                            The LED will flash and the Reader
                            will turn on.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerCredTwo}
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
                          <img src={addManagerCredThree}
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
                            manager credentials programmed.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={addManagerCredFour}
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
                            or follow instructions to <span onClick={() => jumpAccordion('Express Register Manager Credentials')}>Express
                        Register Manager Credentials</span> to
                            quickly program the same manager
                            credentials to operate multiple locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Replace Programming Key or Manager Credentials">
                      <p>The locks must be reprogrammed to prevent the lost/stolen Programming Key or manager credentials from operating a lock.</p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={replaceProgKeyOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To replace the Programming Key:</strong> <br/>
                            Note the order or serial number (found on the lock’s rear unit).
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceProgKeyTwo}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Contact <a href="/contact/">Digilock Support</a> to purchase a replacement Programming Key.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={replaceProgKeyThree}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            <strong>To replace Manager Credentials:</strong> <br/>
                            Collect all remaining and replacement manager credentials. <br/>
                            Go to any lock operated by the lost/stolen manager credentials. <br/>
                            Touch and hold <DigiSymbol ds={'buttonKey'} /> for 5 seconds (a two-tone beep will be heard after 5
                            seconds) then release. <br/>
                            The LED will flash and the Reader will turn on.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={replaceProgKeyFour}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            A two-tone beep will be heard. <br/>
                            Insert the Programming Key again. <br/>
                            Three sets of two-tone beeps will be heard and the LED and Reader will
                            turn off. All previously programmed manager credentials will be erased. <br/>
                            Follow instructions to <span onClick={() => jumpAccordion('Add Manager Credentials')}>Add Manager Credentials</span> to program the remaining
                            and replacement manager credentials to the locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Assign User Credentials">
                      <p>Up to 20 user credentials (User Key or RFID) may be assigned to each lock.</p>
                      <div className="step-images">
                        <figure>
                          <img src={assignUserCredsOneRFID}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Touch and hold <DigiSymbol ds={'buttonKey'} /> for 5 seconds <br/>
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
                               alt="step four"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            Insert a valid Manager Key or present
                            a valid Manager RFID. <br/>
                            A two-tone beep will be heard and
                            the LED and Reader will turn off .
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Express Register User and Manager Credentials">
                      <p>The Programming Key can quickly program multiple locks to operate with the same user and manager credentials.</p>
                      <div className="step-images">

                        <figure className={'wide'}>
                          <img src={expressRegUserManCredsOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Go to a lock already programmed to operate with the user and
                            manager credentials. <br/>
                            Touch and hold <DigiSymbol ds={'buttonKey'} /> for 15 seconds (a two-tone beep will be heard after 5 seconds
                            followed by 2 sets of two-tone beeps after 10 seconds followed by 3 sets of two-tone
                            beeps after 15 seconds) then release. <br/>
                            The LED will flash.
                          </figcaption>
                        </figure>

                        <figure className={'wide'}>
                          <img src={expressRegUserManCredsTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off .
                          </figcaption>
                        </figure>

                        <figure className={'wide'}>
                          <img src={expressRegUserManCredsThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Insert the Programming Key to program each lock to operate with the same user
                            and manager credentials. <br/>
                            Two sets of two-tone beeps will be heard and the LED will flash once to indicate
                            successful programming.
                          </figcaption>
                        </figure>

                        <figure className={'wide'}>
                          <img src={expressRegUserManCredsFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            End express registration.* <br/>
                            Go to any programmed lock
                            Touch <DigiSymbol ds={'buttonKey'} /> then insert the Programming Key.
                          </figcaption>
                        </figure>

                      </div>
                      <p className={'smaller-text'}>*The Programming Key will continue to function in express registration mode until it is used to operate a lock.</p>
                    </div>
                    <div label="Remove User Credentials">
                      <p>The locks must be reprogrammed to remove user credentials from operating a lock.</p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={removeUserCredsOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Collect all remaining and replacement user credentials.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={removeUserCredsTwo}
                               className={'img-responsive'}
                               alt="Step two"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Touch and hold <DigiSymbol ds={'buttonKey'} /> for 5 seconds (a two-tone beep will be heard after 5
                            seconds) then release. <br/>
                            The LED will fl ash and the Reader will turn on. <br/>
                            Insert a valid Manager Key or present a valid Manager RFID. <br/>
                            A two-tone beep will be heard.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={removeUserCredsThree}
                               className={'img-responsive'}
                               alt="Step three"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Insert a valid Manager Key or present a valid Manager RFID again. <br/>
                            Three sets of two-tone beeps will be heard and the LED and Reader will turn off. <br/>
                            All previously assigned user credentials will be removed.
                          </figcaption>
                        </figure>
                        <figure className={'wide'}>
                          <img src={removeUserCredsFour}
                               className={'img-responsive'}
                               alt="Step four"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Follow <span onClick={() => jumpAccordion('Assign User Credentials')}>Assign User Credentials instructions</span> to assign the remaining
                            and replacement user credentials.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Operating Instructions - In Assigned Use Functionality">
                      <p>In assigned use functionality, users operate the lock with their assigned user credential (User Key or RFID).</p>
                      <div className="step-images">
                        <figure>
                          <img src={operatingInsOne}
                               alt="step one"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>Operate with a User RFID</strong> <br/>
                            To unlock: Touch <DigiSymbol ds={'buttonKey'} /> then present an
                            assigned User RFID. <br/>
                            To relock: Close the door.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={operatingInsTwo}
                               alt="step two"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>Operate with a User Key</strong> <br/>
                            To unlock: Insert an assigned User Key. <br/>
                            To relock: Close the door.
                          </figcaption>
                        </figure>
                      </div>
                      <div className="step-images">
                        <figure>
                          <img src={operatingInsThree}
                               alt="step three"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>Operate with a Manager Credential</strong> <br/>
                            To unlock: Insert a valid Manager Key
                            or touch <DigiSymbol ds={'buttonKey'} /> then present
                            a valid Manager RFID. <br/>
                            To relock: Close the door.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={operatingInsFour}
                               alt="step four"
                               className={'img-responsive'}
                               width={'226'}
                               height={'208'}
                          />
                          <figcaption>
                            <strong>Operate with the Programming Key</strong> <br/>
                            To unlock: Touch <DigiSymbol ds={'buttonKey'} /> then insert the
                            Programming Key. <br/>
                            To relock: Close the door.
                          </figcaption>
                        </figure>
                      </div>
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
                  <Accordion clsName={'numeris-support'}>
                    <div label="Error Condition Indicators">
                      <p>
                        <strong>10 rapid beeps:</strong>
                      </p>
                      <ul>
                        <li>The lock is binding which means that either door alignment or stored items are preventing the
                          lock from operating. Press on the door while
                          operating the lock. If error condition persists, contact <a href="/contact/">Digilock support</a> for assistance.
                        </li>
                      </ul>
                      <p>
                        <strong>2 sets of 3 beeps:</strong>
                        <ul>
                          <li>The batteries are low. Replace the batteries.</li>
                        </ul>
                      </p>
                    </div>
                    <div label="Does not Unlock with a User Credential (User Key of RFID)">
                      <p>
                        The lock does not recognize the user credential. For immediate access, operate with a valid manager credential. Follow instructions to
                        <span onClick={() => jumpAccordion('Aspire RFID Getting Started', 'Assign User Credentials')}> Assign User Credentials</span> to assign the user credential to the lock.
                      </p>
                    </div>
                    <div label="Does not Operate with a Manager Credential (Manager Key or RFID)">
                      <p>
                        The lock does not recognize the manager credential. Follow instructions to <span onClick={() => jumpAccordion('Aspire RFID Getting Started', 'Add Manager Credentials')}>Add Manager Credentials</span> to program the manager credential to
                        the lock. For immediate access, operate with another valid manager credential or with the Programming Key.
                      </p>
                    </div>
                    <div label="Does not Operate with a Programming Key">
                      <p>
                        The lock does not recognize the Programming Key. If the Programming Key has been replaced, operate with the Replacement
                        Programming Key. Contact <a href="/contact/">Digilock support</a> for additional assistance.
                      </p>
                    </div>
                    <div label={['No Audible Feedback when ', <DigiSymbol ds={'buttonKey'} />, ' is Pressed']}>
                      <ul>
                        <li>The batteries may need to be replaced. For immediate access, operate with a valid Manager Key.</li>
                        <li>The front unit may not be properly connected to the rear unit. Remove the lock from the door and check the connection.</li>
                      </ul>
                    </div>
                    <div label="Battery Replacement (shown with cable rear mount)">
                      <p>It is not necessary to uninstall the lock from the door.</p>
                      <div className="step-images">
                        <figure>
                          <img src={batteryReplaceOne} alt="Step One" width={226} height={208}/>
                          <figcaption>
                            Remove the screws and the cover plate.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={batteryReplaceTwo} alt="Step Two" width={226} height={208}/>
                          <figcaption>
                            Pull the battery pack from the rear housing. <br/>
                            Replace with four premium alkaline <br/>
                            AA batteries.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={batteryReplaceThree} alt="Step Three" width={226} height={208}/>
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
                  <AspireRfidFaq product={'Aspire'} clsName={'numeris-support'} />
                </div>
              </Accordion>
            </div>
          </div>
        </div>

      </div>
  );
};

export default Tab;