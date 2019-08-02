import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Hero from '../components/hero/'
import FeatureItem from '../components/features/'
import ContactForm from '../components/contactForm/'
import Calc from '../components/calc/'
import OrderSteps from '../components/orderSteps/'
import OrderForm from '../components/orederForm/'
import Testimonials from '../components/testimonials'

const useStyles = makeStyles(theme => ({
  Paper: {
    padding: theme.spacing(3, 2),
    margin: `${theme.spacing(2)}px auto`,
    boxShadow: '0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2)',
    maxWidth: '1200px'
  }
}));

const IndexPage = () => {
  const classes = useStyles();
  return (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Paper className={classes.Paper}>

      <Typography variant="h2" align="center" className="paper-heading" gutterBottom={true}>
        ВЫКУП И ДОСТАВКА ТОВАРОВ ИЗ ИНТЕРНЕТ-МАГАЗИНОВ КИТАЯ В УКРАИНУ
      </Typography>
      <Typography component="p" className="paper-text">
        Желаете выгодно купить товар из интернет-магазинов Китая, получить товар оперативной и надежной доставкой в Украину, на самых выгодных условиях?
        «Trans-Agent» — Ваш компетентный помощник в этом! Все представленные нами услуги выполняются на высоком уровне профессионализма, поэтому успех Вам гарантирован!
        Мы осуществляем выкуп товаров с таких торговых площадок, как: Taobao, 1688, Тmall, Wechat, Alibaba, и др.
      </Typography>
  
      <Grid container spacing={2} justify="space-between" margin="0">
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
      </Grid>
      
    </Paper>

    <Paper className={classes.Paper}>
      <Calc />
    </Paper>
    <Paper className={classes.Paper}>
    <Typography variant="h2" align="center" className="paper-heading" gutterBottom={true}>
        Как заказать и оплатить
      </Typography>
      <OrderSteps />
    </Paper>

    <Paper className={classes.Paper} id="order-form">
    <Typography variant="h2" align="center" className="paper-heading" gutterBottom={true}>
        Форма заказа
      </Typography>
      <OrderForm />
    </Paper>

    <Paper className={classes.Paper} id="order-form">
    <Typography variant="h2" align="center" className="paper-heading" gutterBottom={true}>
        Отзывы
      </Typography>
      <Testimonials />
    </Paper>

<div>
    <Typography variant="h2" align="center" className="paper-heading" gutterBottom={true}>
    Остались вопросы, пишите
      </Typography>
      <ContactForm />
      </div>
 




    <p>Now go build something great.</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)}

export default IndexPage
