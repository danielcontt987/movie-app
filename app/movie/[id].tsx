import MovieActors from '@/presentations/components/movie/MovieActors';
import MovieDescription from '@/presentations/components/movie/MovieDescription';
import MovieHeader from '@/presentations/components/movie/MovieHeader';
import { useMovie } from '@/presentations/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
 
  const {movieQuery, castQuery} = useMovie(+id);


  if(movieQuery.isLoading || !movieQuery.data){
    return (
      <View className='flex flex-1 justify-center items-center'>
        <Text className='mb-4'>Espere Por Favor</Text>
        <ActivityIndicator
          color="purple"
          size={30}
        />
      </View>
    )
  }


  return (
      <ScrollView  showsVerticalScrollIndicator={false}>
        <MovieHeader 
            poster={movieQuery.data.poster} 
            originTitle={movieQuery.data.originalTitle} 
            title={movieQuery.data.title} 
        />
        <MovieDescription movie={movieQuery.data} />
        <Text>
        </Text>
        <MovieActors cast={castQuery.data ?? []} />

      </ScrollView>
  );
};

export default MovieScreen;