import * as React from "react";
import {graphql, Link} from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import {replaceCharWithChar} from '../Utils/utils';
import {StaticImage} from "gatsby-plugin-image";

const BlogPostTemplate = (props) => {

  const blogPost = props.pageContext.post;
  const heroImage = props.pageContext.post.feature_image.url;

  let blogBody = props.pageContext.post.body;
  blogBody = replaceCharWithChar(blogBody, '<p>&nbsp;</p>', '');
  blogBody = replaceCharWithChar(blogBody, 'style="color: black;"', '');
  blogBody = replaceCharWithChar(blogBody, '<p style="text-align: left; font-size: 18px; font-weight: bold;">&nbsp;</p>', '');
  blogBody = replaceCharWithChar(blogBody, '<p style="font-size: 16px; line-height: 1;">&nbsp;</p>', '');
  blogBody = replaceCharWithChar(blogBody, '<pre style="font-weight: bold; font-size: 12px;">&nbsp;</pre>', '');
  blogBody = replaceCharWithChar(blogBody, '<div><p><span style="color: black;">&nbsp;</span></p></div>', '');
  blogBody = replaceCharWithChar(blogBody, '<div><span style="font-size: 18px; background-color: transparent; color: #009abf;">&nbsp;</span></div>', '');
  blogBody = replaceCharWithChar(blogBody, '<p style="margin-top: 0in; margin-right: 0in; margin-bottom: 0in; padding-left: 0in;">&nbsp;</p>', '');

  return (

      <Layout>
        <Seo
            title={blogPost.meta.title}
            description={blogPost.meta.description}
        />
        <div className="blog-post-container">
          <section className="">
            <div className="container">
              <img src={heroImage} alt={blogPost.feature_image.alt_text}/>
            </div>
          </section>
          <section className={'blog-body'}>
            <div className="container">
              <h1>
                {blogPost.title}
              </h1>
              <div dangerouslySetInnerHTML={{__html: blogBody}}/>
            </div>
          </section>
          <section className="back-to-blog">
            <div className="container">
              <Link to={'/blog/'}>&lt; Back to all Blogs</Link>
            </div>
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
