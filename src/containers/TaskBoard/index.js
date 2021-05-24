/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-05-15 10:57:50
 * @LastEditTime: 2021-05-20 17:33:52
 * @LastEditors: Lewis
 */
import React, { useState, useEffect } from "react";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { statuses } from "../../constants";
import TaskList from "../../components/TaskList";
import TaskForm from "../TaskForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../actions/task";
import SearchBox from "../../components/SearchBox";
import * as modalActions from "../../actions/modal";
import {withStyles} from '@material-ui/styles'

function TaskBoard(props) {
  const { classes } = props;
  const { fetchListTask, filterTask } = props.taskActionsApi;
  const { showModal,changeModalTitle,changeModalContent } = props.modalActionsApi;
  useEffect(() => {
    //fetchListTaskRequest()
    fetchListTask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderBoard = () => {
    const { listTask } = props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {statuses.map((status, index) => {
          const taskFilter = listTask.filter(
            (item) => item.status === status.value
          );
          return <TaskList task={taskFilter} status={status} key={index} />;
        })}
      </Grid>
    );

    return xhtml;
  };
  const openForm = () => {
    showModal(true)
    changeModalTitle('Add new work')
    changeModalContent(<TaskForm/>)
  };

  const loadData = () => {
    fetchListTask();
  };
  const handleFilter = (e) => {
    const { value } = e.target;
    filterTask(value);
  };
  const renderSearchBox = () => {
    let xhtml = null;

    xhtml = <SearchBox handleChange={handleFilter} />;
    return xhtml;
  };

  return (
    <div className={classes.taskBoard}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={openForm}
      >
        <AddIcon /> Thêm Mới Công Việc
      </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={loadData}
          style={{marginLeft: 10}}
        >
          loadData
        </Button>

      {renderSearchBox()}
      {renderBoard()}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    listTask: state.task.listTask,
    showModal:state.modal.showModal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskActionsApi: bindActionCreators(taskActions, dispatch),
    modalActionsApi:bindActionCreators(modalActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
