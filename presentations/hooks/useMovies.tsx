import { nowPlayAction } from "@/core/actions/movies/now-play.action"
import { popularMovieAction } from "@/core/actions/movies/popular.action"
import { topRetedAction } from "@/core/actions/movies/top-rated"
import { upComingMovieAction } from "@/core/actions/movies/upcoming"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export const useMovies = () => {
    const nowPlayingQuery = useQuery({ 
        queryKey: ['movies', 'nowPlaying'], 
        queryFn: nowPlayAction,
        staleTime: 1000 * 60 * 60 * 24, // 5 minutes
    })

    const popularQuery = useQuery({ 
        queryKey: ['movies', 'popular'], 
        queryFn: popularMovieAction,
        staleTime: 1000 * 60 * 60 * 24, // 5 minutes
    })

    const topRetedQuery = useInfiniteQuery({ 
        initialPageParam: 1,
        queryKey: ['movies', 'top-reted'], 
        queryFn: ({pageParam}) => {            
            return topRetedAction({page: pageParam})
            
        },
        staleTime: 1000 * 60 * 60 * 24, // 5 minutes
        getNextPageParam: (lastPage, pages) => pages.length +1
    })

    const upComingQuery = useQuery({ 
        queryKey: ['movies', 'up-coming'], 
        queryFn: upComingMovieAction,
        staleTime: 1000 * 60 * 60 * 24, // 5 minutes
    })

    return {
        nowPlayingQuery,
        popularQuery,
        topRetedQuery,
        upComingQuery
    }
}