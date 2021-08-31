import React, { useEffect, useState } from 'react'
import { https, apiKeyEndpoint } from '../../config/https'
import styled from 'styled-components'
import MediaSlider from '../../components/MediaSlider'
import { SingleMovieOverview } from '../../components/SingleMovieOverview'

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

  return (
    <Movie>
      <SingleMovieOverview movie={movie} director={director} genres={genres} />
      <MediaSlider cast={cast} />
    </Movie>
  )
}

export default MovieContainer

const Movie = styled.div``
