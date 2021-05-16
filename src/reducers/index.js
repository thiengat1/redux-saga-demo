/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-05-16 16:28:57
 * @LastEditTime: 2021-05-16 16:52:07
 * @LastEditors: Lewis
 */
import { combineReducers} from 'redux'
import taskReducer from './task'

const rootReducer=combineReducers({
    task:taskReducer

})
export default rootReducer