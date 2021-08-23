import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'


const MoviesContainer = () => {

    const tmdbApiUri = 'https://api.themoviedb.org/3/search/movie?api_key=479b26e5222f9ef3fac0b4d50717c56b&query='

    const [movies, setMovies] = useState('')
    const [search, setSearch] = useState(1)
    const [submit, setSubmit] = useState(1)

    const handleClick = () => {
        console.log(movies);
        setSubmit(search)
    }

    useEffect(() => {
        axios
            .get(tmdbApiUri + search)
            .then(res => {
                setMovies(res.data.results)

            })
            .catch(err => {
                console.log(err)
            })
    }, [submit])


    return (
        < Search >
            <input className="form-control" onChange={e => setSearch(e.target.value)} type="text" name="movie" value={search} placeholder='Search for a movie.' />
            <Button type="button" onClick={handleClick} value="Search" name="search" />
            <p>{movies.original_title}</p>
        </Search >
    )
}

export default MoviesContainer

const Search = styled.div`
    margin-top: 2em !important;
    text-align: center;
    margin: 0 auto;
    width: 40%;
    display: flex;
`

const Button = styled.input`
    font-size: 20px;
    margin: 0 5px;
`