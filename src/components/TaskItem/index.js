/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-05-16 12:33:40
 * @LastEditTime: 2021-05-16 13:09:52
 * @LastEditors: Lewis
 */
import { withStyles } from "@material-ui/core";
import React from "react";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function TaskItem(props) {
  const { classes, task, status } = props;
  return (
    <Card key={task.id} className={classes.card}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item md={8}>
            <Typography component="h2">{task.title}</Typography>
          </Grid>
          <Grid item md={4}>
            {status.label}
          </Grid>
        </Grid>
        <p>{task.description}</p>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Fab color="primary" aria-label="edit" size="small">
          <EditIcon />
        </Fab>
        <Fab color="secondary" aria-label="delete" size="small">
          <DeleteIcon />
        </Fab>
      </CardActions>
    </Card>
  );
}
export default withStyles(styles)(TaskItem);
