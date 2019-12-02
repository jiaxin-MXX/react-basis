const defaultState = {
    count: 0
}
const reducers=(state=defaultState,action)=>{
    switch(action.type){
        case 'add':
        return {
            count : ++state.count
        }
        default:
            return state
    }
}
module.exports=reducers