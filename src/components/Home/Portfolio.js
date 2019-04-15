import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from 'gatsby-image'

import arrowBlack from '../../images/base/arrow-black.svg'

const Portfolio = () => (
    <section className="homePortfolio">
        <StaticQuery
            query={ Image }
            render={ data => {
                const bitcoin = data.bitcoin.childImageSharp.fluid
                const flag = data.flag.childImageSharp.fluid
                const leHeadiste = data.headiste.childImageSharp.fluid
                const weStreet = data.weStreet.childImageSharp.fluid

                return (
                    <div className="homePortfolio-wrapper">
                        <div className="projects--first">
                            <figure className="bitcoin">
                                <Link to="/projet/bitcoin" className="bitcoin-project projects">
                                    <Img fluid={ bitcoin } />
                                </Link>
                                <figcaption><h3>La French Coin</h3></figcaption>
                                <Link className="projects-links btn--default" to="/projet/bitcoin">
                                    Voir le projet
                                    <img src={ arrowBlack } alt="Flèche bouton voir le projet" />
                                </Link>
                            </figure>
                            <figure className="flag">
                                <Link to="/projet/drapeaux-discount" className="flag-project projects">
                                    <Img fluid={ flag } />
                                </Link>
                                <figcaption><h3>Drapeaux Discount</h3></figcaption>
                                <Link className="projects-links btn--default" to="/projet/drapeaux-discount">
                                    Voir le projet
                                    <img src={ arrowBlack } alt="Flèche bouton voir le projet" />
                                </Link>
                            </figure>
                        </div>
                        <div className="projects--second">
                            <figure className="weStreet">
                                <Link to="/projet/we-street" className="weStreet-project projects">
                                    <Img fluid={ weStreet } />
                                </Link>
                                <figcaption><h3>We Street</h3></figcaption>
                                <Link className="projects-links btn--default" to="/projet/we-street">
                                    Voir le projet
                                    <img src={ arrowBlack } alt="Flèche bouton voir le projet" />
                                </Link>
                            </figure>
                            <figure className="leheadiste">
                                <Link to="/projet/le-headiste" className="leheadiste-project projects">
                                    <Img fluid={ leHeadiste } />
                                </Link>
                                <figcaption><h3>Le Headiste</h3></figcaption>
                                <Link className="projects-links btn--default" to="/projet/le-headiste">
                                    Voir le projet
                                    <img src={ arrowBlack } alt="Flèche bouton voir le projet" />
                                </Link>
                            </figure>
                        </div>
                    </div>
                )
            } }
        />
    </section>
)
export default Portfolio

const Image = graphql`
    {
        bitcoin:file(relativePath:{eq: "portfolio/lafrenchcoin.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }

        flag:file(relativePath:{eq: "portfolio/drapeaux-discount.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }

        headiste:file(relativePath:{eq: "portfolio/le-headiste.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }

        weStreet:file(relativePath:{eq: "portfolio/we-street.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`