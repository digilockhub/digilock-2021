import React, {useState, useEffect} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {graphql} from 'gatsby';
import Settings from '../../constants/company/settings';
import ContinentSettings from '../../constants/continents/geo-continents';
import SecondaryLocations from '../../components/contact/secondary-locations';
import InfoCardCurrent from '../../components/contact/info-card-current';

const IndexPage = () => {

  const isBrowser = typeof window !== "undefined";
  const {t} = useTranslation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    country: (isBrowser && sessionStorage.getItem(ContinentSettings.SESSION_COUNTRY)) ?
             sessionStorage.getItem(ContinentSettings.SESSION_COUNTRY) : '',
    state: (isBrowser && sessionStorage.getItem(ContinentSettings.SESSION_STATE)) ?
        sessionStorage.getItem(ContinentSettings.SESSION_STATE) : '',
    message: ''
  });

  //TODO
  const isFormValid = formData.email != null && formData.email.trim().length > 0;

  const submit = (e) => {
    e.preventDefault();
    alert('submit: '+JSON.stringify(formData));
  };

  const [infoCurrent, setInfoCurrent] = useState({
    header: t('digilock_americas'),
    address: t('digilock_americas_address'),
    phone: Settings.PHONE_SALES_AMERICAS,
    callSales: t('call_sales'),
    emailSales: t('email_sales'),
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
          ['address']: t('digilock_europe_address')
        }));
        break;
      case ContinentSettings.ASIA:
        setInfoCurrent(prevState => ({
          ...prevState,
          ['header']: t('digilock_asia'),
          ['address']: t('digilock_asia_address'),
          ['phone']: Settings.PHONE_SALES_ASIA,
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
        <Seo title={t('Contact Digilock')}/>
        <div className="contact">
          <section className="hero">
            <div className="container">
              <h1>
                <Trans>contact_us</Trans>
                <p>
                  <Trans>looking_product_support</Trans>
                  <Link to={'#'} dangerouslySetInnerHTML={{__html: t('click_here')}}/>
                </p>
              </h1>
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
                  >
                    <div className="row">
                      <div className="input-container first-name">
                        <label><Trans>first_name</Trans>*</label>
                        <input type="text"
                               name="firstName"
                               value={formData.firstName}
                               onChange={e => setFormData({...formData, firstName: e.target.value})}
                               required={'required'}
                            // onChange={handleChange}
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
                        <input type="text"
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
                      callSales={infoCurrent.callSales}
                      emailSales={infoCurrent.emailSales}
                      liveChat={infoCurrent.liveChat}
                      liveChatCopy={infoCurrent.liveChatCopy}
                      tollFree={infoCurrent.tollFree}
                      tollFreeNumber={infoCurrent.tollFreeNumber}
                      phoneNumber={infoCurrent.phoneNumber}
                      geo={continent}
                      handleLiveChat={handleLiveChat}
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
