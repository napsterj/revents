import {combineReducers} from 'redux';
import eventReducers from '../../features/events/eventReducers';
import testReducer from '../../features/sandbox/testReducer';
import modalReducer from '../common/modal/modalReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducer from '../async/asyncReducer';

const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducers,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer
})

export default rootReducer;