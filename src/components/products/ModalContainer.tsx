import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { applyFilters, removeFilters, toggleModal, setSelectedFilterOption } from "../../store/slices/productSlice";
import { showFilterOptions } from "../../utils/helper";
import { RootState } from "../../store/store";

export const ModalContainer = () => {

    const [selectedFilters, setSelectedFilters] = useState("");

    const dispatch = useDispatch();

    const { products } = useSelector((state: RootState) => state.products);
    const { selectedFilterOption } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        setSelectedFilters(selectedFilterOption);
    }, [selectedFilterOption]);

    const handleFilterByProductType = () => {
        if (selectedFilters !== "") {
            dispatch(applyFilters({ productType: selectedFilters }));
        }
        dispatch(toggleModal());
        dispatch(setSelectedFilterOption(selectedFilters));
    };

    const clearFilters = () => {
        setSelectedFilters("");
        dispatch(removeFilters());
        dispatch(toggleModal());
        dispatch(setSelectedFilterOption(""));
    };

    const filterOptions = showFilterOptions(products);

    return (
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Product Type</Text>
                {filterOptions.map((type, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.modalItem,
                            selectedFilters === type && styles.selectedItem
                        ]}
                        onPress={() => setSelectedFilters(type)}
                    >
                        <Text style={styles.modalItemText}>{type}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity
                    style={styles.applyButton}
                    onPress={handleFilterByProductType}
                >
                    <Text style={styles.applyButtonText}>Apply Filter</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.clearFiltersButton}
                    onPress={clearFilters}
                >
                    <Text style={styles.clearFiltersButtonText}>Clear Filters</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        borderRadius: 10,
        width: "80%",
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    modalItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#CCCCCC",
    },
    modalItemText: {
        fontSize: 16,
    },
    applyButton: {
        backgroundColor: "#007bff",
        paddingVertical: 12,
        borderRadius: 5,
        marginTop: 20,
        alignItems: "center",
    },
    applyButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    clearFiltersButton: {
        backgroundColor: "#dc3545",
        paddingVertical: 12,
        borderRadius: 5,
        marginTop: 10,
        alignItems: "center",
    },
    clearFiltersButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    selectedItem: {
        backgroundColor: "#007bff",
    },
});
