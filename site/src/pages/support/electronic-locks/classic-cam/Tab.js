import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans} from "gatsby-plugin-react-i18next";
import Accordion from '../../../../components/ui/legacy/Accordion/Accordion'
import DigiSymbol from '../../../../components/ui/legacy/DigiSymbols/DigiSymbol'
import { jumpAccordion } from '../../../../utils/utils';
import ClassicKeypad from '../../faq/ClassicKeypad';
import ClassicRfid from '../../faq/ClassicKeypad';

//CLASSIC IMAGES
import replaceBatteryOne from './images/battery-replace-one.png'
import replaceBatteryTwo from './images/battery-replace-two.png'
import replaceBatteryThree from './images/battery-replace-three.png'
import replaceBatteryFour from './images/battery-replace-four.png'



const Tab = (props) => {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) => {
    return toggleState === index ? className : '';
  };

  let datasheetsKeypad = [
    {
      "title": "Classic Data Sheet Keypad",
      "file": {
        "url": "//assets.ctfassets.net/q5vaqi9g69zw/3o9DXYHYtaVvFY1MwFYLWG/aacce8b997d28eaf2a220cbbfa83846f/nk_ds_classic-Keypad.pdf",
        "fileName": "nk_ds_classic-Keypad.pdf",
        "contentType": "application/pdf"
      }
    }
  ];
  let installGuidesKeypad = [
    {
      "title": "Classic Install Guide",
      "file": {
        "url": "//assets.ctfassets.net/q5vaqi9g69zw/5vPxUFB3jaguyh1d98iGRT/a28f5a6f3b4bcb611f220bab25b1aa7a/dl-il-classic.pdf",
        "fileName": "dl-il-classic.pdf",
        "contentType": "application/pdf"
      }
    }
  ];
  let productGuidesKeypad = [
    {
      "title": "Classic Product Guide Keypad Shared Use",
      "file": {
        "url": "//assets.ctfassets.net/q5vaqi9g69zw/7JvTaUq9rMM5M3F2UTEH8u/63bf02eb35f744a69ac9f9980429d60d/classicKeypadSharedUseProductGuide.pdf",
        "fileName": "classicKeypadSharedUseProductGuide.pdf",
        "contentType": "application/pdf"
      }
    },
    {
      "title": "Classic Product Guide Keypad Assigned Use",
      "file": {
        "url": "//assets.ctfassets.net/q5vaqi9g69zw/j71D97XF5ApH5uyosJatD/3fbfee5fff9caa790ab6f98de7fa1cac/classickeypadAssigendUseProductGuice.pdf",
        "fileName": "classickeypadAssigendUseProductGuice.pdf",
        "contentType": "application/pdf"
      }
    }
  ];
  let datasheetsRFID = [
    {
      "title": "Classic Data Sheet RFID",
      "file": {
        "url": "//assets.ctfassets.net/q5vaqi9g69zw/2d135mjxJqyToSMcThgTl7/8aafa3b03ca2b8acef87d7904a931119/nk_ds_classic-RFID.pdf",
        "fileName": "nk_ds_classic-RFID.pdf",
        "contentType": "application/pdf"
      }
    }
  ];
  let installGuidesRFID = [
    {
      "title": "Classic Install Guide",
      "file": {
        "url": "//assets.ctfassets.net/q5vaqi9g69zw/5vPxUFB3jaguyh1d98iGRT/a28f5a6f3b4bcb611f220bab25b1aa7a/dl-il-classic.pdf",
        "fileName": "dl-il-classic.pdf",
        "contentType": "application/pdf"
      }
    }
  ];
  let productGuidesRFID = [
    {
      "title": "Classic Product Guide RFID Shared Use",
      "file": {
        "url": "//assets.ctfassets.net/q5vaqi9g69zw/MGRBGfgNZAmV1irkhg7JQ/6841af6eee982988480447400375c23d/classicRfidSharedUseProductGuide.pdf",
        "fileName": "classicRfidSharedUseProductGuide.pdf",
        "contentType": "application/pdf"
      }
    },
    {
      "title": "Classic Product Guide RFID Assigned Use",
      "file": {
        "url": "//assets.ctfassets.net/q5vaqi9g69zw/6BBfp4qo7G4911C1N42kd4/357b02b72cbb53c0bb51c67449f109bd/classicRfidAssignedUseProductGuide.pdf",
        "fileName": "classicRfidAssignedUseProductGuide.pdf",
        "contentType": "application/pdf"
      }
    }
  ];

  return (
      <div className={'tab-container'}>
        <ul className="tab-list unstyled-list">
          <li
              className={getActiveClass(1, 'active')}
              onClick={() => toggleTab(1)}
          >
            Classic Cam <Trans>cam</Trans> <Trans>keypad</Trans>
          </li>
          <li
              className={getActiveClass(2, 'active')}
              onClick={() => toggleTab(2)}
          >
            Classic <Trans>cam</Trans> <Trans>rfid</Trans>
          </li>
        </ul>
        <div className="tab-content-container">
          <div className={"tab-content "+getActiveClass(1, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'./images/keypad-front.png'}
                  loading={'lazy'}
                  width={'696'}
                  height={'331'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
              <StaticImage
                  src={'./images/keypad-rear.png'}
                  loading={'lazy'}
                  width={'696'}
                  height={'331'}
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
                        New locks operate only with <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/>. Locks
                        must be setup to allow full operation.
                      </p>
                      <ol type={'a'}>
                        <li>
                          <span style={{color: '#000000'}}>Touch the Programming Key to the key slot until a two-tone beep is heard and the LED turns on.</span>
                        </li>
                        <li>
                          <span style={{color: '#000000'}}>Touch each Manager Bypass Key to the key slot. A two-tone beep will be heard for each Manager Bypass Key that is successfully registered.</span>
                        </li>
                        <li>
                          <span style={{color: '#000000'}}>Touch the Programming Key to the key slot until a two-tone beep is heard and the LED turns off.</span>
                        </li>
                        <li>
                          <span style={{color: '#000000'}}>Repeat above steps for each lock or follow Express Register instructions to setup all locks.</span>
                        </li>
                      </ol>
                    </div>

                    <div label="Express Register">

                      <p>
                        Manager Bypass Key(s) can be quickly registered to multiple locks. The Programming Key copies
                        the registered Manager Bypass
                        Key(s) from one lock to multiple locks.
                      </p>
                      <ol>
                        <li><span style={{color: '#000000'}}>Go to the lock registered with the Manager Bypass Key(s).</span></li>
                        <li><span style={{color: '#000000'}}>Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                            ds={'button06'}/><DigiSymbol ds={'button06'}/> <DigiSymbol ds={'buttonKey'}/>. The LED will start to flash.</span>
                        </li>
                        <li><span style={{color: '#000000'}}>Touch the Programming Key to the key slot until a two-tone beep is heard and the LED turns off.</span>
                        </li>
                        <li><span style={{color: '#000000'}}>At each lock to be registered, touch the Programming Key to the key slot until a two-tone beep is heard and the LED flashes once to indicate successful registration.</span>
                        </li>
                        <li><span style={{color: '#000000'}}>End express registration.* Go to any registered lock and press <DigiSymbol ds={'buttonC'} /> <DigiSymbol
                            ds={'buttonKey'}/> then touch the Programming Key to the key
                        slot to operate the lock.</span></li>
                      </ol>
                      <ul className="smaller-text">
                        <li className={'single-ast'}>
                          The Programming Key will continue to function in express registration mode until it is used
                          to operate a lock.
                        </li>
                      </ul>
                    </div>

                    <div label="Register/Add Manager Bypass Key(s)">
                      <p>
                        Up to 25 Manager Bypass Keys may be registered to a lock. If required, contact your Digilock
                        Product Representative to order
                        additional Manager Bypass Key(s).
                      </p>
                      <ol>
                        <li><span style={{color: '#000000'}}>Go to a lock requiring Manager Bypass Key(s).</span></li>
                        <li><span style={{color: '#000000'}}>Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                            ds={'button05'}/><DigiSymbol ds={'button05'}/> <DigiSymbol ds={'buttonKey'}/>. The LED will start to flash.</span>
                        </li>
                        <li><span style={{color: '#000000'}}>Touch the Programming Key to the key slot until a two-tone beep is heard and the LED turns on.</span>
                        </li>
                        <li><span style={{color: '#000000'}}>Touch each Manager Bypass Key to the key slot. A two-tone beep will be heard for each Manager Bypass Key that is
successfully registered.</span></li>
                        <li><span style={{color: '#000000'}}>Touch the Programming Key to the key slot until a two-tone beep is heard and the LED turns off.</span>
                        </li>
                        <li><span style={{color: '#000000'}}>Repeat above steps for each lock or follow Express Register instructions to register the same Manager Bypass Key(s) to
multiple locks.</span></li>
                      </ol>
                    </div>

                    <div label="For Lost or Stolen Keys">
                      <p>
                        <strong>For a lost or stolen Programming Key:</strong>
                      </p>
                      <p>
                        The lost/stolen Programming Key will continue to operate the lock(s) until it is replaced.
                        Immediately order a Replacement
                        Programming Key from your Digilock Product Representative. Once received, follow enclosed
                        instructions to set up the lock(s) to
                        operate with the Replacement Programming Key.
                      </p>
                      <p>
                        <strong>For a lost or stolen Manager Bypass Key(s):</strong>
                      </p>
                      <p>
                        Lost/Stolen Manager Bypass Key(s) will continue to operate the lock(s). To prevent the
                        lost/stolen Manager Bypass Key(s) from
                        operating the lock(s), erase all registered Manager Bypass Key(s) and register only the
                        remaining Manager Bypass Key(s).
                      </p>
                      <ol>
                        <li><span style={{color: '#000000'}}>Collect all remaining Manager Bypass Key(s).</span></li>
                        <li><span style={{color: '#000000'}}>Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                            ds={'button05'}/><DigiSymbol ds={'button05'}/> <DigiSymbol ds={'buttonKey'}/>. The LED will start to flash.</span>
                        </li>
                        <li><span style={{color: '#000000'}}>Touch the Programming Key to the key slot until a two tone beep is heard and the LED turns on.</span>
                        </li>
                        <li><span style={{color: '#000000'}}>Touch the Programming Key to the key slot again until three sets of two-tone beeps are heard and the LED turns off.
All previously registered Manager Bypass Key(s) have been erased from the lock.</span></li>
                        <li><span style={{color: '#000000'}}>Follow <span onClick={() => jumpAccordion('Register/Add Manager Bypass Key(s)')}>Register/Add Manager Bypass Key(s) instructions</span> to register the remaining Manager Bypass Key(s).</span>
                        </li>
                      </ol>

                    </div>

                    <div label="Operating Instructions">
                      <p>
                        <strong>Operate with any User Code:</strong>
                      </p>
                      <ul>
                        <li>
                          To lock: Close the door, press <DigiSymbol ds={'buttonC'}/> [any 4-digit code] <DigiSymbol
                            ds={'buttonKey'}/>, then turn the knob/lever to the locked position.
                        </li>
                        <li>
                          To unlock: Press <DigiSymbol ds={'buttonC'}/> [the same 4-digit code] <DigiSymbol
                            ds={'buttonKey'}/>, turn the knob/lever to the unlocked position, then open the door.*
                        </li>
                      </ul>
                      <p>
                        <strong>Operate with any User Key:</strong>
                      </p>
                      <ul>
                        <li>
                          To lock: Close the door, touch any User Key to the key slot, then turn the knob/lever to the
                          locked position.
                        </li>
                        <li>
                          To unlock: Touch the same User Key to the key slot, turn the knob/lever to the unlocked
                          position, then open the door.
                        </li>
                      </ul>
                      <p>
                        <strong>Operate with a registered Manager Bypass Key**:</strong>
                      </p>
                      <ul>
                        <li>To lock: Close the door, touch a registered Manager Bypass Key to the key slot, then turn
                          the knob/lever to the locked
                          position.
                        </li>
                        <li>To unlock: Touch a registered Manager Bypass Key to the key slot, turn the knob/lever to
                          the unlocked position, then open the
                          door.
                        </li>
                      </ul>
                      <p>
                        <strong>Operate with the Programming Key**:</strong>
                      </p>
                      <ul>
                        <li>To lock: Close the door, press <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/>,
                          touch the Programming Key to the key slot, then turn the knob/lever to the locked
                          position.
                        </li>
                        <li>To unlock: Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/>, touch the
                          Programming Key to the key slot, turn the knob/lever to the unlocked position, then open
                          the door.*
                        </li>
                      </ul>

                      <ul className="smaller-text">
                        <li className="single-ast">
                          The lock will go into “Sleep Mode” after 3 consecutive incorrect entries.
                        </li>
                      </ul>

                      <ul className="smaller-text">
                        <li className="double-ast">
                          When locked with a registered Manager Bypass Key or the Programming Key, the previous User
                          Code or User Key will
                          continue to operate the lock.
                        </li>
                      </ul>
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
                              canUseDOM && datasheetsKeypad.map( (doc, index) => (
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
                              canUseDOM && installGuidesKeypad.map( (doc, index) => (
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
                              canUseDOM && productGuidesKeypad.map( (doc, index) => (
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
                    <div label="Sleep Mode">
                      <p>
                        After three consecutive incorrect User Code entries to unlock, the lock will go into “Sleep
                        Mode” for one minute and for an additional minute for each subsequent incorrect entry. The
                        keypad is disabled while in “Sleep Mode”.
                      </p>
                    </div>
                    <div label="Error Condition Indicator">
                      <p>
                        Locks emit feedback when an error condition exists.
                      </p>
                      <p>
                        <strong>
                          2 sets of three beeps:
                        </strong> <br/>
                        The batteries are low. Replace the batteries.
                      </p>
                      <p>
                        <strong>1 beep:</strong> <br/>
                        The lock does not recognize the User Code or Key.
                      </p>
                    </div>
                    <div label="Does not Unlock with the User Code or User Key">
                      <p>The lock does not recognize the User Code or User Key. Operate the lock with a registered
                        Manager Bypass Key.</p>
                    </div>
                    <div label="Does not Operate with a Manager Bypass Key">
                      <p>The lock does not recognize the Manager Bypass Key. Follow Register/Add Manager Bypass Key(s)
                        instructions to register the Manager Bypass Key to the lock. For immediate access, operate
                        with another registered Manager Bypass Key or with the Programming Key.</p>
                    </div>
                    <div label="Does not Operate with the Programming Key">
                      <p>After pressing the <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/> buttons the lock does not recognize the Programming Key. Contact <a
                          href="/contact/">Digilock Support</a> for assistance.</p>
                    </div>
                    <div label={['No Audible Feedback when ', <DigiSymbol ds={'buttonC'}/>, ' is Pressed']}>
                      <ol>
                        <li><span>The lock may be in “Sleep Mode” or the batteries need to be replaced. For immediate access, operate with a registered Manager Bypass Key.</span>
                        </li>
                        <li><span>Press <DigiSymbol ds={'buttonC'} /> to test; if no audible feedback, replace the batteries.</span></li>
                        <li><span>If error condition persists, contact Digilock Support.</span></li>
                      </ol>
                    </div>
                    <div label="Battery Replacement*">
                      <p>
                        It is not necessary to remove the lock from the door to change the batteries.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={replaceBatteryOne}
                               className={'img-responsive'}
                               alt="Setup one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            The batteries are located behind the rear cover. <br/>
                            Ensure that the cam is not obstructing access to the rear cover screw.*
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceBatteryTwo}
                               className={'img-responsive'}
                               alt="Setup two"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Remove the screw and rear cover.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceBatteryThree}
                               className={'img-responsive'}
                               alt="Setup three"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Replace with three premium alkaline AA batteries.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceBatteryFour}
                               className={'img-responsive'}
                               alt="Setup four"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Replace the rear cover and secure.
                          </figcaption>
                        </figure>
                      </div>
                      <ul className="smaller-text">
                        <li className="single-ast">
                          In case of battery failure, operate with a registered Manager Bypass Key or the Programming
                          Key.
                        </li>
                      </ul>
                    </div>
                  </Accordion>
                </div>
                {/*FAQ*/}
                <div label="FAQ">
                  <ClassicKeypad product={'Classic Cam Keypad'} clsName={'next-support'} />
                </div>
              </Accordion>
            </div>
          </div>
          <div className={"tab-content "+getActiveClass(2, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'./images/rfid-front.png'}
                  loading={'lazy'}
                  width={'696'}
                  height={'333'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
              <StaticImage
                  src={'./images/rfid-rear.png'}
                  loading={'lazy'}
                  width={'696'}
                  height={'333'}
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
                        New locks operate only with <DigiSymbol ds={'buttonKey'}/>. Locks
                        must be setup to allow full operation.
                      </p>
                      <ol type={'a'}>
                        <li>
                          <span style={{color:'#000'}}>Touch the Programming Key to the key slot until a two-tone beep is heard and the LED turns on.</span>
                        </li>
                        <li>
                          <span style={{color:'#000'}}>Touch each Manager Bypass Key to the key slot. A two-tone beep will be heard for each Manager Bypass Key that is successfully registered.</span>
                        </li>
                        <li>
                          <span style={{color:'#000'}}>Touch the Programming Key to the key slot until a two-tone beep is heard and the LED turns off.</span>
                        </li>
                        <li>
                          <span style={{color:'#000'}}>Repeat above steps for each lock or follow Express Register instructions to setup all locks.</span>
                        </li>
                      </ol>
                    </div>

                    <div label="Express Register">

                      <p>
                        Manager Bypass Key(s) can be quickly registered to multiple locks. The Programming Key copies
                        the registered Manager Bypass
                        Key(s) from one lock to multiple locks.
                      </p>
                      <ol>
                        <li><span style={{color:'#000'}}>Go to the lock registered with the Manager Bypass Key(s).</span></li>
                        <li><span style={{color:'#000'}}>Press and hold <DigiSymbol ds={'buttonKey'}/> for 10 seconds. After 5 seconds, a two-tone beep will be heard and the LED will start to flash; continue to
hold until two-sets of two-tone beeps are heard.</span></li>

                        <li><span style={{color:'#000'}}>Touch the Programming Key to the key slot until a two-tone beep is heard and the LED turns off.</span>
                        </li>
                        <li><span style={{color:'#000'}}>At each lock to be registered, touch the Programming Key to the key slot until a two-tone beep is heard and the LED flashes
                          once to indicate successful registration.</span></li>
                        <li><span style={{color:'#000'}}>End express registration.* Go to any registered lock and press <DigiSymbol
                            ds={'buttonKey'}/> then touch the Programming Key to the key slot to operate
                          the lock.</span></li>
                      </ol>
                      <ul className="smaller-text">
                        <li className={'single-ast'}>
                          The Programming Key will continue to function in express registration mode until it is used
                          to operate a lock.
                        </li>
                      </ul>
                    </div>

                    <div label="Register/Add Manager Bypass Key(s)">
                      <p>
                        Up to 25 Manager Bypass Keys may be registered to a lock. If required, <a href="/contact/">contact your Digilock
                        Product Representative</a> to order
                        additional Manager Bypass Key(s).
                      </p>
                      <ol>
                        <li><span style={{color:'#000'}}>Go to a lock requiring Manager Bypass Key(s).</span></li>
                        <li><span style={{color:'#000'}}>Press and hold <DigiSymbol ds={'buttonKey'}/> for 5 seconds until a two-tone beep is heard and the LED starts to flash.</span>
                        </li>
                        <li><span style={{color:'#000'}}>Touch the Programming Key to the key slot until a two-tone beep is heard and the LED turns on.</span>
                        </li>
                        <li><span style={{color:'#000'}}>Touch each Manager Bypass Key to the key slot. A two-tone beep will be heard for each Manager Bypass Key that is
                        successfully registered.</span></li>
                        <li><span style={{color:'#000'}}>Touch the Programming Key to the key slot until a two-tone beep is heard and the LED turns off.</span>
                        </li>
                        <li><span style={{color:'#000'}}>Repeat above steps for each lock or follow Express Register instructions to register the same Manager Bypass Key(s) to
                        multiple locks.</span></li>
                      </ol>
                    </div>

                    <div label="For Lost or Stolen Keys">
                      <p>
                        <strong>For a lost or stolen Programming Key:</strong>
                      </p>
                      <p>
                        The lost/stolen Programming Key will continue to operate the lock(s) until it is replaced.
                        Immediately order a Replacement
                        Programming Key from your Digilock Product Representative. Once received, follow enclosed
                        instructions to set up the lock(s) to
                        operate with the Replacement Programming Key.
                      </p>
                      <p>
                        <strong>For a lost or stolen Manager Bypass Key(s):</strong>
                      </p>
                      <p>
                        Lost/Stolen Manager Bypass Key(s) will continue to operate the lock(s). To prevent the
                        lost/stolen Manager Bypass Key(s) from
                        operating the lock(s), erase all registered Manager Bypass Key(s) and register only the
                        remaining Manager Bypass Key(s).
                      </p>
                      <ol>
                        <li><span style={{color:'#000'}}>Collect all remaining Manager Bypass Key(s).</span></li>
                        <li><span style={{color:'#000'}}>Press <DigiSymbol ds={'buttonKey'}/> for 5 seconds until a two-tone beep is heard and the LED starts to flash.</span>
                        </li>
                        <li><span style={{color:'#000'}}>Touch the Programming Key to the key slot until a two tone beep is heard and the LED turns on.</span>
                        </li>
                        <li><span style={{color:'#000'}}>Touch the Programming Key to the key slot again until three sets of two-tone beeps are heard and the LED turns off.
All previously registered Manager Bypass Key(s) have been erased from the lock.</span></li>
                        <li><span style={{color:'#000'}}>Follow <span onClick={() => jumpAccordion('Register/Add Manager Bypass Key(s)')}>Register/Add Manager Bypass Key(s) instructions</span> to register the remaining Manager Bypass Key(s).</span>
                        </li>
                      </ol>

                    </div>

                    <div label="Operating Instructions">
                      <p><strong>Operate with any RFID Card:</strong></p>
                      <ul>
                        <li>To lock: Close the door, press <DigiSymbol ds={'buttonKey'}/>, present any RFID Card to
                          the Reader, then turn the knob/lever to the locked position.
                        </li>
                        <li>To unlock: Press <DigiSymbol ds={'buttonKey'}/>, present the same RFID Card to the Reader,
                          turn the knob/lever to the unlocked position, then open the
                          door.
                        </li>
                      </ul>
                      <p><strong>Operate with any User Key:</strong></p>
                      <ul>
                        <li>To lock: Close the door, touch any User Key to the key slot, then turn the knob/lever to
                          the locked position.
                        </li>
                        <li>To unlock: Touch the same User Key to the key slot, turn the knob/lever to the unlocked
                          position, then open the door.
                        </li>
                      </ul>
                      <p><strong>Operate with a registered Manager Bypass Key*:</strong></p>
                      <ul>
                        <li>To lock: Close the door, touch a registered Manager Bypass Key to the key slot, then turn
                          the knob/lever to the locked position.
                        </li>
                        <li>To unlock: Touch a registered Manager Bypass Key to the key slot, turn the knob/lever to
                          the unlocked position, then open the
                          door.
                        </li>
                      </ul>
                      <p><strong>Operate with the Programming Key*:</strong></p>
                      <ul>
                        <li>To lock: Close the door, press <DigiSymbol ds={'buttonKey'} />, touch the Programming Key to the key slot, then turn the
                          knob/lever to the locked position.
                        </li>
                        <li>To unlock: Press <DigiSymbol ds={'buttonKey'} />, touch the Programming Key to the key slot, turn the knob/lever to the
                          unlocked position, then open the
                          door.
                        </li>
                      </ul>
                      <ul className="smaller-text">
                        <li className="single-ast">
                          When locked with a registered Manager Bypass Key or the Programming Key, the previous RFID
                          Card or User Key will continue to operate the lock.
                        </li>
                      </ul>
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
                              canUseDOM && datasheetsRFID.map( (doc, index) => (
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
                              canUseDOM && installGuidesRFID.map( (doc, index) => (
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
                              canUseDOM && productGuidesRFID.map( (doc, index) => (
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
                    <div label="Error Condition Indicator">
                      <p>
                        Locks emit feedback when an error condition exists.
                      </p>
                      <p>
                        <strong>
                          2 sets of three beeps:
                        </strong> <br/>
                        The batteries are low. Replace the batteries.
                      </p>
                      <p>
                        <strong>1 beep:</strong> <br/>
                        The lock does not recognize the RFID Card or Key.
                      </p>
                    </div>
                    <div label="Does not Unlock with the RFID Card or User Key">
                      <p>The lock does not recognize the RFID Card or User Key. Operate the lock with a registered
                        Manager Bypass Key.</p>
                    </div>
                    <div label="Does not Operate with a Manager Bypass Key">
                      <p>The lock does not recognize the Manager Bypass Key. Follow Register/Add Manager Bypass Key(s)
                        instructions to register Manager Bypass Key to the lock. For immediate access, operate with
                        another registered Manager Bypass Key or with the Programming Key</p>
                    </div>
                    <div label="Does not Operate with the Programming Key">
                      <p>The lock does not recognize the Programming Key. <a href="/contact/">Contact Digilock Support</a> for assistance.</p>
                    </div>
                    <div label={['No Audible Feedback when ', <DigiSymbol ds={'buttonKey'}/>, ' is Pressed']}>
                      <ol>
                        <li><span>The batteries may need to be replaced.</span></li>
                        <li><span>Replace the batteries.</span></li>
                        <li><span>If error condition persists, <a href="/contact/">contact Digilock Support</a>.</span></li>
                      </ol>
                    </div>
                    <div label="Battery Replacement*">
                      <p>
                        It is not necessary to remove the lock from the door to change the batteries.
                      </p>
                      <div className="step-images">
                        <figure>
                          <img src={replaceBatteryOne}
                               className={'img-responsive'}
                               alt="Setup one"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            The batteries are located behind the rear cover. <br/>
                            Ensure that the cam is not obstructing access to the rear cover screw.*
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceBatteryTwo}
                               className={'img-responsive'}
                               alt="Setup two"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Remove the screw and rear cover.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceBatteryThree}
                               className={'img-responsive'}
                               alt="Setup three"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Replace with three premium alkaline AA batteries.
                          </figcaption>
                        </figure>
                        <figure>
                          <img src={replaceBatteryFour}
                               className={'img-responsive'}
                               alt="Setup four"
                               width={'226'}
                               height={'208'}/>
                          <figcaption>
                            Replace the rear cover and secure.
                          </figcaption>
                        </figure>
                      </div>
                      <ul className="smaller-text">
                        <li className="single-ast">
                          In case of battery failure, operate with a registered Manager Bypass Key or the Programming
                          Key.
                        </li>
                      </ul>
                    </div>
                  </Accordion>
                </div>
                {/*FAQ*/}
                <div label="FAQ">
                  <ClassicRfid product={'Classic Cam RFID'} clsName={'next-support'} />
                </div>
              </Accordion>
            </div>
          </div>
        </div>

      </div>
  );
};

export default Tab;