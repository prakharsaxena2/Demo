import React, { Component } from 'react'

class Welcome extends Component{
    render(){
        return (
        <div>
        <h1>Class Component {this.props.name} ddsds{this.props.superHero}</h1>
        {this.props.children}
        </div>
        )
    }
}

export default Welcome