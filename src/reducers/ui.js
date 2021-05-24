/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-05-18 12:18:18
 * @LastEditTime: 2021-05-19 08:53:05
 * @LastEditors: Lewis
 */
import * as types from '../constants/ui'

const initialState={
    showLoading:false
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case types.SHOW_LOADING:{
            return{
                ...state,
                showLoading:true
            }
        }
        case types.HIDE_LOADING:{
            return{
                ...state,
                showLoading:false
            }
        }
        default:
            return state
    }

}
export default reducer