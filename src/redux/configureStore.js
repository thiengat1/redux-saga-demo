/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-05-16 16:31:24
 * @LastEditTime: 2021-05-18 09:16:48
 * @LastEditors: Lewis
 */
import {createStore,compose,applyMiddleware} from 'redux'
import rootReducers from '../reducers'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'



const composeEnhancers=process.env.NODE_ENV!=='production' && typeof window==='object'&&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload:false
}):compose

const sagaMiddleware = createSagaMiddleware()

const configureStore=()=>{
    const middlewares=[thunk,sagaMiddleware]
    const enhancers=[applyMiddleware(...middlewares)]
    const store=createStore(rootReducers,composeEnhancers(...enhancers))
    sagaMiddleware.run(rootSaga)
    return store

}

export default configureStore