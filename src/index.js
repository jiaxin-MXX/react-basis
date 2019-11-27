import React from 'react'
import ReactDom from "react-dom";

import Header from './pages/head.jsx'
import Footer from './pages/food.jsx'
import {Nav} from './pages/nav.jsx'
ReactDom.render(
    <>
        <Header></Header>
        <Nav></Nav>
        <Footer></Footer>
    </>,
    document.getElementById('root')
)