import axios from 'axios';

export const movieApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_MOVIE_APP_URL,
    params: {
        api_key: process.env.EXPO_PUBLIC_MOVIE_APP_KEY,
        language: 'es-MX'
    }
})