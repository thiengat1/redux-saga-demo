/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-05-16 18:52:15
 * @LastEditTime: 2021-05-16 19:04:18
 * @LastEditors: Lewis
 */
import axios from 'axios'

class AxiosService{
    constructor(){
        const instance=axios.create()
        instance.interceptors.response.use(this.handleSuccess,this.handleError)
        this.instance=instance
    }
    handleSuccess(response){
        return response
    }
    handleError(error){
        return Promise.reject(error)
    }

    get(url){
        return this.instance.get(url)
    }
}
export default new AxiosService()