import React from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import {StaticImage} from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from 'gatsby';
import CarouselWrapper from '../components/carousel/carouselWrapper'

const IndexPage = () => {
  const {t} = useTranslation();
  return (
      <Layout>
        <Seo title={t('Home')} />
        <div className="home">
          <section className="hero">
            <CarouselWrapper />
          </section>
          <section>
            <div className="container grid">
              <div className="col">
                <h1>
                  <Trans>section_one_headline</Trans>
                </h1>
                <h2>
                  <Trans>section_two_headline</Trans>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque turpis eros, luctus in interdum a, consectetur in ligula. Aenean non leo vitae purus viverra interdum. Donec nec nulla vitae risus luctus feugiat. Donec aliquam aliquam metus non fermentum. Sed laoreet ultricies luctus. Donec pellentesque ipsum in sapien cursus, vitae faucibus mi dignissim. Donec rhoncus massa suscipit magna tempus, at congue velit congue. Integer tempus est dui. Suspendisse vestibulum vel leo eu eleifend. Nulla ac arcu iaculis, consequat nunc vel, vestibulum arcu. Nullam tellus dui, tincidunt vestibulum nisi vitae, aliquam pharetra ex. In tristique volutpat tellus at blandit. Phasellus diam mi, posuere vel auctor at, placerat nec libero. Nullam quis diam tempus, dictum leo non, ornare leo. Praesent tincidunt malesuada magna vel consequat. Donec vehicula placerat risus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque turpis eros, luctus in interdum a, consectetur in ligula. Aenean non leo vitae purus viverra interdum. Donec nec nulla vitae risus luctus feugiat. Donec aliquam aliquam metus non fermentum. Sed laoreet ultricies luctus. Donec pellentesque ipsum in sapien cursus, vitae faucibus mi dignissim. Donec rhoncus massa suscipit magna tempus, at congue velit congue. Integer tempus est dui. Suspendisse vestibulum vel leo eu eleifend. Nulla ac arcu iaculis, consequat nunc vel, vestibulum arcu. Nullam tellus dui, tincidunt vestibulum nisi vitae, aliquam pharetra ex. In tristique volutpat tellus at blandit. Phasellus diam mi, posuere vel auctor at, placerat nec libero. Nullam quis diam tempus, dictum leo non, ornare leo. Praesent tincidunt malesuada magna vel consequat. Donec vehicula placerat risus.
                </p>
                {/*<StaticImage*/}
                {/*    src="../images/aspire-lock.png"*/}
                {/*    width={148}*/}
                {/*    quality={95}*/}
                {/*    formats={["auto", "webp", "avif"]}*/}
                {/*    alt="Aspire Smart Lock"*/}
                {/*/>*/}
                {/*<a href="" className="btn btn--secondary">Secondary Button</a>*/}
                {/*<a href="" className="btn btn--primary">Primary Button</a>*/}
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
