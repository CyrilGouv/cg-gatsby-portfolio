import React, { Component } from "react"
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { TweenMax, TimelineLite, Power1, Power2 } from "gsap/TweenMax";
import ScrollMagic from '../Base/ScrollMagic'

export default class Who extends Component {
    componentDidMount = () => {
        this.animWho()
    }

    animWho = () => {
        TweenMax.from('.reveal-profile--mask', 1.25, { transform: 'translateY(100%)', ease: Power2.easeOut })
    
        const whoTl = new TimelineLite()
        const controller = new ScrollMagic.Controller()

        const whoContent = this.refs.whoContent
        const whoTitle = this.refs.whoTitle
        const whoDesc = this.refs.whoDesc.children

        const revealWho = new ScrollMagic.Scene({
            triggerElement: whoContent,
            triggerHook: 1,
            reverse: false
        })
        .setTween(
            whoTl
                .from(whoTitle, .85 , { transform: 'translateY: 100%', ease: Power2.easeOut })
                .staggerFrom(whoDesc, .5, { autoAlpha: 0, y: 30, ease: Power1.easeOut }, .25)
        )
        .addTo(controller)

    }

    render() {
        return (
            <div className="who">
                <div className="who-left"></div>
                <div className="who-content">
                    <div className="who-content-img">
                        <StaticQuery
                            query={ Image }
                            render={ data => {
                                const whoProfile = data.profile.childImageSharp.fluid

                                return (
                                    <figure className="who-content-img--profile">
                                        <Img fluid={ whoProfile } />
                                        <div className="reveal-profile--mask"></div>
                                    </figure>
                                )
                            }}
                        />
                    </div>
                    <div className="who-content-desc" ref="whoContent">
                        <h2>
                            <span ref="whoTitle">
                                01. Qui suis-je ?
                            </span>
                        </h2>
                            
                        <div ref="whoDesc" className="who-desc--p">
                            <p>
                                <strong>Développeur Front-End & intégrateur web spécialisé dans la création de site vitrine sur Biscarrosse.</strong>
                            </p>
                            <p>
                                Habitué du travail à distance, mes clients sont répartis dans toute la France mais aussi à l'étranger. Disposant d'une clientèle variée allant de l'auto-entrepreneur à des PME en passant par des associations, je dispose d'une solution adaptée à vos besoins.
                            </p>
                            <p>
                                Diplomé d'un Bac +2 en développement d'application web mais aussi issu d'un parcours atypique qui m'a permit d'avoir une très grande ouverture d'esprit venant ainsi compléter mon profil.
                            </p>
                        </div>        
                    </div>
                </div>
                <div className="who-socials">
                    <div className="who-socials-right">
                        <a href="https://twitter.com/CyrilGouv" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <span></span>
                        <a href="https://www.instagram.com/cyrilgouv/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <span></span>
                        <a href="https://www.linkedin.com/in/cyril-g-030690167/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </div>
                </div>
            </div>
        )
    }
}

const Image = graphql`
    {
        profile:file(relativePath:{eq: "about/profile.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`