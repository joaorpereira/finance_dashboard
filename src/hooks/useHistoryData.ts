import { useMemo } from 'react'
import lastTwelveMonths from '../utils/lastTwelveMonths'
import monthList from '../utils/monthList'

interface IBalance {
  id: number
  operation_type: string
  description: string
  value: number
  date: string
  status: string
}

const useHistoryData = (income: IBalance[], outcome: IBalance[]) => {
  const historyDate = useMemo(() => {
    const lastMonths = lastTwelveMonths(new Date())
    return lastMonths.map(item => {
      let amountEntry = 0
      income.forEach(entry => {
        const date = new Date(entry.date)
        const entryMonth = monthList[date.getMonth()]
        const entryYear = date.getFullYear()

        if (entryMonth === item.month && entryYear === item.year) {
          amountEntry += entry.value
        }
      })

      let amountExpense = 0
      outcome.forEach(expense => {
        const date = new Date(expense.date)
        const expenseMonth = monthList[date.getMonth()]
        const expenseYear = date.getFullYear()

        if (expenseMonth === item.month && expenseYear === item.year) {
          amountExpense += expense.value
        }
      })

      return {
        month: item.month,
        year: item.year,
        amountEntry: parseFloat(amountEntry.toFixed(2)),
        amountExpense: parseFloat(amountExpense.toFixed(2)),
      }
    })
  }, [income, outcome])

  return historyDate
}

export default useHistoryData
