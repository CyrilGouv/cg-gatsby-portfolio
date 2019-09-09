import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Tilt from 'react-tilt'
import { TimelineLite, Power1, Power2, TweenLite } from "gsap/TweenMax";
import ScrollMagic from '../Base/ScrollMagic'
import { FaCircle } from 'react-icons/fa';

import arrowBlack from '../../images/base/arrow-black.svg'


export default class ContactContent extends Component {

    componentDidMount = () => {
        this.animWhat()
    }

    animWhat = () => {
        const contactTl = new TimelineLite()
        const controller = new ScrollMagic.Controller()

        const contact = this.refs.contact

        new ScrollMagic.Scene({
            triggerElement: contact,
            triggerHook: .85,
            reverse: false
        })
        .setTween(
            contactTl
                .from('.reveal-contact--mask', 1.25, { transform: 'translateY(100%)', ease: Power2.easeOut })
                .to('.contactContent-maps figure',0.25, { css:{className:"+=addShadow"} })
        )
        .addTo(controller)

        const infosTl = new TimelineLite()
        const infos = this.refs.infos
        const address = this.refs.address.children
        const dispo = this.refs.dispo.children
        const email = this.refs.email.children
        
        new ScrollMagic.Scene({
            triggerElement: infos,
            triggerHook: .85,
            reverse: false
        })
        .setTween(
            infosTl
                .staggerFrom(address, .5, { autoAlpha: 0, y: 30, ease: Power1.easeOut }, .25)
                .staggerFrom(dispo, .5, { autoAlpha: 0, y: 30, ease: Power1.easeOut }, .25, '-=0.25')
                .staggerFrom(email, .5, { autoAlpha: 0, y: 30, ease: Power1.easeOut }, .25, '-=0.25')
        )
        .addTo(controller)
    }


    render() {
        return (
            <section className="contactContent" ref="contact">
                <StaticQuery
                    query={ Image }
                    render={ data => {

                        const maps = data.maps.childImageSharp.fluid

                        return (
                            <div className="contactContent-maps">
                                <figure>
                                    <div className="reveal-contact--mask"></div>
                                    <Img fluid={ maps } />
                                    <Tilt className="maps-logo" options={{ scale: 1.25 }}>
                                        Cg.
                                    </Tilt>
                                    <div className="reveal-maps--mask"></div>
                                </figure>
                            </div>
                        )

                    }}
                />
                
                <div className="contactContent-infos" ref="infos">
                    <div className="infos-address" ref="address">
                        <h4>Adresse</h4>
                        <p>
                            <address>
                                62 rue Diamant<br />
                                40600 Biscarrosse
                            </address>
                        </p>
                    </div>
                    <div className="infos-disponibility" ref="dispo">
                        <h4>Disponibilité</h4>
                        <p><FaCircle className="infos-disponibility--circle" />Je suis joignable</p>
                    </div>
                    <div className="infos-email" ref="email">
                        <h4>Email</h4>
                        <p>contact@cyrilgouverneur.com</p>
                    </div>
                </div>
            </section>
        )
    }
}
    

const Image = graphql`
    {
        maps:file(relativePath:{eq: "contact/maps.png"}) {
            childImageSharp {
                fluid(maxHeight: 700) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`