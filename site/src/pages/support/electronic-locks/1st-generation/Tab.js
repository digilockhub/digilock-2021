import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans, useI18next, I18nextContext} from "gatsby-plugin-react-i18next";
import Accordion from '../../../../components/ui/legacy/Accordion/Accordion';
import { jumpAccordion } from '../../../../utils/utils';
//DOCUMENTS
import surfaceMount from '../../../../documents/legacy/support-pdf/InstallationInstructions/KT/KT-S.pdf'
import surfaceMountForMetal from '../../../../documents/legacy/support-pdf/InstallationInstructions/KT/KT-M.pdf'
import surfaceMountWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/KT/KT-SP.pdf'
import recessMount from '../../../../documents/legacy/support-pdf/InstallationInstructions/KT/KT-R.pdf'
import recessMountWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/KT/KT-RP.pdf'
import surfaceMountWT from '../../../../documents/legacy/support-pdf/InstallationInstructions/WT/WT-S.pdf'
import surfaceMountWTWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/WT/WT-SP.pdf'
import recessMountWT from '../../../../documents/legacy/support-pdf/InstallationInstructions/WT/WT-R.pdf'
import recessMountWTWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/WT/WT-RP.pdf'
import operatingInst from '../../../../documents/legacy/support-pdf/OperatingProgramming/KTandWT.pdf'
import changingTheBatteries from '../../../../documents/legacy/support-pdf/Troubleshooting/InstructionSheets/ChangingBatteries.pdf'
import powerJumper from '../../../../documents/legacy/support-pdf/Troubleshooting/InstructionSheets/UsingPowerJumper.pdf'
import surfaceMountKP from '../../../../documents/legacy/support-pdf/InstallationInstructions/KP/KP-S.pdf'
import surfaceMountKPForMetal from '../../../../documents/legacy/support-pdf/InstallationInstructions/KP/KP-M.pdf'
import surfaceMountKPWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/KP/KP-SP.pdf'
import recessMountKP from '../../../../documents/legacy/support-pdf/InstallationInstructions/KP/KP-R.pdf'
import recessMountKPWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/KP/KP-RP.pdf'
import surfaceMountWP from '../../../../documents/legacy/support-pdf/InstallationInstructions/WP/WP-S.pdf'
import surfaceMountWPWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/WP/WP-SP.pdf'
import recessMountWP from '../../../../documents/legacy/support-pdf/InstallationInstructions/WP/WP-R.pdf'
import recessMountWPWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/WP/WP-RP.pdf'
import operatingInstWP from '../../../../documents/legacy/support-pdf/OperatingProgramming/KP-WP.pdf'

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
            1st Generation
          </li>
        </ul>
        <div className="tab-content-container t-series">
          <div className={"tab-content "+getActiveClass(1, 'active')}>

            <div className="front-rear">
              <div onClick={() => jumpAccordion('KT')}>
                <StaticImage
                    src={'../../../../images/locks/first-generation/KT-LED.jpg'}
                    loading={'lazy'}
                    width={'124'}
                    height={'159'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="KT Electronic Lock"
                />
                <p>KT</p>
              </div>
              <div onClick={() => jumpAccordion('WT')}>
                <StaticImage
                    src={'../../../../images/locks/first-generation/WT-LED.jpg'}
                    loading={'lazy'}
                    width={'146'}
                    height={'151'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="WT Electronic Lock"
                />
                <p>WT</p>
              </div>
              <div onClick={() => jumpAccordion('KP')}>
                <StaticImage
                    src={'../../../../images/locks/first-generation/KP-LED.jpg'}
                    loading={'lazy'}
                    width={'124'}
                    height={'159'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="KP Electronic Lock"
                />
                <p>KP</p>
              </div>
              <div onClick={() => jumpAccordion('WP')}>
                <StaticImage
                    src={'../../../../images/locks/first-generation/WP-LED.jpg'}
                    loading={'lazy'}
                    width={'147'}
                    height={'161'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="WT Electronic Lock"
                />
                <p>WP</p>
              </div>
            </div>
            <div className="lists">
              <Accordion clsName={'legacy-support'}>
                <div label="KT">
                  <Accordion clsName={'legacy-support'}>
                    <div label="KT Installation Instructions">
                      <a href={surfaceMount} target={'_blank'}>Surface Mount</a>
                      <a href={surfaceMountForMetal} target={'_blank'}>Surface Mount for Metal</a>
                      <a href={surfaceMountWithPull} target={'_blank'}>Surface Mount w/Pull</a>
                      <a href={recessMount} target={'_blank'}>Recess Mount</a>
                      <a href={recessMountWithPull} target={'_blank'}>Recess Mount w/Pull</a>
                    </div>
                    <div label="Operating/Programming">
                      <a href={operatingInst} target={'_blank'}>Operating/Programming Instructions</a>
                      <a href={changingTheBatteries} target={'_blank'}>Changing the Batteries</a>
                      <a href={powerJumper} target={'_blank'}>Using a Power Jumper</a>
                    </div>
                  </Accordion>
                </div>
                <div label="WT">
                  <Accordion clsName={'legacy-support'}>
                    <div label="WT Installations Instructions">
                      <a href={surfaceMountWT} target={'_blank'}>Surface Mount</a>
                      <a href={surfaceMountWTWithPull} target={'_blank'}>Surface Mount w/Pull</a>
                      <a href={recessMountWT} target={'_blank'}>Recess Mount</a>
                      <a href={recessMountWTWithPull} target={'_blank'}>Recess Mount w/Pull</a>
                    </div>
                    <div label="Operating/Programming">
                      <a href={operatingInst} target={'_blank'}>Operating/Programming Instructions</a>
                      <a href={changingTheBatteries} target={'_blank'}>Changing the Batteries</a>
                      <a href={powerJumper} target={'_blank'}>Using a Power Jumper</a>
                    </div>
                  </Accordion>
                </div>
                <div label="KP">
                  <Accordion clsName={'legacy-support'}>
                    <div label="KP Installation Instructions">
                      <a href={surfaceMountKP} target={'_blank'}>Surface Mount</a>
                      <a href={surfaceMountKPForMetal} target={'_blank'}>Surface Mount for Metal</a>
                      <a href={surfaceMountKPWithPull} target={'_blank'}>Surface Mount w/Pull</a>
                      <a href={recessMountKP} target={'_blank'}>Recess Mount</a>
                      <a href={recessMountKPWithPull} target={'_blank'}>Recess Mount w/Pull</a>
                    </div>
                    <div label="Operating/Programming">
                      <a href={operatingInstWP} target={'_blank'}>Operating/Programming Instructions</a>
                      <a href={changingTheBatteries} target={'_blank'}>Changing the Batteries</a>
                      <a href={powerJumper} target={'_blank'}>Using a Power Jumper</a>
                    </div>
                  </Accordion>
                </div>
                <div label="WP">
                  <Accordion clsName={'legacy-support'}>
                    <div label="WP Installation Instructions">
                      <a href={surfaceMountWP} target={'_blank'}>Surface Mount</a>
                      <a href={surfaceMountWPWithPull} target={'_blank'}>Surface Mount w/Pull</a>
                      <a href={recessMountWP} target={'_blank'}>Recess Mount</a>
                      <a href={recessMountWPWithPull} target={'_blank'}>Recess Mount w/Pull</a>
                    </div>
                    <div label="Operating/Programming">
                      <a href={operatingInstWP} target={'_blank'}>Operating/Programming Instructions</a>
                      <a href={changingTheBatteries} target={'_blank'}>Changing the Batteries</a>
                      <a href={powerJumper} target={'_blank'}>Using a Power Jumper</a>
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