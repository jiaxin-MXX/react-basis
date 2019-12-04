import React, { Component } from 'react';
import { connect } from 'react-redux'
const mapStateProps=(state)=>{
    return{
         count:state.count,
         data:state.data
    } 
}
const mapDispatchProps=(dispatch)=>{
    return {
        add(){dispatch({
            type:"add"
        })}
    }
}
class child extends Component {
    click=()=>{
        console.log(this.props)
        this.props.add()
    }
    render() {
        
        return (
            <div>
                {this.props.count}
                <button onClick={this.click}>add</button>
            </div>
        );
    }
}
export default connect(mapStateProps,mapDispatchProps)(child);