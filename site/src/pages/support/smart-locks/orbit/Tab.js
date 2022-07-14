import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans} from "gatsby-plugin-react-i18next";
import Accordion from '../../../../components/ui/legacy/Accordion/Accordion'


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
            Orbit <Trans>rfid</Trans>
          </li>
        </ul>
        <div className="tab-content-container">
          <div className={"tab-content "+getActiveClass(1, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'../../../../images/locks/DL22-net-orbit-600x497.png'}
                  loading={'lazy'}
                  width={1200}
                  height={889}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
              <StaticImage
                  src={'../../../../images/locks/fpo.png'}
                  loading={'lazy'}
                  width={'795'}
                  height={'624'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
            </div>
            <div className="lists">
              Lists FPO...
            </div>
          </div>
        </div>

      </div>
  );
};

export default Tab;