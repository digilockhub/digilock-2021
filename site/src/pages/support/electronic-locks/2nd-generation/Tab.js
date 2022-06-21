import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans, useI18next, I18nextContext} from "gatsby-plugin-react-i18next";
import Accordion from '../../../../components/ui/legacy/Accordion/Accordion';
import { jumpAccordion } from '../../../../utils/utils';

//DOCUMENTS
import surfaceMount from '../../../../documents/legacy/support-pdf/InstallationInstructions/KT_S/KT_S_S.pdf'
import surfaceMountForMetal from '../../../../documents/legacy/support-pdf/InstallationInstructions/KT_S/KT_S_Metal.pdf'
import surfaceMountWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/KT_S/KT_S_SP.pdf'
import recessMount from '../../../../documents/legacy/support-pdf/InstallationInstructions/KT_S/KT_S_R.pdf'
import recessMountWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/KT_S/KT_S_RP.pdf'

import surfaceMountWt from '../../../../documents/legacy/support-pdf/InstallationInstructions/WT_S/WT_S_S.pdf'
import surfaceMountWtForMetal from '../../../../documents/legacy/support-pdf/InstallationInstructions/WT_S/WT_S_Metal.pdf'
import surfaceMountWtWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/WT_S/WT_S_SP.pdf'
import recessMountWt from '../../../../documents/legacy/support-pdf/InstallationInstructions/WT_S/WT_S_R.pdf'
import recessMountWtWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/WT_S/WT_S_RP.pdf'

import operatingWithKeys from '../../../../documents/legacy/support-pdf/OperatingProgramming/KTSandWTS.pdf'
import operatingWithoutKeys from '../../../../documents/legacy/support-pdf/OperatingProgramming/KTS-WTSNo-Keys.pdf'

import troubleshooting from '../../../../documents/legacy/support-pdf/Troubleshooting/Keypad_KTS_WTS.pdf'
import usingPowerJumper from '../../../../documents/legacy/support-pdf/Troubleshooting/InstructionSheets/UsingPowerJumper.pdf'
import changingTheBatteries from '../../../../documents/legacy/support-pdf/Troubleshooting/InstructionSheets/ChangingBatteries.pdf'
import resettingLock from '../../../../documents/legacy/support-pdf/Troubleshooting/InstructionSheets/reset.pdf'

import surfaceMountKPS from '../../../../documents/legacy/support-pdf/InstallationInstructions/KT_S/KT_S_S.pdf'
import surfaceMountKPSForMetal from '../../../../documents/legacy/support-pdf/InstallationInstructions/KT_S/KT_S_Metal.pdf'
import surfaceMountKPSWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/KP_S/KP_S_SP.pdf'
import recessMountKPS from '../../../../documents/legacy/support-pdf/InstallationInstructions/KP_S/KP_S_R.pdf'
import recessMountKPSWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/KP_S/KP_S_RP.pdf'
import surfaceMountWPS from '../../../../documents/legacy/support-pdf/InstallationInstructions/WP_S/WP_S_S.pdf'
import surfaceMountWPSForMetal from '../../../../documents/legacy/support-pdf/InstallationInstructions/WP_S/WP_S_Metal.pdf'
import surfaceMountWPSWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/WP_S/WP_S_SP.pdf'
import recessMountWPS from '../../../../documents/legacy/support-pdf/InstallationInstructions/WP_S/WP_S_R.pdf'
import recessMountWPSWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/WP_S/WP_S_RP.pdf'
import operatingWithKeysKPS from '../../../../documents/legacy/support-pdf/OperatingProgramming/KPSandWPS.pdf'
import operatingWithoutKeysKPS from '../../../../documents/legacy/support-pdf/OperatingProgramming/KPS-WPS-No-Keys.pdf'
import troubleshootingKPS from '../../../../documents/legacy/support-pdf/Troubleshooting/Keypad_KPS_WPS.pdf'
import surfaceMountKTH from '../../../../documents/legacy/support-pdf/InstallationInstructions/KT_H/KT_H_S.pdf'
import surfaceMountKTHForMetal from '../../../../documents/legacy/support-pdf/InstallationInstructions/KT_H/KT_H_Metal.pdf'
import surfaceMountKTHWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/KT_H/KT_H_SP.pdf'
import recessMountKTH from '../../../../documents/legacy/support-pdf/InstallationInstructions/KT_H/KT_H_R.pdf'
import recessMountKTHWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/KT_H/KT_H_RP.pdf'
import surfaceMountWTH from '../../../../documents/legacy/support-pdf/InstallationInstructions/WT_H/WT_H_S.pdf'
import surfaceMountWTHForMetal from '../../../../documents/legacy/support-pdf/InstallationInstructions/WT_H/WT_H_Metal.pdf'
import surfaceMountWTHWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/WT_H/WT_H_SP.pdf'
import recessMountWTH from '../../../../documents/legacy/support-pdf/InstallationInstructions/WT_H/WT_H_R.pdf'
import recessMountWTHWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/WT_H/WT_H_RP.pdf'
import operatingProgramming from '../../../../documents/legacy/support-pdf/OperatingProgramming/KTH.pdf'
import softwareUserGuide from '../../../../documents/legacy/support-pdf/OperatingProgramming/-HUserGuide.pdf'
import surfaceMountKPH from '../../../../documents/legacy/support-pdf/InstallationInstructions/KP_H/KP_H_S.pdf'
import surfaceMountWithPullKPH from '../../../../documents/legacy/support-pdf/InstallationInstructions/KP_H/KP_H_SP.pdf'
import recessMountKPH from '../../../../documents/legacy/support-pdf/InstallationInstructions/KP_H/KP_H_RP.pdf'
import recessMountKPHWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/KP_H/KP_H_R.pdf'
import surfaceMountKPHWithMetal from '../../../../documents/legacy/support-pdf/InstallationInstructions/KP_H/KP_H_Metal.pdf'
import surfaceMountWPH from '../../../../documents/legacy/support-pdf/InstallationInstructions/WP_H/WP_H_S.pdf'
import surfaceMountWPHWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/WP_H/WP_H_SP.pdf'
import recessMountWPH from '../../../../documents/legacy/support-pdf/InstallationInstructions/WP_H/WP_H_R.pdf'
import recessMountWPHWithPull from '../../../../documents/legacy/support-pdf/InstallationInstructions/WP_H/WP_H_RP.pdf'
import surfaceMountWPHWithMetal from '../../../../documents/legacy/support-pdf/InstallationInstructions/WP_H/WP_H_Metal.pdf'
import operatingWithoutSoftware from '../../../../documents/legacy/support-pdf/OperatingProgramming/KPH.pdf'
import instantProgrammingInst from '../../../../documents/legacy/support-pdf/OperatingProgramming/KLL-IPK.pdf'
import softwareProgrammingInst from '../../../../documents/legacy/support-pdf/OperatingProgramming/Matrix-User.pdf'
import instantProgrammingInstKLB from '../../../../documents/legacy/support-pdf/OperatingProgramming/KLB-KSB-IPK.pdf'
import instantProgrammingInstKeyKLB from '../../../../documents/legacy/support-pdf/OperatingProgramming/KLB-KSB-IPK-lockCKEY.pdf'

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
            2nd Generation
          </li>
        </ul>
        <div className="tab-content-container t-series">
          <div className={"tab-content "+getActiveClass(1, 'active')}>

            <div className="front-rear">
              <div onClick={() => jumpAccordion('KTS-WTS')}>
                <StaticImage
                    src={'../../../../images/locks/second-generation/KTS-2Prng.gif'}
                    loading={'lazy'}
                    width={'160'}
                    height={'164'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="KTS/WTS Electronic Lock"
                />
                <p>KTS/WTS</p>
              </div>
              <div onClick={() => jumpAccordion('KPS-WPS')}>
                <StaticImage
                    src={'../../../../images/locks/second-generation/KPS-2Prng.gif'}
                    loading={'lazy'}
                    width={'160'}
                    height={'164'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="KPS/WPS Electronic Lock"
                />
                <p>KPS/WPS</p>
              </div>
              <div onClick={() => jumpAccordion('KTH-WTH')}>
                <StaticImage
                    src={'../../../../images/locks/second-generation/KTH-2Prng.gif'}
                    loading={'lazy'}
                    width={'160'}
                    height={'164'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="KTH/WTH Electronic Lock"
                />
                <p>KTH/WTH</p>
              </div>
              <div onClick={() => jumpAccordion('KPH-WPH')}>
                <StaticImage
                    src={'../../../../images/locks/second-generation/KPH-2Prng.gif'}
                    loading={'lazy'}
                    width={'160'}
                    height={'164'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="KPH/WPH Electronic Lock"
                />
                <p>KPH/WPH</p>
              </div>
              <div onClick={() => jumpAccordion('KLL')}>
                <StaticImage
                    src={'../../../../images/locks/second-generation/KLL-2Prng.gif'}
                    loading={'lazy'}
                    width={'160'}
                    height={'164'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="KLL Electronic Lock"
                />
                <p>KLL</p>
              </div>
              <div onClick={() => jumpAccordion('KLB-KSB')}>
                <StaticImage
                    src={'../../../../images/locks/second-generation/KSB-2Prng.gif'}
                    loading={'lazy'}
                    width={'160'}
                    height={'164'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="KLB/KSB Electronic Lock"
                />
                <p>KLB/KSB</p>
              </div>
            </div>

            <div className="lists">
              <Accordion clsName={'legacy-support'}>
                <div label="KTS-WTS">
                  <Accordion clsName={'legacy-support'}>
                    <div label="KT-s Installation Instructions">
                      <a href={surfaceMount} target={'_blank'}>Surface Mount</a>
                      <a href={surfaceMountForMetal} target={'_blank'}>Surface Mount for Metal</a>
                      <a href={surfaceMountWithPull} target={'_blank'}>Surface Mount w/Pull</a>
                      <a href={recessMount} target={'_blank'}>Recess Mount</a>
                      <a href={recessMountWithPull} target={'_blank'}>Recess Mount w/Pull</a>
                    </div>
                    <div label="WT-s Installation Instructions">
                      <a href={surfaceMountWt} target={'_blank'}>Surface Mount</a>
                      <a href={surfaceMountWtForMetal} target={'_blank'}>Surface Mount for Metal</a>
                      <a href={surfaceMountWtWithPull} target={'_blank'}>Surface Mount w/Pull</a>
                      <a href={recessMountWt} target={'_blank'}>Recess Mount</a>
                      <a href={recessMountWtWithPull} target={'_blank'}>Recess Mount w/Pull</a>
                    </div>
                    <div label="Operating / Programming">
                      <a href={operatingWithKeys} target={'_blank'}>Operating/Programming with Keys</a>
                      <a href={operatingWithoutKeys} target={'_blank'}>Operating/Programming Without Keys</a>
                    </div>
                    <div label="Troubleshooting">
                      <a href={troubleshooting} target={'_blank'}>Troubleshooting</a>
                      <a href={usingPowerJumper} target={'_blank'}>Using a Power Jumper</a>
                      <a href={changingTheBatteries} target={'_blank'}>Changing the Batteries</a>
                      <a href={resettingLock} target={'_blank'}>Resetting a Lock</a>
                    </div>
                  </Accordion>
                </div>
                <div label="KPS-WPS">
                  <Accordion clsName={'legacy-support'}>
                    <div label="KP-s Installation Instructions">
                      <a href={surfaceMountKPS} target={'_blank'}>Surface Mount</a>
                      <a href={surfaceMountKPSForMetal} target={'_blank'}>Surface Mount for Metal</a>
                      <a href={surfaceMountKPSWithPull} target={'_blank'}>Surface Mount w/Pull</a>
                      <a href={recessMountKPS} target={'_blank'}>Recess Mount</a>
                      <a href={recessMountKPSWithPull} target={'_blank'}>Recess Mount w/Pull</a>
                    </div>
                    <div label="WP-s Installation Instructions">
                      <a href={surfaceMountWPS} target={'_blank'}>Surface Mount</a>
                      <a href={surfaceMountWPSForMetal} target={'_blank'}>Surface Mount for Metal</a>
                      <a href={surfaceMountWPSWithPull} target={'_blank'}>Surface Mount w/Pull</a>
                      <a href={recessMountWPS} target={'_blank'}>Recess Mount</a>
                      <a href={recessMountWPSWithPull} target={'_blank'}>Recess Mount w/Pull</a>
                    </div>
                    <div label="Operating / Programming">
                      <a href={operatingWithKeysKPS} target={'_blank'}>Operating/Programming With Keys</a>
                      <a href={operatingWithoutKeysKPS} target={'_blank'}>Operating/Programming Without Keys</a>
                    </div>
                    <div label="Troubleshooting">
                      <a href={troubleshootingKPS} target={'_blank'}>Troubleshooting</a>
                      <a href={usingPowerJumper} target={'_blank'}>Using a Power Jumper</a>
                      <a href={changingTheBatteries} target={'_blank'}>Changing the Batteries</a>
                      <a href={resettingLock} target={'_blank'}>Resetting a Lock</a>
                    </div>
                  </Accordion>
                </div>
                <div label="KTH-WTH">
                  <Accordion clsName={'legacy-support'}>
                    <div label="KT-h Installation Instructions">
                      <a href={surfaceMountKTH} target={'_blank'}>Surface Mount</a>
                      <a href={surfaceMountKTHForMetal} target={'_blank'}>Surface Mount for Metal</a>
                      <a href={surfaceMountKTHWithPull} target={'_blank'}>Surface Mount w/Pull</a>
                      <a href={recessMountKTH} target={'_blank'}>Recess Mount</a>
                      <a href={recessMountKTHWithPull} target={'_blank'}>Recess Mount w/Pull</a>
                    </div>
                    <div label="WT-h Installation Instructions">
                      <a href={surfaceMountWTH} target={'_blank'}>Surface Mount</a>
                      <a href={surfaceMountWTHForMetal} target={'_blank'}>Surface Mount for Metal</a>
                      <a href={surfaceMountWTHWithPull} target={'_blank'}>Surface Mount w/Pull</a>
                      <a href={recessMountWTH} target={'_blank'}>Recess Mount</a>
                      <a href={recessMountWTHWithPull} target={'_blank'}>Recess Mount w/Pull</a>
                    </div>
                    <div label="Operating / Programming">
                      <a href={operatingProgramming} target={'_blank'}>Operating/Programming</a>
                      <a href={softwareUserGuide} target={'_blank'}>Software User Guide</a>
                    </div>
                    <div label="Troubleshooting">
                      <a href={troubleshootingKPS} target={'_blank'}>Troubleshooting</a>
                      <a href={usingPowerJumper} target={'_blank'}>Using a Power Jumper</a>
                      <a href={changingTheBatteries} target={'_blank'}>Changing the Batteries</a>
                      <a href={resettingLock} target={'_blank'}>Resetting a Lock</a>
                    </div>
                  </Accordion>
                </div>
                <div label="KPH-WPH">
                  <Accordion clsName={'legacy-support'}>
                    <div label="KP-h Installation Instructions">

                      <a href={surfaceMountKPH} target={'_blank'}>Surface Mount</a>
                      <a href={surfaceMountWithPullKPH} target={'_blank'}>Surface Mount w/Pull</a>
                      <a href={recessMountKPH} target={'_blank'}>Recess Mount</a>
                      <a href={recessMountKPHWithPull} target={'_blank'}>Recess Mount w/Pull</a>
                      <a href={surfaceMountKPHWithMetal} target={'_blank'}>Surface Mount for Metal</a>

                    </div>
                    <div label="WP-h Installation Instructions">

                      <a href={surfaceMountWPH}>Surface Mount</a>
                      <a href={surfaceMountWPHWithPull}>Surface Mount w/Pull</a>
                      <a href={recessMountWPH}>Recess Mount</a>
                      <a href={recessMountWPHWithPull}>Recess Mount w/Pull</a>
                      <a href={surfaceMountWPHWithMetal}>Surface Mount for Metal</a>

                    </div>
                    <div label="Operating / Programming">
                      <a href={operatingWithoutSoftware}>Operating/Programming without Software</a>
                      <a href={softwareUserGuide}>Software User Guide</a>
                    </div>
                    <div label="Troubleshooting">
                      <a href={troubleshootingKPS} target={'_blank'}>Troubleshooting</a>
                      <a href={usingPowerJumper} target={'_blank'}>Using a Power Jumper</a>
                      <a href={changingTheBatteries} target={'_blank'}>Changing the Batteries</a>
                      <a href={resettingLock} target={'_blank'}>Resetting a Lock</a>
                    </div>
                  </Accordion>
                </div>
                <div label="KLL">
                  <Accordion clsName={'legacy-support'}>
                    <div label="Operating / Programming">
                      <option value={instantProgrammingInst}>Instant Programming Instructions</option>
                      <option value={softwareProgrammingInst}>Software Programming&nbsp;Kit&nbsp;Instructions
                      </option>
                    </div>
                    <div label="Troubleshooting">
                      <a href={troubleshootingKPS} target={'_blank'}>Troubleshooting</a>
                      <a href={usingPowerJumper} target={'_blank'}>Using a Power Jumper</a>
                      <a href={changingTheBatteries} target={'_blank'}>Changing the Batteries</a>
                      <a href={resettingLock} target={'_blank'}>Resetting a Lock</a>
                    </div>
                  </Accordion>
                </div>
                <div label="KLB-KSB">
                  <Accordion clsName={'legacy-support'}>
                    <div label="Operating / Programming">
                      <a href={instantProgrammingInstKLB}>Instant Programming Instructions</a>
                      <a href={instantProgrammingInstKeyKLB}>Instant&nbsp;Programming Instructions, Lock w/
                        C+Key+Key</a>
                      <a href={softwareProgrammingInst}>Software Programming&nbsp;Kit&nbsp;Instructions</a>
                    </div>
                    <div label="Troubleshooting">
                      <a href={troubleshootingKPS} target={'_blank'}>Troubleshooting</a>
                      <a href={usingPowerJumper} target={'_blank'}>Using a Power Jumper</a>
                      <a href={changingTheBatteries} target={'_blank'}>Changing the Batteries</a>
                      <a href={resettingLock} target={'_blank'}>Resetting a Lock</a>
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