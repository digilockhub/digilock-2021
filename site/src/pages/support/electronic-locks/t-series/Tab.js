import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans, useI18next, I18nextContext} from "gatsby-plugin-react-i18next";
import Accordion from '../../../../components/ui/legacy/Accordion/Accordion';
import { jumpAccordion } from '../../../../utils/utils';

//DOCUMENTS
import tSeries from '../../../../documents/legacy/support-pdf/InstallationInstructions/T_Series.pdf'
import bkAdaCompliant from '../../../../documents/legacy/support-pdf/Troubleshooting/BK_ADA_Compliant.pdf'
import surfaceMount from '../../../../documents/legacy/support-pdf/InstallationInstructions/TE_TB-Gen2/TB_S.pdf'
import surfaceMountWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/TE_TB-Gen2/TB_SP.pdf'
import recessMount from '../../../../documents/legacy/support-pdf/InstallationInstructions/TE_TB-Gen2/TB_R.pdf'
import recessMountWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/TE_TB-Gen2/TB_RP.pdf'
import tbOperatingInstructions from '../../../../documents/legacy/support-pdf/OperatingProgramming/TB.pdf'
import troubleshooting from '../../../../documents/legacy/support-pdf/Troubleshooting/BK_ADA_Compliant.pdf'

import surfaceMountTE from '../../../../documents/legacy/support-pdf/InstallationInstructions/TE_TB-Gen2/TE_S.pdf'
import surfaceMountWithPullTE from '../../../../documents/legacy/support-pdf/InstallationInstructions/TE_TB-Gen2/TE_SP.pdf'
import recessMountTE from '../../../../documents/legacy/support-pdf/InstallationInstructions/TE_TB-Gen2/TE_R.pdf'
import recessMountWithPullTE from '../../../../documents/legacy/support-pdf/InstallationInstructions/TE_TB-Gen2/TE_RP.pdf'
import teOperatingInstructions from '../../../../documents/legacy/support-pdf/OperatingProgramming/TE.pdf'

import surfaceMountTETC from '../../../../documents/legacy/support-pdf/InstallationInstructions/TE-TB-gen1/TC-S.pdf'
import surfaceMountWithPullTETC from '../../../../documents/legacy/support-pdf/InstallationInstructions/TE-TB-gen1/TC-SP.pdf'
import recessMountTETC from '../../../../documents/legacy/support-pdf/InstallationInstructions/TE-TB-gen1/TC-R.pdf'
import recessMountWithPullTETC from '../../../../documents/legacy/support-pdf/InstallationInstructions/TE-TB-gen1/TC-RP.pdf'
import surfaceMountMetalTETC from '../../../../documents/legacy/support-pdf/InstallationInstructions/TE-TB-gen1/TC.pdf'
import operatingInstructionsTETC from '../../../../documents/legacy/support-pdf/OperatingProgramming/TE-gen1.pdf'
import operatingInstructionsTB from '../../../../documents/legacy/support-pdf/OperatingProgramming/TB-gen1.pdf'

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
            T-Series
          </li>
        </ul>
        <div className="tab-content-container t-series">
          <div className={"tab-content "+getActiveClass(1, 'active')}>
            <div className="front-rear">
              <div onClick={() => jumpAccordion('T-30, T-52, T-70')}>
                <StaticImage
                    src={'../../../../images/locks/t-series/T30.gif'}
                    loading={'lazy'}
                    width={'160'}
                    height={'154'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="Aspire Smart Lock"
                />
                <p>T-30</p>
              </div>
              <div onClick={() => jumpAccordion('T-30, T-52, T-70')}>
                <StaticImage
                    src={'../../../../images/locks/t-series/T52.gif'}
                    loading={'lazy'}
                    width={'160'}
                    height={'154'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="Aspire Smart Lock"
                />
                <p>T-52</p>
              </div>
              <div onClick={() => jumpAccordion('T-30, T-52, T-70')}>
                <StaticImage
                    src={'../../../../images/locks/t-series/T70.gif'}
                    loading={'lazy'}
                    width={'160'}
                    height={'154'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="Aspire Smart Lock"
                />
                <p>T-70</p>
              </div>
              <div onClick={() => jumpAccordion('TB')}>
                <StaticImage
                    src={'../../../../images/locks/t-series/TB-Square.gif'}
                    loading={'lazy'}
                    width={'160'}
                    height={'154'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="Aspire Smart Lock"
                />
                <p>TB</p>
              </div>
              <div onClick={() => jumpAccordion('TE')}>
                <StaticImage
                    src={'../../../../images/locks/t-series/TE-Square.gif'}
                    loading={'lazy'}
                    width={'160'}
                    height={'154'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="Aspire Smart Lock"
                />
                <p>TE</p>
              </div>
              <div onClick={() => jumpAccordion('TE/TC')}>
                <StaticImage
                    src={'../../../../images/locks/t-series/TC-LED.jpg'}
                    loading={'lazy'}
                    width={'122'}
                    height={'160'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="Aspire Smart Lock"
                />
                <p>TE/TC</p>
              </div>
              <div onClick={() => jumpAccordion('TB/LED')}>
                <StaticImage
                    src={'../../../../images/locks/t-series/TB-LED.jpg'}
                    loading={'lazy'}
                    width={'120'}
                    height={'160'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="Aspire Smart Lock"
                />
                <p>TB/LED</p>
              </div>
            </div>
            <div className="lists">
              <Accordion clsName={'legacy-support'}>
                <div label="T-30, T-52, T-70">
                  <Accordion clsName={'legacy-support'}>
                    <div label="Installation/Operating/Programming">
                      <a href={tSeries} target={'_blank'}>Surface Mount</a>
                    </div>
                    <div label="Troubleshooting">
                      <a href={bkAdaCompliant} target={'_blank'}>Troubleshooting</a>
                    </div>
                  </Accordion>
                </div>
                <div label="TB">
                  <Accordion clsName={'legacy-support'}>
                    <div label="Installation Instructions">
                      <a href={surfaceMount} target={'_blank'}>Surface Mount</a>
                      <a href={surfaceMountWithPull} target={'_blank'}>Surface Mount with Pull</a>
                      <a href={recessMount} target={'_blank'}>Recess Mount</a>
                      <a href={recessMountWithPull} target={'_blank'}>Recess Mount with Pull</a>
                    </div>
                    <div label="Operating/Programming">
                      <a href={tbOperatingInstructions} target={'_blank'}>TB&nbsp;Operating&nbsp;Instructions</a>
                    </div>
                    <div label="Troubleshooting">
                      <a href={troubleshooting} target={'_blank'}>Troubleshooting</a>
                    </div>
                  </Accordion>
                </div>
                <div label="TE">
                  <Accordion clsName={'legacy-support'}>
                    <div label="Installation Instructions">
                      <a href={surfaceMountTE} target={'_blank'}>Surface Mount</a>
                      <a href={surfaceMountWithPullTE} target={'_blank'}>Surface Mount with Pull</a>
                      <a href={recessMountTE} target={'_blank'}>Recess&nbsp;Mount</a>
                      <a href={recessMountWithPullTE} target={'_blank'}>Recess Mount with Pull</a>
                    </div>
                    <div label="Operating/Programming">
                      <a href={teOperatingInstructions} target={'_blank'}>TE&nbsp;Operating&nbsp;Instructions</a>
                    </div>
                    <div label="Troubleshooting">
                      <a href={troubleshooting} target={'_blank'}>Troubleshooting</a>
                    </div>
                  </Accordion>
                </div>
                <div label="TE/TC">
                  <Accordion clsName={'legacy-support'}>
                    <div label="Installation Instructions">
                      <a href={surfaceMountTETC} target={'_blank'}>Surface Mount</a>
                      <a href={surfaceMountWithPullTETC} target={'_blank'}>Surface Mount with Pull</a>
                      <a href={recessMountTETC} target={'_blank'}>Recess Mount</a>
                      <a href={recessMountWithPullTETC} target={'_blank'}>Recess Mount with Pull</a>
                      <a href={surfaceMountMetalTETC} target={'_blank'}>Surface Mount/Metal</a>
                    </div>
                    <div label="Operating/Programming">
                      <a href={operatingInstructionsTETC} target={'_blank'}>TE/TC&nbsp;Operating&nbsp;Instructions</a>
                    </div>
                  </Accordion>
                </div>
                <div label="TB/LED">
                  <Accordion clsName={'legacy-support'}>
                    <div label="Installation Instructions">
                      <a href={surfaceMountTETC} target={'_blank'}>Surface Mount</a>
                      <a href={surfaceMountWithPullTETC} target={'_blank'}>Surface Mount with Pull</a>
                      <a href={recessMountTETC} target={'_blank'}>Recess Mount</a>
                      <a href={recessMountWithPullTETC} target={'_blank'}>Recess Mount with Pull</a>
                      <a href={surfaceMountMetalTETC} target={'_blank'}>Surface Mount/Metal</a>
                    </div>
                    <div label="Operating/Programming">
                      <a href={operatingInstructionsTB} target={'_blank'}>TB&nbsp;Operating&nbsp;Instructions</a>
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