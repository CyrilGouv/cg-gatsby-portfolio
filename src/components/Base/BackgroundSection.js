import React, { Component } from 'react'
import BackgroundImage from 'gatsby-background-image'
import { TimelineLite, Power1, Power2 } from "gsap/TweenMax";

import Logo from './Logo'
import Menu from './Menu'

export default class BackgroundSection extends Component {
    state = {
        menuOpen: false
    }

    componentDidMount = () => {
        this.initAnim()
    }

    initAnim = () => {
        const tl = new TimelineLite()

        const contentTitleBar = this.refs.contentTitleBar
        const h1TitleFirst = this.refs.h1TitleFirst
        const h2Title = this.refs.h2Title
        const subtitle = this.refs.subtitle

        tl
            .from(contentTitleBar, 1, { transform: "scaleY(0)" })
            .from(h1TitleFirst, .85, { autoAlpha: 0, transform: "translateY(100%)", ease: Power1.easeOut })
            .from(h2Title, .85, { autoAlpha: 0, transform: "translateY(100%)", ease: Power2.easeOut }, '-=0.20')
            .from(subtitle, .85, { autoAlpha: 0, transform: "translateY(100%)", ease: Power2.easeOut }, '-=0.50')
    }


    handleMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen })
    }

    render() {
        return (
            <BackgroundImage 
                className={ this.props.classN }
                fluid={ this.props.img }
            >
            <div className="aboutHeader projectHeader">
        
                <Menu isOpen={ this.handleMenu } />
                <div className="left">
                    <Logo />
                </div>
                <div className="content">
                    <div className="contentTitle" ref="contentTitle">
                        <span className="contentTitle-bar" ref="contentTitleBar"></span>
                        <div ref="h1Title">
                            <h1>
                                <span ref="h1TitleFirst" className="h2--iAm">
                                    { this.props.title }
                                </span>
                            </h1>
                        </div>
                    </div>
                    <h2 ref="h2Title">
                        { this.props.h2Title }
                    </h2>
                    <div className="subtitle" ref="subtitle">
                        <p>
                            { 
                                this.props.subtitle
                            }
                        </p>
                    </div>
                </div>
                <div className="right">
                    <nav className="nav">
                        <button className="open" onClick={ this.handleMenu }>
                            <span className="nav--bar-mr"></span><span className="nav--bar-ml"></span>
                        </button>
                    </nav>
                </div>
            </div>
            </BackgroundImage>
        )
    }
}

BackgroundSection.defaultProps = {
    title: "default title",
    h2Title: "default h2 title",
    subtitle: "default subtitle",
    styleClass: "default-background"
}
