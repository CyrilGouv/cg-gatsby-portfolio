import React from "react"

import Layout from "../components/Base/Layout"
import SEO from "../components/seo"
import Header from '../components/Mentions/Header'
import Mentions from '../components/Mentions/MentionsContent'


const MentionsLegales = () => (
  <Layout>
    <SEO title="Mentions légales" keywords={[`gatsby`, `application`, `react`, `cyril gouverneur`, `développeur front-end`, `web design`, `intégrateur web`, `création site internet`, `création site vitrine`, `création site web`, `biscarrosse`, `landes`, `nouvelle-aquitaine`]} />
    <Header />
    <Mentions />
  </Layout>
)

export default MentionsLegales
