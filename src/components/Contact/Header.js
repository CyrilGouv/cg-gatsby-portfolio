import React, { Component } from 'react'
import { TimelineLite, Power2 } from "gsap/TweenMax";

import Logo from '../Base/Logo'
import Menu from '../Base/Menu'

export default class Header extends Component {
    state = {
        menuOpen: false
    }

    componentDidMount = () => {
        this.animHeader()
    }

    animHeader = () => {
        const titleTl = new TimelineLite()

        const titleFirst = this.refs.titleFirst
        const titleSec = this.refs.titleSec
        const titleThird = this.refs.titleThird

        titleTl
            .from(titleFirst, 0.85, { transform: 'translateY(100%)', ease: Power2.easeOut })
            .from(titleSec, 0.85, { transform: 'translateY(100%)', ease: Power2.easeOut }, '-=0.70')
            .from(titleThird, 0.85, { transform: 'translateY(100%)', ease: Power2.easeOut }, '-=0.70')
    }

    handleMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen })
    }

    render() {
        return (
            <div className="aboutHeader pageHeader">
                <Menu isOpen={ this.handleMenu } />
                <div className="left">
                    <Logo />
                </div>
                <div className="content">
                    <h1>
                        <span ref="titleFirst">
                           Aimez-vous ce que vous voyez ?
                        </span>
                    </h1>
                    <h1>
                        <span ref="titleSec">
                            Vous avez un projet web dont
                        </span>
                    </h1>
                    <h1>
                        <span ref="titleThird">
                            vous souhaitez me parler ?
                        </span>
                    </h1>
                </div>
                <div className="right">
                    <nav className="nav">
                        <button className="open" onClick={ this.handleMenu }>
                            <span className="nav--bar-mr"></span><span className="nav--bar-ml"></span>
                        </button>
                    </nav>
                </div>
            </div>
        )
    }
}
