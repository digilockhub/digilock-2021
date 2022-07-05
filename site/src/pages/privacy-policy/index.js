import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {graphql} from 'gatsby';



const IndexPage = () => {

  const {t} = useTranslation();

  return (
      <Layout>
        <Seo
            title={t('Privacy Policy | Digilock')}
            description={'Security People, Inc. dba Digilock (“Digilock”) processes your personal information to meet our legal, statutory and contractual obligations and to provide you with our products and services. We will never collect any unnecessary personal data from you and do not process your information in any way, other than as specified in this notice.'}
        />
        <div className="privacy-policy">
          <section className="hero">
            <div className="container">
              <h1>
                Digilock Privacy Policy
              </h1>
              <p>Last Reviewed and Approved: November 8, 2021</p>
              <div>
                <h2>Who We Are</h2>
                <p>
                  Security People, Inc., dba Digilock (“Digilock”), ('we' or 'us' or 'our') provide electronic lock products and services to our customers. In connection with our business and providing our products and services, we gather and process your personal information in accordance with this privacy policy (notice) and in compliance with the relevant data privacy laws and regulations. This notice provides you with the necessary information regarding your rights and our obligations, and explains how, why, and when we process your personal data.
                </p>
                <h2>Information We Collect</h2>
                <p>We process (i.e., collect, use, store, etc.) your personal information to conduct our business, meet our legal, statutory, and contractual obligations and to provide you with our products and services. We intend to only process your information as specified within this privacy policy (notice).</p>
                <h2>Personal Data Collection</h2>
                <p>
                  The personal data that we collect includes:
                </p>
                <ul>
                  <li>Name</li>
                  <li>Job title</li>
                  <li>Business name</li>
                  <li>Business address</li>
                  <li>Business email</li>
                  <li>Telephone number</li>
                  <li>Mobile telephone number</li>
                  <li>Cookies</li>
                  <li>Website usage data (Google Analytics)</li>
                  <li>Behavior and response to direct marketing campaigns (email, social media, postal, telephone)</li>
                </ul>
                <h2>How We Collect Information</h2>

                <ul>
                  <li>Orders</li>
                  <li>Email correspondence</li>
                  <li>Inquiries</li>
                  <li>Face-to-face meetings and events</li>
                  <li>Customer referrals</li>
                  <li>Social media</li>
                  <li>Purchased lists, directories and adverstising</li>
                  <li>IP address information and website browsing activity</li>
                  <li>Web application usage for our DigiLink and PackageHold solutions</li>
                  <li>Website activity</li>
                  <li>Interaction with email marketing campaigns</li>
                </ul>

                <h2>How We Use Your Personal Data</h2>
                <p>
                  Digilock takes your privacy very seriously and does not disclose, share, or sell your data without your consent, unless required to do so by law. We only retain your data for as long as is necessary and for the purpose(s) specified in this notice or required by law. Where you have consented to us providing you with promotional offers and marketing, you are free to withdraw this consent at any time.
                </p>
                <p>
                  The purposes and reasons for processing your personal data are detailed below:
                </p>
                <ul>
                  <li>
                    We collect your personal data in the performance of a contract or to provide a service and to ensure that orders are completed and can be sent out to your preferred address
                  </li>
                  <li>
                    We collect and store your personal data as part of our legal obligation for business accounting and tax purposes
                  </li>
                  <li>
                    We will occasionally send you marketing information where we have assessed that it is beneficial to you as a customer and in our interests. Such information will be non-intrusive and is processed on the grounds of legitimate interests
                  </li>
                </ul>
                <h2>Your Privacy Rights</h2>
                <p>
                  Under data privacy laws and regulations, you are entitled to several individual rights pertaining to your personal information processed by Digilock, including:
                </p>
                <ul>
                  <li>
                    <strong>Right to Access -</strong> Your right to request access to the personal information our business collects about you. This includes your right to request a copy of the personal information we process about you. Upon request, we will provide you with a copy of your personal information, as deemed necessary and appropriate considering your rights under privacy law, our privacy practices, and any applicable legal exceptions. If you want to access your information, submit a detailed request for your information using our Data Privacy Request Form (see Data Privacy Request Form section below)
                  </li>
                  <li>
                    <strong>Right to be Informed -</strong> Your right to be informed about our processing activities of your personal information. This includes the right to:
                    <ul>
                      <li>Know the type of personal data we collect about you</li>
                      <li>The categories of personal data concerned</li>
                      <li>Why we collect your data</li>
                      <li>Where the information is collected (If we did not collect the data directly from you, information about the source)</li>
                      <li>Our purposes for processing your information</li>
                      <li>Recipients to whom the personal data has/will be disclosed</li>
                      <li>How long we intend to store your personal data</li>
                    </ul>

                  </li>
                  <li>
                    <strong>Right to Consent -</strong> Your right to object to our processing or selling of your personal information.
                  </li>
                  <li>
                    <strong>Right to Equality -</strong> Your right to not be discriminated against due to your refusal to consent to our marketing and data processing activities.
                  </li>
                  <li>
                    <strong>Right to Erasure (Deletion, or to be Forgotten) -</strong> Your right to request erasure of your personal data or to restrict processing (where applicable) in accordance with the data protection laws; as well as to object to any direct marketing from us. Upon request, we can delete your personal information processed by our company, as deemed necessary and appropriate considering your rights under privacy law, our privacy practices, and any applicable legal exceptions. If you want to request deletion of your information, submit a detailed request for your information using our Data Privacy Request Form (see Data Privacy Request Form section below).
                  </li>
                  <li>
                    <strong>Right to Modification -</strong> Your right to request that we update or correct your personal information. If you believe that we hold any incomplete or inaccurate data about you, you have the right to ask us to correct and/or complete the information and we will strive to do so as quickly as possible; unless there is a valid reason for not doing so, at which point you will be notified.
                  </li>
                </ul>
                <p>
                  Depending on the privacy law or regulation applicable to our business and your personal information, you may have additional rights under privacy law, including the right to data portability of your information and the right to be informed about any automated decision-making we may use.
                </p>
                <h2>Data Privacy Request Form</h2>
                <p>
                  If you would like to request that we perform any activities related to your rights under privacy law, please <a href={'/contact/?section=privacy'}>submit a request to our team using our Data Privacy Request Form.</a>
                  We will review your request and process as deemed necessary and appropriate considering your rights under privacy law, our privacy practices, and any applicable legal exceptions. If we receive a request from you to exercise any of the above rights, we may ask you to verify your identity before acting on the request; this is to ensure that your data is protected and kept secure.
                </p>
                <p>
                  We will review your request and process as deemed necessary and appropriate considering your rights under privacy law, our privacy practices, and any applicable legal exceptions. If we receive a request from you to exercise any of the above rights, we may ask you to verify your identity before acting on the request; this is to ensure that your data is protected and kept secure.
                </p>

                <h2>Sharing and Disclosing Your Personal Information</h2>
                <p>
                  We do not share or disclose any of your personal information without your consent, other than for the purposes specified in this notice or where there is a legal requirement. Digilock uses third-parties to perform business activities described within this privacy policy (defined within the “Who We Are” and “Information We Collect” sections above); however, all processors acting on our behalf only process your data in accordance with instructions from us and comply fully with this privacy notice, the data protection laws and any other appropriate confidentiality and security measures.
                </p>
                <h2>Digilock Third Party Data Processors</h2>
                <p>
                  Digilock utilizes the third-party systems and service providers to conduct business activities and delivery our products and services. Use of our products and services may include the collection and processing of your personal information via use of these third-party services. We have established agreements with these third parties, which include the appropriate safeguarding of any personal information being processed by their services, and we monitor the activities of our third-party service providers to evaluate their adherence to these agreements.
                </p>
                <p>
                  Digilock takes your privacy seriously and takes reasonable measures and precautions to protect and secure your personal data. We work hard to protect your information from unauthorized access, alteration, disclosure or destruction and have several layers of security measures in place, including implementation and use of:
                </p>
                <ul>
                  <li>User authentication systems and controls</li>
                  <li>Restriction of user access to our systems and data</li>
                  <li>Network security systems and controls, including firewalls, VPN, encryption, etc.</li>
                  <li>Anti-virus/malware solutions and controls</li>
                  <li>App-based enhanced mobile security</li>
                  <li>Risk management and governance activities</li>
                </ul>
                <h2>Access to Your Data</h2>
                <p>
                  Access. We implement user authentication and user access management procedures to prevent unauthorized access to your data. Customers that use our DigiLink or PackageHold web applications may input personal information into the web applications to facilitate the functioning and use of the application and our services. These users are required to validate their identity via user authentication and are responsible for managing access to their web application environment.
                </p>
                <p>
                  Least-Privilege. Our policies and procedures for access control require that access to your data be limited to our personnel as required to perform necessary and appropriate roles and responsibilities, in connection with our services and commitments for security, confidentiality, and privacy. We restrict access to your information based on these commitments and requirements, limiting access to your data to authorized personnel that must have the access to perform job roles and responsibilities.
                </p>
                <h2>Transfers Outside the EU</h2>
                <p>
                  Digilock, and our subsidiary Digilock Europe BV, utilizes some products or services (or parts of them) that may be hosted/stored in the USA, which means that we may transfer any information, which is submitted by you through the website, outside the European Economic Area ("EEA") for the below purposes:
                </p>
                <ul>
                  <li>Website Hosting</li>
                  <li>Email Communication</li>
                  <li>Customer Relations and Marketing Activities</li>
                </ul>
                <p>
                  Considering, when you use our website, send us an email, or sign up to our newsletter, the personal information you submit may be stored on servers which are hosted in the USA. Where this is the case, we will take steps to ensure that we use secure technologies and solutions when handling for your information and abide by applicable laws, regulations, and contractual obligations to protect your data and comply with the relevant data protection laws.
                </p>
                <p>
                  Additionally, we may share personal data across the Digilock entities. Access to this data is highly restricted outside the EU and can only be processed by limited members of Digilock’s global team.
                </p>
                <h2>Failure to Provide Your Data</h2>
                <p>
                  You are not obligated to provide your personal information to Digilock; however, the receipt of your personal information may be required for us to provide you with our services or deliver your products. If you do not consent or provide other authorization to use your personal information, we may not be able to offer some of our services without it.
                </p>
                <h2>
                  Digilock Business and Marketing - Legitimate Interests
                </h2>
                <p>As mentioned in the 'How We Use Your Personal Data' section of this policy, we occasionally process your personal information under the legitimate interest legal basis. Where this is the case, we have carried out a thorough Legitimate Interests Assessment (LIA) to ensure that we have weighed your interests and any risk posed to you against our own interests; ensuring that they are proportionate and appropriate.</p>

                <p>We use the legitimate interests as our legal basis for processing your personal data and have identified that our interests are direct marketing, keeping our records up to date, identifying and recording which of our products are of interest to you, and seeking your consent when we needed for further data processing.</p>

                <h2>DigiLink and PackageHold Systems - Contractual Obligation</h2>
                <p>
                  For our DigiLink and PackageHold web applications, we have determined that we process personal information to adhere to contractual obligations of our customers (system users) which have legally engaged to use our smart lock management and/or package locker management web applications, DigiLink/PackageHold.
                </p>
                <h2>
                  How Long We Keep Your Data
                </h2>
                <p>Digilock, and our subsidiaries retain personal information for as long as it is necessary to conduct our legitimate interest or contractual obligations, with exception to any legal or regulatory requirements applicable to our business. We follow established policies and procedures for data security and data retention to meet our objectives for data protection and appropriate management of your data.</p>

                <p>We conduct a regular review of data processed by our company to ensure that we only retain information needed to conduct our processing activities. Where deemed necessary based on our legal and regulatory requirements, including Dutch tax law, retain your basic personal data (name, address, contact details) for the duration of time needed to conduct necessary processing activities and comply with applicable law and regulation.</p>

                <p>We collect consent from our website visitors to collect and process data needed for our company to conduct direct marketing activities. Where you have consented to us using your details for direct marketing, we will keep such data until you notify us otherwise and/or withdraw your consent. When you have withdrawn consent, we will remove your data from our system to ensure that we cease processing activities.</p>
                <h2>
                  Special Categories Data
                </h2>
                <p>
                  Regarding our offered product and services, Digilock is unlikely to collect or process “special category” data (i.e., ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, genetic data, biometric data, etc.) about you. In the event that we collect such information, we will only request and process the minimum necessary for the specified purpose and identify a compliant legal basis for doing so.
                </p>
                <h2>
                  Our Use of Cookies
                </h2>
                <p>
                  A 'cookie' is a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. When you visit a site that uses cookies for the first time, a cookie is downloaded onto your computer/mobile device so that the next time you visit that site, your device will remember useful information such as items added in the shopping cart, visited pages or logging in options. Cookies are widely used in order to make websites work, or to work more efficiently, and our site relies on cookies to optimize user experience and for features and services to function properly.
                </p>
                <p>
                  Most web browsers allow some control to restrict or block cookies through the browser settings; however, if you disable cookies, you may experience a different, more restrictive, ability to use certain parts of our website or services. For more information about cookies visit <a href={'https://www.aboutcookies.org'} target={'_blank'}> https://www.aboutcookies.org</a>.
                </p>
                <p>
                  In connection with the use of our products and services, we may use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your computer until you delete them) to provide you with a more personal and interactive experience on our website, products, or services. We obtain consent to use these cookies via use of our cookie banner on our website, which allows you to allow or deny cookies, and any contractual agreements in place with the delivery of our products or services.
                </p>
                <h2>
                  Changes To This Privacy Policy
                </h2>
                <p>
                  This privacy policy is subject to occasional revision. If we make any material changes in the way we
                  use your personal data, we will notify you by sending you an e-mail to the last e-mail address you
                  provided to us and/or by prominently posting notice of the changes on our Site. Any changes to this
                  privacy policy will be effective upon the earlier of thirty (30) calendar days following our dispatch of
                  an e-mail notice to you or thirty (30) calendar days following our posting of notice of the changes on
                  our website. These changes will be effective immediately for new users of our products or services.
                </p>
                <p>
                  <strong>Please note:</strong> At all times you are responsible for updating your personal data to provide us with your most current e-mail address. In the event that the last e-mail address that you have provided us is not valid, or for any reason is not capable of delivering to you the notice described above, our dispatch of the e-mail containing such notice will nonetheless constitute effective notice of the changes described in the notice.
                </p>
                <h2>
                  File a Complaint
                </h2>
                <p>
                  Digilock processes your personal information in compliance with this privacy policy and in accordance with the relevant data protection laws and regulations. If, however, you wish to raise a complaint regarding the processing of your personal data or are unsatisfied with how we have handled your information, you have the right to file a complaint with our company, using our Data Privacy Request Form (linked above), or with a data privacy supervisory authority:
                </p>
                <h2>
                  Contact Digilock (United States)
                </h2>
                <p>
                  <strong>Digilock</strong><br/>
                  9 Willowbrook Court<br/>
                  Petaluma, CA 94954<br/>
                  United States
                </p>
                <p>
                  telephone / 707-766-6000<br/>
                  email / <a href="mailto:sales@digilock.com">sales@digilock.com</a>
                </p>
                <h2>
                  Contact Digilock (Europe)
                </h2>
                <p>
                  <strong>Digilock Europe BV</strong><br/>
                  Contact: Geert.N.W van Dijk<br/>
                  Schillingweg 22, 2153 PL Nieuw-Vennep, The Netherlands
                </p>
                <p>
                  telephone / +31 6 53751414<br/>
                  email / <a href="mailto:geert.vandijk@digilock.eu">geert.vandijk@digilock.eu</a>
                </p>
                <h2>
                  Information Commissioner’s Office
                </h2>
                <p>
                  Schillingweg 22, 2153 PL Nieuw-Vennep <br/>
                  telephone /  +31 20 303 30 60
                </p>
              </div>
            </div>
          </section>
          <section className={'hero gdpr-statement'}>
            <div className="container">
              <h2>
                GDPR Statement
              </h2>
              <p>
                At Digilock, we understand the importance of protecting your data. It’s a big deal. With security at the core of our business, products, and services, we understand the importance of protecting valuables, including your personal information.
              </p>
              <p>
                This articleis designed to provide insight into our plans for privacy and compliance with the General Data Protection Regulation (GDPR) and our procedures to ensure that the sensitive, confidential, and personal information  we  collect  is  handled  with  care  and  protected  from  unauthorized  access,  disclosure, manipulation, or subject to data breach.
              </p>
              <h2>
                Data Security
              </h2>
              <p>
                There  are  many  components  to  data  privacy  compliance  with  GDPR,  including  our  responsibility  to implement systems and processes that protect personal information processed by our company.
              </p>
              <p>
                Considering security is one of the primary and fundamental components to GDPR compliance, let’s review security  related  to  our  business,  products,  services.  As  a  security  company,  maintaining  our security practices is  a  part of  our  culture.  We  implement  various  policies,  procedures,  systems,  and  roles  and responsibilities  to  implement  and  operate  our  information  security  program  established  to  safeguard  (or protect) our users' data and limit exposure to data breaches.
              </p>
              <p>
                Our SaaS web applications, the Digilink and PackageHold, have successfully completed a SOC 2 Type1 examination and received a SOC report from an independent CPA firm. This provides a professional opinion that  we  have  implemented  appropriate  internal  controls  (or processes)  for  security,  availability,  and confidentiality for the IT network of our Digilink and PackageHold applications.
              </p>
              <h2>
                What is the importance of the SOC 2 Report?
              </h2>
              <p>
                Our  SOC  2  Type 1report  demonstrates  that  we  have  implemented  appropriate  security  practices  and safeguards  for  our  data  processing  activities.  The  SOC  2  examination  included  working  with  auditors  to evaluate  the  organization,  technical,  and  procedural  controls  that  we  have  implemented  within  our  IT network to secure our users' data.
              </p>
              <p>
                The examination includes inspection of security configurations and procedural documentation that supports our implementation of data security best practices technologically, organizationally and culturally.
              </p>
              <p>
                We  will  be  conducting  our  SOC  2  Type  2  examination  annually  to  continue  to  demonstrate  our  security practices  and  our  ability  to  implement  appropriate  safeguards  for  protecting  our  users'  sensitive, confidential, and personal information.
              </p>
              <h2>
                SOC 2 Type 1Report
              </h2>
              <p>
                You can request a copy of our SOC 2 Type 1report by submitting a request to our <a href={'/contact/?section=privacy'}>Contact Us page</a>. This details all of the above-mentioned security practices for our Digilink and PackageHold web applications.
              </p>
              <h2>
                Data Privacy Compliance and GDPR roadmap
              </h2>
              <p>
                Data security and data privacy compliance is a significant project for most companies, including Digilock. It involves identifying the right people, systems, and processes that should exist within our company to ensure that we adhere to data security and privacy compliance requirements applicable to our organization.
              </p>
              <p>
                Our company has recently completed our procedures to appropriately adhere to SOC 2 standards for data security;  however,  we  are  currently  completing  our  procedures  to  ensure  that  we  fully  implement appropriate data privacy processes and adhere GDPR compliance.
              </p>
              <p>
                Data protection is very important in our business, and so is GDPR compliance, so we want to communicate our plans and timeline for Digilock’s full GDPR compliance implementation.
              </p>
              <h2>
                Digilock’s Current State of GDPR Compliance
              </h2>
              <p>
                Currently, we have implemented several important pieces to our GDPR compliance program. These include the implementation of the following technologies, activities, or justifications supporting GDPR compliance within our company:
              </p>
              <h2>
                Documentation of our Privacy Policy (Notice)
              </h2>
              <p>
                We have published our Privacy Policy on our website to communicate our overall practices for the use of personal information that we collect and process during the performance of our services.
              </p>
              <h2>
                Our Data Privacy Request Form
              </h2>
              <p>
                We have updated our <a href={'/contact/?section=privacy'}>Contact Us page</a> to include a form to submit inquiries related to Privacy. This form can be used to request our team to assist with any matters concerning data privacy, personal information, or  data  subject  rights.  Our  team  will  review  the  request  and  process  all  valid  requests,  as  deemed appropriate.
              </p>
              <h2>
                Documentation of our Lawful Basis for Processing
              </h2>
              <p>
                Our  data  processing  activities  are  necessary  for  the  performance  of  our  service  contracts with  our customers, to which data subjects are an indirect party.Companies that have purchased our smart  lock products have entered into an agreement with our company to use our products and services. As a result, we process personal information in connection with the delivery of these products and services.
              </p>
              <p>
                Additionally, we have legitimate interest to collect and process personal information to conduct marketing activities for our business. These activities are performed to identify customers that would benefit from the use  of  our  products  and  services.  We  communicate our  privacy  practices  for  data  collection  within  our cookie consent banner display on our company website anduse this cookie banner notification to collect consent from our website visitors to use cookie to perform these data collection activities.
              </p>
              <h2>
                Implementation of Appropriate Technical and Organizational Safeguards (Security)
              </h2>
              <p>
                As  mentioned,  we  have  a  SOC  2  Type 1 report  that  speaks  to  our  security  practices  for  protecting  our customers'  data.  These  security  practices  include  the  implementation  of  encryption  and  access  controls technologies/ procedures to ensure we protect our data.
              </p>
              <h2>
                Our SOC 2 and GDPR Compliant Third-Party Data Processors
              </h2>
              <p>
                We utilize third-party processors that are compliant with SOC 2 standards and GDPR. Their compliance with  these  standards  and  regulations  helps  our  company  to  protect  personal  data,  including  providing guidance and technologies that help us maintain GDPR compliance.
              </p>
              <h2>
                Designated Individual Responsible for GDPR Compliance and a Data Protection Officer (DPO)
              </h2>
              <p>
                We  have designated  a  DPO  within  our  organization,  and  our  DPO  works  closely  with  our  Executive Management  team  (President  and  Vice  President)  to  provide  oversight  and  execution  of Digilock’s  risk management and data security and privacy practices, including GDPR compliance.
              </p>
              <h2>
                Established a Process for Notifying Supervisory Authorities and Data Subjects of Data Breaches
              </h2>
              <p>
                We have identified the appropriate supervisory authority to notify in the event of a data breach, which is a requirement for GDPR compliance.
              </p>
              <h2>
                Appoint a Representative within a European Member State
              </h2>
              <p>
                A GDPR requirement for companies that operate outside of the EU, includes appointing a representative within an EU member state that can communicate with data protection authorities in the event of a data breach.Our EU representative is as follows:
              </p>
              <h2>
                Information Commissioner’s Office
              </h2>
              <p>
                Douglassingel 47, 1119MD, Schiphol-Rijk<br />telephone / +31 20 303 30 60
              </p>
              <h2>
                GDPR Information Audit
              </h2>
              <p>
                We have performed an information audit of our data processing activities and data privacy control activities to evaluate their operation and ensure our full compliance with GDPR standards.This process included the implementation of systems and procedures that will allow our team to have appropriate insight into our data processing  activities  and  procedures  for  processing  requests  pertaining  to  data  subject  rights.We  will continue  to  perform  regular  information  audits  to  evaluate  the  state  of  our  environment  and  GDPR compliance.
              </p>
              <h2>
                Questions
              </h2>
              <p>
                If you have any questions regarding our GDPR compliance and privacy practices, please contact our team using our <a href={'/privacy-request-form/'}>Privacy Request Form</a>.
              </p>
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
