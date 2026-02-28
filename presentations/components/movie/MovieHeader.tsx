import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Image, Pressable, Text, useWindowDimensions, View } from 'react-native';
interface Props {
    poster: string;
    originTitle: string;
    title: string;
}

const MovieHeader = ({ poster, originTitle, title }: Props) => {

    const { height: screenHeight } = useWindowDimensions(); // ✅ dentro

    return (
        <>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(0,0,0,0.3)', 'transparent']}
                start={[0,0]}
                style={{
                    height: screenHeight * 0.4,
                    position: 'absolute',
                    zIndex: 1,
                    width: '100%',
                }}
                // style={styles.background}
            />
            <View style={{
                    position: 'absolute',
                    zIndex: 99,
                    elevation: 9,
                    top: 35,
                    left: 10
                }}
            >
                <Pressable onPress={() => router.dismiss()}>
                    <Ionicons name='arrow-back' size={30} color="white" className='white' />
                </Pressable>
            </View>
            <View
                style={{ height: screenHeight * 0.8 }}
                className="shadow-xl shadow-black/20"
            >
                <View className="flex-1 rounded-b-3xl overflow-hidden">
                    <Image
                        source={{ uri: poster }}
                        resizeMode="cover"
                        className="flex-1"
                    />
                </View>

                <View className='px-5 mt-5'>
                    <Text className='font-normal'>{originTitle}</Text>
                    <Text className='font-semibold text-2xl'>{title}</Text>
                </View>
            </View>
        </>
    );
};

export default MovieHeader;