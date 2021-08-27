import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { http, apiKeyEndpoint } from "../../config/http"

const Movie = (props) => {
  const [movie, setMovie] = useState({ name: "teste" })

  useEffect(() => {
    // http.get(`movie/${props.id}${apiKeyEndpoint}`).then((res) => {
    http
      .get(
        `https://api.themoviedb.org/3/movie/${props.id}?api_key=479b26e5222f9ef3fac0b4d50717c56b`
      )
      .then((res) => {
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
