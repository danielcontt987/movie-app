import { movieApi } from "@/core/api/movie-api";
import { CastsRespose } from "@/infrastructure/interfaces/castdb-response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastAction = async (movieId: number) => {
  try {
    const { data } = await movieApi.get<CastsRespose>(`/${movieId}/credits`);

    return data.cast.map(CastMapper.fromMovieDBCastToEntity)
  } catch (error: any) {
    console.log("STATUS =>", error?.response?.status);
    console.log("DATA =>", error?.response?.data);
    throw new Error("Error fetching movie");
  }
};