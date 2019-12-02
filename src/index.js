import React from 'react'
import ReactDom from "react-dom";
import { MyProvider } from './pages/context/color'
// import Header from './pages/head.jsx'
// import Footer from './pages/food.jsx'
// import {Nav} from './pages/nav.jsx'

// import Todolist from './pages/todolist/todolist'
// import Todolist from './pages/life_commpont/father'
// import Todolist from './pages/context/parent'
import Todolist from './pages/hoc/hoc.jsx'

ReactDom.render(
    <MyProvider value={{color:'red'}}>
        <Todolist></Todolist>
    </MyProvider>,
    document.getElementById('root')
)