const { createStore , applyMiddleware }=require('redux')
// const thunk = require('redux-thunk').default
// const thunk = require('./thunkMiddleware')
// const thunk = require('./mymiddleware')
const rpm = require('redux-promise-middleware').default
const reducers= require('./reducers')

const store = createStore(reducers,applyMiddleware(rpm))
// console.log(store)
store.subscribe(()=>{
    console.log(store.getState())
})
// store.dispatch({
//     type:'add'
// })
// setTimeout(()=>{
//     store.dispatch({
//         type:'load',
//         data:10
//     })
// },2000)
//使用了thunk中间件之后
// store.dispatch((dispatch,getState)=>{
//     console.log(dispatch,getState)
//     new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve(100)
//         }, 2000)
//     }).then(
//         (data)=>{
//             dispatch({
//                 type:'load',
//                 data
//             })
//         }
//     )
// })
// 为甚么会执行两次action
// store.dispatch(()=>{
//     setTimeout(() => {
//         store.dispatch({
//             type: 'load'
//         })
//     }, 1000);
// })

// store.dispatch(()=>{
//     console.log(1)
// })

// store.dispatch(1)
//使用redux-promise-middleware中间件
store.dispatch({
    type:'load',
    payload: new Promise((resolve)=>{
        setTimeout(() => {
            resolve(200)
        }, 2000);
    })
})