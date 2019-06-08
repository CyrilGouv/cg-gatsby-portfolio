import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'


const ProjectOrdi = ({ data }) => (
  <div className="projectOrdi"> 
    <StaticQuery
        query={ Image }
        render={ data => {
            return (
                <Img fluid={ data.ordi.childImageSharp.fluid } />
            )
        } }
    />
  </div> 
)

export default ProjectOrdi


export const Image = graphql`
    {
        ordi:file(relativePath:{eq: "portfolio/mockup-ordi-westreet.png"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`