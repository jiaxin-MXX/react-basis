import React,{Component}from 'react'
class Header extends Component{
    render(){
        console.log(this.props)
        return(<div>
            {this.props.title}
        </div>)
    }
}
export default React.memo(Header)