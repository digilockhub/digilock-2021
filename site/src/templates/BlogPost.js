// src/templates/BlogPost.js
import React from 'react'
import BlogTemplateWrapper from '../components/layout'
import { Helmet } from 'react-helmet'
import moment from 'moment'
import { replaceCharWithChar } from '../utils/utils'

class BlogPostTemplate extends React.Component {

  render() {
    const { hubspotPost: post } = this.props.data;
    const postDate = moment(post.published).format('MMM D, YYYY h:m:s A');
    const timeDisplay = <p className={'blog-carousel-footer'}>{postDate}</p>;
    const socialShareURL = 'http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.digilock.com/blog/post/' + post.slug;
    let body = post.body;

    body = replaceCharWithChar(body, '<p>&nbsp;</p>', '');
    body = replaceCharWithChar(body, '<p><span style="color: black;">&nbsp;</span></p>', '');
    body = replaceCharWithChar(body, '<p style="margin-top: 0in; margin-right: 0in; margin-bottom: 0in; padding-left: 0in;">&nbsp;</p>', '');

    return (
      <BlogTemplateWrapper>
        <div className="blog-post-container">
          <Helmet>
            <meta charSet="utf-8"/>
            <title>{post.meta.title}</title>
            <meta name="description" content={post.meta.description}/>
          </Helmet>
          <img src={post.feature_image.url} alt={post.feature_image.alt_text}/>
          <h1>{post.title}</h1>
          <p className={'posted-by'}>
            {timeDisplay}
            <p className="social-icons">
              <a
                href={socialShareURL}
                title="Share on LinkedIn">
                <img
                  src="https://6919241.fs1.hubspotusercontent-na1.net/hubfs/6919241/Images/SocialIcons/icon_linkedin.svg"
                  alt="Share article on Linkedin" style={{ maxWidth: '20px' }}/>
              </a>
            </p>
          </p>
          <div className={'blog-body'} dangerouslySetInnerHTML={{ __html: body }}/>
        </div>
      </BlogTemplateWrapper>
    )
  }
}

export default BlogPostTemplate
export const query = graphql`
  query($id: String!) {
    hubspotPost(id: {eq: $id}) {
      title
      body
      published
      slug
      feature_image {
        url
        alt_text
      }
      meta {
        title
        description
      }
      author {
        id
        name
        full_name
        bio
        slug
      }
    }
  }
`;