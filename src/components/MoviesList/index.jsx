import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'
import SingleMovie from '../SingleMovie'

const MoviesList = ({ movies }) => {
  return (
    <MovieContainer>
      {movies.map(movie => {
        return <SingleMovie movie={movie} key={movie.id} />
      })}
    </MovieContainer>
  )
}

export default MoviesList

const MovieContainer = styled(Container)`
  max-width: 1280px;
  margin: 5rem auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
`
