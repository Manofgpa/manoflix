import React from 'react'
import { Container, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    background: '#0B2027',
    marginTop: '2em',
    marginBottom: '2em',
    padding: '1.5em',
    color: '#ccc',
  },
  poster: {
    height: '20%',
    margin: '0 0.5em',
  },
})

export const SingleMovieOverview = ({ movie, director, genres }) => {
  const classes = useStyles()

  const {
    original_title,
    overview,
    poster_path,
    tagline,
    vote_average,
    release_date,
  } = movie

  return (
    <Container className={classes.root}>
      <Box className={classes.poster}>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={original_title}
          height='500px'
        />
      </Box>

      <Box>
        <h1>{original_title}</h1>

        <Box>{genres?.map(genre => ` | ${genre.name}`)} | </Box>
        <Box>
          <p>{tagline}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
        </Box>
        <Box>
          <h3>Director</h3>
          <h5>{director}</h5>
        </Box>
        <Box>
          <h3>Release Date</h3>
          <p>{release_date}</p>
        </Box>
      </Box>

      <Box>
        <h2>★{vote_average}</h2>
      </Box>
    </Container>
  )
}
