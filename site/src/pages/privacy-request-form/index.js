import React, {useState} from "react";
import {Link, Trans, useTranslation, useI18next, I18nextContext} from 'gatsby-plugin-react-i18next';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {graphql} from 'gatsby';
import hubspotSettings from "../../constants/company/settings";
import Cookies from "js-cookie";

const IndexPage = () => {
  const {t} = useTranslation();
  let isBrowser = typeof window !== "undefined";
  const {changeLanguage} = useI18next();
  const context = React.useContext(I18nextContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dataPrivacyRequest: '',
    message: '',
    formSelected: 'sales'
  });
  //TODO
  const isFormValid = formData.email != null && formData.email.trim().length > 0;
  const submit = (e) => {
    e.preventDefault();
    const postSubmit = hubspotSettings.CONTACT_FORM_PRIVACY;
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
      window.location.href = '/' + context.language + '/privacy-request-form/thank-you/'
    } else {
      window.location.href = '/privacy-request-form/thank-you/'
    }
  }
  return (
      <Layout>
        <Seo title={t('About')}/>
        <div className="about">
          <section className="hero">
            <div className="container">
              <h1>
                <Trans>
                  privacy_request
                </Trans>
              </h1>
            </div>
          </section>
          <section>
            <div className="container sales-form">

                  <form id={'privacyForm'}
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
                    <div className="row">
                      <div className="input-container privacy-request">
                        <label><Trans>privacy_request</Trans></label>
                        <select
                            name="dataPrivacyRequest"
                            value={formData.dataPrivacyRequest}
                            onChange={e => setFormData({...formData, dataPrivacyRequest: e.target.value})}
                            required={true}>
                          <option value="">{t('please_select')}</option>
                          <option value="access_to_data">Access To Data</option>
                          <option value="data_modification_update">Data Modification/Update</option>
                          <option value="data_removal">Data Removal</option>
                          <option value="halt_processing">Halt Processing</option>
                          <option value="other">Other</option>
                        </select>
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
