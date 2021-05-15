/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-05-15 09:31:38
 * @LastEditTime: 2021-05-15 15:49:18
 * @LastEditors: Lewis
 */
import { withStyles } from '@material-ui/core';
import React from 'react'
import styles from './styles'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TaskBoard from '../TaskBoard'
function App(props) {
  console.log('props',props);
  return (
    <ThemeProvider theme={theme}>
      <TaskBoard />
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
