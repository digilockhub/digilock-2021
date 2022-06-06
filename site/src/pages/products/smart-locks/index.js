import React from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import {graphql} from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";
import aspireLogo from '../../../images/logos/logo-aspire.svg';
import versaLogo from '../../../images/logos/logo-versa.svg';
import orbitLogo from '../../../images/logos/logo-orbit.svg';
import digilinkLogo from '../../../images/logos/logo-digilink.svg';
import BCResponsivePlayer from "../../../components/video-player/BCResponsivePlayer";


const IndexPage = () => {

  const {t} = useTranslation();

  return (
      <Layout>
        <Seo
            title={t('Digilock Commercial Keyless Locks For Hospitals, Hospitality and Corporations')}
            description={'Learn about the best industry commercial keyless locks that leverage proprietary technology and is supported by a dedicated customer service team.'}
        />
        <div className="products smart-locks-page">
          <section className="hero --hero-image no-pad">
            <StaticImage
                src="../../../images/smart-locks/hero-smart.jpg"
                quality={100}
                layout={'fullWidth'}
                formats={["auto", "webp", "avif"]}
                alt="NEED ALT TAG"
            />
            <h6>
              <Trans>
                Smart Locks
              </Trans>
            </h6>
          </section>
          <section className={'smart-locks-overview'}>
            <div className="container">
              <h1>
                Cloud-based management for anytime, anywhere control
              </h1>
              <p>
                Smart Locks add a remote management advantage
              </p>
              <div className="center">
                <ul>
                  <li>Smart Locks add a remote management advantage</li>
                  <li>24/7 networked lock management through proprietary DigiLink® software</li>
                  <li>Wireless connectivity through Bluetooth Low Energy (BLE)</li>
                  <li>Keypad, RFID, or Mobile ID access</li>
                  <li>Integrates with existing access control systems and third party applications</li>
                  <li>Shared or Assigned Use functionality</li>
                  <li>Easy wire-free installation and seamless retrofit</li>
                  <li>ADA compliant options</li>
                  <li>Lifetime Digilock customer support</li>
                </ul>
              </div>
            </div>
          </section>
          <div className="section-delimeter container" />
          <section className="smart-aspire">
            <div className="container">
              <div className="grid-two-col">
                <div className="grid-two-col-item-single">
                  <StaticImage
                      src="../../../images/smart-locks/smart-aspire-four.png"
                      loading={'lazy'}
                      width={624}
                      height={461}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                </div>
                <div className="grid-two-col-item-single">
                  <img src={aspireLogo} width={'253'} height={'100'} alt=""/>
                  <h2>
                    Automatic-opening Smart Locks with stylish functionality
                  </h2>
                  <ul>
                    <li>Networked onsite/offsite management</li>
                    <li>Motorized opening with deadbolt or latch</li>
                    <li>Available in ultra slim surface mount</li>
                    <li>Horizontal or vertical orientation</li>
                    <li>Brushed Nickel or Matte Black finish</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div className="section-delimeter container" />
          <section className="smart-versa">
            <div className="container">
              <div className="grid-two-col">
                <div className="grid-two-col-item-single is-reversable">
                  <img src={versaLogo} width={'225'} height={'88'} alt=""/>
                  <h2>
                    Smart Lock management in slim, versatile profile
                  </h2>
                  <ul>
                    <li>Networked onsite/offsite management</li>
                    <li>Hand-turned cam operation</li>
                    <li>Options for knob style and orientation</li>
                    <li>Slim enough to retrofit over existing pedestal locks</li>
                    <li>Available in recessed or surface mounts</li>
                    <li>Brushed Nickel or Matte Black finish</li>
                  </ul>
                </div>
                <div className="grid-two-col-item-single">
                  <StaticImage
                      src="../../../images/smart-locks/smart-versa-four.png"
                      loading={'lazy'}
                      width={624}
                      height={461}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="section-delimeter container" />
          <section className="smart-orbit">
            <div className="container">
              <div className="grid-two-col">
                <div className="grid-two-col-item-single">
                  <StaticImage
                      src="../../../images/smart-locks/smart-orbit-four.png"
                      loading={'lazy'}
                      width={624}
                      height={461}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                </div>
                <div className="grid-two-col-item-single">
                  <img src={orbitLogo} width={'253'} height={'100'} alt=""/>
                  <h2>
                    Super-discrete touch-free Smart Lock
                  </h2>
                  <ul>
                    <li>Networked onsite/offsite management</li>
                    <li>Coin-sized low-profile design</li>
                    <li>Touch-free and auto-opening</li>
                    <li>Black or White</li>
                    <li>RFID and Mobile ID</li>
                    <li>Multi-directional locking orientation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div className="section-delimeter container" />
          <section className="smart-digilink">
            <div className="container">
              <div className="grid-two-col">
                <div className="grid-two-col-item-single">
                  <img className={'item-single-logo'} src={digilinkLogo} width={'255'} height={'81'} alt=""/>
                  <h2>
                    Here’s where our electronic lock solutions get Smart.
                  </h2>
                  <p>
                    DigiLink&reg; proprietary cloud-based software works with every Digilock Smart Lock to provide global management, anytime access, and 24/7 peace of mind.
                  </p>
                  <ul>
                    <li>Remotely manage access, locks, and users</li>
                    <li>Assign or remove credentials instantly</li>
                    <li>Custom dashboard for ultimate visibility, responsiveness, and reporting</li>
                    <li>View audit trail and usage data analytics reports</li>
                    <li>Soc2 Type II certified</li>
                  </ul>
                </div>
                <div className="grid-two-col-item-single">
                  <StaticImage
                      src="../../../images/smart-locks/smart-digilink.png"
                      loading={'lazy'}
                      width={624}
                      height={461}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <BCResponsivePlayer
                      vid={'6216703423001'}
                      cls={'digilink-video'}
                      dynId={'DigilinkVideo'}
                      translation={t('intro_digilink')}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
  )
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
