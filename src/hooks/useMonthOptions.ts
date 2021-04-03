import { useMemo, useState } from 'react'
import { current_month, current_year } from '../utils/constants'
import monthList from '../utils/monthList'

const useMonthOptions = () => {
  const [month, setMonth] = useState<string>(current_month)
  const [year, setYear] = useState<string>(current_year)

  const monthOptions = useMemo(() => {
    const list = monthList
      .map((month, index) => ({
        value: index + 1,
        option: month,
      }))
      .filter(month =>
        Number(year) === Number(current_year)
          ? Number(month.value) <= Number(current_month)
          : month
      )

    return list
  }, [year])

  return [month, setMonth, year, setYear, monthOptions]
}

export default useMonthOptions
