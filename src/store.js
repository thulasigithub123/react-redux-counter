

import {legacy_createStore as createStore} from 'redux'
import {combineReducers} from 'redux'

import {counterReducer} from './reducers/counterReducer'
import {EvenCounterReducer} from './reducers/EvenCounterReducer'

const rootReducer=combineReducers(
    {
        counter:counterReducer,
        evenCounter:EvenCounterReducer
    }
)
const store=createStore(rootReducer)

export default store