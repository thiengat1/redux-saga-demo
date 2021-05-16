/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-05-15 09:31:38
 * @LastEditTime: 2021-05-16 16:46:17
 * @LastEditors: Lewis
 */
import { withStyles } from '@material-ui/core';
import React from 'react'
import styles from './styles'
import { ThemeProvider } from '@material-ui/core/styles';
import TaskBoard from '../TaskBoard'
import theme from '../../commons/Theme'
import configureStore from '../../redux/configureStore'

import {Provider} from 'react-redux'

const store=configureStore(0)

function App(props) {
  console.log('props',props);
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <TaskBoard />
    </ThemeProvider>
    </Provider>

  );
}

export default withStyles(styles)(App);
