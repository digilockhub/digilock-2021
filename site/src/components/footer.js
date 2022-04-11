import React, {useState} from 'react';
import { graphql } from 'gatsby';
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';


const Footer = () => {
  const {t} = useTranslation();
  const [count, setCount] = useState(0);

  return (

      <footer>
        <div className="container grid">
          <div className="col">
            <h3>
              <Trans>have_questions</Trans>
            </h3>
            <a href="#" className="btn btn--trans white">
              <Trans>button_chat</Trans>
            </a>
            <a href="#" className="btn btn--trans white">
              <Trans>button_contact</Trans>
            </a>
            <a href="#" className="btn btn--trans white">
              <Trans>button_faq</Trans>
            </a>

          </div>

          <p>
            <sup>&copy;</sup> {new Date().getFullYear()} Footer
          </p>
          {/*<p>*/}
          {/*  You clicked {count} times*/}
          {/*</p>*/}
          {/*<button onClick={() => setCount(count+1)}>*/}
          {/*  /!*<Trans>button_label</Trans>*!/*/}
          {/*  {t('button_label')}*/}
          {/*</button>*/}
        </div>
      </footer>

  )

};

export default Footer;
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
