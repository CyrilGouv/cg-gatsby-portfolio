import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Base/Layout"
import SEO from "../components/seo"
import Header from '../components/About/Header'
import AboutContent from '../components/About/AboutContent'

const About = () => (
  <Layout>
    <SEO title="A propos" />
    <Header />
    <AboutContent />
  </Layout>
)

export default About
