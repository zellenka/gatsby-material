import React from "react"
import PropTypes from "prop-types"
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'


const orderSteps = () => {
  return (
    <Grid container spacing={2} justify="space-between" margin="0">
    <Grid item xs={12} sm={6} md={3}>
    <Typography color="primary" variant="h3">
            heading
          </Typography>
          <Typography color="primary">
            some text some textsome text some text some text
            some text some text
    </Typography>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
    <Typography color="primary" variant="h3">
            heading
          </Typography>
          <Typography color="primary">
            some text some textsome text some text some text
            some text some text
    </Typography>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
    <Typography color="primary" variant="h3">
            heading
          </Typography>
          <Typography color="primary">
            some text some textsome text some text some text
            some text some text
    </Typography>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
    <Typography color="primary" variant="h3">
            heading
          </Typography>
          <Typography color="primary">
            some text some textsome text some text some text
            some text some text
    </Typography>
    </Grid>
    </Grid>
  )
}

export default orderSteps