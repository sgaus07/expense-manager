import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import transactionReducer from './Reducers/TransactionReducer';

const rootReducers = combineReducers({
    transaction: transactionReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;