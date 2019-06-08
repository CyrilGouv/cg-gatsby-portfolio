import React, { Component } from "react"
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { TimelineLite, Power1, Power2 } from "gsap/TweenMax";
import ScrollMagic from '../Base/ScrollMagic'

export default class Love extends Component {

    componentDidMount = () => {
        this.animLove()
    }

    animLove = () => {
        const loveTl = new TimelineLite()
        const controller = new ScrollMagic.Controller()

        const love = this.refs.love
        const loveTitle = this.refs.loveTitle
        const loveDesc = this.refs.loveDesc.children

        new ScrollMagic.Scene({
            triggerElement: love,
            triggerHook: .85,
            reverse: false
        })
        .setTween(
            loveTl
                .from(loveTitle, .85 , { transform: 'translateY: 100%', ease: Power2.easeOut })
                .staggerFrom(loveDesc, .5, { autoAlpha: 0, y: 30, ease: Power1.easeOut }, .25)
                .staggerFrom('.reveal-love--mask', .85, { transform: 'translateY(100%)', ease: Power2.easeOut }, .35)
        )
        .addTo(controller)
    }

    render() {
        return (
            <div className="love">
                <div className="love-blurb" ref="love">
                    <h2>
                        <span ref="loveTitle">
                            03. Ce que j'aime ?
                        </span>
                    </h2>
                    <div className="love-desc" ref="loveDesc">
                        <p>
                            En dehors de ma vie professionnel, j'aime passer du temps avec ma petite famille et voyager.
                            Sportif depuis toujours, j'aime également m'évader l'esprit en pleine nature en faisant du vélo, de la course à pied ou soulever un peu de fonte.
                        </p>
                        <p>
                            Une fois à la maison, je passe mon temps à regarder du sport tels que du cyclisme et de la NBA ou à regarder des séries avec ma femme.
                            Joueur de poker depuis 2007, je ne dis jamais non lorsque j'ai le temps à jouer des Sit&Go's et des tournois online.
                        </p>
                    </div>
                </div>
                <div className="love-img">
                    <StaticQuery
                        query={ Image }
                        render={ data => {

                            const poker = data.poker.childImageSharp.fluid
                            const voyage = data.voyage.childImageSharp.fluid
                            const sport = data.sport.childImageSharp.fluid

                            return (
                                <div className="love-img-content">
                                    <figure className="love-img--left">
                                        <Img fluid={ poker } />
                                        <div className="reveal-love--mask"></div>
                                    </figure>
                                    <figure className="love-img--center">
                                        <Img fluid={ voyage } />
                                        <div className="reveal-love--mask"></div>
                                    </figure>
                                    <figure className="love-img--right">
                                        <Img fluid={ sport } />
                                        <div className="reveal-love--mask"></div>
                                    </figure>
                                </div>
                            )

                        }}
                    />
                </div>
            </div>
        )
    }
}

const Image = graphql`
    {
        poker:file(relativePath:{eq: "about/poker.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 350) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }

        sport:file(relativePath:{eq: "about/sport.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 350) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }

        voyage:file(relativePath:{eq: "about/voyage.jpg"}) {
            childImageSharp {
                fluid(maxHeight: 350) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`