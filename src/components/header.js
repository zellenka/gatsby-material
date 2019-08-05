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
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Grow from '@material-ui/core/Grow'
import InstagramLogo from '../images/Instagram_new.svg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    background: `#fff`,
  }
  , Toolbar: {
    justifyContent: `space-between`
  },
  linkImgContainer:{
    display: `block`,
    height: `40px`
  },
  linkImg: {
    height: `100%`,
  },
  headerRightPart: {
    display: `flex`,
    justifyContent: `space-around`
  },
  headerLeftPart: {
    display: `flex`,
    justifyContent: `start`,
    alignItems: `center`
  }
}));


const Header = ({ siteTitle }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(event) {
    setAnchorEl(null);
  }

  return (
    <header>
      <HideOnScroll threshold={100}>
        <div className={classes.root}>
          <AppBar className={classes.AppBar} position="fixed">
            <Toolbar className={classes.justifyContent} variant="dense">
              <Grid container spacing={2} justify="space-between" margin="0">
                <Grid item xs={6} sm={6} className={classes.headerLeftPart}>
                  <Typography color="primary">
                    <Link to="/">Logo</Link>
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6} className={classes.headerRightPart}>
                  <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" color="primary" onClick={handleClick}>
                  <i className="material-icons">menu</i> Меню
                </Button>
                <a href="#" className={classes.linkImgContainer}><img className={classes.linkImg} src={InstagramLogo} /></a>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Grow in={Boolean(anchorEl)}>
                      <MenuItem>
                        <a color="primary" onClick={handleClose} href="/#calc-block">Калькулятор</a>
                      </MenuItem>
                    </Grow>
                    <Grow
                      in={Boolean(anchorEl)}
                      {...(Boolean(anchorEl) ? { timeout: 500 } : {})} >
                      <MenuItem>
                        <a color="primary" onClick={handleClose} href="/#order-form">Форма заказа</a>
                      </MenuItem>
                    </Grow>
                    <Grow
                      in={Boolean(anchorEl)}
                      {...(Boolean(anchorEl) ? { timeout: 1000 } : {})} >
                    <MenuItem>
                      <a color="primary" onClick={handleClose} href="#order-form">Logout</a>
                    </MenuItem>
                    </Grow>
                    <Grow
                      in={Boolean(anchorEl)}
                      {...(Boolean(anchorEl) ? { timeout: 1500 } : {})} >
                    <MenuItem>
                      <Link onClick={handleClose} to="/page-2/">Go to page 2</Link>
                    </MenuItem>
                    </Grow>
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
