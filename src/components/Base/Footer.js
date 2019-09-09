import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FaHeart } from 'react-icons/fa';
import { TimelineLite, Power1, Power2 } from "gsap/TweenMax";
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
        const lion = this.refs.lion
        const footerMail = this.refs.footerMail
        const footerSocials = this.refs.footerSocials
        const footerAddress = this.refs.footerAddress
        const footerCopy = this.refs.footerCopy

        new ScrollMagic.Scene({
            triggerElement: targetFooter,
            triggerHook: 1,
            reverse: false
        })
        .setTween(
            revealFooterTl
                .from(footerStart, .85, { transform: 'translateY(100%)', ease: Power2.easeOut })
                .from(footerTogether, .85, { transform: 'translateY(100%)', ease: Power2.easeOut })
                .from(footerContentBar, .25, { width: 0, ease: Power1.easeOut })
                .to(lion, 0.1, {css:{className:'+=drawing'}})
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
                    <div className="footer-content-lion" ref="lion">
                        <svg version="1.1" viewBox="0 0 406 455" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fillRule="evenodd">
                        <g transform="translate(-517 -502)" fill="currentColor" fillRule="nonzero">
                        <g transform="translate(517 502)">
                        <path d="m202.62 454.41l-17.702-24.495-8.284 18.635-89.752-83.309-9.358 21.442-35.484-86.484-13.899 27.062-6.507-95.839-20.984 21.638 17.209-77.431-17.692 20.732 18.579-81.956 57.733-58.083-12.203-3.12 65.303-38.051-20.048-5.45 33.306-8.816 59.783 18.131 59.783-18.131 33.305 8.816-20.046 5.448 65.302 38.052-12.203 3.12 57.733 58.083 18.579 81.956-17.694-20.732 17.209 77.431-20.984-21.638-6.506 95.839-13.9-27.062-35.483 86.484-9.358-21.442-89.752 83.311-8.283-18.635-17.702 24.494zm-19.266-39.52l19.266 26.661 19.267-26.661 9.32 20.968 89.809-83.36 6.486 14.864 34.932-85.138 8.986 17.494 5.816-85.684 14.224 14.668-17.998-80.987 17.514 20.523-11.348-50.059-65.495-65.893 7.161-1.831-64.967-37.856 10.311-2.803-4.095-1.084-59.923 18.173-59.923-18.173-4.094 1.084 10.311 2.802-64.967 37.857 7.161 1.831-65.495 65.893-11.348 50.06 17.514-20.523-17.998 80.987 14.224-14.668 5.816 85.684 8.986-17.494 34.933 85.138 6.486-14.864 89.808 83.36 9.32-20.969z"/>
                        <polygon points="153.59 146.47 181.44 151.34 135.43 129.13 125.13 137.56 112.36 148.25 131.58 143.43 139.16 153.68"/>
                        <polygon points="273.22 143.43 292.44 148.25 279.67 137.56 269.37 129.13 223.37 151.34 251.22 146.47 265.64 153.68"/>
                        <path d="m321.7 168.21s-24.813-54.451-28.792-68.849c5.008 23.849 8.465 32.543 8.639 32.973l11.619 36.207-35.011 40.755c-0.637 0.745-1.158 1.692-1.158 2.673v30.386l-16.562 27.675-14.262 9.267-39.176-17.235v-15.971l34.749-29.615c1.461-1.24 1.806-3.324 0.925-5.025l-8.115-15.619c-0.1-0.193-0.232-0.373-0.357-0.544-3.575-6.56-17.105-31.891-22.53-49.459 3.737 22.241 12.758 41.275 16.353 48.237-4.255 0.74-14.616 2.323-25.397 2.323-0.064 0-0.128 1e-3 -0.192 4e-3 -10.437 0.484-20.762-1.401-24.796-2.254 3.569-6.899 12.644-25.99 16.395-48.31-5.559 17.999-19.617 44.148-22.767 49.907-3e-3 5e-3 0.18 0.01 0.177 0.015l-0.444 1.15v1e-3l-8.124 14.459c-0.94 1.712-0.395 3.85 1.094 5.114l35.029 29.616v15.971l-39.637 17.234-14.554-9.267-16.809-27.674v-30.386c0-0.98-0.397-1.928-1.033-2.673l-34.862-40.755s15.131-44.719 20.272-69.195c-3.978 14.398-28.823 68.864-28.823 68.864-0.437 1.359 0.019 2.846 0.946 3.931l35.5 41.346v30.014c0 0.75 0.294 1.486 0.682 2.128l17.318 28.495v33.289l26.59 27.585h14.677l6.686 19.809 5.69-7.711 10.982 18.005 10.982-18.098 5.69 7.819 6.686-19.824h14.677l27.34-27.585v-33.289l17.318-28.495c0.388-0.642 0.682-1.378 0.682-2.128v-30.014l35.129-41.346c0.927-1.085 1.01-2.572 0.574-3.931zm-150.19 44.167l5.471-9.968c4.965 1.002 15.148 2.685 25.734 2.205 10.819-9e-3 20.979-1.468 25.899-2.301l5.18 10.01-31.174 26.468-31.11-26.414zm88.486 91.629l-22.748 21.992h-17.198l-3.597 10.927-3.564-4.684-10.268 16.927-10.268-16.875-3.564 4.623-3.597-10.918h-17.199l-21.997-21.992v-23.513l10.672 6.917c1.156 0.74 2.539 0.881 3.798 0.33l8.545-3.742h67.221l8.612 3.742c0.528 0.231 1.089 0.332 1.648 0.332 0.775 0 1.785-0.226 2.457-0.655l11.047-6.924v23.513z"/>
                        </g>
                        </g>
                        </g>
                        </svg>
                    </div>
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
                        <Link className="copyright-mentions" to="/mentions-legales">Mentions Légales</Link>
                    </p>
                </div>
            </div>
        )
    }
}
