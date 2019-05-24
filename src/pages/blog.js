import React from "react"

import Layout from "../components/Base/Layout"
import SEO from "../components/seo"
import Header from '../components/Blog/Header'
import BlogContent from '../components/Blog/BlogContent'

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <Header />
    <BlogContent />
  </Layout>
)

export default Blog
