/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-05-16 18:57:46
 * @LastEditTime: 2021-05-16 19:23:38
 * @LastEditors: Lewis
 */
import axiosService from './../commons/axiosService'

import {API_ENDPOINT} from './../constants'

const url='tasks'
export const getList=()=>{
    return axiosService.get(`${API_ENDPOINT}/${url}`)
}
