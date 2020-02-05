import {combineReducers} from 'redux';
import {blogReducer} from "./blog/reducers";
import {authReducer} from "./auth/reducers";
import {userReducer} from "./User/reducers";

export default combineReducers({
    auth: authReducer,
    blog: blogReducer,
    user: userReducer,
})