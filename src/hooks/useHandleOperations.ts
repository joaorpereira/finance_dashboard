import { useEffect, useState } from 'react'

interface IBalance {
  id: number
  operation_type: string
  description: string
  value: number
  date: string
  status: string
}

const useHandleOperations = (data: IBalance[], params: string) => {
  const [state, setState] = useState<IBalance[]>([])

  const handleOperation = (data: IBalance[], params: string) => {
    const newData = data.filter(item => item.operation_type === params)
    setState(newData)
  }

  useEffect(() => {
    handleOperation(data, params)
  }, [data, params])

  return state
}

export default useHandleOperations
