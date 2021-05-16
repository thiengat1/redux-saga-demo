/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-05-15 10:57:50
 * @LastEditTime: 2021-05-16 19:21:29
 * @LastEditors: Lewis
 */
import { withStyles } from "@material-ui/core";
import React,{useState,useEffect} from "react";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { statuses } from "../../constants";
import TaskList from '../../components/TaskList'
import TaskForm from '../../components/TaskForm'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as taskActions from '../../actions/task'




const listTask = [
  {
    id: 1,
    title: "read book",
    description: "read material ui book",
    status: 0,
  },
  { id: 1, title: "play football", description: "with my friend", status: 2 },
  { id: 1, title: "play game", description: "", status: 1 },
];

function renderBoard() {
  let xhtml = null;
  xhtml = (
    <Grid container spacing={2}>
      {statuses.map((status, index) => {
        const taskFilter = listTask.filter(
          (item) => item.status === status.value
        );
        return <TaskList task={taskFilter} status={status} key={index}/>;
      })}
    </Grid>
  );

  return xhtml;
}
function renderForm(open,setOpen){
    let xhtml = null;

    xhtml=(
        <TaskForm open={open} setOpen={setOpen} onClose={()=>handleClose(setOpen)}/>
    )

    return xhtml
}
const openForm=(callback)=>{
    callback(true)
}
const handleClose=(callback)=>{
    callback(false)
}
function TaskBoard(props) {
    const [open,setOpen]=useState(false)
  const { classes } = props;

  useEffect(()=>{
    const {taskActions}=props
    const {fetchListTask}=taskActions
    fetchListTask()

  })
  return (
    <div className={classes.taskBoard}>
      <Button variant="contained" color="primary" className={classes.button} onClick={()=>openForm(setOpen)}>
        <AddIcon /> Thêm Mới Công Việc
      </Button>
      {renderBoard()}
      {renderForm(open,setOpen)}
    </div>
  );
}
const mapStateToProps=null

const mapDispatchToProps=dispatch=>{
  return{
    taskActions:bindActionCreators(taskActions,dispatch)
  }
}

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(TaskBoard));
