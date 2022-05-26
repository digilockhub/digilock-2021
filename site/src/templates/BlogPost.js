import * as React from "react";
import {graphql, Link} from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { replaceCharWithChar } from '../Utils/utils'

const BlogPostTemplate = (props) => {

  const heroImage = props.pageContext.post.feature_image.url;

  let blogBody = props.pageContext.post.body;
  blogBody = replaceCharWithChar(blogBody, '<p>&nbsp;</p>', '');
  blogBody = replaceCharWithChar(blogBody, 'style="color: black;"', '');
  blogBody = replaceCharWithChar(blogBody, '<p style="text-align: left; font-size: 18px; font-weight: bold;">&nbsp;</p>', '');
  blogBody = replaceCharWithChar(blogBody, '<pre style="font-weight: bold; font-size: 12px;">&nbsp;</pre>', '');
  blogBody = replaceCharWithChar(blogBody, '<p><span style="color: black;">&nbsp;</span></p>', '');
  blogBody = replaceCharWithChar(blogBody, '<p style="margin-top: 0in; margin-right: 0in; margin-bottom: 0in; padding-left: 0in;">&nbsp;</p>', '');

  return (

      <Layout>
        <Seo
            title={props.pageContext.post.meta.title}
            description={props.pageContext.post.meta.description}
        />
        <div className="blog-post-container">
          <section className="hero --hero-image no-pad">
            <img src={heroImage} alt=""/>
          </section>
          <section className={'blog-body'}>
            <h1>
              {props.pageContext.post.title}
            </h1>
            <div dangerouslySetInnerHTML={{__html: blogBody}} />
          </section>
          <section className="back-to-blog">
            <Link to={'/blog/'}>&lt; Back to all Blogs</Link>
          </section>
        </div>
      </Layout>
  )
};

export default BlogPostTemplate;
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
