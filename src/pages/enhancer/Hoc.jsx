import React, { Component } from 'react';
import hoc from './hoc'
class Hoc extends Component {
    static defaultProps={
        title:'hello'
    }
    handleclick=()=>{
        this.props.hanlechage(this.props.title)
        console.log(this.props.hanlechage(this.props.title))
    }
    render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <button onClick={this.handleclick}>chage</button>
            </div>
        );
    }
}

export default hoc(Hoc);