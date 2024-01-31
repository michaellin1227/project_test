import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const blogdata = data.allContentfulBlog.nodes
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div>
        {blogdata.map(d => (
          <div key={d.id}>
            <h1>文章名稱：{d.name}</h1>
            <h2>文章內容：{d.content.content}</h2>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const Myquery = graphql`
  query Myquery {
    allContentfulBlog {
      nodes {
        name
        author
        content {
          content
          id
        }
      }
    }
  }
`
