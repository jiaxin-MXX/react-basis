import React,{ Component } from 'react'
import From from './form'
import List from './list'
class Todolist extends Component {
    state={
        keyword:'',
        title:'<b>你好</b>'
    }
    keywords(value){
        this.setState({
            keyword:value
        })
    }
    render(){
        return (
            <>
                <From onkeyword={this.keywords.bind(this)}></From>
                <List value={this.state.keyword}></List>
                <li dangerouslySetInnerHTML={{__html:this.state.title}}></li>
                <li>{this.state.title}</li>
            </>
        )
    }
}
export default Todolist