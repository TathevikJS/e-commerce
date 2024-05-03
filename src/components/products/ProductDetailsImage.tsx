import { Image, StyleSheet, View } from "react-native";
import { useRoute } from "@react-navigation/native";

export const ProductDetailsImage = () => {
    const route: any = useRoute();
    const product = route.params.item;


    return (
        <View style={styles.imageContainer}>
            <Image source={product.image ? { uri: product.image } : require('../../assets/no_image.png')} style={styles.coverImage} />
        </View>
    );
};


const styles = StyleSheet.create({
    imageContainer: {
        height: 420,
        width: "100%",
    },
    coverImage: {
        width: "100%",
        height: "100%",
        flex: 1,
    },
});
