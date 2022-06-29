import React, {useState, useEffect} from "react";
import {Link, Trans, useTranslation, useI18next, I18nextContext} from 'gatsby-plugin-react-i18next';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {graphql} from 'gatsby';
import Settings from '../../constants/company/settings';
import ContinentSettings from '../../constants/continents/geo-continents';
import InfoCardCurrent from '../../components/contact/info-card-current';
import Locks from "../../components/ui/locks";
import AccordionWrapper from '../../components/ui/Accordions/AccordionWrapper';


const IndexPage = (props) => {
  const isBrowser = typeof window !== "undefined";
  const {t} = useTranslation();
  const {changeLanguage} = useI18next();
  const context = React.useContext(I18nextContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
  };
  let handleSubmitSuccess = () => {
    if (context.language !== 'en') {
      window.location.href = '/' + context.language + '/support/thank-you/';
    } else {
      window.location.href = '/support/thank-you/';
    }
  }
  //TODO
  const isFormValid = formData.email != null && formData.email.trim().length > 0;
  const submit = (e) => {

    e.preventDefault();
    alert('submit: ' + JSON.stringify(formData));
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
        .then(() => {
          this.handleSubmitSuccess();
        })
        .catch(error => alert(error))

  };
  const [infoCurrent, setInfoCurrent] = useState({
    header: t('digilock_americas'),
    address: t('digilock_americas_address'),
    phone: Settings.PHONE_SALES_AMERICAS,
    callSales: t('call_sales'),
    emailSales: t('email_support'),
    email: Settings.SUPPORT_EMAIL,
    liveChat: t('live_chat'),
    liveChatCopy: t('live_chat_copy'),
    tollFree: t('toll_free'),
    tollFreeNumber: Settings.PHONE_SALES_TOLL_FREE_AMERICAS,
    phoneNumber: Settings.PHONE_SALES_TOLL_FREE_AMERICAS
  });
  const [continent, setContinent] = useState(isBrowser ? sessionStorage.getItem(ContinentSettings.SESSION_CONTINENT) : 'North America');

  function handleInfoCurrentChange() {
    switch (continent) {
      case ContinentSettings.EUROPE:
        setInfoCurrent(prevState => ({
          ...prevState,
          ['header']: t('digilock_europe'),
          ['address']: t('digilock_europe_address'),
          ['email']: Settings.SUPPORT_EMAIL
        }));
        break;
      case ContinentSettings.ASIA:
        setInfoCurrent(prevState => ({
          ...prevState,
          ['header']: t('digilock_asia'),
          ['address']: t('digilock_asia_address'),
          ['phone']: Settings.PHONE_SALES_ASIA,
          ['email']: Settings.SUPPORT_EMAIL,
          ['tollFree']: '',
          ['tollFreeNumber']: ''
        }));
        break;
      default:
        //code
    }
  }

  function handleLiveChat() {
    alert("FPO: This will spawn a live Sales chat session");
  }

  const accordionFunctionality = props.data.allSupportGeneralFaqXlsxLockFunctionality.edges;
  const accordionProgramming = props.data.allSupportGeneralFaqXlsxSetupProgramming.edges;
  const accordionTroubleshooting = props.data.allSupportGeneralFaqXlsxTroubleShooting.edges;
  const accordionOrders = props.data.allSupportGeneralFaqXlsxOrdersSupport.edges;

  useEffect(() => {
    if (isBrowser) {
      handleInfoCurrentChange();
    }
  }, []);

  return (
      <Layout>
        <Seo
            title={t('Digilock Customer Support for your Innovative Keyless Locks')}
            description={t('Contact Digilock Customer Support for any of your smart locks, electronic locks, mechanical or legacy Digilock Locks.')}
        />
        <div className="support">
          <section className="hero">
            <div className="container">
              <h1>
                <Trans>product_support</Trans>
              </h1>
              <p className={'callout'}>
                <Trans>looking_sales_support</Trans>
                <Link to={'/contact/'} dangerouslySetInnerHTML={{__html: t('click_here')}}/>
              </p>
              <p>
                <Trans>product_support_copy</Trans>
              </p>
              <p>
                <Trans>product_support_copy2</Trans>
              </p>
            </div>
          </section>
          <section className="contact-info">
            <div className="container">
              <div className="sales-form">
                <div className="container">
                  <form id={'supportForm'}
                        action="#"
                        className={'sales-contact-form'}
                        onSubmit={submit}
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                  >
                    <div className="row">
                      <div className="input-container first-name">
                        <label><Trans>first_name</Trans>*</label>
                        <input type="text"
                               name="firstName"
                               value={formData.firstName}
                               onChange={e => setFormData({...formData, firstName: e.target.value})}
                               required={'required'}
                        />
                      </div>
                      <div className="input-container last-name">
                        <label><Trans>last_name</Trans>*</label>
                        <input type="text"
                               name="lastName"
                               value={formData.lastName}
                               required={'required'}
                               onChange={e => setFormData({...formData, lastName: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="input-container company-name">
                      <label><Trans>company_name</Trans>*</label>
                      <input type="text"
                             name="companyName"
                             value={formData.companyName}
                             required={'required'}
                             onChange={e => setFormData({...formData, companyName: e.target.value})}
                      />
                    </div>

                    <div className="row">
                      <div className="input-container email">
                        <label><Trans>email</Trans>*</label>
                        <input type="email"
                               name="email"
                               value={formData.email}
                               required={'required'}
                               onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div className="input-container phone-number">
                        <label><Trans>phone_number</Trans></label>
                        <input type="text"
                               name="phoneNumber"
                               value={formData.phoneNumber}
                               onChange={e => setFormData({...formData, phoneNumber: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="input-container message">
                      <label htmlFor="message"><Trans>message</Trans></label>
                      <textarea name="message"
                                value={formData.message}
                                maxLength={250}
                                onChange={e => setFormData({...formData, message: e.target.value})}
                      />
                    </div>
                    <div className="input-container-submit">
                      <input
                          className={'form-submit'}
                          type="submit"
                          aria-disabled={!isFormValid ? 'true' : 'false'}
                          value={'Send'}
                      />
                    </div>

                  </form>
                </div>
              </div>
              <div className="info-current">
                <div className="container">
                  <InfoCardCurrent
                      header={infoCurrent.header}
                      address={infoCurrent.address}
                      phone={infoCurrent.phone}
                      email={infoCurrent.email}
                      callSales={infoCurrent.callSales}
                      emailSales={infoCurrent.emailSales}
                      liveChat={infoCurrent.liveChat}
                      liveChatCopy={infoCurrent.liveChatCopy}
                      tollFree={infoCurrent.tollFree}
                      tollFreeNumber={infoCurrent.tollFreeNumber}
                      phoneNumber={infoCurrent.phoneNumber}
                      geo={continent}
                      handleLiveChat={handleLiveChat}
                      showFaq={false}
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="section-delimeter container"/>
          <section className="general-faq">
            <div className="container">
              <h2>General FAQ</h2>
              <AccordionWrapper label={t('lock_functionality')} data={accordionFunctionality}/>
              <AccordionWrapper label={t('initial_setup')} data={accordionProgramming}/>
              <AccordionWrapper label={t('troubleshooting')} data={accordionTroubleshooting}/>
              <AccordionWrapper label={t('orders_support')} data={accordionOrders}/>
            </div>
          </section>
          <div className="section-delimeter container"/>
          <Locks/>
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
    allSupportGeneralFaqXlsxLockFunctionality {
      edges {
        node {
          id
            title
            content
        }
      }
    }
    allSupportGeneralFaqXlsxSetupProgramming {
    edges {
      node {
        id
          title
          content
      }
    }
  }
  
  allSupportGeneralFaqXlsxTroubleShooting {
    edges {
      node {
        id
          title
          content
      }
    }
  }
  
  allSupportGeneralFaqXlsxOrdersSupport {
    edges {
      node {
        id
          title
          content
      }
    }
  }
  }
`;
