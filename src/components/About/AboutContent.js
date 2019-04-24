import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { FaGitSquare } from 'react-icons/fa';

export default class AboutContent extends Component {
    render() {
        return (
            <section className="aboutContent">
                <div className="who">
                    <div className="who-content">
                        <div className="who-content-img">
                            <StaticQuery
                                query={ Image }
                                render={ data => {
                                    const whoProfile = data.profile.childImageSharp.fluid

                                    return (
                                        <figure className="who-content-img--profile">
                                            <Img fluid={ whoProfile } />
                                        </figure>
                                    )
                                }}
                            />
                        </div>
                        <div className="who-content-desc">

                        </div>
                    </div>
                    <div className="who-socials">

                    </div>
                </div>
            </section>
        )
    }
}

const Image = graphql`
    {
        profile:file(relativePath:{eq: "about/cyril-gouverneur-creation-site-internet.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`