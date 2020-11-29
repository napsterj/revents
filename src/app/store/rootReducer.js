import {combineReducers} from 'redux';
import eventReducers from '../../features/events/eventReducers';
import testReducer from '../../features/sandbox/testReducer';
import modalReducer from '../common/modal/modalReducer';
import authReducer from '../../features/auth/authReducer';

const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducers,
    modals: modalReducer,
    auth: authReducer
})

export default rootReducer;