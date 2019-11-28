import React,{ Component } from 'react'
import From from './form'
import List from './list'
class Todolist extends Component {
    state={
        keyword:''
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
            </>
        )
    }
}
export default Todolist