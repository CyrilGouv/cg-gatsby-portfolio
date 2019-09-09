import React, { Component } from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from 'gatsby-image'
import { TimelineLite, Power1, Power2 } from "gsap/TweenMax";
import CSSRulePlugin from "gsap/CSSRulePlugin"
import ScrollMagic from '../Base/ScrollMagic'
import { Parallax } from 'react-scroll-parallax';


import arrowImg from '../../images/base/arrow-black.svg'


export default class About extends Component {
    componentDidMount = () => {
        // Init Scroll Magic
        const controller = new ScrollMagic.Controller()
        
        // Init Timeline
        const scrollAboutTl = new TimelineLite()
        const scrollAboutImgTl = new TimelineLite()
        // const scrollAboutTransformTl = new TimelineLite()

        // Vars
        const homeAboutFl = this.refs.homeAboutFl
        const homeAboutSl = this.refs.homeAboutSl
        const homeAboutPara1 = this.refs.homeAboutPara1
        const homeAboutPara2 = this.refs.homeAboutPara2
        const homeAboutPara3 = this.refs.homeAboutPara3
        const homeAboutPara4 = this.refs.homeAboutPara4
        const rule = CSSRulePlugin.getRule(".btn--default::before")
        // const aboutTransformPara = this.refs.aboutTransformPara

        // Trigger Elements
        const triggerAboutBlurb = this.refs.triggerAboutBlurb
        // const triggerAboutTransform = this.refs.triggerAboutTransform
        

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
                .from(homeAboutPara4, .5, { autoAlpha: 0, y: 30, ease: Power1.easeOut }, '-=.15')
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
        // const revealAboutTransform = new ScrollMagic.Scene({
        //     triggerElement: triggerAboutTransform,
        //     triggerHook: 0.85,
        //     reverse: false
        // })
        // .setTween(
        //     scrollAboutTransformTl
        //         .from(aboutTransformPara, 0.55, { transform: 'translateY(100%)', ease: Power2.easeOut })
        //         .from('.about-transform a', 0.55, { transform: 'translateY(100%)', ease: Power2.easeOut }, '-=.75')
                
        // )
        // .addTo(controller)
    }
    

    render() {
        return (
            <section className="homeAbout">
                <div className="homeAbout-blurb" ref="triggerAboutBlurb">
                    <h4>
                        <span ref="homeAboutFl">
                            Comment puis-je
                        </span>
                    </h4>
                    <h4>
                        <span ref="homeAboutSl">
                            vous aider ?
                        </span>        
                    </h4>
                    <p ref="homeAboutPara1">En tant que Développeur front-end et webdesigner freelance, Je vous accompagne dans toutes les étapes de la création d’un site web. Du design à la mise en ligne en passant par l’optimisation des performances de votre projet.</p>
                    <div className="homeAbout-lists">
                        <ul className="homeAbout-design" ref="homeAboutPara2">
                            <li>
                                <svg version="1.1" viewBox="0 0 30 4" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fillRule="evenodd">
                                <g transform="translate(-254 -1551)" fill="#000">
                                <g transform="translate(252 1550)">
                                <g transform="translate(2)">
                                <g transform="translate(0 .6378)">
                                <path d="m8 0.8633c-0.37596 0-0.75286 0.1364-1.0469 0.4082l-2.0762 1.9238c-0.21042 0.1951-0.58423 0.2112-0.81445 0.029l-2.7461-2.1719c-0.14026-0.11097-0.32907-0.13868-0.4953-0.072683-0.16623 0.065996-0.28462 0.21567-0.31057 0.39263-0.025948 0.17696 0.04449 0.35432 0.18478 0.46526l2.7461 2.1719c0.62678 0.4952 1.5296 0.4629 2.1152-0.08l2.0762-1.9258c0.19258-0.1781 0.54179-0.1781 0.73438 0l2.0918 1.9277c0.58803 0.5435 1.5038 0.5435 2.0918 0l2.0762-1.9258c0.19258-0.178 0.54179-0.178 0.73438 0l2.0918 1.9277c0.58803 0.5435 1.5038 0.5435 2.0918 0l2.0762-1.9258c0.19259-0.1781 0.54178-0.1781 0.73438 0l2.0938 1.9297c0.58728 0.5415 1.4891 0.5726 2.1152 0.076l2.7402-2.1738c0.14657-0.10873 0.22228-0.28867 0.19751-0.46948s-0.14606-0.33377-0.31648-0.39908c-0.17041-0.065309-0.36287-0.032594-0.50213 0.085353l-2.7402 2.1738c-0.2303 0.1826-0.60481 0.1678-0.81641-0.027l-2.0938-1.9317c-0.58806-0.5437-1.5037-0.5437-2.0918 0l-2.0762 1.9238c-0.19258 0.178-0.54179 0.178-0.73438 0l-2.0918-1.9297c-0.58803-0.5435-1.5038-0.5435-2.0918 0l-2.0762 1.9238c-0.19258 0.178-0.54179 0.178-0.73438 0l-2.0918-1.9297c-0.29401-0.2598-0.66896-0.3962-1.0449-0.3962z"/>
                                </g>
                                </g>
                                </g>
                                </g>
                                </g>
                                </svg>

                            </li>
                            <li><span>Design</span></li>
                            <li>Web design</li>
                            <li>UI / UX</li>
                            <li>Responsive</li>
                        </ul>
                        <ul className="homeAbout-dev" ref="homeAboutPara3">
                            <li>
                                <svg version="1.1" viewBox="0 0 30 4" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fillRule="evenodd">
                                <g transform="translate(-254 -1551)" fill="#000">
                                <g transform="translate(252 1550)">
                                <g transform="translate(2)">
                                <g transform="translate(0 .6378)">
                                <path d="m8 0.8633c-0.37596 0-0.75286 0.1364-1.0469 0.4082l-2.0762 1.9238c-0.21042 0.1951-0.58423 0.2112-0.81445 0.029l-2.7461-2.1719c-0.14026-0.11097-0.32907-0.13868-0.4953-0.072683-0.16623 0.065996-0.28462 0.21567-0.31057 0.39263-0.025948 0.17696 0.04449 0.35432 0.18478 0.46526l2.7461 2.1719c0.62678 0.4952 1.5296 0.4629 2.1152-0.08l2.0762-1.9258c0.19258-0.1781 0.54179-0.1781 0.73438 0l2.0918 1.9277c0.58803 0.5435 1.5038 0.5435 2.0918 0l2.0762-1.9258c0.19258-0.178 0.54179-0.178 0.73438 0l2.0918 1.9277c0.58803 0.5435 1.5038 0.5435 2.0918 0l2.0762-1.9258c0.19259-0.1781 0.54178-0.1781 0.73438 0l2.0938 1.9297c0.58728 0.5415 1.4891 0.5726 2.1152 0.076l2.7402-2.1738c0.14657-0.10873 0.22228-0.28867 0.19751-0.46948s-0.14606-0.33377-0.31648-0.39908c-0.17041-0.065309-0.36287-0.032594-0.50213 0.085353l-2.7402 2.1738c-0.2303 0.1826-0.60481 0.1678-0.81641-0.027l-2.0938-1.9317c-0.58806-0.5437-1.5037-0.5437-2.0918 0l-2.0762 1.9238c-0.19258 0.178-0.54179 0.178-0.73438 0l-2.0918-1.9297c-0.58803-0.5435-1.5038-0.5435-2.0918 0l-2.0762 1.9238c-0.19258 0.178-0.54179 0.178-0.73438 0l-2.0918-1.9297c-0.29401-0.2598-0.66896-0.3962-1.0449-0.3962z"/>
                                </g>
                                </g>
                                </g>
                                </g>
                                </g>
                                </svg>
                            </li>
                            <li><span>Développement</span></li>
                            <li>Front-End</li>
                            <li>Wordpress</li>
                        </ul>
                        <ul className="homeAbout-opt" ref="homeAboutPara4">
                            <li>
                                <svg version="1.1" viewBox="0 0 30 4" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fillRule="evenodd">
                                <g transform="translate(-254 -1551)" fill="#000">
                                <g transform="translate(252 1550)">
                                <g transform="translate(2)">
                                <g transform="translate(0 .6378)">
                                <path d="m8 0.8633c-0.37596 0-0.75286 0.1364-1.0469 0.4082l-2.0762 1.9238c-0.21042 0.1951-0.58423 0.2112-0.81445 0.029l-2.7461-2.1719c-0.14026-0.11097-0.32907-0.13868-0.4953-0.072683-0.16623 0.065996-0.28462 0.21567-0.31057 0.39263-0.025948 0.17696 0.04449 0.35432 0.18478 0.46526l2.7461 2.1719c0.62678 0.4952 1.5296 0.4629 2.1152-0.08l2.0762-1.9258c0.19258-0.1781 0.54179-0.1781 0.73438 0l2.0918 1.9277c0.58803 0.5435 1.5038 0.5435 2.0918 0l2.0762-1.9258c0.19258-0.178 0.54179-0.178 0.73438 0l2.0918 1.9277c0.58803 0.5435 1.5038 0.5435 2.0918 0l2.0762-1.9258c0.19259-0.1781 0.54178-0.1781 0.73438 0l2.0938 1.9297c0.58728 0.5415 1.4891 0.5726 2.1152 0.076l2.7402-2.1738c0.14657-0.10873 0.22228-0.28867 0.19751-0.46948s-0.14606-0.33377-0.31648-0.39908c-0.17041-0.065309-0.36287-0.032594-0.50213 0.085353l-2.7402 2.1738c-0.2303 0.1826-0.60481 0.1678-0.81641-0.027l-2.0938-1.9317c-0.58806-0.5437-1.5037-0.5437-2.0918 0l-2.0762 1.9238c-0.19258 0.178-0.54179 0.178-0.73438 0l-2.0918-1.9297c-0.58803-0.5435-1.5038-0.5435-2.0918 0l-2.0762 1.9238c-0.19258 0.178-0.54179 0.178-0.73438 0l-2.0918-1.9297c-0.29401-0.2598-0.66896-0.3962-1.0449-0.3962z"/>
                                </g>
                                </g>
                                </g>
                                </g>
                                </g>
                                </svg>
                            </li>
                            <li><span>Optimisation</span></li>
                            <li>Vitesse de chargement</li>
                            <li>Sécurisation</li>
                        </ul>
                    </div>
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
                                <Parallax className="homeAbout-img--design" y={[-20, 20]} tagOuter="figure">
                                {/* <figure className="homeAbout-img--design"> */}
                                    <Img fluid={ aboutDesign } />
                                    <div className="reveal-about--mask"></div>
                                {/* </figure> */}
                                </Parallax>
                            </div>
                        )
                    } }
                />

                {/* <div className="about-transform" ref="triggerAboutTransform">
                    <p>
                        <span ref="aboutTransformPara">
                            Transformons vos idées en réalité.
                        </span>
                    </p>
                    <p>
                        <Link to="/contact">Parlons-en maintenant !</Link>
                    </p>
                </div> */}
                
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