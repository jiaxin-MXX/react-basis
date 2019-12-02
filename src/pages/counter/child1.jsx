import React, { Component } from 'react';
import { context } from './context'
class child1 extends Component {
    state={
        count:0
    }
    static contextType=context
    handleCliek=()=>{
        this.context.dispatch({
            type:'add'
        })
    }
    componentDidMount=()=>{
        this.context.subscribe(()=>{
            this.setState({
                count:this.context.getState().count
            })
        })
    }
    render() {
        return (
           <>
                <div>{this.state.count}</div>
                <button onClick={this.handleCliek}>add</button>
           </>
        );
    }
}

export default child1;