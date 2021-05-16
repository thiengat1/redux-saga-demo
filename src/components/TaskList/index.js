/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-05-16 12:18:25
 * @LastEditTime: 2021-05-16 12:38:59
 * @LastEditors: Lewis
 */
import { withStyles } from "@material-ui/core";
import React from "react";

import Box from "@material-ui/core/Box";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";

import TaskItem from "../TaskItem";

function TaskList(props) {
  const { classes, task, status } = props;
  return (
    <Grid item md={4} xs={12}>
      <Box mt={2} mb={2}>
        <div className={classes.status}>{status.label}</div>
      </Box>

      <div className={classes.wrapperListTask}>
        {task.map((task) => {
          return <TaskItem task={task} status={status} key={task.id}/>;
        })}
      </div>
    </Grid>
  );
}
export default withStyles(styles)(TaskList);
