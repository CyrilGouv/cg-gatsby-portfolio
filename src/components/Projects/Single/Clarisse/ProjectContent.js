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

        new ScrollMagic.Scene({
            triggerElement: color,
            triggerHook: .85,
            reverse: false
        })
        .setTween(
            colorTl
                .from('.singleProject-color--mask', 1.25, { transform: 'translateY(100%)', ease: Power2.easeOut })
        )
        .addTo(controller)
        
    }

    render() {
        return (
            <section className="singleProjectContent singleClarisseTraductions" ref="project">
                <div className="singleProject-blurb">
                    <div className="singleProject-blurb-intro" ref="projectBlurb">
                        <p>
                            Projet de création d'un site internet multilingue sous Wordpress. Clarisse Traductions propose des services de traduction, localisation, SEO, sous-titrage, relecture, révision, édition et rédaction vous assurant une communication parfaite afin de vous implanter durablement sur le marché français.
                        </p>
                        <p className="singleProject-blurb-year">ANNÉE:</p>
                        <p>2019</p>
                        <p className="singleProject-blurb-client">CLIENT:</p>
                        <p>Clarisse Traductions</p>
                        <a href="https://www.clarisse-traductions.com" target="_blank" rel="noopener noreferrer" className="btn--default">
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
                                        <Img fluid={ data.ordiClarisse.childImageSharp.fluid } />
                                        <div className="singleProject--mask"></div>
                                    </figure>
                                )
                            } }
                        />
                    </div>
                </div>
            </section>
        )
    }
}


const Image = graphql`
    {
        ordiClarisse:file(relativePath:{eq: "portfolio/mockup-ordi-clarisse-traductions.png"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`