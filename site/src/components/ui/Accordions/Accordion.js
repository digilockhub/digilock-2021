import React, {useState} from 'react';
import PropTypes, {node} from 'prop-types';
const data = [
  {
    "node": {
      "id": "35dae162-37c7-5bf4-a067-89f1f2938bd1",
      "title": "What standard options does DigiLock offer for keyless locks?",
      "content": "RFID (Radio Frequency Identification) or Digital Keypad."
    }
  },
  {
    "node": {
      "id": "87ba3dbd-5292-5c34-b3db-9a1fea4e18f1",
      "title": "Does Digilock offer Bluetooth locks?",
      "content": "Yes, please check out <a href=\"/products/smart-locks/\">Digilock 6G Smart Locks</a> or contact <a href=\"mailto:sales@digilock.com\">sales@digilock.com</a> to learn more."
    }
  },
  {
    "node": {
      "id": "f9c09293-2257-5689-b3af-f94f68400f97",
      "title": "What is Shared Use Mode?",
      "content": "In Shared Use Mode, locks remain unlocked until actively locked by a user. The user can select any unused, unlocked unit and enter their self-selected code (keypad locks) or present an RFID credential (RFID locks) to the lock. The lock will remain locked until unlocked by the same code or RFID credential. Once unlocked, the code or RFID credential is no longer stored and the unit is available for use by another user."
    }
  },
  {
    "node": {
      "id": "dcb6f453-206f-5e1e-a08b-21a4b73a9692",
      "title": "What is Assigned Use Mode?",
      "content": "In Assigned Use Mode, the lock is programmed to allow access by a specific set of codes or RFID credentials. In this functionality, the lock will only operate with the preprogrammed credentials. The lock automatically locks when closed unlike the Shared Use Mode locks."
    }
  },
  {
    "node": {
      "id": "643de529-b8cb-54dc-9a99-176abfb285c5",
      "title": "How many users can access an Assigned Use lock?",
      "content": "Depending on the lock model, selected Assigned Use locks may be programmed to accept 1 or 1-20 credentials or 1-250 if they have the tablet (code, key, or RFID)."
    }
  },
  {
    "node": {
      "id": "74ce4f2b-4d57-542d-9d30-4190dbaec2b2",
      "title": "Can Digilock keyless locks be integrated into a client’s building or security system for monitoring?",
      "content": "Digilock has several keyless lock options, and Digilock’s 6G Networked Smart Locks have advanced functionality to allow integration with other systems."
    }
  },
  {
    "node": {
      "id": "8b0d2dc1-5775-54c7-b45e-e846a7695aaf",
      "title": "Do Digilock keyless locks require electricity?",
      "content": "RFID and Digital Keypad locks are battery powered."
    }
  },
  {
    "node": {
      "id": "d1e62855-85ee-56e0-8337-9566cf499fc7",
      "title": "What type of battery is required?",
      "content": "Different lock models require distinct types of batteries. Please contact <a href=\"mailto:support@digilock.com\">support@digilock.com</a> or utilize our support chat online to learn more.<br /><br />General battery information:<br /><br />Replace with premium alkaline batteries. We recommend Duracell or Energizer batteries. Do not mix battery brands or use rechargeable batteries. Dispose or recycle used batteries according to local regulations."
    }
  },
  {
    "node": {
      "id": "431e6605-f815-5396-aa42-727dcb3fd1e5",
      "title": "When do I need a bolt verses latch?",
      "content": "Bolt locks are typically needed for shared-use applications and are designed to be in an unlocked position when not in use. Like a hotel safe, the lock will be unlocked until a user enters a desired code or RFID credential to lock it. Only that same code or credential will unlock it. Once in the unlocked position, the lock is now ready for the next user.<ul><li>Credential/Code is used to both lock and unlock</li></ul>Latch locks are designed for assigned-use applications and are made to always be in the locked position. For assigned use, the user credentials/code are previously assigned to the lock/user. Only assigned credentials/codes will be able to operate the lock. The credential/code is used to unlock the locker, then after 6 seconds the latch will automatically return to the locked position<ul><li>Credential/Code is only needed to unlock</li></ul>"
    }
  }
]
const Accordion = () => {

  const [selected, setSelected] = useState(false);
  const toggle = (id) => {
    if (selected === id) {
      return setSelected(false);
    }
    setSelected(id);
  }
  return (
      <div className={'-accordion'}>
        {data.map((item) => {
          return (
              <div key={item.node.id} className={'item'}>
                <div className={'title'} onClick={() => toggle(item.node.id)}>
                  <h3>{item.node.title}</h3>
                  <span>{selected === item.node.id ? '-' : '+'}</span>
                </div>
                <div className={selected === item.node.id ? 'content show' : 'content'} dangerouslySetInnerHTML={{__html:item.node.content}} />
              </div>
          )
        })}
      </div>
  );
}

Accordion.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default Accordion;