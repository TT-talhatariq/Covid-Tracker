import * as React from 'react'
import { CircularProgress, Box } from '@material-ui/core'
import classes from './Spinner.module.css'

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress className={classes.spinner} />
    </Box>
  )
}
