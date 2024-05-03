
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../store/slices/userSlice';
import { RootState } from '../../store/store';

export const ProfileInfo = () => {

    const { username, about } = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();


    return (
        <View style={styles.container}>
            <Text style={styles.name}>{username}</Text>

            <Text style={styles.bio}>{about}</Text>

            <TouchableOpacity onPress={() => dispatch(toggleModal())}>
                <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bio: {
        fontSize: 16,
        marginBottom: 20,
    },
    edit: {
        color: '#007bff',
        marginBottom: 10,
    }
});
