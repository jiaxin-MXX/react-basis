import React, { Component } from 'react';
export default (Comp)=>{
    return class extends Component {
        chage=(title)=>{
            return title+' word'
        }
        render() {
            return (
                <Comp hanlechage={this.chage}></Comp>
            );
        }
    }
}