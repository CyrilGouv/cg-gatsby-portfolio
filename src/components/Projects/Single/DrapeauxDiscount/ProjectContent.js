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
        this.setMenu()
    }

    initAnim = () => {
        const projectTl = new TimelineLite()
        const controller = new ScrollMagic.Controller()

        const project = this.refs.project
        const projectBlurb = this.refs.projectBlurb.children

        new ScrollMagic.Scene({
            triggerElement: project,
            triggerHook: .85,
            reverse: false
        })
        .setTween(
            projectTl
                .staggerFrom(projectBlurb, .85 , { autoAlpha: 0, transform: 'translateY: 100%', ease: Power2.easeOut, delay: 2 }, .25)
                .from('.singleProject--mask', 1.25, { transform: 'translateY(100%)', ease: Power2.easeOut }, '-=1.5')
        )
        .addTo(controller)

        const colorTl = new TimelineLite()

        const color = this.refs.color
        const colorTitle = this.refs.colorTitle
        const colorBox = this.refs.colorBox.children
        const projectOrdiReveal = this.refs.projectOrdiReveal

        new ScrollMagic.Scene({
            triggerElement: color,
            triggerHook: .85,
            reverse: false
        })
        .setTween(
            colorTl
                .from('.singleProject-color--mask', 1.25, { transform: 'translateY(100%)', ease: Power2.easeOut })
                .from(colorTitle, .85 , { autoAlpha: 0, transform: 'translateY: 100%', ease: Power2.easeOut}, '-=.25')
                .staggerFrom(colorBox, .85 , { autoAlpha: 0, transform: 'translateY: 100%', ease: Power2.easeOut}, .25)
                .from(projectOrdiReveal, .85 , { autoAlpha: 0, transform: 'translateY: 100%', ease: Power2.easeOut}, '-=.25')
        )
        .addTo(controller)
        
    }

    setMenu = () => {
        const menuTl = new TimelineLite()

        menuTl
            .set('.menu', { y: '-100%' })
            .to('body', 0.1, {css:{className:'-=lock-scroll'}})
    }

    render() {
        return (
            <section className="singleProjectContent singleDrapeauxDiscount" ref="project">
                <div className="singleProject-blurb">
                    <div className="singleProject-blurb-intro" ref="projectBlurb">
                        <p>
                            Drapeaux Discount est une boutique en ligne de vente de drapeaux de qualité et offrant un large choix de pays, régions, événement.
                            Ce projet a été réalisé en combinant Wordpress, Woocommerce et le thème Avada pour obtenir un site e-commerce moderne.
                        </p>
                        <p className="singleProject-blurb-year">ANNÉE:</p>
                        <p>2018</p>
                        <p className="singleProject-blurb-client">CLIENT:</p>
                        <p>Drapeaux Discount</p>
                        <a href="https://www.drapeaux-discount.com" target="_blank" rel="noopener noreferrer" className="btn--default">
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
                                        <Img fluid={ data.mobileDrapeaux.childImageSharp.fluid } />
                                        <div className="singleProject--mask"></div>
                                    </figure>
                                )
                            } }
                        />
                    </div>
                </div>
                <div className="singleProject-color" ref="color">
                    <div className="singleProject-color--mask"></div>
                    <div className="singleProject-color-title">
                        <p ref="colorTitle">COULEURS</p>
                    </div>
                    <div className="singleProject-color-pick drapeauxDiscountSingle-pick" ref="colorBox">
                        <div className="pick-first">
                            <p className="pick-color-first">#e8973d</p>
                        </div>
                        <div className="pick-second">
                            <p className="pick-color-second">#333333</p>
                        </div>
                        <div className="pick-third">
                            <p className="pick-color-third">#000000</p>
                        </div>
                        <div className="pick-fourth">
                            <p className="pick-color-fourth">#ffffff</p>
                        </div>
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
        mobileDrapeaux:file(relativePath:{eq: "portfolio/mockup-mobile-drapeaux-discount.png"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`