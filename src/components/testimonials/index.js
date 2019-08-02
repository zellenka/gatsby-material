import React from "react"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const allTestimonials = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    text: '11111 bla bla bla San Francisco – Oakland Bay Bridge, United States',
    link:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    text: '22222222 bla bla bla San Francisco – Oakland Bay Bridge, United States',
    link:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    text: '3333333 bla bla bla San Francisco – Oakland Bay Bridge, United States',
    link:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
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
    backgroundColor: theme.palette.background.default,
  },
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
      <img src={allTestimonials[activeStep].link} />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="progress"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
          {theme.direction === 'rtl' ? <i className="material-icons">keyboard_arrow_left</i> : <i className="material-icons">keyboard_arrow_right</i>}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <i className="material-icons">keyboard_arrow_right</i> : <i className="material-icons">keyboard_arrow_left</i>}
            Back
        </Button>
        }
      />
    </div>
  )
}

export default testimonials