import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {Link, Trans} from 'gatsby-plugin-react-i18next';


const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="four-oh-four">
      <section className="hero">
        <div className="container">
          <h1>
            <Trans>
              Sorry that page, does not exist.
            </Trans>
          </h1>
          <ul className={'unstyled-list'}>
            <li>
              <span>QUICK LINKS:</span>
            </li>
            <li>
              <a href="/products/locks/">
                Locks Overview
              </a>
            </li>
            <li className={'line'}>|</li>
            <li>
              <a href="/where-to-buy/">
                How to Buy
              </a>
            </li>
            <li className={'line'}>|</li>
            <li>
              <a href="/support/">
                Support
              </a>
            </li>
          </ul>
          <p>
            Get your questions answered.
          </p>
          <a href="#" className={'btn btn--orange email-sales'}>FAQ</a> <br/>
        </div>
      </section>
    </div>
  </Layout>
)

export default NotFoundPage
