import React, { Component,createContext} from 'react';
var context=createContext()
let {Provider}= context
class test1 extends Component {
    state={
        isLike:true,
    }
    handleClick=()=>{
        this.setState({
            isLike:!this.state.isLike
        })
    }
    render() {
        return (
            <Provider value={{data:'time'}}>
            <div>
                {JSON.stringify(this.state.isLike)}
                <button onClick={this.handleClick}>change</button>
            </div>
            </Provider>
        );
    }
}

export default test1;