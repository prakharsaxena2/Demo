import React, { Component } from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message:'Welcome visitor'
        }
    }
    changeMessage(){
        this.setState ({
            message:'Thanku for Subscribing'
    })
    }
    render() {
        return (
            <div>
                <h1>Welcome Visitor</h1>
                <h1> {this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message