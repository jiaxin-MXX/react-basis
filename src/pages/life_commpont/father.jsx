import React, { Component} from 'react';
import Child from './child'
class father extends Component {
    state={
        value:'',
        isShow:true
    }
    render(){
        return (
           <Child isShow={this.state.isShow} ></Child>
        );
    }
    async componentDidMount(){
        console.log('PPPPPP')
        // await this.setState({
        //     isShow:false
        // })
        setTimeout(()=>{
            this.setState({
                isShow:false
            })
        },0)
    }
    
}

export default father;