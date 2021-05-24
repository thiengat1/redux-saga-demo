/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-05-16 16:49:33
 * @LastEditTime: 2021-05-19 09:58:10
 * @LastEditors: Lewis
 */

import { toastError } from "../helpers/toastHelper";
import * as taskConstants from "./../constants/task";
const initialState = {
  listTask: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK: {
      return {
        ...state,
        listTask: [],
      };
    }
    case taskConstants.FETCH_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask:data,
      };
    }
    case taskConstants.FETCH_TASK_FAIL:{
        const {error}=action.payload
        console.log('error',error);
        toastError(error)
        return{
            ...state,
            listTask:[]
        }
    }
    case taskConstants.FILTER_TASK_SUCCESS:{
      const {data}=action.payload
      return{
        ...state,
        listTask:data
      }
    }
    default:
      return state;
  }
};
export default reducer;
