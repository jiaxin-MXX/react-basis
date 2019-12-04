import React, { Component} from 'react'
import {bindActionCreators} from 'redux'
import counterCreator from '../action_creator/load'
import { context } from './context'
class child1 extends Component {
    state={
        count:0,
        data:0
    }
    static contextType=context
    handleCliek=()=>{
        this.context.dispatch({
            type:'add'
        })
    }
    componentDidMount=()=>{
        this.bac=bindActionCreators(counterCreator,this.context.dispatch)
        console.log(this.bac.add2())
        this.context.subscribe(()=>{
            this.setState({
                count:this.context.getState().count,
                data:this.context.getState().data
            })
        })
        setTimeout(()=>{
            this.context.dispatch({
                type:'load',
                data:100
            })
        },2000)
    }
    render() {
        return (
           <>
                <div>{this.state.count}/{this.state.data}</div>
                <button onClick={this.handleCliek}>add</button>
           </>
        );
    }
}

export default child1;