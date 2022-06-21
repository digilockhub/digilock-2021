import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans, useI18next, I18nextContext} from "gatsby-plugin-react-i18next";
import Accordion from '../../../../components/ui/legacy/Accordion/Accordion';
import { jumpAccordion } from '../../../../utils/utils';

//DOCUMENTS
import surfaceMountMetalPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/KTE-KPE-Install.pdf'
import operateProgramInst from '../../../../documents/legacy/support-pdf/OperatingProgramming/KTEOperating.pdf'
import operateProgramInstKPE from '../../../../documents/legacy/support-pdf/OperatingProgramming/KPS-WPSOperatingProgrammingInstructions.pdf'

const Tab = (props) => {
  const {changeLanguage} = useI18next();
  const context = React.useContext(I18nextContext);
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
            KTE/KPE
          </li>
        </ul>
        <div className="tab-content-container t-series">
          <div className={"tab-content "+getActiveClass(1, 'active')}>
            <div className="front-rear">
              <div>
                <StaticImage
                    src={'../../../../images/locks/EmployeeLock.jpg'}
                    loading={'lazy'}
                    width={'150'}
                    height={'166'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt=" KTE/KPE Electronic Lock"
                />
              </div>
            </div>
            <div className="lists">
              <Accordion clsName={'legacy-support'}>
                <div label="KTE">
                  <Accordion clsName={'legacy-support'}>
                    <div label="Installation Instructions">
                      <a href={surfaceMountMetalPull} target={'_blank'}>Surface Mount for Metal with Pull</a>
                    </div>
                    <div label="Operation / Programming">
                      <a href={operateProgramInst} target={'_blank'}>Operating/Programming&nbsp;Instructions</a>
                    </div>
                  </Accordion>
                </div>
                <div label="KPE">
                  <Accordion clsName={'legacy-support'}>
                    <div label="Installation Instructions">
                      <a href={surfaceMountMetalPull} target={'_blank'}>Surface Mount for Metal with Pull</a>
                    </div>
                    <div label="Operation / Programming">
                      <a href={operateProgramInst} target={'_blank'}>Operating/Programming&nbsp;Instructions</a>
                      <a href={operateProgramInstKPE} target={'_blank'}>Operating/Programming&nbsp;Instructions w/Keys</a>
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