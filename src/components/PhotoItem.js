import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

const PhotoItem = ({ item, selectedItems, setSelectedItems,  ...props }) => {
    const [isSelected, setIsSelected] = useState(false);

    const toggleSelected = () => {
        setIsSelected(!isSelected);
        if (!isSelected) {
            setSelectedItems([...selectedItems, item]);
        } else {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.id !== item.id));
        }
    };

    return (
        <TouchableOpacity onPress={toggleSelected}>
            <View style={[styles.itemContainer, isSelected && styles.itemSelected]}>
                <Image style={styles.image} source={{ uri: item.previewURL }} />
                {isSelected && <Ionicons name="checkmark-sharp" style={styles.checkIcon} />}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        margin: 5,
        borderWidth: 2,
        borderColor: "rgba(0,0,0,0)",
        borderRadius: 15,
    },
    itemSelected: {
        borderColor: 'blue',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 13,
    },
    checkIcon: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        color: 'blue',
        fontSize: 24,
    },
});

export default PhotoItem;
