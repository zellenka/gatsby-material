import React from "react"
import PropTypes from "prop-types"
import contactFormStyles from "./contactForm.module.css"
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';

const contactForm = () => {
  return(
    <form noValidate autoComplete="off">
    <Typography color="primary" variant="h4">
    Work with us
    </Typography>
    <Typography color="primary">
    Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours.
    </Typography>
    <TextField
        id="outlined-name-input"
        label="Your Name"
        type="text"
        name="name"
        autoComplete="name"
        margin="normal"
        variant="outlined"
      />
    <TextField
        id="outlined-email-input"
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
    </form>
  )
}

export default contactForm