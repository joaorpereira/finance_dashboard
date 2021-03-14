import { format } from 'date-fns'

const formatDate = (date: string): string => {
  const newDate = new Date(date) 
  return format(newDate, 'dd/MM/yyyy')
}

export default formatDate
