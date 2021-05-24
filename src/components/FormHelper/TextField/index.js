/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-05-21 09:57:43
 * @LastEditTime: 2021-05-21 10:10:24
 * @LastEditors: Lewis
 */
import React from 'react'
import TextField from '@material-ui/core/TextField'

const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )
export default   renderTextField