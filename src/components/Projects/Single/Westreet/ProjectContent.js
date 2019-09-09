import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { TimelineLite, Power2 } from "gsap/TweenMax";
import ScrollMagic from '../../../Base/ScrollMagic'

import ProjectOrdi from './ProjectOrdi'


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
            <section className="singleProjectContent singleWestreet" ref="project">
                <div className="singleProject-blurb">
                    <div className="singleProject-blurb-intro" ref="projectBlurb">
                        <p>
                            We Street est une boutique e-commerce spécialisée dans la vente de vêtements street wear permettant de vous constituer une tenue branchée, stylée et urbaine.
                            Ce projet de design web a été réalisé pour mon client avec le logiciel <a className="inline-link" href="https://www.sketch.com/" target="_blank" rel="noopener noreferrer">Sketch App</a>.
                        </p>
                        <p className="singleProject-blurb-year">ANNÉE:</p>
                        <p>2019</p>
                        <p className="singleProject-blurb-client">CLIENT:</p>
                        <p>We Street</p>
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
        mobile:file(relativePath:{eq: "portfolio/mockup-mobile-westreet.png"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`