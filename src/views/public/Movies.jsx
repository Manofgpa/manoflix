import React, { useState, useEffect } from "react"
import { http, queryMoviesEndpoint, apiKeyEndpoint } from "../../config/http"
import { Container } from "../../assets/style"
import SingleMovie from "../../components/SingleMovie"
import MoviesList from "../../components/MoviesList"
import styled from "styled-components"

const MoviesContainer = () => {
    const [moviesData, setMovies] = useState([])
    const [search, setSearch] = useState("")
    const [submit, setSubmit] = useState("")
    const [showMovie, setShowMovie] = useState(false)
    // const [singleMovie, setSingleMovie] = useState('')
    
  const handleClick = () => {
    setSubmit(search)
  }

  useEffect(() => {
    if (submit) {
      http
        .get(queryMoviesEndpoint + submit)
        .then((res) => {
          setMovies(res.data.results)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [submit])

  return (
    <Container>
      <Search>
        <input
          className="form-control"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="movie"
          value={search}
          placeholder="Search for a movie"
        />
        <SearchButton
          type="button"
          onClick={handleClick}
          value="Search"
          name="search"
        />
      </Search>
      {showMovie ? <SingleMovie /> : <MoviesList movies={moviesData} />}
    </Container>
  )
}

export default MoviesContainer

const Search = styled.div`
  margin-top: 2em !important;
  text-align: center;
  margin: 0 auto;
  width: 40%;
  display: flex;
  color: white;
`

const SearchButton = styled.input`
  font-size: 20px;
  margin: 0 5px;
`