import { Cast } from '@/infrastructure/interfaces/cast.interface';
import { FlatList, Text, View } from 'react-native';
import { ActorCard } from './ActorCard';

interface Props {
  cast: Cast[]
}

const MovieActors = ({cast}: Props) => {

  
  return (
    <View className='mr-6'>
      <Text className='mx-5 font-bold text-2xl mt-2 mb-5'>Actores</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={cast}
        keyExtractor={ (item) => item.id.toString()}
        horizontal
        renderItem={({item}) => <ActorCard actor={item}/>}
      />
    </View>
  )
}

export default MovieActors