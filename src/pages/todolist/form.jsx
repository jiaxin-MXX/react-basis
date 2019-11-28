import React,{ Component } from 'react'

class From extends Component {
    state={
        keyword:''
    }
    handlechange(e){
       this.setState({
        keyword : e.target.value
       })
    }
    keyup(e){
        if(e.keyCode===13){
            // console.log(this.state.keyword)
            this.props.onkeyword(this.state.keyword)
            this.setState({
                keyword:''
            })
        }
    }
    render(){
        return (
            <input value={this.state.keyword} onKeyUp={this.keyup.bind(this)} onChange = {this.handlechange.bind(this)} type='text'/>
        )
    }
}
export default From