import React, { Component } from 'react';
import { colorContext } from "./color";
class child1 extends Component {
    static contextType = colorContext
    render() {
        return (
            <div style={{color:this.context.color}}>
                child1
            </div>
        );
    }
}

export default child1;