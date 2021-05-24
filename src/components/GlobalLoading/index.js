/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-05-18 11:38:33
 * @LastEditTime: 2021-05-19 08:51:32
 * @LastEditors: Lewis
 */
import { withStyles } from "@material-ui/styles";
import React from "react";
import styles from "./styles";
import LoadingIcon from "../../assets/images/loading.gif";
import { bindActionCreators,compose } from "redux";
import { connect } from "react-redux";
import * as uiActions from "../../actions/ui";

function GlobalLoading(props) {
  const { classes,showLoading } = props;
  let xhtml=null
  if(showLoading){
    xhtml=(
      <div className={classes.globalLoading}>
      <img src={LoadingIcon} alt="loading" className={classes.icon} />
    </div>
    )
  }
  return xhtml
}
const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
///export default withStyles(styles)(withConnect(GlobalLoading));

export default compose(
    withStyles(styles),
    withConnect
)(GlobalLoading)
