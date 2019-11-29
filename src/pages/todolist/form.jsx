import React,{ Component,createRef} from 'react'

class From extends Component {
    constructor(){
        super()
        this.inputvalue=createRef()
    }
    state={
        keyword:''
    }
    // handlechange(e){
    //    this.setState({
    //     keyword : e.target.value
    //    })
    // }
    keyup(e){
        if(e.keyCode===13){
            let value=this.inputvalue.current.value
            // console.log(this.state.keyword)
            this.props.onkeyword(value)
            this.inputvalue.current.value=' '
        }
    }
    render(){
        return (
            <input ref={this.inputvalue} onKeyUp={(e)=>{
                this.keyup(e)
            }} type='text'/>
        )
    }
}
export default From