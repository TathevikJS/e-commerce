import { StyleSheet, View } from "react-native";
import { ProductDetailsImage } from "../components/products/ProductDetailsImage";
import { ProductDetailsInfo } from "../components/products/ProductDetailsInfo";

export const ProductDetailsScreen = () => {

  return (
    <View style={styles.container}>
      <ProductDetailsImage />
      <ProductDetailsInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
