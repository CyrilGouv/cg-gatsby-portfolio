import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'


const ProjectOrdi = ({ data }) => (
  <div className="projectOrdi"> 
    <StaticQuery
        query={ Image }
        render={ data => {
            return (
                <Img fluid={ data.ordiDrapeaux.childImageSharp.fluid } />
            )
        } }
    />
  </div> 
)

export default ProjectOrdi


export const Image = graphql`
    {
        ordiDrapeaux:file(relativePath:{eq: "portfolio/mockup-ordi-drapeaux-discount.png"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`