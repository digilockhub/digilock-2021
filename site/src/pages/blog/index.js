import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {graphql} from 'gatsby';
import LatestBlogNews from '../../components/blog/LatestBlogNews';



const IndexPage = (props) => {

  const {t} = useTranslation();
  const blogCategories = {
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
  };

  return (
      <Layout>
        <Seo title={t('Digilock Blog')}/>
        <div className="blog">
          <section className="hero">
            <h1>Digilock <Trans>blog</Trans></h1>
            <div className="container">
              {/*{*/}
              {/*  !this.state.blogCategories &&*/}
              {/*  <div className={'blog-loader'}>*/}
              {/*    <div>Loading Digilock Blog...</div>*/}
              {/*    <br/>*/}
              {/*    <span className="spinner spinner-blue spinner-slow" />*/}
              {/*  </div>*/}

              {/*}*/}
              {
                <LatestBlogNews blogData={props.data.allHubspotPost.edges} blogTopics={blogCategories}
                                whichPage={'aspire'}/>
              }
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
    
  allHubspotPost(limit: 100) {
    edges {
      node {
        title,
        url,
        body,
        created,
        slug,
        topics {
          id
        },
        feature_image {
          url,
          alt_text
        }
      } 
    }
  }
}

`;


