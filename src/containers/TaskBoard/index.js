/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-05-15 10:57:50
 * @LastEditTime: 2021-05-15 11:09:54
 * @LastEditors: Lewis
 */
import { withStyles } from '@material-ui/core'
import React from 'react'
import styles from './styles'

 function TaskBoard(props) {
     const{classes}=props
    return (
        <div className={classes.task_board}>
            <div className={classes.shape}>React Js</div>
            <div className={classes.shape}>Vue Js</div>
            <div className={classes.shape}>Angular Js</div>
        </div>
    )
}
export default withStyles(styles)(TaskBoard);
