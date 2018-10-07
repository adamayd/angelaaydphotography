const path = require('path');
<<<<<<< HEAD
// const { createFilePath } = require('gatsby-source-filesystem');
=======
const { createFilePath } = require('gatsby-source-filesystem');
>>>>>>> parent of a4857d5... refactoring to move CMS to contentful

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if(node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'posts'
    });
    createNodeField({
      node,
      name: 'slug',
      value: `/posts${slug}`
    });
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
<<<<<<< HEAD
        allContentfulBlogPost {
          edges {
            node {
              slug
=======
        allMarkdownRemark {
          edges {
            node {
              fields{
                slug
              }
>>>>>>> parent of a4857d5... refactoring to move CMS to contentful
            }
          }
        }
      }
    `).then(result => {
<<<<<<< HEAD
      result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve('./src/posts/PostPage.js'),
          context: {
            slug: node.slug
=======
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/posts/PostPage.js'),
          context: {
            slug: node.fields.slug
>>>>>>> parent of a4857d5... refactoring to move CMS to contentful
          }
        })
      })
      resolve();
    })
  })
}