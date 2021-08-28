import React, { useState, useEffect } from 'react'
import { https, queryMoviesEndpoint } from '../../config/https'
import { Container } from '../../assets/style'
import SingleMovie from '../../components/SingleMovie'
import MoviesList from '../../components/MoviesList'
import styled from 'styled-components'
import {
  TextField,
  Button,
  makeStyles,
  InputAdornment,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles({
  searchInput: {
    backgroundColor: 'white',
    width: '400px',
    borderRadius: '0.5em',
    marginRight: '0.25em',
    padding: '0.25em',
  },
})

const MoviesContainer = () => {
  const [moviesData, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [submit, setSubmit] = useState('')
  const [showMovie, setShowMovie] = useState(false)

  const classes = useStyles()

  const handleClick = () => {
    setSubmit(search)
    setShowMovie(false)
  }

  useEffect(() => {
    if (submit) {
      https
        .get(queryMoviesEndpoint + submit)
        .then(res => {
          setMovies(res.data.results)
          console.log(res.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [submit])

  return (
    <Container>
      <Search>
        <TextField
          onChange={e => setSearch(e.target.value)}
          value={search}
          label='Search for a movie'
          className={classes.searchInput}
          id='searchInput'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button variant='contained' onClick={handleClick}>
          Search
        </Button>
      </Search>
      {showMovie ? <SingleMovie /> : <MoviesList movies={moviesData} />}
    </Container>
  )
}

export default MoviesContainer

const Search = styled.div`
  margin-top: 2em !important;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  color: white;
`
