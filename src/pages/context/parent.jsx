import React, { Component } from 'react';
import Child1 from './child1'
import Child2 from './child2'
class parent extends Component {
    render() {
        
        return (
            <>
                <Child1></Child1>   
                <Child2></Child2>        
            </>
        );
    }
}

export default parent;