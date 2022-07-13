import React, { useEffect } from 'react'
import classes from './Chart.module.css'
import { fetchDailyData } from '../../api/api-call'
import { Line, Bar } from 'react-chartjs-2'
import { useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'

const Charts = (props) => {
  const [dailyData, setDailyData] = useState([])

  useEffect(() => {
    fetchDailyData()
      .then((data) => {
        setDailyData(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // Line Chart if data is Global
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map((data) => {
          let date = data.reportDate.toString()
          const formattedDate = `${date.substring(0, 4)}-${date.substring(
            4,
            6
          )}-${date.substring(6, 8)}`
          return formattedDate
        }),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          {
            data: dailyData.map((data) => data.recovered),
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null

  //Bar Chart if data is in Bar
  let barChart
  if (props.data !== null) {
    barChart = (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: `Current state in ${props.country}`,
              backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
              ],
              data: [
                props.data.confirmed.value,
                props.data.recovered.value,
                props.data.deaths.value,
              ],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${props.country}` },
        }}
      />
    )
  }

  console.log('Chart' + barChart)
  return (
    <div className={classes.container}>
      {props.country ? barChart : lineChart}
    </div>
  )
}

export default Charts
