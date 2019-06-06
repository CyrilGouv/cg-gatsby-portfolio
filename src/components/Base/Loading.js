import React, { Component } from 'react'
import { TweenMax, Power2 } from "gsap/TweenMax"
import Logo from './Logo'

export default class Loading extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.initAnim()
        }, 2500)
    }
    

    initAnim = () => {
        const loading = this.refs.loading
        TweenMax.to(loading, .85, { ease: Power2.easeOut, yPercent: -100 })
    }
    

    render() {
        return (
            <div className="loading" ref="loading">
                <div className="loading-logo">
                    Cg.
                </div>
            </div>
        )
    }
}
