import React, { Component } from 'react';
import LatestBlogNewsContainer from './LatestBlogNewsContainer';
import LatestBlogNewsContainerCategory from './LatestBlogNewsContainerCategory';


export function createMarkup(markup) {
  return { __html: markup }
}

class LatestBlogNews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogData: null,
      filteredBlogData: null
    }
  }

  isBrowser = typeof window !== "undefined";


  componentWillMount() {

    let newBlogData = this.props.blogData;
    newBlogData.splice(1, 0,
        {
          "node": {
            "title": "Tech giant future-proofs personal security",
            "url": "/case-studies/workspace/",
            "body": "<p>For this particular global technology firm, it was important that the office environment reflect the ethos of the company. Digilock’s fifth-generation lock offered the best solution as the firm switched to a new office layout.</p><p>When assigning a user to a lock, a manager key is usually required. However, to streamline this process, Digilock provided a way to assign lockers using an employee badge. And to maintain the corporate office aesthetics, Digilock matched the locks to the color of the lockers to make them uniquely theirs.</p>",
            "created": 1643995967,
            "slug": "case study slug",
            "topics": [
              {
                "id": 0
              }
            ],
            "feature_image": {
              "url": "https://f.hubspotusercontent40.net/hubfs/6919241/Blog/tempBlog_01.jpg",
              "alt_text": ""
            }
          }
        }
    );
    // newBlogData.splice(2,0,
    //   {
    //     "node": {
    //       "title": "Digilock Expands Into Chicago's Iconic Design Center At theMART",
    //       "url": "/case-studies/workspace/",
    //       "body": "<p>Digilock, the global leader in providing electronic locks and locker security solutions for more than 40 years, announces a new way to experience its products: at its first-ever brick-and-mortar showroom in the world’s largest commercial building and design center in Chicago, Illinois.</p>",
    //       "created": 1643995967,
    //       "slug": "/about/digilock-showroom/",
    //       "topics": [
    //         {
    //           "id": 61387586696
    //         }
    //       ],
    //       "feature_image": {
    //         "url": "https://6919241.fs1.hubspotusercontent-na1.net/hubfs/6919241/Blog/cs-sf-hero-9b03d96c66620bd329502307942bb5e8.jpeg",
    //         "alt_text": ""
    //       }
    //     }
    //   }
    // );

    if(this.isBrowser && window.location.search.length > 0) {
      this.setFilter(window.location.search.split('=')[1]);
    } else {
      this.setState({
        blogData: newBlogData
      })
    }
  }

  smartTrim(str, length, delim, appendix) {
    if (str.length <= length) return str

    var trimmedStr = str.substr(0, length + delim.length)

    var lastDelimIndex = trimmedStr.lastIndexOf(delim)
    if (lastDelimIndex >= 0) trimmedStr = trimmedStr.substr(0, lastDelimIndex)

    if (trimmedStr) trimmedStr += appendix
    return trimmedStr
  }

  getTopicNameById = (id) => {
    let bt = this.props.blogTopics.data.objects;
    for (let i = 0; i < bt.length; i++) {
      if (bt[i].id === id) {
        return bt[i].name;
      }
      if (id === 0) {
        return 'Case Study';
      }
      if (id === 1) {
        return 'Company';
      }
    }
  };

  //MATCH POSTS TO FILTERS
  getMatch = (a, b) => {
    let matches = [];
    for (let i = 0; i < a.length; i++) {
      for (let e = 0; e < b.length; e++) {
        if (a[i] === b[e]) matches.push(a[i])
      }
    }
    return matches;
  };

  //FILTER BLOG POSTS BY TOPIC WHEN CB IS CHECKED

  setFilter = (cat) => {

    let blogData = this.props.blogData;
    let filterBlogData = [];
    for (let i = 0; i < blogData.length; i++) {
      if (blogData[i].node.topics[0].id == cat) {
        filterBlogData.push(blogData[i]);
      }
    }

    this.setState({
      filterBlogData: filterBlogData,
      chosenCategory: true
    });

  };

  //CHECK FOR CHECKED TOPICS
  areFiltersClear = () => {
    let boxes = this.state.filterBoxes
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].checked) {
        return true
      }
    }
    return false
  };

  //SHOW ALL BLOG POSTS
  showAllPosts = () => {
    let blogPosts = this.state.blogPosts
    for (let i = 0; i < blogPosts.length; i++) {
      blogPosts[i].classList.remove('hide')
    }
    this.setState({ filteredPosts: [] })
  };

  //CLEAR FILTERS HANDLER
  handleClearFilters = () => {
    let boxes = this.state.filterBoxes
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].checked = false
    }
    this.setState({ filteredPosts: [] });
    this.showAllPosts()
  };


  render() {
    let blogTopics = {
      blogCategories: {
        "data":{
          "limit":100,
          "objects":[
            {
              "categoryId":3,
              "contentIds":[

              ],
              "created":1586390885524,
              "deletedAt":0,
              "description":"",
              "id":28157862588,
              "name":"Retail",
              "portalId":6919241,
              "slug":"retail",
              "translations":{

              },
              "updated":1586390885524
            },
            {
              "categoryId":3,
              "contentIds":[

              ],
              "created":1586985236054,
              "deletedAt":0,
              "description":"",
              "id":28407421064,
              "name":"health & fitness",
              "portalId":6919241,
              "slug":"health-fitness",
              "translations":{

              },
              "updated":1638392828459
            },
            {
              "categoryId":3,
              "contentIds":[

              ],
              "created":1588799988489,
              "deletedAt":0,
              "description":"",
              "id":29096368379,
              "name":"healthcare",
              "portalId":6919241,
              "slug":"healthcare",
              "translations":{

              },
              "updated":1588799988489
            },
            {
              "categoryId":3,
              "contentIds":[

              ],
              "created":1592609611899,
              "deletedAt":0,
              "description":"",
              "id":30986900134,
              "name":"Pro Sports",
              "portalId":6919241,
              "slug":"pro-sports",
              "translations":{

              },
              "updated":1592609611899
            },
            {
              "categoryId":3,
              "contentIds":[

              ],
              "created":1597414933114,
              "deletedAt":0,
              "description":"",
              "id":33637937006,
              "name":"Hospitality",
              "portalId":6919241,
              "slug":"hospitality",
              "translations":{

              },
              "updated":1597414933114
            },
            {
              "categoryId":3,
              "contentIds":[

              ],
              "created":1627510060981,
              "deletedAt":0,
              "description":"",
              "id":51758763319,
              "language":"en",
              "name":"Digilock",
              "portalId":6919241,
              "slug":"digilock",
              "translations":{

              },
              "updated":1627510060981
            },
            {
              "categoryId":3,
              "contentIds":[

              ],
              "created":1638391589478,
              "deletedAt":0,
              "description":"",
              "id":60989813284,
              "language":"en",
              "name":"manufacturing",
              "portalId":6919241,
              "slug":"manufacturing",
              "translations":{

              },
              "updated":1638391589478
            },
            {
              "categoryId":3,
              "contentIds":[

              ],
              "created":1638394303297,
              "deletedAt":0,
              "description":"",
              "id":60992608114,
              "language":"en",
              "name":"workspace",
              "portalId":6919241,
              "slug":"workspace",
              "translations":{

              },
              "updated":1638394303297
            },
            {
              "categoryId":3,
              "contentIds":[

              ],
              "created":1638893334948,
              "deletedAt":0,
              "description":"",
              "id":61387586696,
              "language":"en",
              "name":"company",
              "portalId":6919241,
              "slug":"company",
              "translations":{

              },
              "updated":1638893334948
            },
            {
              "categoryId":3,
              "contentIds":[

              ],
              "created":1638893641459,
              "deletedAt":0,
              "description":"",
              "id":61387586890,
              "language":"en",
              "name":"design",
              "portalId":6919241,
              "slug":"design",
              "translations":{

              },
              "updated":1638893641459
            },
            {
              "categoryId":3,
              "contentIds":[

              ],
              "created":1638893443648,
              "deletedAt":0,
              "description":"",
              "id":61391655603,
              "language":"en",
              "name":"products",
              "portalId":6919241,
              "slug":"products",
              "translations":{

              },
              "updated":1638893443648
            },
            {
              "categoryId":3,
              "contentIds":[

              ],
              "created":1638895496923,
              "deletedAt":0,
              "description":"",
              "id":61393215373,
              "language":"en",
              "name":"sustainability",
              "portalId":6919241,
              "slug":"sustainability",
              "translations":{

              },
              "updated":1638895496923
            }
          ],
          "offset":0,
          "total":12,
          "totalCount":12
        }
      }
    }

    console.log(this.state.blogData);

    return (

        <div>
          {
            !this.state.chosenCategory &&
            <LatestBlogNewsContainer
                blogTopics={blogTopics}
                blogData={this.state.blogData}
                getTopicNameById={this.getTopicNameById}
                smartTrim={this.smartTrim}
                setFilter={this.setFilter} />
          }
          {
            this.state.chosenCategory &&
            <LatestBlogNewsContainerCategory
                blogTopics={blogTopics}
                blogData={this.state.filterBlogData}
                getTopicNameById={this.getTopicNameById}
                setFilter={this.setFilter} />
          }
        </div>
    )
  }
}

export default LatestBlogNews;