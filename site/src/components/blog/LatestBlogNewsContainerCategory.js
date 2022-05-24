import React, { Component } from 'react'

class LatestBlogNewsContainerCategory extends Component {

  componentDidMount() {
     document.getElementById('catName').innerText = document.getElementsByClassName('category-label')[0].innerText.toLowerCase();
  }

  render() {

    return (
        <div className="latest-news-container">
          <nav>
            <ul>
              <li>
                <a href="/blog/">Blog</a>&nbsp;/&nbsp;
              </li>
              <li id={'catName'} />
            </ul>
          </nav>
          <div className="secondpage category">
            {this.props.blogData
              .map(({ node: post }, index) => {
                if (typeof window !== 'undefined') {
                  let parser = new DOMParser();
                  let doc = parser.parseFromString(post.body, 'text/html');
                  let topicName = this.props.getTopicNameById(post.topics[0].id);
                  let title = post.title;
                  let slug = post.slug;
                  let url = '/blog/post/';

                  if(topicName.toLocaleLowerCase() === 'case study') {
                    url = ''
                    slug = "/case-studies/workspace/"
                  }

                  if(topicName.toLocaleLowerCase() === 'company' && index === 0) {
                    url = ''
                    slug = "/about/digilock-showroom/"
                  }

                  return (
                    <div className={'fp-cell fp-cell--' + (index + 1) + ' fp-cell--border-top'} key={index}>
                      <div className="fp-item">
                        <a href={url + slug}>
                          <img className={'img-responsive'} src={post.feature_image.url} alt="blog post"
                               loading="lazy"/>
                        </a>
                        <span className={'category-label'}>{topicName}</span>
                        <a href={url + slug}>
                          <h4>{title}</h4>
                        </a>
                      </div>
                    </div>
                  )
                }
              })}
          </div>
        </div>

    )
  }
}

export default LatestBlogNewsContainerCategory;