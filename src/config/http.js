import axios from 'axios'
// import dotenv from 'dotenv'

// dotenv.config({ path: './.env' })
// console.log(process.env);

const defaultUrl = 'https://api.themoviedb.org/3/search/movie'
const apiKey = '479b26e5222f9ef3fac0b4d50717c56b'

export const apiKeyEndpoint = `?api_key=${apiKey}`

export const queryMoviesEndpoint = `${apiKeyEndpoint}&query=`

export const http = axios.create({
    baseURL: defaultUrl,
})
