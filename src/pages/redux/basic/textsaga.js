const { call, put, takeEvery, takeLatest}=require('redux-saga/effects')
function* mySaga() {
    yield takeEvery("succes",  function * (){
        var result= yield new Promise((resolve) => {
            setTimeout(() => {
              resolve(1000000)
            }, 5000)    
        })
        yield put({type: "load", data:result});
    });
    
}
module.exports=mySaga