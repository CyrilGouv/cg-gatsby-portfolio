import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from '../components/Home/About'
import Portfolio from '../components/Home/Portfolio'

const ReallySmoothScroll = require('really-smooth-scroll');
ReallySmoothScroll.shim();


const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" keywords={[`gatsby`, `application`, `react`, `cyril gouverneur`, `développeur front-end`, `web design`, `intégrateur web`, `création site internet`, `création site vitrine`, `création site web`, `biscarrosse`, `landes`, `nouvelle-aquitaine`]} />
    <About />
    <Portfolio />
  </Layout>
)

export default IndexPage
