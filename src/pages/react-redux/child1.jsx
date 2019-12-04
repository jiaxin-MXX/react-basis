import React, { Component } from 'react';

class child1 extends Component {
    render() {
        console.log(this)
        return (
            <div>
                你好
            </div>
        );
    }
}

export default child1;