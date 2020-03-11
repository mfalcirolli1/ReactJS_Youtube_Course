import React, { Component } from 'react';

class EventBind extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello!'
        }

        this.clickHandler3 = this.clickHandler3.bind(this)
    }

    clickHandler() {
        this.setState({
            message: 'Goodbye!'
        }) 
    }

    clickHandler2() {
        this.setState({
            message: 'Hello, again!'
        }) 
    }
    
    clickHandler3() {
        this.setState({
            message: 'Use this method!'
        }) 
    }

    clickHandler4 = () => {
        this.setState({
            message: 'Hello!'
        }) 
    }

  render() {
    return (
        <div>
            <div>{this.state.message}</div>
            <button onClick={this.clickHandler.bind(this)}>Click EB 1</button>
            <button onClick={() => this.clickHandler2()}>Click EB 2</button>
            <button onClick={this.clickHandler3}>Click EB 3</button>
            <button onClick={this.clickHandler4}>Click EB 4</button>
        </div>
    );
  }
}

export default EventBind;
