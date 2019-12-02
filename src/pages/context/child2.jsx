import React, { Component } from 'react';
import Childhost from './childhost'
import { colorContext } from "./color";
class child2 extends Component {
    static contextType = colorContext
    render() {
        return (
            <>
                <div style={{color:this.context.color}}>child2</div> 
                <Childhost></Childhost> 
            </>
        );
    }
}

export default child2;