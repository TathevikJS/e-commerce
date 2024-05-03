import {
  StyleSheet,
  View,
} from "react-native";
import { BagProductList } from "../components/bag/BagProductList";

export const BagScreen = () => {

  return (
    <View style={styles.container}>
      <BagProductList />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 15,
  }
});
