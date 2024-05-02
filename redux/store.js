import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';
import loginReducer from './reducers/loginReducer';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  login: loginReducer,
});

const persistConfig = {
  key: 'reducer',
  storage: AsyncStorage,
  whitelist: ['login'], // or blacklist to exclude specific reducers
};

const presistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  presistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const persistor = persistStore(store);
export {persistor, store};
