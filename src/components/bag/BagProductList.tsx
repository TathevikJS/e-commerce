import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { ProductItem } from "../../components/bag/BagProductItem";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotalPrice } from "../../utils/helper";
import { RootState } from "../../store/store";
import { Product } from "../../types/types";
import { addToShoppingHistory } from "../../store/slices/userSlice";
import { emptyBag } from "../../store/slices/bagSlice";

export const BagProductList = () => {
    const dispatch = useDispatch();

    const { bagProducts } = useSelector((state: RootState) => state.bag)

    const totalPrice = calculateTotalPrice(bagProducts)

    const handleCheckout = () => {
        dispatch(addToShoppingHistory(bagProducts));
        dispatch(emptyBag());
    };

    return (
        <FlatList
            data={bagProducts}
            renderItem={({ item }: { item: Product }) => (
                <ProductItem item={item} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 40, paddingBottom: 200 }}
            ListFooterComponent={
                <>
                    <View style={styles.bottomContentContainer}>
                        <View style={styles.flexRowContainer}>
                            <Text style={styles.titleText}>Total:</Text>
                            <Text style={styles.priceText}>${totalPrice}</Text>
                        </View>
                        <View style={styles.flexRowContainer}>
                            <Text style={styles.titleText}>Shipping:</Text>
                            <Text style={styles.priceText}>$0.0</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.flexRowContainer}>
                            <Text style={styles.titleText}>Grand Total:</Text>
                            <Text style={[styles.priceText, styles.grandPriceText]}>
                                ${totalPrice}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={handleCheckout}>
                        <Text style={styles.buttonText}>Checkout</Text>
                    </TouchableOpacity>
                </>
            }
        />
    );
};


const styles = StyleSheet.create({
    flexRowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
    },
    bottomContentContainer: {
        marginHorizontal: 10,
        marginTop: 30,
    },
    titleText: {
        fontSize: 18,
        color: "#757575",
        fontWeight: "500",
    },
    priceText: {
        fontSize: 18,
        color: "#757575",
        fontWeight: "600",
    },
    divider: {
        borderWidth: 1,
        borderColor: "#C0C0C0",
        marginTop: 10,
        marginBottom: 5,
    },
    grandPriceText: {
        color: "#3C3C3C",
        fontWeight: "700",
    },
    button: {
        backgroundColor: "#E96E6E",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 30,
    },
    buttonText: {
        fontSize: 24,
        color: "#FFFFFF",
        fontWeight: "700",
    },
});

