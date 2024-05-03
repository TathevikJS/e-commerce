import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { toggleModal } from '../../store/slices/userSlice';

export const ProfileImageContainer = () => {

    const image = useSelector((state: RootState) => state.user.user.image);
    const dispatch = useDispatch();
    return (
        <View style={styles.imageContainer}>
            <Image
                source={image && { uri: image }}
                style={styles.profileImage}
            />
            <TouchableOpacity style={styles.overlay} onPress={() => dispatch(toggleModal())}>
                <View >
                    <Text style={styles.overlayText}>Change</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({

    imageContainer: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 75,
        width: 150,
        height: 150,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '20%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderBottomLeftRadius: 75,
        borderBottomRightRadius: 75,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayText: {
        color: '#fff',
        fontSize: 14,
    }
});
