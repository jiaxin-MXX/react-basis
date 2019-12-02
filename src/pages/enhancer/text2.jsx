import React, { Component } from 'react';

class Header extends Component {
    render() {
        // console.log(this)
        return (
            <div>
                <h1>header</h1>
                {this.props.children}
            </div>
        );
    }
}


class text3 extends Component {
    render() {
        // console.log(this)
        return (
            <Header>
                {this.props.children}
            </Header>
        );
    }
}
export default text3;