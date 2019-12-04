import React, { Component } from 'react';

class child2 extends Component {
    state={
        item1:'list1 item',
        item2:'list2 item',
    }
    render() {
        
        return (
            <>  <h3>高阶组件</h3>
                <div>
                    {this.props.render(this.state.item1)}
                </div>
                <div>
                    {this.props.render(this.state.item2)}
                </div>
            </>
        );
    }
}

export default child2;