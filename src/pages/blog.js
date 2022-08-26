import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import '../components/styles/defaultStyles.css'

const BlogPage = () => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
    </Layout>
  )
}

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage