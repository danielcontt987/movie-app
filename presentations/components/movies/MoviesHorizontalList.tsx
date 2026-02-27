import { Movie } from '@/infrastructure/interfaces/movie.interface'
import { useRef } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import MoviePoster from './MoviePoster'


interface Props {
    title?: string,
    movies: Movie[],
    className?: string,
    loadingNextPage?: () => void
}


const MoviesHorizontalList = ({title, movies, className, loadingNextPage}: Props) => {

  const isLoading = useRef(false);
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent
    const isEndReched = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width

    if (!isEndReched)  return

    isLoading.current = true

    //TODO:
    console.log("Cargar siguientes peliculas");

    loadingNextPage && loadingNextPage();
    
  }
  return (
    <View className={`${className}`}>
      {
        title && (

          <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>
        )
      }
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
        onScroll={onScroll}
        />
    </View>
  )
}

export default MoviesHorizontalList