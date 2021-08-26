import React from "react"
import styled from "styled-components"
import { navigate } from "@reach/router"

const SingleMovie = ({
  movie: { original_title, overview, poster_path, vote_average, id },
}) => {
  return (
    <Movie className="Movie">
      <Image
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={original_title}
      />
      <H4>{original_title}</H4>
      <p>★{vote_average}</p>
      <h6>{overview}</h6>
      <AddToListButton type="button" onClick={(e) => navigate(`/movie/${id}`)}>
        Learn more
      </AddToListButton>
    </Movie>
  )
}

export default SingleMovie

const AddToListButton = styled.button`
  width: 100%;
  height: 30px;
`

const Movie = styled.div`
  color: white;
  background-color: #0b2027;
  padding: 1rem 2rem;
  border-radius: 1rem;
  -webkit-box-shadow: 8px 5px 24px 0px #7f7f7f;
  box-shadow: 5px 2px 12px 0px #7f7f7f;
  display: grid;
`

const H4 = styled.h4`
  font-weight: bold;
  margin-top: 0.5rem;
`

const Image = styled.img`
  border: 1px dotted white;
  margin: 0.25rem;
  width: 100%;
`
