import React from "react"

import Layout from "../components/Base/Layout"
import SEO from "../components/seo"
import Header from '../components/Contact/Header'
import ContactContent from '../components/Contact/ContactContent'

const Contact = () => (
  <Layout>
    <SEO lang="fr" title="Contact" />
    <Header />
    <ContactContent />
  </Layout>
)

export default Contact
