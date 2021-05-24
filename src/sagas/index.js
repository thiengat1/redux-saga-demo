/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-05-18 09:10:22
 * @LastEditTime: 2021-05-19 11:24:18
 * @LastEditors: Lewis
 */

import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select,
} from "redux-saga/effects";
import * as taskType from "../constants/task";
import { getList } from "../apis/task";
import { STATUS_CODE } from "../constants";
import { fetchListTaskSuccess, fetchListTaskFail, filterTaskSuccess } from "../actions/task";
import { showLoading, hideLoading } from "../actions/ui";

function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskType.FETCH_TASK);
    yield put(showLoading());
    const res = yield call(getList);
    const { status, data } = res;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFail(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { params } = payload;
  const list = yield select((state) => state.task.listTask);
  const filterResult = list.filter((task) =>
    task.title.trim().toLowerCase().includes(params.trim().toLowerCase())
  );
  yield put(filterTaskSuccess(filterResult))
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskType.FILTER_TASK, filterTaskSaga);
}

export default rootSaga;
