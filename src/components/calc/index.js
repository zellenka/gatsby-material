import React from "react"
import PropTypes from "prop-types"
import calcStyles from "./calc.module.css"
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

const calc = () => {
  return (
    <form>
      <Typography variant="h2" align="center" className="paper-heading" gutterBottom="true">
        Калькулятор просчета стоимости товара и доставки
      </Typography>
      <Grid container spacing={2} justify="space-between" margin="0">
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h4">
            Цена товара
          </Typography>

          <TextField
            fullWidth
            id="chinaPrice"
            type="number"
            label="Цена одной единицы (в Юанях):"
            name="chinaPrice"
            margin="normal"
            variant="outlined" />

          <TextField
            fullWidth
            id="emcCost"
            type="number"
            label="Доставка по Китаю (ЕМС в Юанях):"
            name="emcCost"
            margin="normal"
            variant="outlined" />

          <TextField
            fullWidth
            id="countItem"
            type="number"
            label="Количество:"
            name="countItem"
            defaultValue="1"
            margin="normal"
            variant="outlined" />

          <TextField
            fullWidth
            id="koef"
            type="number"
            label="Коэффициент:"
            defaultValue="4.5"
            name="koef"
            margin="normal"
            variant="outlined" />

        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h4">
            Сумма за вес
          </Typography>

          <TextField
            id="time"
            type="number"
            label="Вес"
            name="name"
            helperText="Вес в граммах, например 500"
            margin="normal"
            variant="outlined" />

        </Grid>
      </Grid>
    </form>

  )
}

export default calc