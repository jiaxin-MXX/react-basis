import React, { Component} from 'react';

class child extends Component {
    constructor(){
        super()
        console.log('constructor')
        this.state = {
            number: 3,
            
        }
    }
    // UNSAFE_componentWillMount(){
    //     console.log('componentWillMount')
    // }
    
    async componentDidMount(){
        console.log('componentDidMount')
        await this.setState({
                number:5
            })
        await this.forceUpdate()
    }
    render() {
        console.log('render')
        return(
            <div>
                parent - { JSON.stringify(this.props.isShow) }
            </div>
        )
    }
    static getDerivedStateFromProps(props,state){
        if(props.isShow!==state.isShow){
            console.log(props.isShow)
            console.log('getDerivedStateFromProps')
            return {
                isShow:props.isShow
            }
        }else{
            return null
        } 
    }
    // UNSAFE_componentWillReceiveProps(props){
        
    //     console.log('componentWillReceiveProps')
    // }
    // shouldComponentUpdate(props){
    //     console.log(this.props.isShow,props.isShow)
    //     if(this.props.isShow===props.isShow){
    //         return false
    //     }else{
    //         return true
    //     }
        
    // }
    // UNSAFE_componentWillUpdate(){
    //     console.log('componentWillUpdate')
    // }
    getSnapshotBeforeUpdate(preprops,prestate) {
        console.log(preprops,prestate)
        console.log('getSnapshotBeforeUpdate')
        return 99
    }
    componentDidUpdate(preprops,prestate,snapshot){
        console.log(snapshot)
        console.log('componentDidUpdata')
    }
}

export default child;