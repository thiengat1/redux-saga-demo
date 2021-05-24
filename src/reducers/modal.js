/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-05-19 16:44:13
 * @LastEditTime: 2021-05-20 17:40:10
 * @LastEditors: Lewis
 */
import * as types from "../constants/modal";

const initialState = {
  showModal: false,
  component: null,
  title: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL: {
      return {
        ...state,
        showModal: true,
      };
    }
    case types.HIDE_MODAL: {
      return {
        ...state,
        showModal: false,
        title:'',
        component:null
      };
    }
    case types.CHANGE_MODAL_TITLE: {
      const { title } = action.payload;
      return {
        ...state,
        title: title,
      };
    }
    case types.CHANGE_MODAL_CONTENT: {
      const { component } = action.payload;
      return {
        ...state,
        component: component,
      };
    }
    default:
      return state;
  }
};
export default reducer;
