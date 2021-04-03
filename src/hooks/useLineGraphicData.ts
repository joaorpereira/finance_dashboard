import { useEffect, useState } from 'react'

interface IUseLineGraphicData {
  month: string
  year: number
  amountEntry: number
  amountExpense: number
}

const useLineGraphicData = (historyDate: IUseLineGraphicData[]) => {
  const [entryData, setEntryData] = useState<number[]>([])
  const [expenseData, setExpenseData] = useState<number[]>([])

  useEffect(() => {
    const data = historyDate.map(entry => entry.amountEntry)
    const data2 = historyDate.map(entry => entry.amountExpense)
    setEntryData(data)
    setExpenseData(data2)
  }, [historyDate])

  return [entryData, expenseData]
}

export default useLineGraphicData
