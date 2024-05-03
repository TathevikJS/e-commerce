import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useDispatch } from "react-redux";
import { searchProduct, toggleModal } from "../../store/slices/productSlice";

export const Filters = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const dispatch = useDispatch();

    const handleSearch = (query) => {
        setSearchQuery(query);
        dispatch(searchProduct({ query }));
    };

    return (
        <View style={styles.inputContainer}>
            <View style={styles.searchContainer}>
                <Image
                    source={require("../../assets/search.png")}
                    style={styles.searchIcon}
                />
                <TextInput
                    placeholder="Search"
                    style={styles.textInput}
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>
            <TouchableOpacity onPress={() => dispatch(toggleModal())}>
                <Image
                    source={require("../../assets/filter.png")}
                    style={styles.filterIcon}
                />
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "80%",
        backgroundColor: "#FFFFFF",
        height: 48,
        borderRadius: 12,
    },
    searchIcon: {
        height: 26,
        width: 26,
        marginHorizontal: 12,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
    },
    filterIcon: {
        height: 26,
        width: 26,
        marginHorizontal: 12,
    },
});
