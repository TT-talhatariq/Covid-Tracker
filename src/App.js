import React, { useEffect } from 'react'
import classes from './App.module.css'
import { Cards, Charts, CountryPicker } from './exports'
import { fetchData } from './api/api-call'
import { useState } from 'react'
import Spinner from './components/util/Spinner'
import covidImage from './image.png'

const App = () => {
  //States
  const [data, setData] = useState(null)
  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    /*
     Alternate Method to use UseEffect 
     
    const fetch = async () => {
      const data = await fetchData()
      console.log(data)
    }
    fetch()
    */

    //Second Method
    setLoading(true)
    fetchData()
      .then((fetchdata) => {
        setData(fetchdata)
        setLoading(false)
        setError(false)
      })
      .catch((error) => {
        setLoading(false)
        setError(true)
      })
  }, [])

  //Handling the country change
  const handleCountryChange = async (country) => {
    console.log(country)
    fetchData(country)
      .then((fetchdata) => {
        setCountry(country)
        setData(fetchdata)
        setError(false)
      })
      .catch((error) => {
        setLoading(false)
        setError(true)
      })
  }

  //Spinner untill data loads
  if (loading) return <Spinner className={classes.spinner} />

  return (
    <div className={classes.container}>
      <img className={classes.image} src={covidImage} />
      {error && <h1 className={classes.error}>Something went wrong</h1>}

      {!error && data && <Cards data={data} />}
      {!error && <CountryPicker onHandleCountryChange={handleCountryChange} />}
      {!error && <Charts data={data} country={country} />}
    </div>
  )
}

export default App
