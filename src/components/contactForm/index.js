import React from "react"
import PropTypes from "prop-types"
import contactFormStyles from "./contactForm.module.css"
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';

const contactForm = () => {
  
  return(
    <Container>
    <form noValidate autoComplete="off">
    <Typography color="primary">
    Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours.
    </Typography>

    <Grid container spacing={2} justify="flex-start">
    <Grid item xs={12} sm={6} md={6}>
    <TextField
    fullWidth
        id="outlined-name-input"
        label="Your Name"
        type="text"
        name="name"
        autoComplete="name"
        margin="normal"
        variant="outlined"
      />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
    <TextField
    fullWidth
        id="outlined-email-input"
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
      <TextField
            fullWidth
            id="textmail"
            label="Важная информация"
            name="textmail"
            margin="normal"
            multiline={true}
            rows={3}
            rowsMax={5}
            variant="outlined" />
            </Grid>
            </Grid>
            
    </form>
    </Container>
  )
}

export default contactForm