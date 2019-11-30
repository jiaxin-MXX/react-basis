import React, { Component,PureComponent } from 'react';

class child extends Component {
    constructor(){
        super()
        console.log('constructor')
    }
    UNSAFE_componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    render() {
        console.log('render')
        return (
            <div>
                father
            </div>
        );
    }
    UNSAFE_componentWillReceiveProps(props){
        
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate(props){
        console.log(this.props.isShow,props.isShow)
        if(this.props.isShow===props.isShow){
            return false
        }else{
            return true
        }
        
    }
    UNSAFE_componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentDidUpdata')
    }
}

export default child;