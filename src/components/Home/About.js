import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from 'gatsby-image'

import arrowImg from '../../images/base/arrow-black.svg'

const About = () => (
    <section className="homeAbout">
        <div className="homeAbout-blurb">
            <h4>Design. Code.</h4>
            <h4>Technologie.</h4>
            <p>Je suis Cyril.</p>
            <p>Développeur front-end, Intégrateur Web & Webdesigner freelance basé actuellement dans le sud-ouest de la France à Biscarrosse dans le département des Landes.</p>
            <p>Passionné et curieux, je mets dans chaque projet toute ma passion pour le numérique afin de créer des applications web uniques adaptés à vos besoins.</p>
            <Link to="/a-propos" className="btn--default">
                En savoir plus
                <img src={ arrowImg } alt="Flèche appel à l'action vers à propos"/>    
            </Link>
        </div>
        
        <StaticQuery
            query={ Image }
            render={ data => {
                const aboutProto = data.proto.childImageSharp.fluid
                const aboutDesign = data.design.childImageSharp.fluid

                return (
                    <div className="homeAbout-img">
                        <figure className="homeAbout-img--proto">
                            <Img fluid={ aboutProto } />
                        </figure>
                        <figure className="homeAbout-img--design">
                            <Img fluid={ aboutDesign } />
                        </figure>
                    </div>
                )
            } }
        />

        <div className="about-transform">
            <p>
                Transformons vos idées en réalité.<br />
                <Link to="/contact">Parlons-en maintenant !</Link>
            </p>
        </div>
        
    </section>
)
export default About


const Image = graphql`
    {
        design:file(relativePath:{eq: "home/about-design.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }

        proto:file(relativePath:{eq: "home/about-prototype.jpeg"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`