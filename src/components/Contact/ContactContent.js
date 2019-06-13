import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Tilt from 'react-tilt'
import { TimelineLite, Power1, Power2, TweenLite } from "gsap/TweenMax";
import ScrollMagic from '../Base/ScrollMagic'
import { FaCircle } from 'react-icons/fa';

import arrowBlack from '../../images/base/arrow-black.svg'


export default class ContactContent extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    componentDidMount = () => {
        this.animWhat()
    }

    componentDidUpdate = () => {
        this.hasValue()
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
        )
        .addTo(controller)

        const infosTl = new TimelineLite()
        const infos = this.refs.infos
        const address = this.refs.address.children
        const dispo = this.refs.dispo.children
        const email = this.refs.email.children
        const form = this.refs.form.children
        
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
                .staggerFrom(form, .5, { autoAlpha: 0, y: 30, ease: Power1.easeOut }, .25)
        )
        .addTo(controller)
    }

    hasValue = () => {
        const name = this.state.name
        const email = this.state.email
        const message = this.state.message

        if (name === '') {
            TweenLite.to(this.refs.name, 0.1, { css:{ className: '-=hasValue' } })
        } else {
            TweenLite.to(this.refs.name, 0.1, { css:{ className: '+=hasValue' } })
        }

        if (email === '') {
            TweenLite.to(this.refs.emailForm, 0.1, { css:{ className: '-=hasValue' } })
        } else {
            TweenLite.to(this.refs.emailForm, 0.1, { css:{ className: '+=hasValue' } })
        }

        if (message === '') {
            TweenLite.to(this.refs.message, 0.1, { css:{ className: '-=hasValue' } })
        } else {
            TweenLite.to(this.refs.message, 0.1, { css:{ className: '+=hasValue' } })
        }
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

                <div className="contactContent-form">
                    <form action="https://formspree.io/contact@cyrilgouverneur.com" ref="form" method="POST">
                        <div className="form-group">
                            <input ref="name" type="text" name="name" id="name" className="name" onChange={ (e) => this.setState({ name: e.target.value }) } />
                            <label htmlFor="name">Votre nom</label>
                        </div>
                        <div className="form-group">
                            <input ref="emailForm" type="email" name="email" id="name" className="email" onChange={ (e) => this.setState({ email: e.target.value }) }  />
                            <label htmlFor="name">Votre email</label>
                        </div>
                        <div className="form-group">
                            <textarea ref="message" name="message" id="message" className="message" onChange={ (e) => this.setState({ message: e.target.value }) } ></textarea>
                            <label htmlFor="message">Votre message</label>
                        </div>
                        <button type="submit" className="btn--default">
                            Envoyer
                            <img src={ arrowBlack } alt="Flèche bouton voir le projet" />
                        </button>
                    </form>
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