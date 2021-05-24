/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-05-16 13:12:37
 * @LastEditTime: 2021-05-21 17:51:32
 * @LastEditors: Lewis
 */
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as modalActions from "../../actions/modal";
import { Field, reduxForm } from "redux-form";
import renderTextField from "../../components/FormHelper/TextField";

const required = (value) => {
  let error = "please input";
  if (value !== null && typeof value !== "undefined" && value.trim() !== "") {
    error = null;
  }
  return error;
};

function TaskForm(props) {
  const { classes, handleSubmit } = props;
  const { hideModal } = props.modalActionsApi;

  const handleSubmitForm = (data) => {};

 
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Grid container spacing={1}>
        <Grid item md={12}>
          <Field
            name="title"
            id="title"
            label="title"
            className={classes.textField}
            margin="normal"
            component={renderTextField}
            validate={required}
          />
        </Grid>
        <Grid item md={12}>
          <Field
            name="description"
            id="description"
            label="description"
            className={classes.textField}
            margin="normal"
            component={renderTextField}
            multiple
            rowsMax="4"
          />
        </Grid>
        <Grid item md={12}>
          <Box display="flex" flexDirection="row-reverse" mt={2}>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
            <Box mr={1}>
              <Button variant="contained" onClick={hideModal}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    modalActionsApi: bindActionCreators(modalActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = "TASK_MANAGEMENT";

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate:
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm);
