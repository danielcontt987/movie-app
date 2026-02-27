import { movieApi } from '@/core/api/movie-api';
import { MovieDBResponse } from '@/infrastructure/interfaces/moviedb-response';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

export const popularMovieAction = async () => {
    try {
        //generic request <>
        const {data} = await movieApi.get<MovieDBResponse>('/popular');
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);        
        return movies;
        // console.log("SUCCESS =>", response.data);
    } catch (error: any) {
        console.log("STATUS =>", error?.response?.status);
        console.log("DATA =>", error?.response?.data);
    }
};