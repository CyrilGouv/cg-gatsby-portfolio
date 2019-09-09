import React from "react"

import Layout from "../components/Base/Layout"
import SEO from "../components/seo"
import Header from '../components/Projects/Header'
import ProjectContent from '../components/Projects/ProjectContent'

const Portfolio = () => (
  <Layout>
    <SEO lang="fr" title="Portfolio" />
    <Header />
    <ProjectContent />
  </Layout>
)

export default Portfolio
