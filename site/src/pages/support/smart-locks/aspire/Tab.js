import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans} from "gatsby-plugin-react-i18next";
import Accordion from '../../../../components/ui/legacy/Accordion/Accordion'


let dataSheetsKeypad = [
  {
    "title": "Smart Keypad with Mobile ID | Deadbolt Horizontal Body",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/3g8DPRw6hJZOJcbjwwgl4T/64c9165e4af9bcf2e02397e65581a510/DS-D6AKN-H-Bolt-Cable-DEN.pdf",
      "fileName": "DS-D6AKN-H-Bolt-Cable-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Smart Keypad with Mobile ID | Deadlatch Horizontal Body",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/1CxE0P8tuMRLsSnhzAhPE2/d307e9f23a24e675bdb8576e6d7a6d0b/DS-D6AKN-H-Latch-Cable-DEN.pdf",
      "fileName": "DS-D6AKN-H-Latch-Cable-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Smart Keypad with Mobile ID | Deadbolt Standard Body",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/3XaWKP83cMGDOr1HPGbKFn/653e065885346832bd12cdbc2aba9796/DS-D6AKN-S-Bolt-Cable-DEN.pdf",
      "fileName": "DS-D6AKN-S-Bolt-Cable-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Smart Keypad with Mobile ID | Deadlatch Standard Body",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/Wn1Wl6di1KH05VRqJmnvV/3b94c8f97f90e7298ac8f1523e0cffe9/DS-D6AKN-S-Latch-Cable-DEN.pdf",
      "fileName": "DS-D6AKN-S-Latch-Cable-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Smart Keypad with Mobile ID | Deadbolt Vertical Body",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/1J84GzmZ7AdggNdsQFGJPM/aaa4c9eba84842ee23100cf976345314/DS-D6AKN-V-Bolt-Cable-DEN.pdf",
      "fileName": "DS-D6AKN-V-Bolt-Cable-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Smart Keypad with Mobile ID | Deadlatch Vertical Body",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/4zynjc4UWMAcQHGzKuAPOU/7d7743c759bbc184334f8d5341440694/DS-D6AKN-V-Latch-Cable-DEN.pdf",
      "fileName": "DS-D6AKN-V-Latch-Cable-DEN.pdf",
      "contentType": "application/pdf"
    }
  }
];
let installGuidesKeypad = [
  {
    "title": "Install Guide Keypad & RFID",
    "file": {
      "url": "https://downloads.ctfassets.net/q5vaqi9g69zw/2PkM8fC8UcM6Me6uA7DIK1/6ccaca155307b00ead1745d4af720e8c/IG-D6AN-KR-DEN.pdf",
      "fileName": "IG-D6AN-KR-DEN.pdf",
      "contentType": "application/pdf"
    }
  }
];
let productGuidesKeypad = [
  {
    "title": "Keypad Shared & Assigned Use Functionality",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/4Ym8u81r95Xh049BIY1xH6/33ec7b5073b95453ac737e4e3bf6271a/PG-D6AKN-D-DEN.pdf",
      "fileName": "PG-D6AKN-D-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Keypad Assigned Use Functionality",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/33ghd28ihDurpvtHSsCrji/1d8e482fec529b86133685f8f0d47b40/PG-D6AKN-P-DEN.pdf",
      "fileName": "PG-D6AKN-P-DEN.pdf",
      "contentType": "application/pdf"
    }
  }
];
let dataSheetsRFID = [
  {
    "title": "Smart RFID with Mobile ID | Deadbolt Narrow Body",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/7byhJKWiHkzuazpZFECOy6/a20f29f9d2a240c4255c2b4f04891268/DS-D6ARN-N-Bolt-Cable-DEN.pdf",
      "fileName": "DS-D6ARN-N-Bolt-Cable-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Smart RFID with Mobile ID | Deadlatch Narrow Body",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/5UiWVUZ7e6XAnWRBawzNTT/1262766d46e26ff414072b2c78be32a8/DS-D6ARN-N-Latch-Cable-DEN.pdf",
      "fileName": "DS-D6ARN-N-Latch-Cable-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Smart RFID with Mobile ID | Deadlatch Narrow Body",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/2tO3AlhYs0V8kR3nFsEaLb/bf6c4025e3cd40f6f65ed42a852fc660/DS-D6ARN-S-Bolt-Cable-DEN.pdf",
      "fileName": "DS-D6ARN-S-Bolt-Cable-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Smart RFID with Mobile ID | Deadlatch",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/12IL7G3vJdSoeaX1EIQhLf/6ba841cbdd4426e9348a4f9ea19c8412/DS-D6ARN-S-Latch-Cable-DEN.pdf",
      "fileName": "DS-D6ARN-S-Latch-Cable-DEN.pdf",
      "contentType": "application/pdf"
    }
  }
];
let installGuidesRFID = [
  {
    "title": "Aspire Install Guide",
    "file": {
      "url": "https://downloads.ctfassets.net/q5vaqi9g69zw/6iDWITTIFq35t8MG2AXy17/66d9930f9da8ec23a9a621371ee2f5a8/IG-D6AN-KR-DEN.pdf",
      "fileName": "IG-D6AN-KR-DEN.pdf",
      "contentType": "application/pdf"
    }
  }
];
let productGuidesRFID = [
  {
    "title": "Touch-Free RFID Shared Use Functionality",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/T1hWORlXmQfCmOTnn5Ogp/49a6e0a4dbae7dd4284c166ce779a745/PG-D6ARN-D-DEN.pdf",
      "fileName": "PG-D6ARN-D-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Touch-Free RFID Assigned Use Functionality",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/3lAzXos9f329RZD7BBj5MW/5e5f4d490231b31d1e92fbc46f61c3ba/PG-D6ARN-P-DEN.pdf",
      "fileName": "PG-D6ARN-P-DEN.pdf",
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
            Aspire <Trans>network</Trans> <Trans>keypad</Trans>
          </li>
          <li
              className={getActiveClass(2, 'active')}
              onClick={() => toggleTab(2)}
          >
            Aspire <Trans>network</Trans> <Trans>rfid</Trans>
          </li>
        </ul>
        <div className="tab-content-container">
          <div className={"tab-content " + getActiveClass(1, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'../../../../images/locks/DL22-net-aspire-600x497.png'}
                  loading={'lazy'}
                  width={1200}
                  height={889}
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
              {/*DOCUMENTS*/}
              <div label="Document Library">
                <Accordion clsName={'next-support'}>
                  <div label="Data Sheets">
                    <div className="step-images">
                      <ul>
                        {
                          dataSheetsKeypad.map((doc, index) => (
                                  <li key={index}>
                                    <li key={index}>
                                      <a href={doc.file.url} target={'_blank'}>{doc.title}</a>
                                    </li>
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
            </div>
          </div>
          <div className={"tab-content " + getActiveClass(2, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'../../../../images/locks/DL22-net-aspire-600x497.png'}
                  loading={'lazy'}
                  width={1200}
                  height={889}
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
                {/*DOCUMENTS*/}
                <div label="Document Library">
                  <Accordion clsName={'next-support'}>
                    <div label="Data Sheets">
                      <div className="step-images">
                        <ul>
                          {
                            dataSheetsRFID.map((doc, index) => (
                                    <li key={index}>
                                      <li key={index}>
                                        <a href={doc.file.url} target={'_blank'}>{doc.title}</a>
                                      </li>
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
            </div>
          </div>
        </div>
      </div>
  );
};

export default Tab;