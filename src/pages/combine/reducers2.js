const defaultState={
    count2 : 0,
    data2:0
}

const reducers2= (state=defaultState,action)=>{
    switch(action.type){
        case 'add2':
        return {
            count2:++state.count2,
            data2:state.data2
        }
        case 'load2':
        return {
            count2:state.count2,
            data2:action.data
        }
        default:
            return state
    }
}
module.exports=reducers2