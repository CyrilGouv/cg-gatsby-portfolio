import React, { Component } from 'react'
import { Link, graphql, StaticQuery } from "gatsby"
import Img from 'gatsby-image'
import { TimelineLite, Power1, Power2 } from "gsap/TweenMax";
import ScrollMagic from '../Base/ScrollMagic'

import arrowWhite from '../../images/base/arrow-white.svg'

export default class Portfolio extends Component {
    componentDidMount = () => {
        this.animPortfolio()
    }

    
    animPortfolio = () => {
        // Init Scroll Magic
        const controller = new ScrollMagic.Controller()

        // Init Timeline
        const portfolioTl = new TimelineLite()

        // Target
        const targetHomePortfolio = this.refs.targetHomePortfolio

        new ScrollMagic.Scene({
            triggerElement: targetHomePortfolio,
            triggerHook: 0.65,
            reverse: false
        })
        .setTween(
            portfolioTl
                .from(".bitcoin-project > .reveal-portfolio--mask", .65, { transform: 'translateY(100%)', ease: Power2.easeOut })
                .from('.bitcoin h3', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })
                .from('.bitcoin .projects-links', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })

                .from(".flag-project > .reveal-portfolio--mask", .65, { transform: 'translateY(100%)', ease: Power2.easeOut })
                .from('.flag h3', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })
                .from('.flag .projects-links', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })
                
        )
        .addTo(controller)

        new ScrollMagic.Scene({
            triggerElement: targetHomePortfolio,
            triggerHook: 1,
            reverse: false
        })
        .setTween(
            portfolioTl
                .from(".weStreet-project > .reveal-portfolio--mask", .85, { transform: 'translateY(100%)', ease: Power2.easeOut })
                .from('.weStreet h3', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })
                .from('.weStreet .projects-links', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })

                .from(".leheadiste-project > .reveal-portfolio--mask", .85, { transform: 'translateY(100%)', ease: Power2.easeOut })
                .from('.leheadiste h3', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })
                .from('.leheadiste .projects-links', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })

                .from(".clarisse-project > .reveal-portfolio--second-mask", .65, { transform: 'translateY(100%)', ease: Power2.easeOut })
                .from('.clarisse h3', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })
                .from('.clarisse .projects-links', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })
        )
        .addTo(controller)
    }

    render() {
        return (
            <div className="portfolio homePortfolio" ref="targetHomePortfolio">
                <StaticQuery
                    query={ Image }
                    render={ data => {
                        const bitcoin = data.bitcoin.childImageSharp.fluid
                        const flag = data.flag.childImageSharp.fluid
                        const leHeadiste = data.headiste.childImageSharp.fluid
                        const weStreet = data.weStreet.childImageSharp.fluid
                        const clarisse = data.clarisse.childImageSharp.fluid

                        return (
                            <div className="homePortfolio-wrapper">

                                <div className="projects--first">
                                    <figure className="bitcoin">
                                        <Link to="/projet/lafrenchcoin" className="bitcoin-project projects">
                                            <Img fluid={ bitcoin } />
                                            <div className="reveal-portfolio--mask"></div>
                                        </Link>
                                        <figcaption><h3>La French Coin</h3></figcaption>
                                        <Link className="projects-links btn--default" to="/projet/lafrenchcoin">
                                            Voir le projet
                                            <img src={ arrowWhite } alt="Flèche bouton voir le projet" />
                                        </Link>
                                    </figure>
                                    <figure className="flag">
                                        <Link to="/projet/drapeaux-discount" className="flag-project projects">
                                            <Img fluid={ flag } />
                                            <div className="reveal-portfolio--mask"></div>
                                        </Link>
                                        <figcaption>
                                            <h3>Drapeaux Discount</h3>
                                        </figcaption>
                                        <Link className="projects-links btn--default" to="/projet/drapeauxdiscount">
                                            Voir le projet
                                            <img src={ arrowWhite } alt="Flèche bouton voir le projet" />
                                        </Link>
                                    </figure>
                                </div>
                                
                                <div className="projects--second">
                                    <figure className="weStreet">
                                        <Link to="/projet/westreet" className="weStreet-project projects">
                                                <Img fluid={ weStreet } />
                                                <div className="reveal-portfolio--second-mask"></div>
                                        </Link>
                                        <figcaption>
                                            <h3>We Street</h3>
                                        </figcaption>
                                        <Link className="projects-links btn--default" to="/projet/westreet">
                                            Voir le projet
                                            <img src={ arrowWhite } alt="Flèche bouton voir le projet" />
                                        </Link>
                                    </figure>
                                    <figure className="leheadiste">
                                        <Link to="/projet/leheadiste" className="leheadiste-project projects">
                                            <Img fluid={ leHeadiste } />
                                            <div className="reveal-portfolio--second-mask"></div>
                                        </Link>
                                        <figcaption>
                                            <h3>Le Headiste</h3>
                                        </figcaption>
                                        <Link className="projects-links btn--default" to="/projet/leheadiste">
                                            Voir le projet
                                            <img src={ arrowWhite } alt="Flèche bouton voir le projet" />
                                        </Link>
                                    </figure>
                                </div>

                                <div className="projects--third">
                                    <figure className="clarisse">
                                        <Link to="/projet/clarisse" className="clarisse-project projects">
                                            <Img fluid={ clarisse } />
                                            <div className="reveal-portfolio--second-mask"></div>
                                        </Link>
                                        <figcaption>
                                            <h3>Clarisse Traductions</h3>
                                        </figcaption>
                                        <Link className="projects-links btn--default" to="/projet/clarisse">
                                            Voir le projet
                                            <img src={ arrowWhite } alt="Flèche bouton voir le projet" />
                                        </Link>
                                    </figure>
                                </div>
                            </div>
                        )
                    }}
                />
            </div>
        )
    }
}


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

        clarisse:file(relativePath:{eq: "portfolio/clarisse-traductions.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`