import React from "react"
import { graphql } from "gatsby"

import BackgroundSection from '../../components/Base/BackgroundSection'

import Layout from "../../components/Base/Layout"
import SEO from "../../components/seo"
import ProjectContent from '../../components/Projects/Single/Clarisse/ProjectContent'

const Clarisse = ({ data }) => (
  <Layout>
    <SEO lang="fr" title="Drapeaux Discount" />
    <BackgroundSection 
        img={ data.clarisse.childImageSharp.fluid }
        title="Clarisse Traductions"
        h2Title="Clarisse Traductions propose des services de traduction, localisation, SEO, sous-titrage, relecture, révision, édition et rédaction."
        subtitle="Wordpress"
        className="clarisseProject"
    />
    <ProjectContent />
  </Layout>
)

export default Clarisse


export const Image = graphql`
    {
        clarisse:file(relativePath:{eq: "portfolio/bg-clarisse-traductions.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`