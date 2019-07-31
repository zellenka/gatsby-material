import React from "react"
import PropTypes from "prop-types"
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'

const orderForm = () => {
  return (
    <form>
      <Grid container spacing={2} justify="flex-start" margin="0">
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            id="orederItemLink"
            type="text"
            label="Ссылка на товар"
            name="orederItemLink"
            margin="normal"
            variant="outlined" />
        </Grid>
        <Grid item xs={4} sm={4} md={2}>
          <TextField
            fullWidth
            id="orederItemCount"
            type="text"
            label="Колличество"
            name="orederItemCount"
            margin="normal"
            variant="outlined" />
        </Grid>
        <Grid item xs={4} sm={4} md={2}>
          <TextField
            fullWidth
            id="orederItemColor"
            type="text"
            label="Цвет"
            name="orederItemColor"
            margin="normal"
            variant="outlined" />
        </Grid>
        <Grid item xs={4} sm={4} md={2}>
          <TextField
            fullWidth
            id="orederItemSize"
            type="text"
            label="Размер"
            name="orederItemSize"
            margin="normal"
            variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            id="orederItemDescription"
            label="Важная информация"
            name="orederItemDescription"
            margin="normal"
            multiline={true}
            rows={2}
            rowsMax={4}
            variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            id="orederItemContact"
            type="text"
            label="Как с вами связатся"
            name="orederItemContact"
            margin="normal"
            variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={12}>
        <Fab color="primary" >
        <i className="material-icons">add</i>
      </Fab>
      <Fab color="primary" >
        <i className="material-icons">remove</i>
      </Fab>
        <Fab variant="extended" >
        <i className="material-icons">send</i>
        send
      </Fab>
      </Grid>
      </Grid>
    </form>
  )
}

export default orderForm