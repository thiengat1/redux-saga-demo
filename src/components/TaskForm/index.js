/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-05-16 13:12:37
 * @LastEditTime: 2021-05-16 16:28:07
 * @LastEditors: Lewis
 */
import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './styles'
import { withStyles } from '@material-ui/core';


 function TaskForm(props) {
     const {open,setOpen,onClose} =props
    return (
        <Dialog
        open={open}
        onClose={()=>onClose(setOpen)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Them moi cong viec"}</DialogTitle>
        <DialogContent>
        <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>onClose(setOpen)} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>onClose(setOpen)} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
}
export default withStyles(styles)(TaskForm)
