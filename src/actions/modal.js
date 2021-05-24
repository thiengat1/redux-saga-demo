/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-05-19 16:38:52
 * @LastEditTime: 2021-05-19 16:43:36
 * @LastEditors: Lewis
 */
import * as modalTypes from '../constants/modal'
export const showModal=()=>({
        type:modalTypes.SHOW_MODAL
})
export const hideModal=()=>({
    type:modalTypes.HIDE_MODAL
})
export const changeModalTitle=(title)=>({
    type:modalTypes.CHANGE_MODAL_TITLE,
    payload:{
        title
    }
})
export const changeModalContent=(component)=>({
    type:modalTypes.CHANGE_MODAL_CONTENT,
    payload:{
        component
    }
})