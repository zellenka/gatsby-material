import React from "react"
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment';

const calc = () => {

  const [values, setValues] = React.useState({
    chinaPrice: 0,
    emcCost: 10,
    countItem: 1,
    koef: 4.5,
  });
  const [totalPrice, setTotalPrice] = React.useState('...')

  const [weight, setWeight] = React.useState('...')

  const handleChange = props => (event) => {
    setValues({ ...values, [props]: Number(event.target.value) })
  }

  const handleChangeWeight = event => {
    setWeight(Number(event.target.value) * 5)
  }

  React.useEffect(() => {
    if(values.chinaPrice === 0 || values.emcCost === 0) {
      setTotalPrice('...')
    } else {
      setTotalPrice((values.chinaPrice + values.emcCost + values.countItem + values.koef).toFixed(2))
    }
    
  });
  return (
    <form id="calc-block">
      <Typography variant="h2" align="center" className="paper-heading" gutterBottom={true}>
        Калькулятор просчета стоимости товара и доставки
      </Typography>
      <Grid container spacing={2} justify="space-between" margin="0">
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h4">
            Цена товара {totalPrice} грн.
          </Typography>

          <TextField
            fullWidth
            id="chinaPrice"
            type="number"
            label="Цена одной единицы (в Юанях):"
            name="chinaPrice"
            margin="normal"
            onChange={handleChange('chinaPrice')}
            variant="outlined" />

          <TextField
            fullWidth
            id="emcCost"
            type="number"
            label="Доставка по Китаю (ЕМС в Юанях):"
            name="emcCost"
            defaultValue={values.emcCost}
            margin="normal"
            onChange={handleChange('emcCost')}
            variant="outlined" />

          <TextField
            fullWidth
            id="countItem"
            type="number"
            inputProps={{ min: "1", step: "1" }}
            label="Количество:"
            name="countItem"
            defaultValue={values.countItem}
            onChange={handleChange('countItem')}
            margin="normal"
            variant="outlined" />

        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h4">
            Сумма за вес {weight} грн.
          </Typography>

          <TextField
            id="time"
            type="number"
            label="Вес"
            name="name"
            helperText="Вес в граммах, например 500"
            margin="normal"
            onChange={event=>handleChangeWeight(event)}
            InputProps={{
              endAdornment: <InputAdornment position="end">Гр</InputAdornment>
            }}
            inputProps={{ min: "1" }}
            variant="outlined" />

        </Grid>
      </Grid>
    </form>

  )
}

export default calc