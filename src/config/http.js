import axios from 'axios'

// https://api.themoviedb.org/3/search/movie?api_key=479b26e5222f9ef3fac0b4d50717c56b&query=star - certo query

// https://api.themoviedb.org/3/movie/550?api_key=479b26e5222f9ef3fac0b4d50717c56b - certo para ID Movie

// https://api.themoviedb.org/3/search/movie/148?api_key=479b26e5222f9ef3fac0b4d50717c56b

const defaultUrl = 'https://api.themoviedb.org/3/'
const apiKey = '479b26e5222f9ef3fac0b4d50717c56b'

export const apiKeyEndpoint = `?api_key=${apiKey}`

export const queryMoviesEndpoint = `search/movie/${apiKeyEndpoint}&query=`

export const http = axios.create({
    baseURL: defaultUrl,
})
