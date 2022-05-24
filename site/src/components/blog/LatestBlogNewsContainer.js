import React, { Component } from 'react'



class LatestBlogNewsContainer extends Component {
  
  render() {

    return (
        <div className="latest-news-container">
          <p className="social-icons">
            <a href="https://www.linkedin.com/company/digilock">
              Follow us on LinkedIn
            </a>

            <a
              href={'https://www.linkedin.com/company/digilock'}
              title="Share on LinkedIn">
              <img
                src="https://6919241.fs1.hubspotusercontent-na1.net/hubfs/6919241/Images/SocialIcons/icon_linkedin.svg"
                alt="Share article on Linkedin" style={{ maxWidth: '35px'}}/>
            </a>
          </p>
          <div className="frontpage">
            {this.props.blogData
              .slice(0, 3).map(({ node: post }, index) => {
                if (typeof window !== 'undefined') {

                  let parser = new DOMParser();
                  let doc = parser.parseFromString(post.body, 'text/html');
                  let topics = post.topics;
                  let pText = this.props.smartTrim(doc.body.innerText, 400, ' ', '...').trim();
                  let bUrl = '/blog/post/' + post.slug;
                  let topicName = this.props.getTopicNameById(topics[0].id);

                  if (index === 0) {
                    return (
                      <div className={'fp-cell fp-cell--' + (index + 1) + ' blog-hero'} key={index}>
                        <div className="fp-item">
                          <a href={index === 1 ? '/about/digilock-showroom/' : bUrl}>
                            <img className={'img-responsive'} src={post.feature_image.url} alt="blog post"
                                 loading="lazy"/>
                          </a>
                          <a href={'/blog/?cat='+topics[0].id}
                             aria-describedby={'tip'+index}
                             className={'category-label'}
                             title={'See all '+topicName+' posts'}>
                             {topicName}
                          </a>
                          <a className={'hero-title'} href={index === 1 ? '/about/digilock-showroom/' : bUrl}>
                            <h2>{post.title}</h2>
                          </a>
                            <p dangerouslySetInnerHTML={{__html: pText}} />
                        </div>
                      </div>
                    )
                  } else {
                    return (
                      <div className={'fp-cell fp-cell--' + (index + 1)} key={index}>
                        <div className="fp-item">
                          <a href={index === 1 ? '/case-studies/workspace/' : '/blog/post/' + post.slug}>
                            <img className={'img-responsive'} src={post.feature_image.url} alt="blog post"
                                 loading="lazy"/>
                          </a>
                          <a href={'/blog/?cat='+topics[0].id} className={'category-label'} title={'See all '+topicName+' posts'}>{topicName}</a>
                            <p>{post.title}</p>
                        </div>
                      </div>
                    )
                  }
                }
              })}
          </div>
          <div className="secondpage">
            {this.props.blogData
              .slice(3).map(({ node: post }, index) => {
                if (typeof window !== 'undefined') {
                  let parser = new DOMParser();
                  let doc = parser.parseFromString(post.body, 'text/html');
                  let topics = post.topics;
                  let topicName = this.props.getTopicNameById(topics[0].id);
                  return (
                    <div className={'fp-cell fp-cell--' + (index + 1) + ' fp-cell--border-top'} key={index}>

                      <div className="fp-item">
                        <a href={'/blog/post/' + post.slug}>
                          <img className={'img-responsive'} src={post.feature_image.url} alt="blog post"
                               loading="lazy"/>
                        </a>
                        {/*<span className={'category'}>{this.props.getTopicNameById(topics[0].id)}</span>*/}
                        <a className={'category-label'} href={'/blog/?cat='+topics[0].id} title={'See all '+topicName+' posts'}>{topicName}</a>
                          <p>{post.title}</p>
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

export default LatestBlogNewsContainer;