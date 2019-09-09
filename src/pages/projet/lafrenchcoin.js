import React from "react"
import { graphql } from "gatsby"

import BackgroundSection from '../../components/Base/BackgroundSection'

import Layout from "../../components/Base/Layout"
import SEO from "../../components/seo"
import ProjectContent from '../../components/Projects/Single/Lafrenchcoin/ProjectContent'

const Lafrenchcoin = ({ data }) => (
  <Layout>
    <SEO lang="fr" title="La French Coin" />
    <BackgroundSection 
        img={ data.bitcoin.childImageSharp.fluid }
        title="La French Coin"
        h2Title="Annuaire des professionnels acceptant les crypto-monaies comme moyen de paiement."
        subtitle="Application Web & Web Design"
        className="lafrenchcoinProject"
    />
    <ProjectContent />
  </Layout>
)

export default Lafrenchcoin


export const Image = graphql`
    {
        bitcoin:file(relativePath:{eq: "portfolio/bg-lafrenchcoin.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`