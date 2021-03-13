import {combineReducers} from 'redux';

import auth from './authReducer';
import search from './searchReducer'

const rootReducer = combineReducers({
	auth,
    search
});

export default rootReducer;