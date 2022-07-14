import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Link, Trans} from 'gatsby-plugin-react-i18next';
import {graphql} from "gatsby";


const NotFoundPage = () => (
    <Layout>
      <Seo title="Sorry, that page doesn’t exist. Let Digilock help unlock where you were going."/>
      <div className="four-oh-four">
        <section className="hero">
          <div className="container">
            <h1>
              <Trans>
                does_not_exist
              </Trans>
            </h1>
            <ul className={'unstyled-list'}>
              <li>
              <span>
                <Trans>
                  quick_links
                </Trans>:
              </span>
              </li>
              <li>
                <Link to="/products/locks/">
                  <Trans>locks_overview</Trans>
                </Link>
              </li>
              <li className={'line'}>|</li>
              <li>
                <Link to="/where-to-buy/">
                  <Trans>how_to_buy</Trans>
                </Link>
              </li>
              <li className={'line'}>|</li>
              <li>
                <Link to="/support/">
                  <Trans>support</Trans>
                </Link>
              </li>
            </ul>
            <p>
              <Trans>
                questions_answered
              </Trans>
            </p>
            <a href="#" className={'btn btn--orange email-sales'}>
              <Trans>faq</Trans>
            </a>
          </div>
        </section>
      </div>
    </Layout>
)

export default NotFoundPage;
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
