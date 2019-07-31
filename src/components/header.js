import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import HideOnScroll from "./HideOnScroll"
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    background: `#fff`,
  }
  , Toolbar: {
    justifyContent: `space-between`
  }
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles();
  return (
    <header>
      <HideOnScroll threshold={100}>
        <div className={classes.root}>
          <AppBar className={classes.AppBar} position="fixed">
            <Toolbar className={classes.justifyContent} variant="dense">
              <Grid container spacing={2} justify="space-between" margin="0">
                <Grid item xs={6} sm={6}>
                  <Typography color="primary">
                    Logo
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6}>

                  <Button variant="contained" href="#calc-block" className={classes.button}>
                    Калькулятор
                    </Button>
                    <Button variant="contained" href="#order-form" className={classes.button}>
                    Форма заказа
                    </Button>
                    <Button variant="contained" href="#calc-block" className={classes.button}>
                    Калькулятор
                    </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </div>
      </HideOnScroll>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
