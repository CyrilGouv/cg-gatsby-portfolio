import React from "react"
import { graphql } from "gatsby"

import BackgroundSection from '../../components/Base/BackgroundSection'

import Layout from "../../components/Base/Layout"
import SEO from "../../components/seo"
import ProjectContent from '../../components/Projects/Single/Leheadiste/ProjectContent'

const Leheadiste = ({ data }) => (
  <Layout>
    <SEO lang="fr" title="Le Headiste" />
    <BackgroundSection 
        img={ data.leHeadiste.childImageSharp.fluid }
        title="Le Headiste"
        h2Title="La boutique entièrement dédiée à votre tête."
        subtitle="Web Design"
        className="lafrenchcoinProject"
    />
    <ProjectContent />
  </Layout>
)

export default Leheadiste


export const Image = graphql`
    {
        leHeadiste:file(relativePath:{eq: "portfolio/bg-leheadiste.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`