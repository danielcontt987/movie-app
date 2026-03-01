import { getMovieCastAction } from "@/core/actions/movie/get-actors.action";
import { getMovieActions } from "@/core/actions/movie/get-movie.action";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id: number | string) => {
    const movieQuery = useQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovieActions(id),
        staleTime: 1000 * 60 * 60 * 24
     });

     const castQuery = useQuery({
        queryKey: ['movie', id, 'cast'],
        queryFn: () => getMovieCastAction(+id),
        staleTime: 1000 * 60 * 60 * 24
     });

    return {
        movieQuery,
        castQuery
    }
}

