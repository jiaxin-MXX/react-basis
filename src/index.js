import React from 'react'
import ReactDom from "react-dom";

// import { MyProvider } from './pages/context/color'
// import { Provider } from './pages/counter/context'
// import Header from './pages/head.jsx'
// import Footer from './pages/food.jsx'
// import {Nav} from './pages/nav.jsx'

// import Todolist from './pages/todolist/todolist'
// import Todolist from './pages/life_commpont/father'
// import Todolist from './pages/context/parent'
// import Todolist from './pages/hoc/hoc.jsx'
import store from './pages/redux/contenr/store'
// import Child1 from './pages/counter/child1'
// import Child2 from './pages/counter/child2'
// import Text1 from './pages/enhancer/text1'
// import Hoc from './pages/enhancer/Hoc.jsx'
// import Child from './pages/enhancer/child'

// import Test1 from './pages/text/test1'
// ReactDom.render(
//     <>
//     <Provider value={store}>
//         <Child1></Child1>
//         <Child2></Child2>
//     </Provider>
//     <Text1 value='你好'></Text1>
//     <Hoc></Hoc>
//     <Child></Child>
//     <Test1></Test1>
//     </>,
//     document.getElementById('root')
// )
// import './index.css'
// ReactDom.render(
//     <>
//     <div class='big'>
//         <div class='small'></div>
//     </div>
//     </>,
//     document.getElementById('root')
// )
import Child from './pages/react-redux/child'
import {Provider} from 'react-redux'
ReactDom.render(
    <Provider store={store}>
        <Child></Child>
    </Provider>,
    document.getElementById('root')
)