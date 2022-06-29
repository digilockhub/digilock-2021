import React, {useState, useEffect} from "react";
import {Link, Trans, useTranslation, useI18next, I18nextContext} from 'gatsby-plugin-react-i18next';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {graphql} from 'gatsby';
import Settings from '../../constants/company/settings';
import ContinentSettings from '../../constants/continents/geo-continents';
import SecondaryLocations from '../../components/contact/secondary-locations';
import InfoCardCurrent from '../../components/contact/info-card-current';
import hubspotSettings from "../../constants/company/settings";
import Cookies from 'js-cookie';

const IndexPage = () => {

  let isBrowser = typeof window !== "undefined";
  const {t} = useTranslation();
  const {changeLanguage} = useI18next();
  const context = React.useContext(I18nextContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    message: '',
    formSelected: 'sales',
    department: hubspotSettings.SALES_EMAIL,
    country: (isBrowser && sessionStorage.getItem(ContinentSettings.SESSION_COUNTRY)) ?
        sessionStorage.getItem(ContinentSettings.SESSION_COUNTRY) : '',
    state: (isBrowser && sessionStorage.getItem(ContinentSettings.SESSION_STATE)) ?
        sessionStorage.getItem(ContinentSettings.SESSION_STATE) : ''
  });
  //TODO
  const isFormValid = formData.email != null && formData.email.trim().length > 0;

  const submit = (e) => {
    e.preventDefault();
    alert('submit: '+JSON.stringify(formData));
    const postSubmit = hubspotSettings.CONTACT_FORM_ENDPOINT;
    const hutk = isBrowser ? Cookies.get('hubspotutk') : null;
    const pageUri = isBrowser ? window.location.href : null;
    const pageName = isBrowser ? document.title : null;
    const body = {

      fields: [
        {
          name: 'firstname',
          value: formData.firstName,
        },
        {
          name: 'lastname',
          value: formData.lastName,
        },
        {
          name: 'company',
          value: formData.companyName,
        },
        {
          name: 'email',
          value: formData.email,
        },
        {
          name: 'phone',
          value: formData.phoneNumber,
        },
        {
          name: 'department',
          value: formData.department,
        },
        {
          name: 'country_hubspot',
          value: formData.country,
        },
        {
          name: 'state',
          value: formData.state,
        },
        {
          name: 'message',
          value: formData.message,
        },
        {
          name: 'leadsource',
          value: 'Web',
        },
      ],

      context: {
        hutk,
        pageUri,
        pageName,
      },
    }

    fetch(postSubmit, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, application/xml, text/plain, text/html, *.*',
      },
    })
        // .then(res => res.json())
        .then((res) => {

          handleSubmitSuccess();
        })
        .catch(err => {
          alert(err)
        })
  };

  let handleSubmitSuccess = () => {
    if (context.language !== 'en') {
      window.location.href = '/' + context.language + '/contact/thank-you/'
    } else {
      window.location.href = '/contact/thank-you/'
    }
  }
  const [infoCurrent, setInfoCurrent] = useState({
    header: t('digilock_americas'),
    address: t('digilock_americas_address'),
    phone: Settings.PHONE_SALES_AMERICAS,
    callSales: t('call_sales'),
    emailSales: t('email_sales'),
    email: Settings.SALES_EMAIL,
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
          ['email']: Settings.SALES_EMAIL_EUROPE
        }));
        break;
      case ContinentSettings.ASIA:
        setInfoCurrent(prevState => ({
          ...prevState,
          ['header']: t('digilock_asia'),
          ['address']: t('digilock_asia_address'),
          ['phone']: Settings.PHONE_SALES_ASIA,
          ['email']: Settings.SALES_EMAIL_ASIA,
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

  useEffect(() => {
    if (isBrowser) {
      handleInfoCurrentChange();
    }
  }, []);

  return (
      <Layout>
        <Seo
            title={t('Contact Digilock for your Smart Lock Solution')}
            description={t('Contact Digilock to learn about the best digital lock solutions for your business.')}
        />
        <div className="contact">
          <section className="hero">
            <div className="container">
              <h1>
                <Trans>contact_us</Trans>
              </h1>
              <p className={'callout'}>
                <Trans>looking_product_support</Trans>
                <Link to={'/support/'} dangerouslySetInnerHTML={{__html: t('click_here')}}/>
              </p>
            </div>
          </section>
          <section className="contact-info">
            <div className="container">
              <div className="sales-form">
                <div className="container">
                  <form id={'salesForm'}
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
                <SecondaryLocations cls={'desktop'} geo={continent}/>
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
                <div>
                  <SecondaryLocations cls={'mobile'} geo={continent}/>
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
