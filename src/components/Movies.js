import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'


const MoviesContainer = () => {

    const tmdbApiUri = 'https://api.themoviedb.org/3/search/movie?api_key=479b26e5222f9ef3fac0b4d50717c56b&query='

    const [moviesData, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const [submit, setSubmit] = useState('')

    const handleClick = () => {
        setSubmit(search)
    }

    useEffect(() => {
        if (submit) {
            axios
                .get(tmdbApiUri + submit)
                .then(res => {
                    setMovies(res.data.results)

                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [submit])

    useEffect(() => {
        moviesData.forEach(movie => {
            // console.log(movie);
        })
    }, [moviesData])

    const MoviesList = () => {
        return (
            <section>
                {
                    moviesData.map(movie => {
                        return (
                            <Movie movie={movie} key={movie.id} />
                        )
                    })
                }
            </section>
        )
    }

    const Movie = ({ original_title, id }) => {
        return (
            <article className='Movie' >
                <h1>{original_title}</h1>
            </article>
        )
    }

    return (
        <>
            < Search >
                <input className="form-control" onChange={e => setSearch(e.target.value)} type="text" name="movie" value={search} placeholder='Search for a movie.' />
                <Button type="button" onClick={handleClick} value="Search" name="search" />
            </Search >
            <MoviesList />
        </>
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

const Button = styled.input`
    font-size: 20px;
    margin: 0 5px;
`