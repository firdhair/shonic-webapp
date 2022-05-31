import React from 'react'

import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const baseUrl = ''


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||compose

const store = createStore(reducer,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument(baseUrl))) 
)

export default store
