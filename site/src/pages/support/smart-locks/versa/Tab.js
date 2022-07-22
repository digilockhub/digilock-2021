import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans} from "gatsby-plugin-react-i18next";
import Accordion from '../../../../components/ui/legacy/Accordion/Accordion'

let dataSheetsKeypad = [
  {
    "title": "Smart Keypad with Mobile ID | Surface Mount | Vertical Body | Knob/ADA Handle on Bottom",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/55aFmAsAztpxVAHo1UpwQe/afe396236cb56a96e09f0d19786a5e54/DS-D6VK-N-1-0XB-DEN.pdf",
      "fileName": "DS-D6VK-N-1-0XB-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Smart Keypad with Mobile ID | Surface Mount | Vertical Body | Know/ADA Handle on Left",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/5DGkubjazlka8EQC7UWBgI/469aceef3855c4067945cf3a56d04021/DS-D6VK-N-1-0XL-DEN.pdf",
      "fileName": "DS-D6VK-N-1-0XL-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Smart Keypad with Mobile ID | Surface Mount | Vertical Body | Knob/ADA Handle on Right",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/6R3yDpF7oPqKE2hu3J2AZj/c49b56c70b23e134e1f2d8012f5433e0/DS-D6VK-N-1-0XR-DEN.pdf",
      "fileName": "DS-D6VK-N-1-0XR-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Smart Keypad with Mobile ID | Surface Mount | Vertical Body | Knob/ADA Handle on Top",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/3upZOGxLQugC54weVmdCMV/d3f1ffb107c784297591b7fb26dd1fd0/DS-D6VK-N-1-0XT-DEN.pdf",
      "fileName": "DS-D6VK-N-1-0XT-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Smart Keypad with Mobile ID | Recess Mount | Vertical Body | Knob/ADA Handle on Bottom",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/6Hz6VJirUwYYhLdxyUycqa/af12f52347a6d38e5edf59df525815b4/DS-D6VK-N-1-3XB-DEN.pdf",
      "fileName": "DS-D6VK-N-1-3XB-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Smart Keypad with Mobile ID | Recess Mount | Vertical Body | Knob/ADA Handle on Left",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/201OKcTiHAk88UqrRKiZxh/a30647555f09d5f0709f7f1a43c9a857/DS-D6VK-N-1-3XL-DEN.pdf",
      "fileName": "DS-D6VK-N-1-3XL-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Smart Keypad with Mobile ID | Recess Mount | Vertical Body | Knob/ADA Handle on Right",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/6pJ8ikTgeThPiLvbuTLWJO/0cb3b092eb24531fd1b059d2427eaab1/DS-D6VK-N-1-3XR-DEN.pdf",
      "fileName": "DS-D6VK-N-1-3XR-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Smart Keypad with Mobile ID | Recess Mount | Vertical Body | Knob/ADA Handle on Top",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/4AC5UG3wrBGCSYEOvWjtDX/417d0b2375c2640835427b71f3cd3ba0/DS-D6VK-N-1-3XT-DEN.pdf",
      "fileName": "DS-D6VK-N-1-3XT-DEN.pdf",
      "contentType": "application/pdf"
    }
  }
];
let installGuidesKeypad = [
  {
    "title": "Versa Install Guide",
    "file": {
      "url": "https://downloads.ctfassets.net/q5vaqi9g69zw/1n1QeKsv4OscPUUfyeYFd8/e8c68f4fedb55e15f8f5608e44de4382/IG-D6VHN-KR-DEN.pdf",
      "fileName": "IG-D6VHN-KR-DEN.pdf",
      "contentType": "application/pdf"
    }
  }
];
let productGuidesKeypad = [
  {
    "title": "Hybrid Keypad | Smart Lock",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/1LVMwrdN0xp8kxK9lOZ0lu/aa2a3a3220ed985205d69da1a055179c/PG-D6VK-NX-DEN.pdf",
      "fileName": "PG-D6VK-NX-DEN.pdf",
      "contentType": "application/pdf"
    }
  }
];
let dataSheetsRFID = [
  {
    "title": "Smart RFID with Mobile ID | Surface Mount | Narrow Body | Know/ADA Handle on Bottom, Left, or Right",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/5uJgOT3QZoSNz2qw0B7SvO/841cda455576f7b10a90147f2a3f27e3/DS-D6VR-N-1-0XN-DEN.pdf",
      "fileName": "DS-D6VR-N-1-0XN-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Smart RFID with Mobile ID | Surface Mount | Vertical Body | Knob/ADA Handle on Top",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/1Weuew0x3BrgMB1qZlcbHh/12f876118a38ea4ee637168c9567b38b/DS-D6VR-N-1-3XN-DEN.pdf",
      "fileName": "DS-D6VR-N-1-3XN-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Smart RFID with Mobile ID | Recess Mount | Narrow Body | Knob/ADA Handle on Bottom, Left, or Right ",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/5AdTXNAsbu8a46kvvXQXG3/4cc5e3334fa1230abeabdf3cdba48ac7/DS-D6VR-N-1-3XN-DEN.pdf",
      "fileName": "DS-D6VR-N-1-3XN-DEN.pdf",
      "contentType": "application/pdf"
    }
  },
  {
    "title": "Smart RFID with Mobile ID | Recess Mount | Vertical Body | Knob/ADA Handle on Top",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/3eoCx57GfBDAqpsWRPwX8A/93a42656b38489138e9f5765d41a8f40/DS-D6VR-N-1-3XT-DEN.pdf",
      "fileName": "DS-D6VR-N-1-3XT-DEN.pdf",
      "contentType": "application/pdf"
    }
  }
];
let installGuidesRFID = [
  {
    "title": "Install Guide Hybrid | Smart Lock",
    "file": {
      "url": "https://downloads.ctfassets.net/q5vaqi9g69zw/3vprQjoKFQT49rv4jepb1j/43fe6e410d81b2286a2f34ad45c7ee5e/IG-D6VHN-KR-DEN.pdf",
      "fileName": "IG-D6VHN-KR-DEN.pdf",
      "contentType": "application/pdf"
    }
  }
];
let productGuidesRFID = [
  {
    "title": "Product Guide Hybrid Touch-Free RFID | Smart Lock",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/5roh7dePvV8p1YLXSJmiup/779cd6d994d698c7c217e05a383b6eb3/PG-D6VR-NX-DEN.pdf",
      "fileName": "PG-D6VR-NX-DEN.pdf",
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
            Versa <Trans>keypad</Trans> <Trans>smart_lock</Trans>
          </li>
          <li
              className={getActiveClass(2, 'active')}
              onClick={() => toggleTab(2)}
          >
            Versa <Trans>rfid</Trans> <Trans>smart_lock</Trans>
          </li>
        </ul>
        <div className="tab-content-container">
          <div className={"tab-content "+getActiveClass(1, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'../../../../images/locks/DL22-net-versa-600x497.png'}
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
          <div className={"tab-content "+getActiveClass(2, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'../../../../images/locks/DL22-net-versa-600x497.png'}
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