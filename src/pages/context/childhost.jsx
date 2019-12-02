import React, { Component } from 'react';
import { colorContext } from './color'
class childhost extends Component {
    static contextType = colorContext
    handleclick=(color)=>()=>{
            this.context.change('green')
    }
    render() {
        return (
            <div style={{color:this.context.color}}>
                <div>childhost~{this.context.color}</div>
                <button onClick={this.handleclick('green')}>变色</button>
            </div>
        );
    }
}

export default childhost;