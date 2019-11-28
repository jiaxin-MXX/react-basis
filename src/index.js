import React from 'react'
import ReactDom from "react-dom";

// import Header from './pages/head.jsx'
// import Footer from './pages/food.jsx'
// import {Nav} from './pages/nav.jsx'

import Todolist from './pages/todolist/todolist'
ReactDom.render(
    <>
        <Todolist></Todolist>
    </>,
    document.getElementById('root')
)