import monthList from './monthList'

const lastTwelveMonths = (today: Date) => {
  today.setDate(1)
  const arr = []
  for (let i = 0; i <= 11; i++) {
    const month = monthList[today.getMonth()]
    const year = today.getFullYear()
    arr.push({ month, year })
    today.setMonth(today.getMonth() - 1)
  }
  return arr.reverse()
}

export default lastTwelveMonths
