const defaultState={
    count : 0,
    data:0
}

const reducers= (state=defaultState,action)=>{
    switch(action.type){
        case 'add':
        return {
            count:++state.count,
            data:state.data
        }
        case 'load':
        return {
            count:state.count,
            data:action.data
        }
        default:
            return state
    }
}
module.exports= reducers