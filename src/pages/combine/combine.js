const { combineReducers }=require('redux')
const reducers1=require('./reducers1')
const reducers2=require('./reducers2')
const chatReducer = combineReducers({
    reducers1,
    reducers2
})

module.exports=chatReducer
