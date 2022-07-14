import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans} from "gatsby-plugin-react-i18next";
import Accordion from '../../../../components/ui/legacy/Accordion/Accordion'
import DigiSymbol from '../../../../components/ui/legacy/DigiSymbols/DigiSymbol'
import {jumpAccordion} from "../../../../utils/utils";


let brochuresKeypad = [
  {
    "title": "Aspire V0.6 - coming soon.",
    "file": {
      "url": "#",
      "fileName": "DS-Aspire-Dual-Keypad.pdf",
      "contentType": "application/pdf"
    }
  }
];
let installGuidesKeypad = [
  {
    "title": "Aspire Install Guice",
    "file": {
      "url": "https://downloads.ctfassets.net/q5vaqi9g69zw/5OopVVVMyPXOmt8GNlBVqR/ac1d0db9e6dfe6e8767b822af8d7b028/IG-D6AN-KR-DEN.pdf",
      "fileName": "IG-D6AN-KR-DEN.pdf",
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
let brochuresRFID = [
  {
    "title": "Aspire Brochure",
    "file": {
      "url": "https://assets.ctfassets.net/q5vaqi9g69zw/5l4Od8Jce0NCYqDepMHYK5/bb49d1a1fb6fbf1641c6a4d55351d90b/DIGILOCK-ASPIRE-RFID-NETWORK-PRODUCT-BROCHURE.pdf",
      "fileName": "DIGILOCK-ASPIRE-RFID-NETWORK-PRODUCT-BROCHURE.pdf",
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
              <Accordion clsName={'next-support'}>
                {/*DOCUMENTS*/}
                <div label="Document Library">
                  <Accordion clsName={'next-support'}>
                    <div label="Brochures">
                      <div className="step-images">
                        <ul>
                          {
                            brochuresKeypad.map((doc, index) => (
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
                    {/*<div label="Product Guides">*/}
                    {/*  <div className="step-images">*/}
                    {/*    <ul>*/}
                    {/*      {*/}
                    {/*        productGuidesKeypad.map((doc, index) => (*/}
                    {/*                <li key={index}>*/}
                    {/*                  <a href={doc.file.url} target={'_blank'}>{doc.title}</a>*/}
                    {/*                </li>*/}
                    {/*            )*/}
                    {/*        )*/}
                    {/*      }*/}
                    {/*    </ul>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                  </Accordion>
                </div>
                <div label="Document Library">
                  <Accordion clsName={'next-support hide'}>
                    <div label="Brochures">
                      <div className="step-images">
                        <ul>
                          {
                            brochuresKeypad.map((doc, index) => (
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
              </Accordion>
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
              <Accordion clsName={'next-support'}>
                {/*DOCUMENTS*/}
                <div label="Document Library">
                  <Accordion clsName={'next-support'}>
                    <div label="Brochures">
                      <div className="step-images">
                        <ul>
                          {
                            brochuresRFID.map((doc, index) => (
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
                    {/*<div label="Product Guides">*/}
                    {/*  <div className="step-images">*/}
                    {/*    <ul>*/}
                    {/*      {*/}
                    {/*        productGuidesRFID.map((doc, index) => (*/}
                    {/*                <li key={index}>*/}
                    {/*                  <a href={doc.file.url} target={'_blank'}>{doc.title}</a>*/}
                    {/*                </li>*/}
                    {/*            )*/}
                    {/*        )*/}
                    {/*      }*/}
                    {/*    </ul>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                  </Accordion>
                </div>
                <div label="Document Library">
                  <Accordion clsName={'next-support hide'}>
                    <div label="Brochures">
                      <div className="step-images">
                        <ul>
                          {
                            brochuresKeypad.map((doc, index) => (
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
              </Accordion>
            </div>
          </div>
        </div>

      </div>
  );
};

export default Tab;