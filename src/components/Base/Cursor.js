import React, { Component } from 'react'

export default class Cursor extends Component {
    state = {
        x: -100,
        y: -100
    }

    componentDidMount = () => {
      window.addEventListener('mousemove', this.handlePos)
    }

    handlePos = (e) => {
        this.setState({ x: e.clientX - 40, y: e.clientY - 40 })
    }
    

    render() {
        return (
            <div className="cursor" style={{ left: this.state.x, top: this.state.y }}>
                <div className="cursor--bg"></div>
            </div>
        )
    }
}
