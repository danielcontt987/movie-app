import { Movie } from '@/infrastructure/interfaces/movie.interface'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import MoviePoster from './MoviePoster'


interface Props {
    title?: string,
    movies: Movie[],
    className?: string
}


const MoviesHorizontalList = ({title, movies, className}: Props) => {
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
        
        />
    </View>
  )
}

export default MoviesHorizontalList