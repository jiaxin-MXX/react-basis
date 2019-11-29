import React,{ Component } from 'react'
import Item from './item'
class List extends Component {
    state={
        list:['task1','task2']
    }
    UNSAFE_componentWillReceiveProps(props){
        this.setState({
            list:[
                ...this.state.list,
                props.value
            ]
        })
        // this.setState({
        //     list:this.state.list.push(props.value)
        // })
        // this.state.list.push(props.value)
    }
    click(index){
        this.state.list.splice(index,1)
        this.setState({})
    }
    render(){
        return (
            <ul>
                {
                   this.state.list.map((value,index)=>{
                        return (
                            <Item key={value+index} value={value} index={index} onItemClick={this.click.bind(this,index)}></Item>
                        )
                   })
                }
            </ul>
        )
    }
}
export default List