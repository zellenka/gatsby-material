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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {

    setAnchorEl(event.currentTarget);
  }

  function handleClose(event) {
    console.log(event.currentTarget.href)
    setAnchorEl(null);
  }

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
                  <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" color="primary" onClick={handleClick}>
                    Open Menu
                </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem>
                    <a color="primary" onClick={handleClose} href="#calc-block">Калькулятор</a>
                    </MenuItem>
                    <MenuItem>
                    <a color="primary" onClick={handleClose} href="#order-form">Форма заказа</a>
                    </MenuItem>
                    <MenuItem>
                    <a color="primary" onClick={handleClose} href="#order-form">Logout</a>
                    </MenuItem>
                  </Menu>
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
