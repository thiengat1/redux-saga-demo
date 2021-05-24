/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-05-19 09:09:24
 * @LastEditTime: 2021-05-19 09:23:01
 * @LastEditors: Lewis
 */

import { withStyles } from "@material-ui/styles";
import React from "react";
import styles from "./styles";
import TextField from "@material-ui/core/TextField";

function SearchBox(props) {
  const { classes, handleChange } = props;
  return (
    <div>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField 
        margin="normal"
        autoComplete="off" 
        onChange={handleChange} placeholder="input key" className={classes.textField}/>
      </form>
    </div>
  );
}
export default withStyles(styles)(SearchBox);
