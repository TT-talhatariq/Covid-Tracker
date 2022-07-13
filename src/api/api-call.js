import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

//Fetch Global Data from API
export const fetchData = async (country) => {
  let changeAbleUrl = url

  if (country) {
    changeAbleUrl = `${url}/countries/${country}`
  }

  try {
    const { data } = await axios.get(`${changeAbleUrl}`)
    //Destructuring
    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    }

    return modifiedData
  } catch (error) {
    throw new Error(error)
  }
}

//Fetching daily data of a country
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(
      'https://api.covidtracking.com/v1/us/daily.json'
    )
    const modifiedData = data.map((dailyData) => ({
      reportDate: dailyData.date,
      confirmed: dailyData.positive,
      deaths: dailyData.death,
      recovered: dailyData.recovered,
    }))
    return modifiedData
  } catch (error) {
    throw new Error(error)
  }
}

//fetching the data by country
export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`)
    console.log(data)

    const modifiedData = data.countries.map((country) => country.name)
    return modifiedData
  } catch (error) {
    throw new Error(error)
  }
}
