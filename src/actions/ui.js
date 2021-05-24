/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-05-18 12:15:47
 * @LastEditTime: 2021-05-18 12:17:45
 * @LastEditors: Lewis
 */
import * as uiTypes from '../constants/ui'
export const showLoading=()=>({
        type:uiTypes.SHOW_LOADING
})
export const hideLoading=()=>({
    type:uiTypes.HIDE_LOADING
})