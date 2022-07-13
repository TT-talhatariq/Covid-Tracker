import React from 'react'
import classes from './CountryPicker.module.css'
import { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountries } from '../../api/api-call'

const CountryPicker = (props) => {
  const [countriesName, setCountriesName] = useState([])

  useEffect(() => {
    fetchCountries()
      .then((data) => {
        setCountriesName(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [setCountriesName])

  return (
    <FormControl className={classes.container}>
      <NativeSelect
        onChange={(e) => {
          props.onHandleCountryChange(e.target.value)
        }}
      >
        <option value=''>Global</option>
        {countriesName.length &&
          countriesName.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
