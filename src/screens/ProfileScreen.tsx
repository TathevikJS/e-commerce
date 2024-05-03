import { StyleSheet, View, Modal, TouchableWithoutFeedback } from 'react-native';
import { ProfileImageContainer } from '../components/profile/ProfileImageContainer';
import { ModalContainer } from '../components/profile/ModalContainer';
import { ProfileInfo } from '../components/profile/ProfileInfo';
import { toggleModal } from '../store/slices/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingHistoryItem } from '../components/profile/ShoppingHistoryItem';
import { RootState } from '../store/store';

export const ProfileScreen = () => {

  const { showProfileModal } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback onPress={() => toggleModal()}>
      <View style={styles.container}>
        <ProfileImageContainer />
        <ProfileInfo />
        <Modal
          animationType="slide"
          transparent={true}
          visible={showProfileModal}
          onRequestClose={() => {
            dispatch(toggleModal())
          }}
        >
          <ModalContainer />
        </Modal>
        <ShoppingHistoryItem />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#fff',
  }
});
