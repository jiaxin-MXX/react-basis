import React ,{Component} from 'react'
import './head.css'
class Header extends Component{
    red='red'
    render(){
        return (<div id='head' color={this.red}>header</div>)
    }
}
export default Header
