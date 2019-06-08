import React from "react"
import { graphql } from "gatsby"

import BackgroundSection from '../../components/Base/BackgroundSection'

import Layout from "../../components/Base/Layout"
import SEO from "../../components/seo"
import ProjectContent from '../../components/Projects/Single/Westreet/ProjectContent'

const Westreet = ({ data }) => (
  <Layout>
    <SEO title="We Street" />
    <BackgroundSection 
        img={ data.westreet.childImageSharp.fluid }
        title="We Street"
        h2Title="Boutique de vêtements orienté street wear."
        subtitle="Web Design"
        className="westreetProject"
    />
    <ProjectContent />
  </Layout>
)

export default Westreet


export const Image = graphql`
    {
        westreet:file(relativePath:{eq: "portfolio/bg-westreet.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`