import {combineReducers} from 'redux'
import counterReducter from './counterReducer'
import ProductReducer from './productReducer'

const rootReducer = combineReducers({
    counter: counterReducter,
    product: ProductReducer
})

export default rootReducer

// {
//     counter: { value: 0}
// }