import React, { Component } from 'react';
import Header from "./header";
import host from "./hoc";
class hoc extends Component {
    state={
        title:'你好'
    }
    handlechange=(title)=>()=>{
        this.setState({
            title
        })
    }
    render() {
        console.log(this.props)
        return (
            <>
                <Header title={this.state.title}></Header>
                <button onClick={this.handlechange('你好')}>改变</button>
            </>
        );
    }
}

export default host(hoc);