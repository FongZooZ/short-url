import { combineReducers } from 'redux';

import urlReducers from './url';

const combinedReducer = combineReducers({
	url: urlReducers
});

export default combinedReducer;