import { createStore, compose, applyMiddleware } from 'redux'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import reducer from './reducer'
import {persistStore, persistReducer} from 'redux-persist'

const baseUrl = 'https://shonic-test.herokuapp.com'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||compose

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer,
composeEnhancers(applyMiddleware(thunk.withExtraArgument(baseUrl)))
);

const persistor = persistStore(store)
export {store, persistor};
