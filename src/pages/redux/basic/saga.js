const reducers =  require('./reducers')
const { createStore, applyMiddleware } =require('redux')
const createSagaMiddleware=require('redux-saga').default
const mySaga=require('./textsaga')
const sagaMiddleware = createSagaMiddleware()
const store=createStore(reducers,applyMiddleware(sagaMiddleware))
store.subscribe(()=>{
    console.log(store.getState())
})
sagaMiddleware.run(mySaga)
store.dispatch({type:'succes'})
