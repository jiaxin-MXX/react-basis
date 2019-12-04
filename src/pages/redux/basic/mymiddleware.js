const myMiddle=(store)=>{
    console.log(store)
    return (next)=>{
        console.log(next)
        return (action)=>{
            console.log(action)
        }
    }
}
module.exports=myMiddle