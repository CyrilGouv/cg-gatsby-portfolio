import React from "react"

import Layout from "../components/Base/Layout"
import SEO from "../components/seo"
import Header from '../components/About/Header'
import AboutContent from '../components/About/AboutContent'

const About = () => (
  <Layout>
    <SEO lang="fr" title="A propos" />
    <Header />
    <AboutContent />
  </Layout>
)

export default About
