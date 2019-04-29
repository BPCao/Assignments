const redux = require('redux')
const readlineSync = require('readline-sync')

const initialState = 
{
    counter: 0
}

const reducer = (state = initialState, action) => 
{
    if (action.type == 'ADD_COUNTER')
        return {...state, counter: state.counter + usernum}
    if (action.type == 'SUBTRACT_COUNTER')
        return {...state, counter: state.counter + usernum}
}

const store = redux.createStore(reducer)

store.subscribe(() => {console.log("Success", store.getState())})

console.log(store.getState())

let usernum = parseInt(readlineSync.question('Please enter a value: '))

if (usernum >= 0)
{
    store.dispatch({type: 'ADD_COUNTER'})
}
else 
{
    store.dispatch({type: 'SUBTRACT_COUNTER'})
}
