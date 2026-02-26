import { nowPlayAction } from "@/core/actions/movies/now-play.action"
import { useQuery } from "@tanstack/react-query"

export const useMovies = () => {
     const nowPlayingQuery = useQuery({ 
        queryKey: ['movies', 'nowPlaying'], 
        queryFn: nowPlayAction,
        staleTime: 1000 * 60 * 60 * 24, // 5 minutes
    })

    return {
        nowPlayingQuery
    }
}