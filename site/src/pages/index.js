import React from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import {StaticImage} from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from 'gatsby';
import BCResponsivePlayerDynId from '../components/video-player/BCResponsivePlayerDynId'

const IndexPage = () => {
  const {t} = useTranslation();
  return (
      <Layout>
        <Seo title={t('Home')} />
        <div className="home">
          <section className="hero">
            <BCResponsivePlayerDynId
                vid={'6302604050001'}
                dynId={'HeroVideo'}
                translation={t('hero_video_caption')}
            />
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
                <a href="" className="btn btn--blue">Primary Button</a>
                <a href="" className="btn btn--trans">Secondary Button</a>
                <a href="" className="btn btn--orange">Secondary Button</a>
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
