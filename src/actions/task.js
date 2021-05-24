/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-05-16 19:04:38
 * @LastEditTime: 2021-05-19 16:54:07
 * @LastEditors: Lewis
 */

import * as taskConstants from "./../constants/task";

export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK,
  };
};
export const fetchListTaskSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListTaskFail = (error) => {
  return {
    type: taskConstants.FETCH_TASK_FAIL,
    payload: {
      error,
    },
  };
};

export const filterTask = (params) => {
  return {
    type: taskConstants.FILTER_TASK,
    payload: {
      params,
    },
  };
};
export const filterTaskSuccess = (data) => {
  return {
    type: taskConstants.FILTER_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};