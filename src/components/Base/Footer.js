import React, { Component } from 'react'
import { FaHeart } from 'react-icons/fa';
import { TimelineLite, Power1, Power2 } from "gsap/TweenMax";
import CSSRulePlugin from "gsap/CSSRulePlugin"
import ScrollMagic from '../Base/ScrollMagic'



export default class Footer extends Component {

    componentDidMount = () => {
        this.animFooter()
    }

    animFooter = () => {
        const controller = new ScrollMagic.Controller()

        // Init timeline
        const revealFooterTl = new TimelineLite()

        // Target
        const targetFooter = this.refs.targetFooter

        // Vars
        const footerStart = this.refs.footerStart
        const footerTogether = this.refs.footerTogether
        const footerContentBar = this.refs.footerContentBar
        const footerMail = this.refs.footerMail
        const footerSocials = this.refs.footerSocials
        const footerAddress = this.refs.footerAddress
        const footerCopy = this.refs.footerCopy

        const revealFooter = new ScrollMagic.Scene({
            triggerElement: targetFooter,
            triggerHook: 1,
            reverse: false
        })
        .setTween(
            revealFooterTl
                .from(footerStart, .85, { transform: 'translateY(100%)', ease: Power2.easeOut })
                .from(footerTogether, .85, { transform: 'translateY(100%)', ease: Power2.easeOut })
                .from(footerContentBar, .25, { width: 0, ease: Power1.easeOut })
                .from(footerMail, .5, { autoAlpha: 0, y: 30, ease: Power1.easeOut })
                .from(footerSocials, .5, { autoAlpha: 0, y: 30, ease: Power1.easeOut }, '-=.15')
                .from(footerAddress, .5, { autoAlpha: 0, y: 30, ease: Power1.easeOut }, '-=.15')
                .from(footerCopy, .5, { autoAlpha: 0, y: 30, ease: Power1.easeOut }, '-=.15')
        )
        .addTo(controller)
    }
    

    render() {
        return (
            <div className="footer" ref="targetFooter">
                <div className="footer-content">
                    <h5>
                        <span className="footer-content-start" ref="footerStart">
                            Démarrons un projet
                        </span>
                    </h5>
                    <h5 className="footer-content-second">
                        <span className="footer-content-together" ref="footerTogether">ensemble</span>
                    </h5>
                    <div className="footer-content-bar" ref="footerContentBar"></div>
                    <p ref="footerMail">contact@cyrilgouverneur.com</p>
    
                    <p className="footer-content-socials" ref="footerSocials">
                        <a href="https://twitter.com/CyrilGouv" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <span>//</span>
                        <a href="https://www.instagram.com/cyrilgouv/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <span>//</span>
                        <a href="https://www.linkedin.com/in/cyril-g-030690167/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </p>
    
                    <address ref="footerAddress">
                        Gouverneur Cyril<br/>
                        62 rue Diamant<br/>
                        40600 Biscarrosse
                    </address>
    
                    <p className="copyright" ref="footerCopy">
                        Made with <FaHeart className="copyright-heart" /> by <a href="mailto:contact@cyrilgouverneur.com" target="_blank" rel="noreferrer noopener">Cyril Gouverneur</a>
                    </p>
                </div>
            </div>
        )
    }
}
