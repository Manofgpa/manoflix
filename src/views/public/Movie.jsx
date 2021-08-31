import React, { useEffect, useState } from 'react'
import { https, apiKeyEndpoint } from '../../config/https'
import { Container, Box, makeStyles } from '@material-ui/core'
import Actor from '../../components/Actor'
import styled from 'styled-components'

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
  actors: {
    display: 'flex',
  },
  casting: {
    background: '#0B2027',
    marginTop: '2em',
    marginBottom: '2em',
    padding: '1.5em',
    color: '#ccc',
  },
})

const MovieContainer = props => {
  const [movie, setMovie] = useState([])
  const [director, setDirector] = useState('')
  const [genres, setGenres] = useState([])
  const [cast, getCast] = useState([])

  useEffect(() => {
    https
      .get(`movie/${props.id}${apiKeyEndpoint}&append_to_response=credits`)
      .then(res => {
        setMovie(res.data)
        setDirector(res.data.credits.crew[0].name)
        setGenres(res.data.genres)
        getCast(res.data.credits.cast)
      })
  }, [props.id])

  const {
    original_title,
    overview,
    poster_path,
    tagline,
    vote_average,
    release_date,
  } = movie

  const classes = useStyles()
  console.log(cast)

  return (
    <Movie>
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

          <Box>{genres.map(genre => ` | ${genre.name}`)} | </Box>
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

      <Container className={classes.casting}>
        <Box>
          <h1 style={{ display: 'block' }}>Casting</h1>
        </Box>
        <Container className={classes.actors}>
          <Box className={classes.actors}>
            {cast.map(actor => (
              <Actor actor={actor} key={actor.id} />
            ))}
          </Box>
        </Container>
      </Container>
    </Movie>
  )
}

export default MovieContainer

const Movie = styled.div`
  /* display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column; */
`
