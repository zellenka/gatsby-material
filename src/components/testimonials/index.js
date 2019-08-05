import React from "react"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import MobileStepper from '@material-ui/core/MobileStepper'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import InstagramLogo from '../../images/Instagram_new.svg'

const allTestimonials = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    text: '11111 bla bla bla San Francisco – Oakland Bay Bridge, United States',
  },
  {
    label: 'Bird',
    text: '22222222 bla bla bla San Francisco – Oakland Bay Bridge, United States',
  },
  {
    label: 'Bali, Indonesia',
    text: '3333333 bla bla bla San Francisco – Oakland Bay Bridge, United States',
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    fontWeight: `bold`
  },
  linkImg: {
    maxWidth: `40px`
  }
}));


const testimonials = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = allTestimonials.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{allTestimonials[activeStep].label}</Typography>
      </Paper>
      <Typography>{allTestimonials[activeStep].text}</Typography>
      <a href="#" ><img className={classes.linkImg} src={InstagramLogo}/></a>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="progress"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Следующий
          {theme.direction === 'rtl' ? <i className="material-icons">keyboard_arrow_left</i> : <i className="material-icons">keyboard_arrow_right</i>}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <i className="material-icons">keyboard_arrow_right</i> : <i className="material-icons">keyboard_arrow_left</i>}
            Предыдущий
        </Button>
        }
      />
    </div>
  )
}

export default testimonials