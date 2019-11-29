import React from 'react'

export default (props)=>{
    return (
        <li>{props.value}<button onClick={props.onItemClick}>X</button></li>
    )
}