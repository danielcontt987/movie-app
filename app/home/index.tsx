import MainSlaiderShow from '@/presentations/components/movies/MainSlaiderShow';
import MoviesHorizontalList from '@/presentations/components/movies/MoviesHorizontalList';
import { useMovies } from '@/presentations/hooks/useMovies';
import { ActivityIndicator, ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, topRetedQuery, upComingQuery } = useMovies();
  const safeArea = useSafeAreaInsets();
  if (nowPlayingQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator size='large' color='purple' />
      </View>
    )
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View className='mt-2 pb-10' >
          <Text className='text-3xl font-bold mb-2 px-4'>MoviesApp</Text>
          {/* Carrusel de películas en cartelera */}
          <MainSlaiderShow
            movies={nowPlayingQuery.data ?? []}
          />
          {/* las peliculas populares */}
          <MoviesHorizontalList
            className='mb-2'
            title='Populares'
            movies={popularQuery.data ?? []}
          />
          {/*Las peliculas mejor calificadas */}
          <MoviesHorizontalList
            className='mb-2'
            title='Mejores Calificadas'
            // movies={
            //   topRetedQuery.data?.pages.flatMap(page => page ?? []) ?? []
            // }
            movies={topRetedQuery.data?.pages.flat() ?? []}
            loadingNextPage={topRetedQuery.fetchNextPage}
          />
          {/*Proximanete */}
          <MoviesHorizontalList
            className='mb-2'
            title='Proximamente'
            movies={upComingQuery.data ?? []}
          />
          <StatusBar barStyle={"default"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )

}

export default HomeScreen