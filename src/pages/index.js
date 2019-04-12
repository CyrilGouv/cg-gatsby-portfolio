import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from '../components/Home/About'

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" keywords={[`gatsby`, `application`, `react`, `cyril gouverneur`, `développeur front-end`, `web design`, `intégrateur web`, `création site internet`, `création site vitrine`, `création site web`, `biscarrosse`, `landes`, `nouvelle-aquitaine`]} />
    <About />
  </Layout>
)

export default IndexPage
