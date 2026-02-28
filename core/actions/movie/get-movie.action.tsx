import { movieApi } from "@/core/api/movie-api";
import { GetMovieInterface } from "@/infrastructure/interfaces/get-moviedb.interface";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieActions = async (
  id: number | string
): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<GetMovieInterface>(`${id}`);

    return MovieMapper.fromTheMovieDBToMovieGet(data);

  } catch (error: any) {
    console.log("STATUS =>", error?.response?.status);
    console.log("DATA =>", error?.response?.data);
    throw new Error("Error fetching movie");
  }
};