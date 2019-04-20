import React, { Component } from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from 'gatsby-image'
import { TimelineLite, Power1, Power2, Power4 } from "gsap/TweenMax";
import CSSRulePlugin from "gsap/CSSRulePlugin"
import ScrollMagic from '../Base/ScrollMagic'


import arrowImg from '../../images/base/arrow-black.svg'


export default class About extends Component {
    componentDidMount = () => {
        // Init Scroll Magic
        const controller = new ScrollMagic.Controller()
        
        // Init Timeline
        const scrollAboutTl = new TimelineLite()
        const scrollAboutImgTl = new TimelineLite()
        const scrollAboutTransformTl = new TimelineLite()

        // Vars
        const homeAboutFl = this.refs.homeAboutFl
        const homeAboutSl = this.refs.homeAboutSl
        const homeAboutPara1 = this.refs.homeAboutPara1
        const homeAboutPara2 = this.refs.homeAboutPara2
        const homeAboutPara3 = this.refs.homeAboutPara3
        const rule = CSSRulePlugin.getRule(".btn--default::before")
        const aboutTransformPara = this.refs.aboutTransformPara

        // Trigger Elements
        const triggerAboutBlurb = this.refs.triggerAboutBlurb
        const triggerAboutTransform = this.refs.triggerAboutTransform
        

        // About Title Scene
        const revealAboutBlurb = new ScrollMagic.Scene({
            triggerElement: triggerAboutBlurb,
            triggerHook: 0.5,
            reverse: false
        })
        .setTween(
            scrollAboutTl
                .from(homeAboutFl, .85, { transform: 'translateY(100%)', ease: Power2.easeOut })
                .from(homeAboutSl, .85, { transform: 'translateY(100%)', ease: Power2.easeOut }, '-=0.45')
                .from(homeAboutPara1, .5, { autoAlpha: 0, y: 30, ease: Power1.easeOut })
                .from(homeAboutPara2, .5, { autoAlpha: 0, y: 30, ease: Power1.easeOut }, '-=.15')
                .from(homeAboutPara3, .5, { autoAlpha: 0, y: 30, ease: Power1.easeOut }, '-=.15')
                .from('.homeAbout-blurb .btn--default', 1, { autoAlpha: 0, y: 30, ease: Power1.easeOut })
                .from('.homeAbout-blurb .btn--default', .5, { paddingLeft: 0, ease: Power1.easeOut })
                .from(rule, .25, { cssRule: { width: 0 }, ease: Power1.easeOut }, '-=0.5')
        )
        .addTo(controller)

        // About Img Scene
        const revealAboutImg = new ScrollMagic.Scene({
            triggerElement: '.homeAbout-img',
            triggerHook: .65,
            reverse: false
        })
        .setTween(
            scrollAboutImgTl
                .staggerFrom('.reveal-about--mask', .85, { transform: 'translateY(100%)', ease: Power2.easeOut }, 0.35)
        )
        .addTo(controller)

        // About Transform Scene
        const revealAboutTransform = new ScrollMagic.Scene({
            triggerElement: triggerAboutTransform,
            triggerHook: 0.85,
            reverse: false
        })
        .setTween(
            scrollAboutTransformTl
                .from(aboutTransformPara, 0.85, { transform: 'translateY(100%)', ease: Power2.easeOut })
                .from('.about-transform a', 0.85, { transform: 'translateY(100%)', ease: Power2.easeOut })
        )
        .addTo(controller)
    }
    

    render() {
        return (
            <section className="homeAbout">
                <div className="homeAbout-blurb" ref="triggerAboutBlurb">
                    <h4>
                        <span ref="homeAboutFl">
                            Design. Code.
                        </span>
                    </h4>
                    <h4>
                        <span ref="homeAboutSl">
                            Technologie.
                        </span>        
                    </h4>
                    <p ref="homeAboutPara1">Je suis Cyril.</p>
                    <p ref="homeAboutPara2">Développeur front-end, Intégrateur Web & Webdesigner freelance basé actuellement dans le sud-ouest de la France à Biscarrosse dans le département des Landes.</p>
                    <p ref="homeAboutPara3">Passionné et curieux, je mets dans chaque projet toute ma passion pour le numérique afin de créer des applications web uniques adaptés à vos besoins.</p>
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
                                    <div className="reveal-about--mask"></div>
                                </figure>
                                <figure className="homeAbout-img--design">
                                    <Img fluid={ aboutDesign } />
                                    <div className="reveal-about--mask"></div>
                                </figure>
                            </div>
                        )
                    } }
                />

                <div className="about-transform" ref="triggerAboutTransform">
                    <p>
                        <span ref="aboutTransformPara">
                            Transformons vos idées en réalité.
                        </span>
                    </p>
                    <p>
                        <Link to="/contact">Parlons-en maintenant !</Link>
                    </p>
                </div>
                
            </section>
        )
    }
}


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