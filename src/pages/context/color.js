import React,{ Component,createContext } from 'react'
const colorContext =createContext()
let {Provider,Consumer:MyConsumer} = colorContext

class MyProvider extends Component {
    state={
        color:'red'
    }
    handleChange=(color)=>{
        this.setState({
            color
        })
    }
    render() {
        return (
            <Provider value={{
                color:this.state.color,
                change:this.handleChange
            }}>
                {this.props.children}
            </Provider>
        );
    }
}


export {
    MyProvider,
    MyConsumer,
    colorContext
}