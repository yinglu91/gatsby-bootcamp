const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template
  const blogTemplate = path.resolve('./src/templates/blog.jsx')

  // 2. Get markdown data
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // 3. Create new pages
  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}

// node
//
// {
//   "id": "36925d39-2857-565c-96f1-5b3ade7d136c",
//   "children": [],
//   "parent": "dc2fc394-69b9-594c-8cc4-7da40400ce48",
//   "internal": {
//       "content": "\r\nIn this post you'll learn React.\r\n",
//       "type": "MarkdownRemark",
//       "contentDigest": "02d2979d5b688fdc78506b2e8ee56739",
//       "counter": 42,
//       "owner": "gatsby-transformer-remark"
//   },
//   "frontmatter": {
//       "title": "React",
//       "date": "2019-04-02"
//   },
//   "excerpt": "",
//   "rawMarkdownBody": "\r\nIn this post you'll learn React.\r\n",
//   "fileAbsolutePath": "C:/workspace-ying/gatsby/gatsby39/gatsby-bootcamp/src/posts/react.md"
// }

// 2:33
// "allMarkdownRemark": {
//   "edges": [
//     {
//       "node": {
//         "fileAbsolutePath": "C:/workspace-ying/gatsby/gatsby39/gatsby-bootcamp/src/posts/gatsby.md",
//         "fields": {
//           "slug": "gatsby"
//         }
//       }
//     },
