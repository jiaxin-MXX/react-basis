import React from 'react'
import {Food} from './foot'
var createReactClass = require('create-react-class');
var Nav=createReactClass(
    {
        render(){
            return <Food font-size='100px' color='blue'>name</Food>
        }
    }
)

export {
    Nav
}