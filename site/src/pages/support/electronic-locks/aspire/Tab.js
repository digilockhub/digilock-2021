import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import Accordion from '../../../../components/ui/legacy/Accordion/Accordion';
import DigiSymbol from '../../../../components/ui/legacy/DigiSymbols/DigiSymbol';
import {jumpAccordion, filterSupportObject} from '../../../../utils/utils';
import AspireKeypadFaq from "../../../../components/ui/legacy/faq/VersaKeypad";

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
import {graphql, useStaticQuery} from "gatsby";

const Tab = (props) => {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) => {
    return toggleState === index ? className : '';
  };

  const Docs = useStaticQuery(graphql`
    query aspireSupportDocuments {
  
  allContentfulProductSupportSection(
  filter: {
    title: {eq: "Aspire"}
  }
) {
  edges {
    node {
      title
      catalog {
        title
        file {
          url
          fileName
          contentType
        }
      }
      dataSheets {
        title
        file {
          url
          fileName
          contentType
        }
      }
      installGuides {
        title
        file {
          url
          fileName
          contentType
        }
      }
      productGuides {
        title
        file {
          url
          fileName
          contentType
        }
      }
      salesSheet {
        title
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
}
}
  `);
  const DocsData = Docs.allContentfulProductSupportSection.edges[0].node;
  let whichType = 'Keypad';
  let datasheets = filterSupportObject(DocsData.dataSheets, whichType);
  let installGuides = filterSupportObject(DocsData.installGuides, whichType);
  let productGuides = filterSupportObject(DocsData.productGuides, whichType);
  return (
      <div className={'tab-container'}>
        <ul className="tab-list unstyled-list">
          <li
              className={getActiveClass(1, 'active')}
              onClick={() => toggleTab(1)}
          >
            Aspire Keypad
          </li>
          <li
              className={getActiveClass(2, 'active')}
              onClick={() => toggleTab(2)}
          >
            Aspire RFID
          </li>
        </ul>
        <div className="tab-content-container">
          <div className={"tab-content " + getActiveClass(1, 'active')}>
            <div className="front-back">
              <StaticImage
                  src="../../../../images/electronic-locks/elec-aspire-four.png"
                  loading={'lazy'}
                  width={624}
                  height={461}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="NEED ALT TAG"
              />
              <StaticImage
                  src="../../../../images/rear-units/features-rear.png"
                  loading={'lazy'}
                  width={500}
                  height={536}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="NEED ALT TAG"
              />
            </div>
            <div className="accordions">
              <Accordion>
                {/*GETTING STARTED*/}
                <div label="Getting Started">
                  <Accordion clsName={'numeris-support'}>
                    <div label="Initial Setup">
                      <p>
                        Locks are shipped with factory default settings (only operates by pressing <DigiSymbol
                          ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/>). Each lock must be setup to operate with a
                        Programming
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
                      <p>The Programming Key can quickly program multiple locks to operate with the same Manager
                        Keys.</p>
                      <div className="step-images">
                        <figure className={'wide'}>
                          <img src={ermkOne}
                               className={'img-responsive'}
                               alt="Step one"
                               width={'405'}
                               height={'161'}/>
                          <figcaption>
                            Go to a lock already programmed to operate with the Manager Keys. <br/>
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button06'}/><DigiSymbol ds={'button01'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
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
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> then insert the Programming
                            Key. <br/>
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> then insert the Programming
                            Key again to return the bolt to the
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
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button05'}/><DigiSymbol ds={'button05'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
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
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button05'}/><DigiSymbol ds={'button05'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
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
                            Follow instructions to <span onClick={() => jumpAccordion('Add Manager Keys')}>Add Manager Keys</span> to
                            program the remaining and
                            replacement Manager Keys to the locks.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Set Lock Functionality (Bolt Only)">
                      <p>
                        Each lock can be set for either shared or assigned use functionality. Press <DigiSymbol
                          ds={'buttonC'}/> to check functionality. If in shared use, LED is red. If in
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
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button06'}/><DigiSymbol ds={'button05'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
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
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button05'}/><DigiSymbol ds={'button06'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
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
                        Make sure that the lock is set for assigned use functionality (a green LED will flash
                        when <DigiSymbol ds={'buttonC'}/> is pressed). Up to 20 user credentials (User Codes and/or User
                        Keys) may be assigned to each lock.
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
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button05'}/><DigiSymbol ds={'button05'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
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
                            Press <DigiSymbol ds={'buttonC'}/> [<strong>new 4-7 digit code</strong>] <DigiSymbol
                              ds={'buttonKey'}/>. A two-tone beep will be heard. <br/>
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
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button05'}/><DigiSymbol ds={'button05'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
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

                      <p>Make sure the lock is set for assigned use functionality (a green LED will flash
                        when <DigiSymbol ds={'buttonC'}/> is pressed). The Programming Key can quickly
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
                            Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button06'}/><DigiSymbol ds={'button06'}/> <DigiSymbol ds={'buttonKey'}/>. The LED
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
                            Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/> then insert the
                            Programming Key. <br/>
                            Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/> then insert the
                            Programming Key again to return
                            the bolt to the original position.
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div label="Remove User Credentials">
                      <p>
                        Make sure the lock is in assigned use functionality (a green LED will flash when <DigiSymbol
                          ds={'buttonC'}/> is pressed). The locks must be reprogrammed to remove
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
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button05'}/><DigiSymbol ds={'button05'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
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
                            Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/> then insert a valid
                            Manager Key. <br/>
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
                            Press <DigiSymbol ds={'buttonC'}/> <DigiSymbol ds={'buttonKey'}/> then insert a valid
                            Manager Key. <br/>
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
                    <div label="Set Additional Lock Features (for shared use functionality only)">

                      <p>
                        <strong>LED Usage Indicator</strong> <br/>
                        When in shared use functionality, each lock can be programmed to have the LED flash or not flash
                        while the lock is in use. The default
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
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button09'}/><DigiSymbol ds={'button02'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
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
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button09'}/><DigiSymbol ds={'button01'}/> <DigiSymbol ds={'buttonKey'}/>. <br/>
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
                        When in shared use functionality, each lock can be programmed to auto unlock after a set number
                        of hours. The default setting is OFF
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
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> 95 <DigiSymbol
                              ds={'buttonKey'}/>.
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
                            Enter the number of hours from <DigiSymbol ds={'button01'}/> - <DigiSymbol ds={'button09'}/>
                            <DigiSymbol ds={'button09'}/> then press <DigiSymbol ds={'buttonKey'}/>. <br/>
                            Two sets of two-tone beeps will be heard and the LED will turn off. <br/>
                            For example: Press <DigiSymbol ds={'button08'}/> <DigiSymbol ds={'buttonKey'}/> to set the
                            lock to auto unlock after 8 hours.
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
                            Press <DigiSymbol ds={'buttonC'}/><DigiSymbol ds={'buttonKey'}/> <DigiSymbol
                              ds={'button09'}/><DigiSymbol ds={'button04'}/> `. <br/>
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
                {/*<div label="Document Library">*/}
                {/*  <Accordion clsName={'numeris-support'}>*/}
                {/*    <div label="Catalog">*/}
                {/*      <div className="step-images">*/}
                {/*        <ul>*/}
                {/*          {*/}
                {/*            DocsData.catalog.map( (doc, index) => (*/}
                {/*                      <li key={index}>*/}
                {/*                        <a href={doc.file.url} target={'_blank'}>{DocsData.catalog[index].title}</a>*/}
                {/*                      </li>*/}
                {/*                  )*/}
                {/*              )*/}
                {/*          }*/}
                {/*        </ul>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*    <div label="Data Sheets">*/}
                {/*      <div className="step-images">*/}
                {/*        <ul>*/}
                {/*          {*/}
                {/*              datasheets.map( (doc, index) => (*/}
                {/*                      <li key={index}>*/}
                {/*                        <a href={doc.file.url} target={'_blank'}>{doc.title}</a>*/}
                {/*                      </li>*/}
                {/*                  )*/}
                {/*              )*/}
                {/*          }*/}
                {/*        </ul>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*    <div label="Install Guides">*/}
                {/*      <div className="step-images">*/}
                {/*        <ul>*/}
                {/*          {*/}
                {/*              installGuides.map( (doc, index) => (*/}
                {/*                      <li key={index}>*/}
                {/*                        <a href={doc.file.url} target={'_blank'}>{doc.title}</a>*/}
                {/*                      </li>*/}
                {/*                  )*/}
                {/*              )*/}
                {/*          }*/}
                {/*        </ul>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*    <div label="Product Guides">*/}
                {/*      <div className="step-images">*/}
                {/*        <ul>*/}
                {/*          {*/}
                {/*              productGuides.map( (doc, index) => (*/}
                {/*                      <li key={index}>*/}
                {/*                        <a href={doc.file.url} target={'_blank'}>{doc.title}</a>*/}
                {/*                      </li>*/}
                {/*                  )*/}
                {/*              )*/}
                {/*          }*/}
                {/*        </ul>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </Accordion>*/}
                {/*</div>*/}
                {/*SUPPORT*/}
                <div label="Troubleshooting">
                  <Accordion >
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
          <div className={"tab-content " + getActiveClass(2, 'active')}>Content 2</div>
        </div>
      </div>
  );
};

Tab.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default Tab;