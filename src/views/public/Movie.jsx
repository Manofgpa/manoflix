import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { https, apiKeyEndpoint } from '../../config/https'

const Movie = (props) => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    https.get(`movie/${props.id}${apiKeyEndpoint}`).then((res) => {
      console.log(res)
      setMovie(res.data)
    })
  }, [props.id])

  return (
    <MovieContainer>
      <h1>{movie.original_title}</h1>
      <p>{movie.overview}</p>
    </MovieContainer>
  )
}

export default Movie

const MovieContainer = styled.div`
  color: white;
`
