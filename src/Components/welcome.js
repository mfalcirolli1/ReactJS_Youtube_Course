import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name, order} = this.props
        // const {state1, state2} = this.state
        return (
            <h1>Welcome, {this.props.name} = {order}</h1>
        )
    }
}

export default Welcome
