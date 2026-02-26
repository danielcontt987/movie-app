import MainSlaiderShow from '@/presentations/components/MainSlaiderShow';
import { useMovies } from '@/presentations/hooks/useMovies';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const { nowPlayingQuery } = useMovies();
  const safeArea = useSafeAreaInsets();
  if (nowPlayingQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator size='large' color='purple' />
      </View>
    )
  }

  return (
    <View className='mt-2' style={{ paddingTop: safeArea.top }}>
        <Text className='text-3xl font-bold mb-2 px-4'>Home Screen</Text>
        {/* Carrusel de películas en cartelera */}
        <MainSlaiderShow movies={nowPlayingQuery.data ?? []} />
    </View>
  )

}

export default HomeScreen