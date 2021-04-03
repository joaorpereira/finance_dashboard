import React from 'react'
import Chart from 'react-apexcharts'

interface IChart {
  options: {}
  series: number[] | Object[]
  width: string
  type: any
  height?: string
}

const ChartComponent: React.FC<IChart> = ({
  options,
  series,
  width,
  type,
  height,
}) => {
  return (
    <Chart
      options={options}
      series={series}
      type={type}
      width={width}
      height={height}
    />
  )
}

export default ChartComponent
