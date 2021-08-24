import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Container } from '../assets/style'


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
                        console.log(movie)
                        return (
                            <MovieContainer movie={movie} key={movie.id} />
                        )
                    })
                }
            </section>
        )
    }

    const MovieContainer = ({ movie: { original_title, overview, backdrop_path } }) => {
        return (
            <article className='Movie' style={{ color: 'white' }} >
                <h4>{original_title}</h4>
                <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={original_title} width="150" height="150" />
                <h6>{overview}</h6>
            </article>
        )
    }

    return (
        <Container>
            < Search >
                <input className="form-control" onChange={e => setSearch(e.target.value)} type="text" name="movie" value={search} placeholder='Search for a movie.' />
                <Button type="button" onClick={handleClick} value="Search" name="search" />
            </Search >
            <MoviesList />
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

const Button = styled.input`
    font-size: 20px;
    margin: 0 5px;
`

const Movie = styled.article`


`

