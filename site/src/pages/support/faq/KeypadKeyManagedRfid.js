import React from 'react';
import Accordion from '../../../components/ui/legacy/Accordion/Accordion';
import { jumpAccordion } from '../../../Utils/utils';
import DigiSymbol from '../../../components/ui/legacy/DigiSymbols/DigiSymbol';

const KeypadKeyManagedRfid = (props) => (

  <Accordion clsName={props.clsName}>
    <div label="What is factory default?">
      <p>
        When product ships from our warehouse, it is in factory default mode. This means it is has not been assigned a
        Programming or Manager Key.
      </p>
      <p>
        Keypad Locks will operate by pressing <DigiSymbol ds={'buttonC'}/> then <DigiSymbol ds={'buttonKey'}/>. <br/>
        RFID Locks will operate by pressing <DigiSymbol ds={'buttonKey'}/>.
      </p>
      <p>
        Another indicator that a keypad lock is in factory default mode is if you can lock the lock with a 4-digit user
        code, and unlock with a different 4-digit user code.
      </p>
      <p>
        When locks operate at the factory setting, they are not secure. Follow the Initial <span
        onClick={() => jumpAccordion(props.product + ' Getting Started',
          'Initial Setup')}>Setup instructions</span> located in the product guide.
      </p>
    </div>
    <div label="Why do my locks have a red LED light?">
      <p>
        Locks with a red LED light have temporary usage functionality. This means when unlocked, the lock will accept
        any 4-digit user code.
      </p>
    </div>
    <div label="Why do my locks have a green LED light?">
      <p>
        Locks with a green LED light have permanent usage functionality. This means a 4-digit user code needs to be
        assigned to the lock. Only the assigned code will operate the lock.
      </p>
    </div>
    <div label="How do I operate a lock?">
      <p>
        Keypad: Press <DigiSymbol ds={'buttonC'}/> (your code) <DigiSymbol ds={'buttonKey'}/>.
      </p>
      <p>
        RFID: Press <DigiSymbol ds={'buttonKey'}/> then swipe your RFID credential.
      </p>
      <p>
        Cam Keypad: Press <DigiSymbol ds={'buttonC'}/> (your code) <DigiSymbol ds={'buttonKey'}/>, then turn the knob or
        lever.
      </p>
      <p>
        Cam RFID: Press <DigiSymbol ds={'buttonKey'}/> then swipe your RFID credential, then turn the knob or lever.
      </p>
    </div>
    <div
      label="What is the Yellow Key?">
      <p>
        The Yellow Key is the Programming key. It’s main function is to assign Manager Keys and enable product features.
        When introduced to a lock in factory default mode, the Programming key will become registered to the lock,
        allowing the lock to function as ordered.
      </p>
      <p>
        Follow the <span onClick={() => jumpAccordion(props.product + ' Getting Started',
        'Initial Setup')}>Setup instructions</span> of your product guide to program your Programming Key.
      </p>
      <p>
        You must initialize the Programming Key to the locking system. Otherwise, the lock(s) will emit a single beep
        and LED flash when inserted into the key slot and the bolt will not move.
      </p>
      <p>
        One Programming Key is allowed per locking system.
      </p>
      <p>
        The Programming Key can also provide lock access. Refer to the <span
        onClick={() => jumpAccordion(props.product + ' Documents', 'Product Guides')}>Product Guide</span> for
        instructions on how to use the programming key for lock access.
      </p>
    </div>
    <div label="What is the Black Key?">
      <p>
        The Black Key is your Manager Key. This key provides override access, external power, and used to register user
        codes and ADA user keys.
      </p>

      <p>
        You must program the Black Manager Keys to the locking system. Otherwise, the lock(s) will emit a single beep
        and LED flash when inserted into the key slot and the bolt will not move.
      </p>

      <p>
        Each lock will program up to (25) Black Manager Keys.
      </p>

      <p>
        The Yellow Programming Key is required to register Manager Key(s) to the locks. Refer to the <span
        onClick={() => jumpAccordion(props.product + ' Documents', 'Product Guides')}>Product Guide</span> for
        instructions.
      </p>
    </div>
    <div label="What is the Blue Key?">
      <p>
        The Blue Key is the ADA User Key. This is an alternative user credential and keeps the locking system ADA
        compliant.
      </p>
      <p>
        If your locks are Permanent usage functionality, you must program the Blue ADA User Keys to the locking system.
        Otherwise, the lock(s) will emit a single beep and LED flash when inserted into the key slot and the bolt will
        not move.
      </p>
    </div>
    <div label="What is ADA Compliance?">
      <p>
        Americans with Disabilities Act
      </p>
      <p>
        In the United States, ADA Regulations require a minimum of 5% of all lock openings to be ADA compliant.
        Nextlock Products offer many locks that are ADA compliant, meeting U.S. Federal ADA Standards for Accessible
        Design. To meet compliance guidelines, ADA lockers must utilize ADA compliant locks that do not require tight
        grasping, pinching or twisting of the wrist, or more than 5 lbs. of force to operate.
      </p>
    </div>
    <div label="The LED flashes twice and the keypad is nonresponsive.">
      When the incorrect user code or RFID credential is used three consecutive times, the lock goes into sleep mode for
      60 seconds. The lock will go into sleep mode for each subsequent failed attempt.
    </div>
    <div
      label="How can I speed up the programming process?">
      <p>
        After you have followed the initial setup on one lock and tested the lock to ensure successful programming of
        all keys necessary, you will then follow the <span onClick={() => jumpAccordion(props.product+' Getting Started', 'Express Register Manager Keys')}>Express Registration</span> instructions for all remaining locks.
      </p>
      <p>
        Express Registration is only to quickly program Manager keys, additional lock features and user credentials must
        be added to each lock individually.
      </p>
    </div>
    <div label="The locks at my facility have a red LED light and appear to be shared use. Assigned use is what we need, how do we fix this?">
      <p>
        Many NextLock products offer dual functionality, and can be changed in the field. Please follow the section to <span onClick={() => jumpAccordion(props.product+' Getting Started', 'Set Lock Functionality - (Dual Function Only)')}>Set Lock Functionality</span>.
      </p>
      <p>
        If purchased with a dead latch, please contact <a href="/contact/">Digilock support</a> so that our representatives can further assist you.
      </p>
    </div>
    <div label="I cannot find my Programming key.">
      <p>
        Contact <a href="/contact/">Digilock support</a> to purchase a new Programming Key.
      </p>
      <p>
        You will need to provide Digilock with the sales order number or serial number located on the lock(s). Please confirm with Digilock the color of your current Programming key, as well as the brand of locks you will be programming if you do not have the sales order number or serial number.
      </p>
    </div>
    <div label="My Programming key is lost, stolen, or broken. Can I replace the Programming Key?">
      <p>
        Yes, you can purchase a Replacement Programming key.
      </p>
      <p>
        Please contact <a href="/contact/">Digilock support</a> to purchase a replacement Programming key.
      </p>
    </div>
    <div label="I need to open a locker, and the lock beeps and flashes when I insert my Programming Key.">
      <p>
        You must press <DigiSymbol ds={'buttonC'} /> then <DigiSymbol ds={'buttonKey'} /> first, and then insert the Programming Key.
      </p>
      <p>
        If you still receive a single beep and flash, Please <a href="/contact/">contact Digilock support</a> for further troubleshooting assistance.
      </p>
    </div>
    <div label="After entering your code or RFID credential, the lock emits a single beep and flash of the LED light, and does not unlock.">
      <p>
        This is an indicator the incorrect user code or RFID credential was used. You can use a registered Manager Key to operate the lock.
      </p>
    </div>
    <div label="I am trying to unlock a lock with my Manager Key, but it doesn’t open. The lock just beeps and flashes once.">
      <p>
        The Manager Key is not programmed to the locking system. Please follow the <span onClick={() => jumpAccordion(props.product+' Getting Started', 'Add Manager Keys')}>Add Additional Manager Keys</span> section of your product guide.
      </p>
      <p>
        If the lock does not open with your Manager Key, please contact <a href="/contact/">Digilock support</a> for further troubleshooting assistance.
      </p>
    </div>
    <div label="Our locks open with our Black and Yellow keys, but will not unlock with a code or RFID credential.">
      <p>
        The batteries need to be changed in the lock(s). The Programming and Manager Keys are designed with a built in power jumper to power jump the locks when the battery power is too low.
      </p>
    </div>
    <div label="A locker is stuck shut and nonresponsive when a user code or RFID credential is used. How can we get the door open?">
      <p>
        The Programming and Manager keys are designed with a built in power jumper. You will use either key in the standard way to power jump and unlock the locker.
      </p>
      <p>
        Immediately change the batteries with high alkaline, copper top batteries.
      </p>
    </div>
    <div label="My lock is emitting 10 rapid beeps. What is wrong?">
      <p>
        The lock is binding, which means that either door alignment or items in the locker are preventing the lock from operating
      </p>
      <p>
        Press on the door while operating the lock with a Programming or Manager key.
      </p>
      <p>
        If the lock does not open , please <a href="/contact/">contact Digilock support</a> for further troubleshooting assistance.
      </p>

    </div>
    <div label="My Lock emits a quick series of beeps, then a pause, then another quick set of beeps. What is wrong?">
      <p>
        The batteries are low.
      </p>
      <p>
        Use your Programming or Manager Key to power jump the lock.
      </p>
    </div>
    <div label="When I insert a Key, the lock emits three quick beeps, and does not unlock.">
      <p>
        Moisten a cotton swab with rubbing alcohol to clean the contact in the key slot.
      </p>
      <p>
        Please <a href="/contact/">contact Digilock support</a> if the problem persists.
      </p>
    </div>
    <div label="Can I move my locks to another location?">
      <p>
        Yes, you can take locks from one location and move them to another location.
      </p>
      <p>
        If locks are programmed to the same keys, there will no interruption in programming.
      </p>
      <p>
        If locks need to be programmed to a different Programming Key, please <a href="/contact/">contact Digilock support</a> for further assistance.
      </p>
    </div>
    <div label="We have locks at our facility that we purchased years ago. Can we send them in for a credit or for upgrade?">
      <p>
        Digilock offers an upgrade program to existing customers that want to upgrade their locking system.
      </p>
      <p>
        Please <a href="/contact/">contact Digilock support</a> for program details.
      </p>
    </div>
    <div label="Will my RFID Card work?">
      <p>
        Our RFID locks work with RFID credentials that operate on 13.56 MHz frequency on both iClass and Mifare standards.
      </p>
      <ul>
        <li>
          iClass is built on the ISO 15693 standard
        </li>
        <li>
          Mifare is built on the ISO 14443 standard
        </li>
      </ul>
      <p>
        The easiest way to ensure the RFID credential is compatible with our RFID lock product is to mail an RFID credential so that we can test the card.
      </p>
      <p>
        If we find that the RFID credential is not compatible, there are RFID stickers that will adhere to existing RFID cards, badges, fobs, etc.
      </p>
    </div>
  </Accordion>
)

export default KeypadKeyManagedRfid