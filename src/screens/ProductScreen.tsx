import {
  Modal,
  StyleSheet,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ModalContainer } from "../components/products/ModalContainer";
import { Filters } from "../components/products/Filters";
import { ProductList } from "../components/products/ProductList";
import { toggleModal } from "../store/slices/productSlice";

export const ProductScreen = () => {

  const dispatch = useDispatch()

  const { showFilterModal } = useSelector((state: RootState) => state.products);

  return (
    <View style={styles.container}>
      <Filters />
      <ProductList />
      <Modal
        animationType="slide"
        transparent={true}
        visible={showFilterModal}
        onRequestClose={() => dispatch(toggleModal())}
      >
        <ModalContainer />
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  }
});
