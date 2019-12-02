const {createStore} = require('redux')
const reducers = require('./reducers')

const store= createStore(reducers)

export default store
