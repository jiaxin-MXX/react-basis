import { Component,createElement } from 'react'

class Footer extends Component{
    
    render(){
        return (
            createElement(
                'div',
                {
                    className:'title',
                    style:{
                        fontSize:'100px'
                    }
                },
                'footer'
            )
        )
    }
}
export default Footer