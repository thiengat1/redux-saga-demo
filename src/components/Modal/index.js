/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-05-19 17:09:15
 * @LastEditTime: 2021-05-20 09:45:23
 * @LastEditors: Lewis
 */
import { withStyles } from "@material-ui/core";
import React from "react";
import styles from "./styles";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as modalActions from '../../actions/modal'
import Modal from '@material-ui/core/Modal'

function CommonModal(props) {
  const { classes, open,modalActionsApi,title,component } = props;
  const {hideModal}=modalActionsApi
  return (
    <div>
      <Modal open={open} onClose={hideModal}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
            <CloseIcon className={classes.icon} onClick={hideModal} />
          </div>
          <div className={classes.content}>
            {component}
          </div>
        </div>
      </Modal>
    </div>
  );
}
const mapStateToProps = (state) => {
    return {
      open: state.modal.showModal,
      title: state.modal.title,
      component:state.modal.component,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      modalActionsApi: bindActionCreators(modalActions, dispatch),
    };
  };
const connectWith = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(styles), connectWith)(CommonModal);
