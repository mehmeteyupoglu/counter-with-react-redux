import {combineReducers} from "redux"
import isLogged from "./isLogged"
import counter from "./counter"

const allReducers = combineReducers({
    isLogged, counter
})

export default allReducers