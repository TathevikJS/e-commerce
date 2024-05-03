import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { editProfileInfo, toggleModal } from '../../store/slices/userSlice';

export const ModalContainer = () => {

    const { username, about, image } = useSelector((state: RootState) => state.user.user);

    const [name, setName] = useState(username);
    const [aboutText, setAboutText] = useState(about);
    const [profileImage, setProfileImage] = useState(image);

    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(editProfileInfo({ username: name, about: aboutText, image: profileImage }));
        dispatch(toggleModal());
    };

    return (

        <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={(text) => setName(text)}
                        placeholder="Enter your name"
                    />
                    <TextInput
                        style={styles.input}
                        value={aboutText}
                        onChangeText={(text) => setAboutText(text)}
                        placeholder="Enter about"
                    />
                    <TextInput
                        style={styles.input}
                        value={profileImage}
                        onChangeText={(text) => setProfileImage(text)}
                        placeholder="Enter image url"
                    />
                    <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
    },
    saveButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
