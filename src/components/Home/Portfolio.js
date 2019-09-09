import React, { Component } from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from 'gatsby-image'
import { TimelineLite, Power1, Power2 } from "gsap/TweenMax"
import ScrollMagic from '../Base/ScrollMagic'

import arrowBlack from '../../images/base/arrow-black.svg'


export default class Portfolio extends Component {
    componentDidMount = () => {
        this.animPortfolio()
    }

    
    animPortfolio = () => {
        // Init Scroll Magic
        const controller = new ScrollMagic.Controller()

        // Init Timeline
        const portfolioTl = new TimelineLite()
        // const portfolioSecondTl = new TimelineLite()

        // Target
        const targetHomePortfolio = this.refs.targetHomePortfolio
        const homeTransformFl = this.refs.homeTransformFl
        const homeTransformSl = this.refs.homeTransformSl
        const homeTransformPara = this.refs.homeTransformPara

        new ScrollMagic.Scene({
            triggerElement: targetHomePortfolio,
            triggerHook: 0.65,
            reverse: false
        })
        .setTween(
            portfolioTl
                .from(homeTransformFl, .85, { transform: 'translateY(100%)', ease: Power2.easeOut })
                .from(homeTransformSl, .85, { transform: 'translateY(100%)', ease: Power2.easeOut }, '-=0.45')
                .from(homeTransformPara, .5, { autoAlpha: 0, y: 30, ease: Power1.easeOut })
                .from('.homePortfolio-transform .btn--default', 1, { autoAlpha: 0, y: 30, ease: Power1.easeOut })
                
                .from(".leheadiste-project > .reveal-portfolio--mask", .85, { transform: 'translateY(100%)', ease: Power2.easeOut })
                .from('.leheadiste h3', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })
                .from('.leheadiste .projects-links', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })

                .from(".bitcoin-project > .reveal-portfolio--mask", .85, { transform: 'translateY(100%)', ease: Power2.easeOut })
                .from('.bitcoin h3', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })
                .from('.bitcoin .projects-links', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })

                // .from(".flag-project > .reveal-portfolio--mask", .85, { transform: 'translateY(100%)', ease: Power2.easeOut })
                // .from('.flag h3', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })
                // .from('.flag .projects-links', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })
        )
        .addTo(controller)


        // new ScrollMagic.Scene({
        //     triggerElement: targetHomePortfolio,
        //     triggerHook: 1,
        //     reverse: false
        // })
        // .setTween(
        //     portfolioTl
        //         .from(".weStreet-project > .reveal-portfolio--mask", .85, { transform: 'translateY(100%)', ease: Power2.easeOut })
        //         .from('.weStreet h3', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })
        //         .from('.weStreet .projects-links', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })

        //         .from(".leheadiste-project > .reveal-portfolio--mask", .85, { transform: 'translateY(100%)', ease: Power2.easeOut })
        //         .from('.leheadiste h3', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })
        //         .from('.leheadiste .projects-links', .25, { autoAlpha: 0, transform: 'translateY(100%)', ease: Power1.easeOut })
        // )
        // .addTo(controller)
    }
    

    render() {
        return (
            <section className="homePortfolio" ref="targetHomePortfolio">
                <div className="homePortfolio-transform">
                    <h4>
                        <span ref="homeTransformFl">
                            Transformons vos idées
                        </span>
                    </h4>
                    <h4>
                        <span ref="homeTransformSl">
                            en réalité.
                        </span>
                    </h4>
                    <p ref="homeTransformPara" className="homePortfolio-para">
                        Moyen moderne de communication, un site internet de qualité est un outil indispensable à la croissance de votre activité.
                        Que vous soyez micro-entrepreneur, dirigeant de TPE ou encore de PME, je saurais concrétiser la vision que vous avez de votre entreprise.
                    </p>
                    <p>
                        <Link className="btn--default" to="/contact">
                            Voir tous les projets
                            <img src={ arrowBlack } alt="Flèche bouton voir le projet" />
                        </Link>
                    </p>
                </div>
                
                <StaticQuery
                    query={ Image }
                    render={ data => {
                        const bitcoin = data.bitcoin.childImageSharp.fluid
                        {/* const flag = data.flag.childImageSharp.fluid */}
                        const leHeadiste = data.headiste.childImageSharp.fluid
                        {/* const weStreet = data.weStreet.childImageSharp.fluid */}

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
                                            <img src={ arrowBlack } alt="Flèche bouton voir le projet" />
                                        </Link>
                                    </figure>
                                    <figure className="leheadiste">
                                        <Link to="/projet/leheadiste" className="leheadiste-project projects">
                                            <Img fluid={ leHeadiste } />
                                            <div className="reveal-portfolio--mask"></div>
                                        </Link>
                                        <figcaption>
                                            <h3>Le Headiste</h3>
                                        
                                        </figcaption>
                                        <Link className="projects-links btn--default" to="/projet/leheadiste">
                                            Voir le projet
                                            <img src={ arrowBlack } alt="Flèche bouton voir le projet" />
                                        </Link>
                                    </figure>
                                </div>
                                {/* <div className="projects--second">
                                    <figure className="weStreet">
                                        <Link to="/projet/westreet" className="weStreet-project projects">
                                            <Img fluid={ weStreet } />
                                            <div className="reveal-portfolio--mask"></div>
                                        </Link>
                                        <figcaption><h3>We Street</h3></figcaption>
                                        <Link className="projects-links btn--default" to="/projet/westreet">
                                            Voir le projet
                                            <img src={ arrowBlack } alt="Flèche bouton voir le projet" />
                                        </Link>
                                    </figure>
                                    <figure className="leheadiste">
                                        <Link to="/projet/leheadiste" className="leheadiste-project projects">
                                            <Img fluid={ leHeadiste } />
                                            <div className="reveal-portfolio--mask"></div>
                                        </Link>
                                        <figcaption><h3>Le Headiste</h3></figcaption>
                                        <Link className="projects-links btn--default" to="/projet/leheadiste">
                                            Voir le projet
                                            <img src={ arrowBlack } alt="Flèche bouton voir le projet" />
                                        </Link>
                                    </figure>
                                </div> */}
                            </div>
                        )
                    } }
                />
            </section>
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
    }
`