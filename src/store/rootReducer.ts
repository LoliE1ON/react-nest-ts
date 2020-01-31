import {combineReducers} from 'redux';
import {blogReducer} from "./blog/reducers";

export default combineReducers({
    blog: blogReducer,
})