import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { calculateQuantity } from '../../utils/helper';



export const ShoppingHistoryItem: React.FC = () => {

    const { shoppingHistory } = useSelector((state: RootState) => state.user);

    const quantityMap = calculateQuantity(shoppingHistory);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shopping History</Text>
            <ScrollView>
                {quantityMap.size === 0 ? (
                    <Text style={styles.no_item}>No items in shopping history</Text>
                ) : (
                    [...quantityMap.entries()].map(([productId, quantity]) => {
                        const item = shoppingHistory.find((checkout) => checkout.some((product) => product.id === productId));
                        if (item) {
                            return (
                                <View key={productId} style={styles.container}>
                                    <Text>{quantity} x {item.find((product) => product.id === productId)?.title}</Text>
                                </View>
                            );
                        }
                    })
                )}
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    no_item: {
        paddingTop: 10,
        fontSize: 16,
        color: '#777',
    }
});

