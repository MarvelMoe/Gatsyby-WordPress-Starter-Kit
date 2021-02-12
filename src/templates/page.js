import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import style from "./single.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const page = data.wpPage
  return (
    <Layout>
      <SEO title={page.title} />
      <article className={style.article}>
       <div dangerouslySetInnerHTML={{ __html: page.content }} />
       </article>
    </Layout>
  )
}

export const query = graphql`
  query($databaseId: Int!) {
    wpPage(databaseId: { eq: $databaseId }) {
      title
      content
      author {
        node {
          name
        }
      }
      date
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1360) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
