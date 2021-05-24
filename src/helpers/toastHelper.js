/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-05-17 12:46:36
 * @LastEditTime: 2021-05-17 13:12:53
 * @LastEditors: Lewis
 */
import { toast } from "react-toastify";
export const toastError = error => {
  let message = null;
  if (typeof error === "object" && error.message) {
      console.log(2222);
    message = error.message;
    console.log('message',message);
  }
  if (message) {
    toast.error(message);
  }
};
