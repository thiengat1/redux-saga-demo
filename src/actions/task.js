/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-05-16 19:04:38
 * @LastEditTime: 2021-05-16 19:09:05
 * @LastEditors: Lewis
 */
import * as taskApis from './../apis/task'

export const fetchListTask=()=>{
    return dispatch=>{
        taskApis.getList().then(data=>{
            console.log('data',data)
        }).catch(err=>{
            console.log('err',err)
        })
    }
}