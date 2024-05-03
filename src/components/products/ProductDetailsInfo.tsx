import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { addToBag } from "../../store/slices/bagSlice";
import { useDispatch } from "react-redux";

export const ProductDetailsInfo = () => {
    const route: any = useRoute();
    const navigation: any = useNavigation();
    const dispatch = useDispatch();
    const product = route.params.item;

    const handleAddToBag = () => {
        dispatch(addToBag(product))
        navigation.navigate("CARD");
    };

    return (
        <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.fontText}>{product.title}</Text>
                <Text style={styles.fontText}>${product.price}</Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Product Type</Text>
                <Text style={styles.sectionContent}>{product.product_type}</Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Article</Text>
                <Text style={styles.sectionContent}>{product.id}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleAddToBag}>
                <Text style={styles.buttonText}>Add to Card</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    contentContainer: {
        padding: 20,
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    fontText: {
        fontSize: 20,
        fontWeight: "700",
        color: "#444444",
    },
    sectionContainer: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    sectionContent: {
        fontSize: 16,
        color: "#555",
    },
    button: {
        backgroundColor: "#E96E6E",
        height: 62,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 24,
        color: "#FFFFFF",
        fontWeight: "700",
    },
});
