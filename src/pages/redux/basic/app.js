const {createStore}=require('redux')
const defaultState={
    count : 0
}
const reducers= (state=defaultState,action)=>{
    switch(action.type){
        case 'add':
        return {
            count:++state.count
        }
        default:
            return state
    }
}
const store = createStore(reducers)
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch({
    type:'add'
})
store.dispatch({
    type:'add'
})