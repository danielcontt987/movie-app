import { useMovies } from '@/presentations/hooks/useMovies';
import { Text, View } from 'react-native';

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();
  return (
    <View>
      <Text>
        {JSON.stringify(nowPlayingQuery.data)}
      </Text>
    </View>
  )
}

export default HomeScreen