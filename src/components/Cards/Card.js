import React from 'react'
import classes from './Card.module.css'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = (props) => {
  return (
    <div className={classes.container}>
      <Grid container spacing={3} justify='center'>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(classes.card, classes.infected)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Infected
            </Typography>
            <Typography variant='h4'>
              <CountUp
                start={0}
                end={props.data.confirmed.value}
                duration={2}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(classes.card, classes.recovered)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Recovered
            </Typography>
            <Typography variant='h4'>
              <CountUp
                start={0}
                end={props.data.recovered.value}
                duration={2}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of arecoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(classes.card, classes.deaths)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Deaths
            </Typography>
            <Typography variant='h4'>
              {' '}
              <CountUp
                start={0}
                end={props.data.deaths.value}
                duration={2}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of deaths from COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
