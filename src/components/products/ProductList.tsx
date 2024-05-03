import {
    FlatList,
} from "react-native";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const ProductList = () => {

    const products = useSelector((state: RootState) => state.products.filteredProducts);

    return (
        <FlatList
            data={products}
            numColumns={1}
            keyExtractor={(item) => "_" + item.id}
            renderItem={({ item }) => (
                <ProductCard
                    item={item}
                />
            )}
            showsVerticalScrollIndicator={false}
        />
    );
};
