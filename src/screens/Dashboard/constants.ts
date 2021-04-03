import lastTwelveMonths from '../../utils/lastTwelveMonths'

export const options = {
  colors: ['#00d49d', '#ff005d'],
  labels: ['Entradas', 'Saídas'],
}

export const barOptions = {
  colors: ['#00d49d', '#ff005d'],
  xaxis: {
    categories: ['Recorrentes', 'Eventuais'],
  },
}

const today = new Date()
const months = lastTwelveMonths(today).map(item => item.month.substr(0, 3))

export const lineOptions = {
  colors: ['#00d49d', '#ff005d'],
  labels: ['Entradas', 'Saídas'],
  xaxis: {
    categories: months,
  },
}
