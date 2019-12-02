import React, { Component } from 'react';
import { context } from './context'
class child2 extends Component {
    static contextType=context
    componentDidMount(){
       this.context.subscribe(()=>{
        this.forceUpdate()
       })
    }
    render() {
        return (
            <div>
                {this.context.getState().count}
            </div>
        );
    }
}

export default child2;