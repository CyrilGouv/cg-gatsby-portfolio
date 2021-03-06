import React, { Component } from 'react'
import { Link } from 'gatsby';
import { TimelineLite, Power1 } from "gsap/TweenMax";
import CSSRulePlugin from "gsap/CSSRulePlugin";

import arrowImg from '../../images/base/arrow-white.svg'

import Logo from '../Base/Logo'
import Loading from '../Base/Loading'
import Menu from '../Base/Menu'

export default class Banner extends Component {
    state = {
        menuOpen: false
    }

    componentDidMount = () => {
        this.initAnim()
        this.setMenu()
    }

    initAnim = () => {
        const tl = new TimelineLite()

        const contentTitleBar = this.refs.contentTitleBar
        const h2Title = this.refs.h2Title
        const h2TitleFirst = this.refs.h2TitleFirst
        const h2TitleSecond = this.refs.h2TitleSecond
        const h1Title = this.refs.h1Title
        var rule = CSSRulePlugin.getRule(".btn::before")

        tl
            .from(contentTitleBar, 1, { transform: "scaleY(0)", delay: 5.4 })
            .from(h2TitleFirst, .85, { transform: "translateY(110%)", ease: Power1.easeOut })
            .from(h2TitleSecond, .85, { transform: "translateY(110%)", ease: Power1.easeOut }, '-=0.70')
            .from(h1Title, 1, { autoAlpha: 0, y: 30, ease: Power1.easeOut })
            .from('.btn', 1, { autoAlpha: 0, y: 30, ease: Power1.easeOut })
            .from('.btn', .5, { paddingLeft: 0, ease: Power1.easeOut })
            .from(rule, .5, { cssRule: { width: 0 }, ease: Power1.easeOut }, '-=0.5')
    }

    setMenu = () => {
        const menuTl = new TimelineLite()

        menuTl
            .set('.menu', { y: '-100%' })
            .to('body', 0.1, {css:{className:'-=lock-scroll'}})
    }


    handleMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen })
    }
    

    render() {
        return (
            <div className="banner">
                <Loading />
                <Menu isOpen={ this.handleMenu } />
                <div className="left">
                    <Logo />
                    <div className="left-adj">
                        <span>Passionné</span>
                        <span className="left-adj--rect"></span>
                        <span>Créatif</span>
                    </div>
                </div>
                <div className="content">
                    <div className="contentTitle" ref="contentTitle">
                        <span className="contentTitle-bar" ref="contentTitleBar"></span>
                        <div ref="h2Title">
                            <h2>
                                <span ref="h2TitleFirst" className="h2--iAm">
                                    Je suis
                                </span>
                            </h2>
                            <h2>
                                <span ref="h2TitleSecond" className="txt-yellow">
                                    Développeur Web
                                </span>
                            </h2>
                        </div>
                    </div>
                    <h1 ref="h1Title">
                        Création de site internet moderne, professionnel et responsive à Biscarrosse dans les Landes.
                    </h1>
                    <Link to="/a-propos" className="btn">
                        En savoir plus <img src={ arrowImg } alt="Flèche blanche action boutton" className="arrow"/>
                    </Link>
                </div>
                <div className="right">
                    <nav className="nav">
                        <button className="open" onClick={ this.handleMenu }>
                            <span className="nav--bar-mr"></span><span className="nav--bar-ml"></span>
                        </button>
                    </nav>
        
                    <div className="right-socials">
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
