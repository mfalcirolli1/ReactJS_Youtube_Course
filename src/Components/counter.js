import React, { Component } from 'react'  // rce

class Counter extends Component {

    constructor(props) {                  // rconst
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        },
            () => {
                console.log('Callback value', this.state.count)     // if is needed to execute some code after the state has been changed, place the code as second parameter
            }
        )
    }
    
    render() {
        return (
            <div>
               <h1> Count = {this.state.count}</h1>
               <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter


