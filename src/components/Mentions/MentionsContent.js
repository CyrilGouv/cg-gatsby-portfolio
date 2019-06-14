import React, { Component } from 'react'
import { TimelineLite, Power1 } from "gsap/TweenMax";
import ScrollMagic from '../Base/ScrollMagic'


export default class MentionsContent extends Component {

    componentDidMount = () => {
        this.animWhat()
    }

    animWhat = () => {
        const mentionsTl = new TimelineLite()
        const controller = new ScrollMagic.Controller()

        const mentions = this.refs.mentions
        const para = this.refs.para
        const mentionsList = this.refs.mentionsList.children

        new ScrollMagic.Scene({
            triggerElement: mentions,
            triggerHook: .85,
            reverse: false
        })
        .setTween(
            mentionsTl
                .from(para, .5, { autoAlpha: 0, y: 30, ease: Power1.easeOut })
                .staggerFrom(mentionsList, .5, { autoAlpha: 0, y: 30, ease: Power1.easeOut }, .25)
        )
        .addTo(controller)

        
    }

    render() {
        return (
            <section className="mentionsContent" ref="mentions">
                <p ref="para">
                    Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y parcourir ses pages. En vous connectant sur ce site, vous acceptez sans réserves les présentes modalités. Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans l’économie numérique, le responsable du présent site internet www.cyrilgouv.com est : 
                </p>
                <ul ref="mentionsList">
                    <li>Cyril Gouverneur</li>
                    <li>62 rue Diamant</li>
                    <li>40600 Biscarrosse</li>
                    <li>Email: contact@cyrilgouverneur.com</li>
                    <li>Site web: www.cyrilgouv.com</li>
                    <li>Hébergeur: 1&1</li>
                </ul>
            </section>
        )
    }
}