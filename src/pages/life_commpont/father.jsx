import React, { Component} from 'react';
import Child from './child'
class father extends Component {
    state={
        value:'',
        isShow:true
    }
    render(){
        return (
           <Child isShow={this.state.isShow} value={this.state.value}></Child>
        );
    }
    componentDidMount(){
        this.setState({
            isShow:true
        })
    }
    
}

export default father;