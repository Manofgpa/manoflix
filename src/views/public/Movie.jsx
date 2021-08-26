import React, { useEffect, useState } from "react"
import { http, apiKeyEndpoint } from "../../config/http"

const Movie = (props) => {
  const [movie, setMovie] = useState({ name: "teste" })

  console.log(props)

  useEffect(() => {
    http.get(`movie/${props.id}${apiKeyEndpoint}`).then((res) => {
      console.log(res)
      setMovie(res.data)
    })
  }, [props.id])

  return (
    <div>
      <h1>{JSON.stringify(movie)}</h1>
      {JSON.stringify(movie)}
    </div>
  )
}

export default Movie
