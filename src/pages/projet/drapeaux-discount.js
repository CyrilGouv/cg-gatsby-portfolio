import React from "react"
import { graphql } from "gatsby"

import BackgroundSection from '../../components/Base/BackgroundSection'

import Layout from "../../components/Base/Layout"
import SEO from "../../components/seo"
import ProjectContent from '../../components/Projects/Single/DrapeauxDiscount/ProjectContent'

const DrapeauxDiscount = ({ data }) => (
  <Layout>
    <SEO title="Drapeaux Discount" />
    <BackgroundSection 
        img={ data.drapeaux.childImageSharp.fluid }
        title="Drapeaux Discount"
        h2Title="Drapeaux Discount est une boutique de vente en ligne de drapeaux de qualité."
        subtitle="Woocommerce & Web Design"
        className="drapeauxDiscountProject"
    />
    <ProjectContent />
  </Layout>
)

export default DrapeauxDiscount


export const Image = graphql`
    {
        drapeaux:file(relativePath:{eq: "portfolio/bg-drapeaux-discount.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`