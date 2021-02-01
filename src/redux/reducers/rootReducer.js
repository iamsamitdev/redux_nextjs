import {combineReducers} from 'redux'
import counterReducter from './counterReducer'

const rootReducer = combineReducers({
    counter: counterReducter
})

export default rootReducer

// {
//     counter: { value: 0}
// }