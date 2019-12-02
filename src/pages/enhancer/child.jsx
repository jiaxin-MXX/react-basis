import React, { Component } from 'react';
import Child2 from './child2'
class child extends Component {
    
    render() {
        return (
            <Child2
                render={(item)=>{
                    return (
                    <div style={{color:'red'}}>{item}</div>
                    )
                }}
            ></Child2>
        );
    }
}

export default child;