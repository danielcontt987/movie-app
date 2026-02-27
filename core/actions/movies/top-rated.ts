import { movieApi } from '@/core/api/movie-api';
import { MovieDBResponse } from '@/infrastructure/interfaces/moviedb-response';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

interface Options {
    page?: number;
    limit?: number;
}

export const topRetedAction = async ({page = 1, limit = 10}: Options) => {
    try {
        //generic request <>
        const {data} = await movieApi.get<MovieDBResponse>('/top_rated',{
            params:{
                page: page
            }
        });
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
        return movies;
        // console.log("SUCCESS =>", response.data);
    } catch (error: any) {
        console.log("STATUS =>", error?.response?.status);
        console.log("DATA =>", error?.response?.data);
    }
};