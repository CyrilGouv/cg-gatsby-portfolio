import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { TimelineLite, Power2 } from "gsap/TweenMax";
import ScrollMagic from '../../../Base/ScrollMagic'

import ProjectOrdi from './ProjectOrdi'

import arrowImg from '../../../../images/base/arrow-black.svg'

export default class ProjectContent extends Component {

    componentDidMount = () => {
        this.initAnim()
    }

    initAnim = () => {
        const projectTl = new TimelineLite()
        const controller = new ScrollMagic.Controller()

        const project = this.refs.project
        const projectBlurb = this.refs.projectBlurb.children
        const projectOrdiReveal = this.refs.projectOrdiReveal

        new ScrollMagic.Scene({
            triggerElement: project,
            triggerHook: .85,
            reverse: false
        })
        .setTween(
            projectTl
                .staggerFrom(projectBlurb, .85 , { autoAlpha: 0, transform: 'translateY: 100%', ease: Power2.easeOut, delay: 2 }, .25)
                .from('.singleProject--mask', 1.25, { transform: 'translateY(100%)', ease: Power2.easeOut }, '-=1.5')
                .from(projectOrdiReveal, .85 , { autoAlpha: 0, transform: 'translateY: 100%', ease: Power2.easeOut}, '-=.25')
        )
        .addTo(controller)
        
    }

    render() {
        return (
            <section className="singleProjectContent singleLafrenchcoin" ref="project">
                <div className="singleProject-blurb">
                    <div className="singleProject-blurb-intro" ref="projectBlurb">
                        <p>
                            La French Coin est un projet personnel qui a pour but la création d'un annuaire de géolocalisation regroupant
                            les entreprises françaises acceptant les crypto-monnaies comme moyen de paiements. Cette application web
                            a été réalisée en MERN stack et en utilisant une bibliothèque JavaScript libre de cartographie en ligne appellée <a className="inline-link" href="https://leafletjs.com/" target="_blank" rel="noopener noreferrer">Leaflet</a>.
                        </p>
                        <p className="singleProject-blurb-year">ANNÉE:</p>
                        <p>2018</p>
                        <p className="singleProject-blurb-client">CLIENT:</p>
                        <p>Projet Personnel</p>
                        <a href="https://www.lafrenchcoin.com" target="_blank" rel="noopener noreferrer" className="btn--default">
                            Voir le site
                            <img src={ arrowImg } alt="Flèche appel à l'action vers à propos"/>    
                        </a>
                    </div>
                    <div className="singleProject-img">
                        <StaticQuery
                            query={ Image }
                            render={ data => {
                                return (
                                    <figure>
                                        <Img fluid={ data.mobile.childImageSharp.fluid } />
                                        <div className="singleProject--mask"></div>
                                    </figure>
                                )
                            } }
                        />
                    </div>
                </div>
                <div ref="projectOrdiReveal">
                    <ProjectOrdi />
                </div>
            </section>
        )
    }
}


const Image = graphql`
    {
        mobile:file(relativePath:{eq: "portfolio/mockup-mobile-lafrenchcoin.png"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }

        ordi:file(relativePath:{eq: "portfolio/mockup-ordi-lafrenchcoin.png"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`