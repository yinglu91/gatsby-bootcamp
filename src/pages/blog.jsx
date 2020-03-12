import React from 'react'
import Layout from '../components/layout/Layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>

      <ol>
        {data.allMarkdownRemark.edges.map(({ node }, index) => {
          const slug = node.fields.slug
          return (
            <li key={index}>
              <h2>
                <Link to={`/blog/${slug}`}>{node.frontmatter.title}</Link>
              </h2>
              <p>{node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
