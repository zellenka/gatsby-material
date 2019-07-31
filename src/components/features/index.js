import React from "react"
import PropTypes from "prop-types"
import Features from "./features.module.css"
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

const featuresItem = () => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={Features.card}>
        <CardContent>
          <Typography color="primary" variant="h3">
          <p><i className="material-icons">account_balance_wallet</i></p>
            heading
          </Typography>
          <Typography color="primary">
            some text some textsome text some text some text
            some text some text
    </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default featuresItem