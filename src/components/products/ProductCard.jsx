import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addToBag } from "../../store/slices/bagSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const navigateToProductDetailes = (item) => {
    navigation.navigate("PRODUCT_DETAILS", { item });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigateToProductDetailes(item);
      }}
    >
      <Image source={item.image ? { uri: item?.image } : require('../../assets/no_image.png')} style={styles.coverImage} />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity onPress={() => dispatch(addToBag(item))}>
            <Image
              source={require("../../assets/shopping_card.png")}
              style={styles.addToBagIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  coverImage: {
    height: 256,
    width: "100%",
    borderRadius: 20,
    position: "relative",
  },
  contentContainer: {
    padding: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#444444",
  },
  price: {
    fontSize: 18,
  },
  likeContainer: {
    position: "absolute",
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    right: 10,
    top: 10,
  },
  faviorate: {
    height: 20,
    width: 20,
  },
  addToBagIcon: {
    height: 20,
    width: 20,
  },
});
